import React from "react";
import PropTypes from "prop-types";

/**
 * PUBLIC_INTERFACE
 * Button component for themed, accessible UI actions.
 *
 * Props:
 * - variant: "primary" | "secondary" | "outline"
 * - size: "sm" | "md" | "lg"
 * - disabled: boolean
 * - onClick: function
 * - type: string (default: "button")
 * - children: node (button label)
 * - className: string (optional extra classes)
 * - fullWidth: boolean (expands to parent width)
 * - startIcon: React node (optional)
 * - endIcon: React node (optional)
 */
const VARIANT_CLASS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
};
const SIZE_CLASS = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

function Button({
  variant,
  size,
  disabled,
  onClick,
  type,
  children,
  className,
  fullWidth,
  startIcon,
  endIcon,
  ...rest
}) {
  const variantClass = VARIANT_CLASS[variant] || VARIANT_CLASS.primary;
  const sizeClass = SIZE_CLASS[size] || SIZE_CLASS.md;
  const full = fullWidth ? "btn-fullwidth" : "";
  return (
    <button
      type={type}
      disabled={disabled}
      className={`kavia-btn ${variantClass} ${sizeClass} ${full} ${disabled ? "btn-disabled" : ""} ${className || ""}`}
      onClick={onClick}
      tabIndex={0}
      aria-disabled={!!disabled}
      {...rest}
    >
      {startIcon && (
        <span className="btn-icon btn-icon--start" aria-hidden="true">
          {startIcon}
        </span>
      )}
      <span className="btn-content">{children}</span>
      {endIcon && (
        <span className="btn-icon btn-icon--end" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  disabled: false,
  onClick: undefined,
  type: "button",
  className: "",
  fullWidth: false,
  startIcon: null,
  endIcon: null,
};

export default Button;
