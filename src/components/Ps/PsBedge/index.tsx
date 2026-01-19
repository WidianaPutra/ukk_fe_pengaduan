import { cn } from "@/utils/cn";
import React from "react";

const variants = {
  primary: "bg-purple text-white",
  secondary: "bg-blue text-white",
};

type PsBadgePropTypes = {
  variant?: keyof typeof variants;
  children?: React.ReactNode;
  classname?: string;
};

const PsBadge = ({
  variant = "primary",
  children,
  classname = "",
}: PsBadgePropTypes) => {
  return (
    <div
      className={cn(
        "w-max cursor-pointer rounded-full px-4 py-2 text-sm",
        variants[variant],
        classname,
      )}
    >
      <label className="cursor-pointer">{children}</label>
    </div>
  );
};

export default PsBadge;
