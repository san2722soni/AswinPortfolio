"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Projects() {
  return (
    <div className="overflow-hidden">
      <HeroParallax products={products} />
    </div>
  );
}
export const products = [
  {
    title: "Portfolio - [Video Editor]",
    link: "https://ayushprakash.netlify.app",
    thumbnail:
      "https://res.cloudinary.com/dyxio9jfi/image/upload/v1714978232/image_2_t4tcw6.jpg",
  },
  {
    title: "The-Interio",
    link: "https://the-interio.netlify.app",
    thumbnail:
      "https://res.cloudinary.com/dyxio9jfi/image/upload/v1714927984/image_5_fjgv7n.jpg",
  },
  {
    title: "Real-View-Garden [Ecommerce App]",
    link: "https://real-view-garden-store.vercel.app/",
    thumbnail:
      "https://res.cloudinary.com/dyxio9jfi/image/upload/v1714925993/image_e6pu22.jpg",
  },

  {
    title: "The-Intellect",
    link: "https://the-intellect.netlify.app",
    thumbnail:
      "https://res.cloudinary.com/dyxio9jfi/image/upload/v1714927976/image_3_ld94pu.jpg",
  },
  {
    title: "NEWS-MONKEY",
    link: "https://news-monkey-ochre.vercel.app/",
    thumbnail:
      "https://res.cloudinary.com/dyxio9jfi/image/upload/v1714979407/image_6_st9b4r.jpg",
  },
  {
    title: "NEWS-MONKEY",
    link: "https://news-monkey-ochre.vercel.app/",
    thumbnail:
      "https://res.cloudinary.com/dyxio9jfi/image/upload/v1714979407/image_6_st9b4r.jpg",
  },

  {
    title: "Eduford",
    link: "https://edu-foard.netlify.app",
    thumbnail:
      "https://res.cloudinary.com/dyxio9jfi/image/upload/v1714927975/image_1_nku3fu.jpg",
  },
  {
    title: "Halloween-Calc [All type calculator]",
    link: "https://halloween-calc.netlify.app/",
    thumbnail:
      "https://res.cloudinary.com/dyxio9jfi/image/upload/v1714928818/image7_ivw4u5.jpg",
  },
];
