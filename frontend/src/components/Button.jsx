import { useState } from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  loading = false,
  success = false,
  animated = false,
  type = "button",
}) => {
  const base =
    "relative px-8 py-3 font-semibold uppercase tracking-wide transition-all duration-300 text-sm font-montserrat overflow-hidden";

  const variants = {
    primary: "bg-[#ED206F] text-white hover:bg-[#c21556]",
    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    text: "text-[#ED206F] border-b-2 border-[#ED206F] px-0 py-0",
  };

  /* ---------------- CONTENT STATES ---------------- */

  const renderContent = () => {
    if (animated) {
      if (loading) {
        return (
          <span className="flex items-center justify-center gap-1">
            <span className="w-1 h-1 bg-current rounded-full animate-bounce" />
            <span className="w-1 h-1 bg-current rounded-full animate-bounce delay-100" />
            <span className="w-1 h-1 bg-current rounded-full animate-bounce delay-200" />
          </span>
        );
      }

      if (success) {
        return (
          <span className="flex items-center justify-center gap-2 text-green-300">
            ✓ <span>Success</span>
          </span>
        );
      }
    }

    return children;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        ${base}
        ${variants[variant]}
        ${loading ? "cursor-not-allowed opacity-80" : ""}
        ${success ? "bg-green-600 hover:bg-green-600" : ""}
        ${className}
      `}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
