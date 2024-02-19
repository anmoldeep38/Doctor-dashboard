import React from "react";

const sizeClasses = {
  txtManropeBold16Bluegray100: "font-bold font-manrope",
  txtManropeExtraBold28: "font-extrabold font-manrope",
  txtManropeBold20: "font-bold font-manrope",
  txtManropeSemiBold12Black900: "font-manrope font-semibold",
  txtManropeBold16: "font-bold font-manrope",
  txtManropeRegular941: "font-manrope font-normal",
  txtManropeSemiBold18: "font-manrope font-semibold",
  txtManropeMedium12: "font-manrope font-medium",
  txtManropeBold14: "font-bold font-manrope",
  txtManropeBold16Black900: "font-bold font-manrope",
  txtManropeSemiBold12: "font-manrope font-semibold",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeMedium941: "font-manrope font-medium",
  txtManropeBold14Black900: "font-bold font-manrope",
  txtManropeMedium14: "font-manrope font-medium",
  txtManropeBold32: "font-bold font-manrope",
  txtManropeMedium16: "font-manrope font-medium",
  txtInterRegular24: "font-inter font-normal",
  txtManropeMedium12Bluegray100: "font-manrope font-medium",
  txtManropeSemiBold12Bluegray100: "font-manrope font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
