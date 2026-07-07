import { industries } from "../lib/homepage-data";

export function IndustryBand() {
  return (
    <section
      aria-labelledby="industry-heading"
      className="bg-gradient-to-br from-[#262276] via-[#433CB6] via-[55%] to-[#734FDE] bg-fixed px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="industry-heading"
          className="text-heading-1 font-bold text-content-on-inverse"
        >
          Browse by Industry
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <a
              key={industry}
              href="#"
              className="flex min-h-11 items-center rounded-full border border-border-strong px-5 text-body-md font-medium text-content-on-inverse transition-colors hover:bg-white/10 hover:backdrop-blur-sm focus-visible:outline-none focus-visible:shadow-focus"
            >
              {industry}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
