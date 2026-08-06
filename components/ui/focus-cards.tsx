"use client";
/* eslint-disable @next/next/no-img-element */

import React, { ReactNode, useState } from "react";
import { cn } from "@/utils/cn";

type ImageCard = {
  title: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: ImageCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards<T>({
  cards,
  getKey,
  renderCard,
  className,
  getClassName,
}: {
  cards: T[];
  getKey?: (card: T) => string;
  renderCard?: (card: T, index: number, hovered: number | null) => ReactNode;
  className?: string;
  getClassName?: (card: T, index: number) => string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  if (renderCard) {
    return (
      <div className={cn("grid w-full gap-4", className)}>
        {cards.map((card, index) => (
          <div
            key={getKey?.(card) ?? String(index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "transition-all duration-300 ease-out",
              getClassName?.(card, index),
              hovered !== null && hovered !== index && "scale-[0.98] blur-sm opacity-60",
            )}
          >
            {renderCard(card, index, hovered)}
          </div>
        ))}
      </div>
    );
  }

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {(cards as ImageCard[]).map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
