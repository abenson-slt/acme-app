"use client";

import * as React from "react";
import { Search } from "lucide-react";

export interface GlassSearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  className?: string;
}

/**
 * Page-level "on-dark glass" search input, used on the gradient header/hero
 * sections in place of @abenson-slt/acme-design-system's `Input`.
 *
 * `Input`'s icon-mode (leadingIcon/trailingIcon) wraps a plain `<input>` and
 * icon `<span>` whose classes are hardcoded in the component body — only the
 * *wrapper* div's classes go through `cn(..., className)`, so a caller can
 * restyle the outer border/background but cannot reach the inner input's
 * text/placeholder color or the icon's color via the exposed `className`
 * prop. That's fine on a white surface (the component's only supported
 * context) but breaks down on a dark/gradient surface, where the (fixed)
 * `text-content`/`text-content-muted` colors read as near-invisible.
 *
 * This is a genuine design-system gap (no on-dark/glass variant exists for
 * `Input`) rather than something fixable from the call site — flagged for a
 * future `@abenson-slt/acme-design-system` addition. In the meantime this local
 * component mirrors `Input`'s icon-mode markup with on-inverse tokens.
 */
export const GlassSearchInput = React.forwardRef<
  HTMLInputElement,
  GlassSearchInputProps
>(({ className, ...props }, ref) => {
  return (
    <div
      className={`flex h-10 w-full items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 backdrop-blur-md focus-within:border-white/40 focus-within:shadow-focus ${
        className ?? ""
      }`}
    >
      <span className="shrink-0 text-content-on-inverse [&_svg]:size-4">
        <Search aria-hidden="true" />
      </span>
      <input
        ref={ref}
        className="size-full bg-transparent text-body-md text-content-on-inverse placeholder:text-content-on-inverse focus-visible:outline-none disabled:cursor-not-allowed"
        {...props}
      />
    </div>
  );
});

GlassSearchInput.displayName = "GlassSearchInput";
