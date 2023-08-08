import Link from "next/link";
import React from "react";
import type { MouseEventHandler } from "react";

export default function Button({
  children,
  href,
  variant = "primary",
  target = "_self",
  type,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
  target?: "_blank" | "_parent" | "_self" | "_top";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) {
  const variantClasses =
    variant === "primary"
      ? "bg-pink-800 border-pink-900 hover:border-pink-800 hover:bg-pink-700 shadow-md"
      : "border-gray-700 hover:bg-gray-700";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  if (href) {
    return (
      <Link
        href={href}
        className={
          "leading-0 block rounded-lg border px-6 py-3 text-base tracking-tight text-white duration-300 ease-in-out " +
          variantClasses
        }
        target={target}
      >
        {children}
        {" →"}
      </Link>
    );
  }

  return (
    <button
      className={
        "leading-0 block rounded-lg border px-6 py-3 text-base tracking-tight text-white duration-300 ease-in-out " +
        variantClasses +
        " " +
        disabledClasses
      }
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {" →"}
    </button>
  );
}
