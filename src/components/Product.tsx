import { Link } from "@/components/Link";
import { MetricBlock } from "@/components/Metric";
import type { Badge, Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ActivityIcon, ArrowUpRightIcon, BanknoteIcon } from "lucide-react";

const badges: Record<
  Badge,
  {
    title: string;
    color: string;
  }
> = {
  paid: {
    title: "Only on Workers Paid",
    color: "darkorange",
  },
  "free-beta": {
    title: "Free while in Beta",
    color: "deepskyblue",
  },
  addon: {
    title: "Paid Addon",
    color: "dodgerblue",
  },
};

type Props = {
  product: Product;
};

export function ProductBlock({ product }: Props) {
  return (
    <>
      <div
        id={product.name.replaceAll(" ", "-")}
        className={cn(
          "flex gap-3 max-sm:flex-col sm:items-center py-4 px-1.5 border-b border-r border-r-background",
          "sticky top-[47px] bg-background z-10"
        )}
      >
        <div className="flex gap-3 items-center mr-auto">
          <Link href={product.link} target="_blank" className="gap-3">
            <span className="text-cf-orange">{product.logo}</span>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <ArrowUpRightIcon size={20} className="opacity-70 max-sm:hidden" />
          </Link>
          {product.badge && (
            <span
              className="text-xs pt-1 pb-[3px] px-2.5 rounded-full text-background text-balance"
              style={{
                backgroundColor: badges[product.badge].color,
              }}
            >
              {badges[product.badge].title}
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {product.pricing && (
            <Link href={product.pricing} target="_blank">
              <span className="sm:hidden p-1.5 rounded-full bg-foreground/5">
                <BanknoteIcon size={20} className="shrink-0" />
              </span>
              <span>Pricing</span>
              <ArrowUpRightIcon
                size={20}
                className="opacity-70 max-sm:hidden"
              />
            </Link>
          )}
          {product.limits && (
            <Link href={product.limits} target="_blank">
              <span className="sm:hidden p-1.5 rounded-full bg-foreground/5">
                <ActivityIcon size={20} className="shrink-0" />
              </span>
              <span>Limits</span>
              <ArrowUpRightIcon
                size={20}
                className="opacity-70 max-sm:hidden"
              />
            </Link>
          )}
        </div>
      </div>
      <div
        className={cn(
          "grid grid-cols-3 max-sm:grid-cols-2 grid-borders",
          "*:p-4 *:h-full *:flex *:flex-col *:gap-1.5"
        )}
      >
        {product.metrics
          // .filter((metric) => metric.type === "price")
          .map((metric) => {
            return <MetricBlock metric={metric} key={metric.name} />;
          })}
      </div>
    </>
  );
}
