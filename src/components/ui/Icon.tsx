import type { ReactNode } from "react";

export type IconProps = {
  children: ReactNode;
  className?: string;
};

export default function Icon({ children, className = "" }: IconProps) {
  return <span className={`inline-flex ${className}`}>{children}</span>;
}
