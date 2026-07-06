import {
  Boxes,
  Layers,
  Radio as RadioIcon,
  CircleDot,
  ClipboardList,
  ArrowLeftRight,
  Copy,
  Square,
} from "lucide-react";
import { categories } from "../lib/homepage-data";

const ICONS = [
  Boxes,
  Layers,
  RadioIcon,
  CircleDot,
  ClipboardList,
  ArrowLeftRight,
  Copy,
  Square,
];

export function CategoryGrid() {
  return (
    <section
      aria-labelledby="category-heading"
      className="bg-bg px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between gap-4">
          <h2 id="category-heading" className="text-heading-1 font-bold text-content">
            Browse by Category
          </h2>
          <a
            href="#"
            className="flex min-h-11 items-center text-body-md font-medium text-content-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:shadow-focus"
          >
            View all categories &rarr;
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <a
                key={category.name}
                href="#"
                className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong focus-visible:outline-none focus-visible:shadow-focus"
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-bg-muted text-content">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-body-lg font-semibold text-content">
                    {category.name}
                  </p>
                  <p className="mt-1 text-body-sm text-content-muted">{category.stat}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
