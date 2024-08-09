"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function PlansSelector() {
  const [active, setActive] = useState("free");
  useEffect(() => {
    document.body.dataset.plan = active;
  }, [active]);
  return (
    <div
      className={cn(
        "mt-5 h-12 grid grid-cols-3 max-sm:grid-cols-1 grid-borders sticky top-0 z-20 bg-background",
        "*:flex *:flex-col *:items-center *:justify-center"
      )}
    >
      <div className="sm:hidden max-sm:!grid grid-cols-2 gap-2 px-2">
        <button
          className={cn(
            "py-1 px-2 rounded-full transition-colors",
            active === "free" ? "bg-cf-orange text-white" : "bg-foreground/5"
          )}
          onClick={() => {
            setActive("free");
          }}
        >
          Workers Free
        </button>
        <button
          className={cn(
            "py-1 px-2 rounded-full transition-colors",
            active === "paid" ? "bg-cf-orange text-white" : "bg-foreground/5"
          )}
          onClick={() => {
            setActive("paid");
          }}
        >
          Workers Paid
        </button>
      </div>
      <div className="max-sm:hidden" />
      <div className="max-sm:hidden">
        <span className="text-lg font-semibold">Workers Free</span>
      </div>
      <div className="max-sm:hidden">
        <span className="text-lg font-semibold">Workers Paid</span>
      </div>
    </div>
  );
}
