import { Link } from "@/components/Link";
import { PlansSelector } from "@/components/PlansSelector";
import { ProductBlock } from "@/components/Product";
import { TableOfContent } from "@/components/TableOfContent";
import { pricing } from "@/lib/products";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="mb-12 flex flex-col w-full max-w-[61rem] px-2">
      <div className="mt-32 mb-24 flex max-sm:flex-col justify-between px-1.5">
        <div className="max-w-[30rem] flex flex-col gap-4">
          <h1 className="text-3xl mr-10 font-bold text-balance">
            Cloudflare Developer Platform Pricing & Limits
          </h1>
          <p className="opacity-70 text-balance">
            Unofficial list compiled from information on{" "}
            <Link
              href="https://developers.cloudflare.com"
              className="inline"
              target="_blank"
            >
              developers.cloudflare.com
            </Link>{" "}
            about each of the product
          </p>
          <div className="flex gap-6">
            <Link href="https://x.com/ilr0pb" className="gap-3">
              <TwitterIcon />
              Created by lr0pb
            </Link>
            <Link
              href="https://github.com/lr0pb/cloudflare-pricing"
              className="gap-3"
            >
              <GitHubIcon />
              View on Github
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 max-sm:hidden">
          <p className="text-lg font-bold">Go to</p>
          {pricing.map((category) => {
            return (
              <Link
                key={category.name}
                href={`#${category.name}`}
                className="font-semibold"
              >
                {category.name}
                <ArrowRightIcon size={16} className="opacity-70" />
              </Link>
            );
          })}
        </div>
      </div>
      <TableOfContent />
      <PlansSelector />
      {pricing.map((category) => {
        return (
          <div
            key={category.name}
            id={category.name}
            className="flex flex-col w-full"
          >
            <h2 className="text-2xl font-bold mt-5 mb-2 px-1.5">
              {category.name}
            </h2>
            {category.products.map((product) => {
              return <ProductBlock product={product} key={product.name} />;
            })}
          </div>
        );
      })}
    </main>
  );
}

function TwitterIcon() {
  return (
    <svg
      role="img"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      {/* <title>X</title> */}
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      role="img"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      {/* <title>GitHub</title> */}
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
