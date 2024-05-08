"use client";
import React from "react";
import { FormUI } from "./form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/moving-border";

export const Form = () => {
  return (
    <div className="w-full flex justify-center mb-4">
      <Dialog>
        <DialogTrigger>
          <Button borderRadius="1.75rem" className="bg-[#ffffff12] text-white">
            Contact Me
          </Button>
        </DialogTrigger>
        <DialogContent>
          <FormUI />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              {/* <button type="button">
                Close
              </button> */}
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
}
