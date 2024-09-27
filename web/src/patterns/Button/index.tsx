import React from "react";

export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export default function Button({
  children,
  className = "",
  ...props
}: IButton) {
  return (
    <button
      className={`rounded-xl text-nowrap font-bold text-b02-xs md:text-b01-xs text-n-050 px-4 py-2 bg-p-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
