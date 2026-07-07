import { Button } from "@abenson-slt/acme-design-system";
import { AcmeLogo } from "./AcmeLogo";
import { footerColumns, legalLinks } from "../lib/homepage-data";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#262276] via-[#433CB6] via-[55%] to-[#734FDE] bg-fixed px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-content-on-inverse">
              <AcmeLogo />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:flex-1 lg:max-w-2xl">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-body-sm font-semibold text-content-on-inverse">
                  {column.title}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="flex min-h-11 items-center text-body-sm text-content-on-inverse hover:text-content-on-inverse focus-visible:outline-none focus-visible:shadow-focus sm:min-h-0"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:shrink-0">
            <Button variant="secondary" size="md">
              Start Live Chat
            </Button>
          </div>
        </div>

        <hr className="my-8 border-border-strong" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-content-on-inverse">
            &copy; 2026 ACME Parts Portal. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="flex min-h-11 items-center text-body-sm text-content-on-inverse hover:text-content-on-inverse focus-visible:outline-none focus-visible:shadow-focus sm:min-h-0"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
