"use client";

import * as React from "react";
import { Button } from "@acme/design-system";
import { Menu, ShoppingCart, X } from "lucide-react";
import { AcmeLogo } from "./AcmeLogo";
import { GlassSearchInput } from "./GlassSearchInput";
import { navLinks } from "../lib/homepage-data";

const CART_ITEM_COUNT = 3;

/**
 * Page-level site navigation. Composed from @acme/design-system primitives
 * (Button, Input) plus semantic-token markup, since the design system does
 * not yet export a purpose-built page-level `Nav` component (only
 * primitives) — see final report for this being flagged as a suggested
 * design-system addition.
 */
export function SiteNav() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-br from-[#262276] via-[#433CB6] via-[55%] to-[#734FDE] bg-fixed">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex min-h-11 items-center text-content-on-inverse focus-visible:outline-none focus-visible:shadow-focus"
        >
          <AcmeLogo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="flex min-h-11 items-center text-body-md font-medium text-content-on-inverse transition-colors hover:text-content-on-inverse focus-visible:outline-none focus-visible:shadow-focus"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <div className="w-80 xl:w-96">
            <GlassSearchInput
              type="search"
              placeholder="Search parts or part numbers..."
              aria-label="Search parts or part numbers"
            />
          </div>
          <a
            href="#"
            aria-label={`Cart, ${CART_ITEM_COUNT} items`}
            className="relative flex size-11 items-center justify-center rounded-md text-content-on-inverse transition-colors hover:bg-white/10 hover:backdrop-blur-sm focus-visible:outline-none focus-visible:shadow-focus"
          >
            <ShoppingCart aria-hidden="true" />
            <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-interactive-primary text-[11px] font-semibold text-interactive-primary-fg">
              {CART_ITEM_COUNT}
            </span>
          </a>
          <Button
            variant="secondary"
            size="md"
            className="border-white/20 bg-white/10 text-content-on-inverse backdrop-blur-md hover:bg-white/20"
          >
            My Account
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto flex size-11 items-center justify-center rounded-md text-content-on-inverse hover:bg-white/10 hover:backdrop-blur-sm focus-visible:outline-none focus-visible:shadow-focus lg:hidden"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setDrawerOpen((open) => !open)}
        >
          {drawerOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {drawerOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-white/20 bg-gradient-to-br from-[#262276] via-[#433CB6] via-[55%] to-[#734FDE] bg-fixed px-4 pb-6 pt-4 lg:hidden"
        >
          <div className="mb-4">
            <GlassSearchInput
              type="search"
              placeholder="Search parts or part numbers..."
              aria-label="Search parts or part numbers"
            />
          </div>
          <nav aria-label="Primary" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="flex min-h-11 items-center rounded-md px-2 text-body-lg font-medium text-content-on-inverse transition-colors hover:bg-white/10 hover:backdrop-blur-sm focus-visible:outline-none focus-visible:shadow-focus"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              aria-label={`Cart, ${CART_ITEM_COUNT} items`}
              className="relative flex size-11 items-center justify-center rounded-md text-content-on-inverse hover:bg-white/10 hover:backdrop-blur-sm focus-visible:outline-none focus-visible:shadow-focus"
            >
              <ShoppingCart aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-interactive-primary text-[11px] font-semibold text-interactive-primary-fg">
                {CART_ITEM_COUNT}
              </span>
            </a>
            <Button
              variant="secondary"
              size="md"
              fullWidth
              className="border-white/20 bg-white/10 text-content-on-inverse backdrop-blur-md hover:bg-white/20"
            >
              My Account
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
