import { cn } from "@/lib/utils";

export function Link({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "flex gap-1.5 items-center hover:underline underline-offset-2",
        className
      )}
      {...props}
    />
  );
}
