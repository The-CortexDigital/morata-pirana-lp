import Image from "next/image";
import { LOGOS, type LogoVariant } from "@/lib/brand";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

export default function Logo({
  variant = "branco",
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={LOGOS[variant]}
      alt="3IN Intermediações e Soluções Empresariais"
      fill
      className={`object-contain ${className}`}
      priority={priority}
    />
  );
}
