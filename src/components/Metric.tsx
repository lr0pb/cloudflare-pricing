import type { Metric } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";

type Props = {
  metric: Metric;
};

export function MetricBlock({ metric }: Props) {
  const havePaid = !!(metric.paid || metric.additional);
  const havePaidIncluded = !!(metric.paid || metric.free !== "-");
  const nameBlock = (
    <>
      <h4 className="text-lg font-semibold text-balance">
        {!metric.link ? (
          metric.name
        ) : (
          <>
            {metric.name}
            <ArrowUpRightIcon
              size={12}
              className="inline shrink-0 opacity-70 ml-1 mb-2"
            />
          </>
        )}
      </h4>
      {metric.description && (
        <p className="text-sm opacity-80">{metric.description}</p>
      )}
    </>
  );
  return (
    <>
      {!metric.link ? (
        <div>{nameBlock}</div>
      ) : (
        <a
          href={metric.link}
          className="hover:bg-foreground/[7%] transition-colors"
        >
          {nameBlock}
        </a>
      )}
      <div
        className={cn(
          !havePaid ? "sm:col-span-2" : "plan-free",
          "items-center justify-center text-center"
        )}
      >
        <Format>{metric.free}</Format>
      </div>
      {havePaid && (
        <div
          className={cn("items-center justify-center text-center plan-paid")}
        >
          {havePaidIncluded && <Format>{metric.paid || metric.free}</Format>}
          {havePaidIncluded && metric.additional && (
            <span className="font-bold">+</span>
          )}
          {metric.additional && <Format>{metric.additional}</Format>}
        </div>
      )}
    </>
  );
}

function Format({ children }: { children: string }) {
  return children.split("\n").map((text) => <span>{text}</span>);
}
