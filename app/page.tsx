"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { AnimatePresence, motion } from "motion/react";

import Navbar from "@/components/navbar";
import { Header } from "@/components/home";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { VideoProjects } from "@/components/VideoProjects";
import { Services } from "@/components/services";
import { Form } from "@/components/box";
import { Footer } from "@/components/footer";
import { SideRails } from "@/components/SideRails";

const SPLASH_FADE_MS = 650;
const HERO_DRAW_SEQUENCE_MS = 10000;
const HERO_ACTIONS_DELAY_MS = HERO_DRAW_SEQUENCE_MS;
const SIDE_RAILS_DELAY_MS = HERO_ACTIONS_DELAY_MS + 1200;
const NAVBAR_DELAY_MS = SIDE_RAILS_DELAY_MS + 1200;

export default function Home() {
  const [mounted, isMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [keepIntroVideo, setKeepIntroVideo] = useState(true);
  const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);
  const [heroActionsVisible, setHeroActionsVisible] = useState(false);
  const [sideRailsVisible, setSideRailsVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [introProgress, setIntroProgress] = useState(0);
  const [needsStart, setNeedsStart] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const splashFadeTimerRef = useRef<number | null>(null);
  const heroSequenceTimerRefs = useRef<number[]>([]);

  const finishSplash = useCallback(() => {
    setIntroProgress(1);
    setShowSplash(false);
    if (splashFadeTimerRef.current !== null) return;
    splashFadeTimerRef.current = window.setTimeout(() => {
      setKeepIntroVideo(false);
      setHeroAnimationStarted(true);
    }, SPLASH_FADE_MS);
  }, []);

  useEffect(() => {
    isMounted(true);
    document.body.style.cursor = "auto";
    return () => {
      document.body.style.cursor = "auto";
      if (splashFadeTimerRef.current !== null) {
        window.clearTimeout(splashFadeTimerRef.current);
      }
      heroSequenceTimerRefs.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    if (!heroAnimationStarted) return;

    setHeroActionsVisible(false);
    setSideRailsVisible(false);
    setNavbarVisible(false);

    const timers = [
      window.setTimeout(() => setHeroActionsVisible(true), HERO_ACTIONS_DELAY_MS),
      window.setTimeout(() => setSideRailsVisible(true), SIDE_RAILS_DELAY_MS),
      window.setTimeout(() => setNavbarVisible(true), NAVBAR_DELAY_MS),
    ];
    heroSequenceTimerRefs.current = timers;

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [heroAnimationStarted]);

  useEffect(() => {
    if (!mounted || !keepIntroVideo) return;
    const video = introVideoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => setNeedsStart(true));
    }
  }, [keepIntroVideo, mounted]);

  if (!mounted) return null;

  return (
    <>
      <span className="z-[9999]">
        <AnimatedCursor
          showSystemCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
            zIndex: 10020,
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
            zIndex: 10020,
          }}
        />
      </span>
      <AnimatePresence>
        {keepIntroVideo && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: showSplash ? 1 : 0, y: showSplash ? 0 : -24 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="pointer-events-none fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_35%,#181a1d_0%,#08090a_50%,#000000_100%)]"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative flex w-[min(900px,88vw)] flex-col items-center text-center"
            >
              <video
                ref={introVideoRef}
                className="pointer-events-none mb-8 aspect-video w-full max-w-[860px] object-contain mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_95%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_95%)]"
                src="/finalIntro.mp4"
                autoPlay
                playsInline
                disablePictureInPicture
                preload="auto"
                onTimeUpdate={(event) => {
                  const video = event.currentTarget;
                  setIntroProgress(Math.min(video.currentTime / Math.max(video.duration || 1, 1), 1));
                }}
                onEnded={finishSplash}
              />
              {needsStart && (
                <button
                  type="button"
                  onClick={() => {
                    const video = introVideoRef.current;
                    if (!video) return;
                    video.muted = false;
                    video.volume = 1;
                    video.play();
                    setNeedsStart(false);
                  }}
                  className="pointer-events-auto hero-mono mb-5 rounded-sm border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-cyan-200 hover:text-cyan-200"
                >
                  Start intro
                </button>
              )}
              <p className="hero-mono text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">
                Building Portfolio
              </p>
              <div className="mt-8 h-1.5 w-[min(420px,72vw)] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ scaleX: introProgress }}
                  transition={{ duration: 0.12, ease: "linear" }}
                  className="h-full origin-left rounded-full bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="relative overflow-hidden bg-neutral-950 antialiased"
        id="home"
      >
        <div className="pointer-events-none fixed top-0 z-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_96%_105%_at_50%_-24%,rgba(120,119,198,0.32),rgba(255,255,255,0))]" />
        {navbarVisible && <Navbar name="name" description="desc" />}
        {sideRailsVisible && <SideRails />}
        <div className="relative z-10 min-h-screen w-full overflow-x-hidden pb-16">
          {heroAnimationStarted && (
            <Header
              className={""}
              animatePortrait={heroAnimationStarted}
              textEffectStarted={heroAnimationStarted}
              showActions={heroActionsVisible}
            />
          )}
        </div>
        <section id="experience" className="relative z-10">
          <ExperienceTimeline />
        </section>
        <section id="portfolio" className="relative z-10">
          <VideoProjects />
        </section>
        <section id="services" className="relative z-10">
          <Services />
        </section>
        <section id="contact" className="relative z-10">
          <Form />
        </section>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
