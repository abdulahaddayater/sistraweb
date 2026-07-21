import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "outline" | "solid" | "ghost" | "outline-light";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  to: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "outline",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`.trim();

  if ("to" in props && props.to) {
    const { to, onClick } = props;
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
