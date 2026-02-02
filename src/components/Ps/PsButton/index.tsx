import React from "react";
import { cn } from "@/utils/cn";

const variants = {
  primary: "bg-purple text-white",
  secondery: "bg-blue text-white",
};

type PsButtonPropTypes = {
  children: React.ReactNode;
  classname?: string;
  variant?: keyof typeof variants;
  event?: () => void;
  fullWidth?: boolean;
};

const PsButton = ({
  children,
  classname = "",
  variant = "primary",
  event,
  fullWidth = false,
}: PsButtonPropTypes) => {
  return (
    <button
      className={cn(
        `rounded-[10px] px-7 py-2 text-[18px] hover:cursor-pointer`,
        variants[variant],
        fullWidth ? "w-full" : "w-fit",
        classname,
      )}
      onClick={event}
    >
      {children}
    </button>
  );
};

export default PsButton;
