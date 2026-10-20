import { APP_INFO } from "@/config/app";
import { Download } from "lucide-react";

interface InstallButtonProps {
  label?: string;
  variant?: "primary" | "light" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

const variantClasses: Record<string, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700",
  light:
    "bg-background-50 text-primary-700 hover:bg-primary-50",
  ghost:
    "bg-transparent text-foreground-900 border border-foreground-300/70 hover:border-primary-400 hover:text-primary-700",
};

export default function InstallButton({
  label = "Instalar App",
  variant = "primary",
  size = "md",
  className = "",
}: InstallButtonProps) {
  return (
    <a
      href={APP_INFO.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center rounded-md font-semibold whitespace-nowrap cursor-pointer transition-colors duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      {label}
    </a>
  );
}