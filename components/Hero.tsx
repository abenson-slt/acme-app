"use client";

import * as React from "react";
import { Button, Input, Badge } from "@acme/design-system";
import { Search } from "lucide-react";
import { quickAccessProducts } from "../lib/homepage-data";

type QuickAccessTab = "continue" | "reorder";

export function Hero() {
  const [activeTab, setActiveTab] = React.useState<QuickAccessTab>("continue");

  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-gradient-to-br from-[#262276] via-[#433CB6] via-[55%] to-[#734FDE] bg-fixed px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <h1
          id="hero-heading"
          className="text-display-sm font-bold text-content-on-inverse sm:text-display-md"
        >
          Welcome back, Sarah.
        </h1>
        <p className="mt-2 text-body-lg text-content-on-inverse">
          Pick up where you left off, or search for your next part.
        </p>

        <div className="mt-6 max-w-2xl">
          <Input
            type="search"
            placeholder="Search by part number, description, manufacturer, or NSN..."
            aria-label="Search by part number, description, manufacturer, or NSN"
            leadingIcon={<Search />}
            className="h-12 text-body-lg"
          />
        </div>

        {/* Quick Access Panel */}
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div
              role="tablist"
              aria-label="Quick access"
              className="flex gap-1 rounded-lg border border-white/20 bg-white/10 p-1 backdrop-blur-md"
            >
              <button
                type="button"
                role="tab"
                id="tab-continue-shopping"
                aria-selected={activeTab === "continue"}
                aria-controls="panel-quick-access"
                onClick={() => setActiveTab("continue")}
                className={`flex min-h-11 items-center rounded-md px-4 text-body-md font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus ${
                  activeTab === "continue"
                    ? "bg-white/20 text-content-on-inverse"
                    : "text-content-on-inverse hover:text-content-on-inverse"
                }`}
              >
                Continue Shopping
              </button>
              <button
                type="button"
                role="tab"
                id="tab-order-again"
                aria-selected={activeTab === "reorder"}
                aria-controls="panel-quick-access"
                onClick={() => setActiveTab("reorder")}
                className={`flex min-h-11 items-center rounded-md px-4 text-body-md font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus ${
                  activeTab === "reorder"
                    ? "bg-white/20 text-content-on-inverse"
                    : "text-content-on-inverse hover:text-content-on-inverse"
                }`}
              >
                Order Again
              </button>
            </div>
            <a
              href="#"
              className="flex min-h-11 items-center text-body-md font-medium text-content-on-inverse underline-offset-4 hover:underline focus-visible:outline-none focus-visible:shadow-focus"
            >
              View all &rarr;
            </a>
          </div>

          <div
            id="panel-quick-access"
            role="tabpanel"
            aria-labelledby={
              activeTab === "continue" ? "tab-continue-shopping" : "tab-order-again"
            }
            className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
          >
            {quickAccessProducts.map((product) => (
              <div
                key={product.partNumber}
                className="flex flex-col justify-between gap-3 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md"
              >
                <div>
                  <p className="text-body-md font-semibold text-content-on-inverse">
                    {product.name}
                  </p>
                  <p className="mt-1 text-body-sm text-content-on-inverse">
                    {product.partNumber}
                  </p>
                  <p className="mt-2 text-body-md font-semibold text-content-accent-on-inverse">
                    {product.priceLabel}
                  </p>
                </div>
                <Button variant="outline-inverse" size="sm">
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Supplier Spotlight banner */}
        <div className="mt-10 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge variant="info">Partner Spotlight</Badge>
              <h2 className="mt-3 text-heading-2 font-bold text-content-on-inverse">
                Honeywell Aerospace — 3,400+ Certified Parts
              </h2>
              <p className="mt-2 text-body-md text-content-on-inverse">
                AS9100D certified. Most orders ship in 2 business days.
              </p>
            </div>
            <Button variant="primary" size="lg" className="shrink-0 sm:self-center">
              Shop Honeywell Parts &rarr;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
