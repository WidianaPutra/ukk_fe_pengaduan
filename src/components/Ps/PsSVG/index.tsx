import { cn } from "@/utils/cn";
import { Mail, KeyRound, User } from "lucide-react";
import { LucideIcon, LucideProps } from "lucide-react";

const SVGList = {
  mail: Mail,
  "key-round": KeyRound,
  user: User,
} as const;

export type PsSVGName = keyof typeof SVGList;

interface PsSVGPropTypes extends LucideProps {
  name: PsSVGName;
}

const PsSVG = ({ name, className, ...props }: PsSVGPropTypes) => {
  const Icon = SVGList[name];
  return <Icon {...props} className={cn("h-10 w-10 text-black", className)} />;
};

export default PsSVG;
