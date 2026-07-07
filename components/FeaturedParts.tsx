import {
  Button,
  Badge,
  Card,
  CardContent,
  CardFooter,
} from "@abenson-slt/acme-design-system";
import { Package } from "lucide-react";
import { featuredParts } from "../lib/homepage-data";

/**
 * Product card composed from design-system Card + Badge + Button. There is
 * no purpose-built `ProductCard` in @abenson-slt/acme-design-system yet — this
 * composition is reused conceptually by the Hero's quick-access cards too,
 * so it's flagged in the final report as a suggested design-system addition.
 */
export function FeaturedParts() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="bg-bg-subtle px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between gap-4">
          <h2 id="featured-heading" className="text-heading-1 font-bold text-content">
            Featured Parts
          </h2>
          <a
            href="#"
            className="flex min-h-11 items-center text-body-md font-medium text-content-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:shadow-focus"
          >
            View all featured &rarr;
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredParts.map((part) => (
            <Card key={part.partNumber} className="flex h-full flex-col">
              <div className="flex aspect-[4/3] items-center justify-center rounded-t-lg bg-bg-muted">
                <Package aria-hidden="true" className="size-10 text-content-muted" />
                <span className="sr-only">
                  Product image placeholder for {part.title}
                </span>
              </div>
              <CardContent className="flex flex-1 flex-col gap-2 pt-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-body-sm text-content-muted">
                    {part.partNumber}
                  </span>
                  <Badge variant={part.stockStatus === "In Stock" ? "success" : "warning"}>
                    {part.stockStatus}
                  </Badge>
                </div>
                <p className="text-body-md font-semibold text-content">{part.title}</p>
                <p className="text-body-sm text-content-muted">
                  by {part.manufacturer}
                </p>
                <p className="mt-auto text-body-lg font-semibold text-content-brand">
                  {part.priceLabel === "Request Quote" ? (
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:shadow-focus"
                    >
                      {part.priceLabel}
                    </a>
                  ) : (
                    part.priceLabel
                  )}
                </p>
              </CardContent>
              <CardFooter className="flex-col items-stretch gap-2 sm:flex-row">
                <Button variant="primary" size="sm" fullWidth>
                  Add to Cart
                </Button>
                <a
                  href="#"
                  className="flex min-h-11 items-center justify-center text-body-md font-medium text-content-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:shadow-focus sm:min-h-0"
                >
                  Quick View
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
