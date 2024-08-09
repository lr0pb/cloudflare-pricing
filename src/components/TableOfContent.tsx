import { pricing } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

export function TableOfContent() {
  return (
    <div
      className={cn(
        "grid grid-cols-5 max-sm:grid-cols-3 grid-borders",
        "*:transition-colors hover:*:bg-foreground/[7%] *:py-6 max-sm:*:py-5 *:px-2 *:h-full",
        "*:flex *:flex-col *:items-center *:justify-center *:gap-3"
      )}
    >
      {pricing.map((category) => {
        return (
          <Fragment key={category.name}>
            {category.products.map((product) => {
              return (
                <a
                  key={product.name}
                  href={`#${product.name.replaceAll(" ", "-")}`}
                >
                  <span className="text-cf-orange">{product.logo}</span>
                  <span className="text-lg font-semibold text-center">
                    {product.name}
                  </span>
                </a>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
