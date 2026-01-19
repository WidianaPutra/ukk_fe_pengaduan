import React from "react";
import { cn } from "@/utils/cn";

const variants = {
  primary: "bg-purple text-white",
  secondery: "bg-blue text-white",
};

const alignments = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

type PsButtonPropTypes = {
  children: React.ReactNode;
  classname?: string;
  alignment: keyof typeof alignments;
  variant?: keyof typeof variants;
  action?: () => void;
};

const PsButton = ({
  children,
  classname = "",
  alignment = "center",
  variant = "primary",
  action,
}: PsButtonPropTypes) => {
  return (
    <button
      className={cn(
        `rounded-[15px] px-7 py-2 text-[18px] hover:cursor-pointer`,
        alignments[alignment],
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
