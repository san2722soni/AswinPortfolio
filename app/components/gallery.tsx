"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Gallery() {
  const words = [
    {
      text: "Exhibition.",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center mt-20">
        <TypewriterEffectSmooth
          words={words}
          className="text-3xl md:text-4xl lg:text:5xl"
        />
      </div>
      <ParallaxScroll images={videos} />;
    </div>
  );
}

const iframes = [{ src: "" }, { src: "" }];

const videos = [
  "https://drive.google.com/file/d/1dzXHRHAKfdeoJVVcDV0XqsGVJb9-nHIn/preview",
  "https://drive.google.com/file/d/1EVmUVZ-k3yUODRGQ2g563WGQclybD_Jf/preview",
  "https://drive.google.com/file/d/1yXwNsL7IGOppWEXr8Rpsx9AfetEsMCqk/preview",
  "https://drive.google.com/file/d/175sEwkDg2nqs0YUUA1yJDdEVZOOyXrfT/preview",
  "https://drive.google.com/file/d/1EVmUVZ-k3yUODRGQ2g563WGQclybD_Jf/preview",
  "https://drive.google.com/file/d/1oGgLlKKyFIQe2euBwDJKoe3jf_5K0v24/preview",
  "https://drive.google.com/file/d/1z2ycqf87W2Cp9A3fQsYYvlZpPaOHP3Lq/preview",
  "https://drive.google.com/file/d/13t1oqYhIlLVJAsZ07hjgCyRkh9uaGmuA/preview",
  "https://drive.google.com/file/d/1QNe-DlSHsDYAY9vmSeJqG4CKP7oxAcDX/preview",
  "https://drive.google.com/file/d/15p_eoMpjoNb58_WfxyqdfFxnVU8EouKU/preview",
  "https://drive.google.com/file/d/1RH9NBwRRKWcnEcanop6B_x_CJx5MonQE/preview",
];
