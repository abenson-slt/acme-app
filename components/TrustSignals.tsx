import { ShieldCheck, FileCheck2, Gauge } from "lucide-react";
import { trustSignals } from "../lib/homepage-data";

const ICONS = [ShieldCheck, FileCheck2, Gauge];

export function TrustSignals() {
  return (
    <section aria-label="Trust signals" className="bg-gradient-to-br from-[#262276] via-[#433CB6] via-[55%] to-[#734FDE] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-3">
        {trustSignals.map((signal, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={signal.heading} className="flex items-start gap-3">
              <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-content-on-inverse" />
              <div>
                <p className="text-body-lg font-semibold text-content-on-inverse">
                  {signal.heading}
                </p>
                <p className="mt-0.5 text-body-sm text-content-on-inverse">
                  {signal.subline}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
