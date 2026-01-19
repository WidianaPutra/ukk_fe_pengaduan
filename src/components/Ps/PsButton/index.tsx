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
  action?: () => void;
};

const PsButton = ({
  children,
  classname = "",
  variant = "primary",
  action,
}: PsButtonPropTypes) => {
  return (
    <button
      className={cn(
        `rounded-[15px] px-7 py-2 text-[18px] hover:cursor-pointer`,
        variants[variant],
        classname,
      )}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default PsButton;
