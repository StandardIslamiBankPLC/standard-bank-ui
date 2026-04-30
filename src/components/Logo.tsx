import type { SVGProps } from "react";
import logo from "../assets/logo.svg";
import { Image } from "./Image";

export interface LogoProps extends SVGProps<HTMLImageElement> {}

export default function Logo(props: LogoProps) {
  return <Image src={logo} alt="Standard Bank Logo" className="h-8 w-auto" priority {...props} />;
}
