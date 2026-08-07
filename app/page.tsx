"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/navbar";
import { Header } from "@/components/home";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { VideoProjects } from "@/components/VideoProjects";
import { Services } from "@/components/services";
import { Form } from "@/components/box";
import { Footer } from "@/components/footer";
import { SideRails } from "@/components/SideRails";

const SPLASH_FADE_MS = 650;
const HERO_TEXT_SEQUENCE_MS = 5600;
const HERO_ACTIONS_DELAY_MS = HERO_TEXT_SEQUENCE_MS;
const SIDE_RAILS_DELAY_MS = HERO_TEXT_SEQUENCE_MS + 300;
const NAVBAR_DELAY_MS = HERO_TEXT_SEQUENCE_MS + 600;
let splashSeenThisRuntime = false;

export default function Home() {
  const [skippedIntroOnMount] = useState(() => splashSeenThisRuntime);
  const [mounted, isMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(() => !skippedIntroOnMount);
  const [keepIntroVideo, setKeepIntroVideo] = useState(() => !skippedIntroOnMount);
  const [heroAnimationStarted, setHeroAnimationStarted] = useState(() => skippedIntroOnMount);
  const [heroActionsVisible, setHeroActionsVisible] = useState(() => skippedIntroOnMount);
  const [sideRailsVisible, setSideRailsVisible] = useState(() => skippedIntroOnMount);
  const [navbarVisible, setNavbarVisible] = useState(() => skippedIntroOnMount);
  const [introProgress, setIntroProgress] = useState(() => (skippedIntroOnMount ? 1 : 0));
  const [needsIntroGesture, setNeedsIntroGesture] = useState(() => !skippedIntroOnMount);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const splashFadeTimerRef = useRef<number | null>(null);
  const heroSequenceTimerRefs = useRef<number[]>([]);

  const finishSplash = useCallback(() => {
    splashSeenThisRuntime = true;
    setIntroProgress(1);
    setNeedsIntroGesture(false);
    setShowSplash(false);
    if (splashFadeTimerRef.current !== null) return;
    splashFadeTimerRef.current = window.setTimeout(() => {
      setKeepIntroVideo(false);
      setHeroAnimationStarted(true);
    }, SPLASH_FADE_MS);
  }, []);

  const startIntroWithSound = useCallback(() => {
    const video = introVideoRef.current;
    if (!video) return;

    setNeedsIntroGesture(false);
    video.pause();
    try {
      video.currentTime = 0;
    } catch {
      // Some mobile browsers reject seeking before metadata is ready.
    }
    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;
    void video.play().catch(() => setNeedsIntroGesture(true));
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
    if (!heroAnimationStarted || skippedIntroOnMount) return;

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
  }, [heroAnimationStarted, skippedIntroOnMount]);

  useEffect(() => {
    if (!mounted || !keepIntroVideo || needsIntroGesture) return;
    const video = introVideoRef.current;
    if (!video) return;
    const introVideo = video;
    let cancelled = false;

    function playIntro() {
      introVideo.muted = false;
      introVideo.defaultMuted = false;
      introVideo.volume = 1;
      const playPromise = introVideo.play();
      if (playPromise) {
        void playPromise.catch(() => {
          if (cancelled) return;
          introVideo.muted = true;
          introVideo.defaultMuted = true;
          introVideo.volume = 0;
          setNeedsIntroGesture(true);
          void introVideo.play().catch(() => undefined);
        });
      }
    }

    playIntro();

    return () => {
      cancelled = true;
    };
  }, [keepIntroVideo, mounted, needsIntroGesture]);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {keepIntroVideo && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: showSplash ? 1 : 0, y: showSplash ? 0 : -24 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden bg-neutral-950 bg-[radial-gradient(ellipse_96%_105%_at_50%_-24%,rgba(34,211,238,0.12),rgba(255,255,255,0))]"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative flex w-[min(900px,88vw)] flex-col items-center text-center"
            >
              <video
                ref={introVideoRef}
                className="pointer-events-none mb-8 aspect-video w-full max-w-[860px] object-contain opacity-95 drop-shadow-[0_0_44px_rgba(34,211,238,0.18)] [mask-image:radial-gradient(ellipse_at_center,black_72%,rgba(0,0,0,0.82)_88%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_72%,rgba(0,0,0,0.82)_88%,transparent_100%)]"
                src="/f_intro.mp4"
                autoPlay={!needsIntroGesture}
                playsInline
                disablePictureInPicture
                preload="auto"
                onTimeUpdate={(event) => {
                  const video = event.currentTarget;
                  setIntroProgress(Math.min(video.currentTime / Math.max(video.duration || 1, 1), 1));
                }}
                onEnded={finishSplash}
              />
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
            {needsIntroGesture && showSplash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-950/35 px-6 backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={startIntroWithSound}
                  className="hero-mono inline-flex items-center gap-2 rounded-md border border-cyan-300/70 bg-neutral-950/75 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_18px_70px_rgba(0,0,0,0.45)] transition hover:bg-cyan-300/15"
                >
                  Go through portfolio
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="relative overflow-hidden bg-neutral-950 antialiased"
        id="home"
      >
        <div className="pointer-events-none fixed top-0 z-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_96%_105%_at_50%_-24%,rgba(34,211,238,0.12),rgba(255,255,255,0))]" />
        {navbarVisible && <Navbar name="name" description="desc" />}
        {sideRailsVisible && <SideRails />}
        <div className="relative z-10 min-h-[88vh] w-full overflow-x-hidden pb-2">
          {heroAnimationStarted && (
            <Header
              className={""}
              animatePortrait={heroAnimationStarted}
              textEffectStarted={heroAnimationStarted}
              showActions={heroActionsVisible}
            />
          )}
        </div>
        {heroAnimationStarted && (
          <section id="about" className="relative z-10 scroll-mt-24">
            <AboutSection animatePortrait={heroAnimationStarted} />
          </section>
        )}
        <section id="experience" className="relative z-10 scroll-mt-24">
          <ExperienceTimeline />
        </section>
        <section id="portfolio" className="relative z-10 scroll-mt-24">
          <VideoProjects />
        </section>
        <section id="services" className="relative z-10 scroll-mt-24">
          <Services />
        </section>
        <section id="contact" className="relative z-10 scroll-mt-24">
          <Form />
        </section>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
