import type { ImgHTMLAttributes } from "react";

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  priority?: boolean;
}

export function Image({
  src,
  alt,
  priority = false,
  loading = priority ? "eager" : "lazy",
  decoding = "async",
  className,
  ...props
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={className}
      {...props}
    />
  );
}
