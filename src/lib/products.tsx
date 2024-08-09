import {
  AIGateway,
  AnalyticsEngine,
  Calls,
  CronTriggers,
  D1,
  DurableObjects,
  Hyperdrive,
  Images,
  KV,
  Logpush,
  Pages,
  Queues,
  R2,
  Stream,
  Vectorize,
  Workers,
  WorkersAI,
} from "./icons";

type URLString = `https://${string}`;

export type Metric = {
  name: string;
  type?: "price";
  link?: URLString;
  description?: string;
  free: string;
  paid?: string;
  additional?: string;
};

export type Badge = "paid" | "free-beta" | "addon";

export type Product = {
  name: string;
  link: URLString;
  pricing?: URLString;
  limits?: URLString;
  logo: JSX.Element;
  badge?: Badge;
  metrics: Array<Metric>;
};

export type Category = {
  name: string;
  products: Array<Product>;
};

export const pricing: Array<Category> = [
  {
    name: "Compute",
    products: [
      {
        name: "Workers",
        link: "https://developers.cloudflare.com/workers/",
        pricing: "https://developers.cloudflare.com/workers/platform/pricing/",
        limits: "https://developers.cloudflare.com/workers/platform/limits/",
        logo: <Workers />,
        metrics: [
          {
            name: "Requests",
            type: "price",
            free: "100,000 / day",
            paid: "10,000,000 / month",
            additional: "$0.30 / 1,000,000 requests",
          },
          {
            name: "CPU time",
            type: "price",
            link: "https://developers.cloudflare.com/workers/platform/limits/#cpu-time",
            free: "-",
            paid: "30,000,000 ms / month",
            additional: "$0.02 / 1,000,000 ms",
          },
          {
            name: "CPU time limit",
            free: "10 ms / invocation",
            paid: "30 s / invocation",
          },
          {
            name: "Subrequests",
            link: "https://developers.cloudflare.com/workers/platform/limits/#subrequests",
            description:
              "This includes requests to internet using `fetch`, requests to Cloudflare services like R2, KV, D1 or requests to Cache API",
            free: "50 / request",
            paid: "1,000 / request",
          },
          {
            name: "Simultaneous outgoing requests/ connections",
            link: "https://developers.cloudflare.com/workers/platform/limits/#simultaneous-open-connections",
            free: "6",
          },
          {
            name: "Environment variables",
            link: "https://developers.cloudflare.com/workers/platform/limits/#environment-variables",
            free: "64 / Worker",
            paid: "128 / Worker",
          },
          {
            name: "Environment variable size",
            free: "5 KB",
          },
          {
            name: "Worker size",
            link: "https://developers.cloudflare.com/workers/platform/limits/#worker-size",
            free: "1 MB",
            paid: "10 MB",
          },
          {
            name: "Worker startup time",
            link: "https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time",
            free: "400 ms",
          },
          {
            name: "Workers per account",
            free: "100",
            paid: "500",
          },
          {
            name: "Worker memory",
            link: "https://developers.cloudflare.com/workers/platform/limits/#memory",
            free: "128 MB",
          },
          {
            name: "Cache API maximum object size",
            link: "https://developers.cloudflare.com/workers/platform/limits/#cache-api-limits",
            free: "512 MB",
          },
          {
            name: "Cache API calls per request",
            link: "https://developers.cloudflare.com/workers/platform/limits/#cache-api-limits",
            description:
              "This limits are the same and count towards Subrequests limit",
            free: "50",
            paid: "1000",
          },
          {
            name: "Total size of the logs",
            link: "https://developers.cloudflare.com/workers/platform/limits/#log-size",
            description:
              "This includes size of `console.log` statements, exceptions, request metadata and headers",
            free: "128 KB",
          },
        ],
      },
      {
        name: "Cron Triggers",
        link: "https://developers.cloudflare.com/workers/configuration/cron-triggers/",
        logo: <CronTriggers />,
        metrics: [
          {
            name: "Number of Cron Triggers per account",
            free: "5",
            paid: "250",
          },
          {
            name: "CPU time",
            free: "10 ms",
            paid: "15 min",
          },
          {
            name: "Duration",
            link: "https://developers.cloudflare.com/workers/platform/limits/#duration",
            free: "-",
            paid: "15 min",
          },
        ],
      },
      {
        name: "Durable Objects",
        link: "https://developers.cloudflare.com/durable-objects/",
        pricing:
          "https://developers.cloudflare.com/durable-objects/platform/pricing/",
        limits:
          "https://developers.cloudflare.com/durable-objects/platform/limits/",
        logo: <DurableObjects />,
        badge: "paid",
        metrics: [
          {
            name: "Requests",
            type: "price",
            description:
              "This includes HTTP requests, RPC sessions, WebSocket messages, and alarm invocations",
            free: "-",
            paid: "1,000,000 / month",
            additional: "$0.15 / 1,000,000 requests",
          },
          {
            name: "Duration",
            type: "price",
            free: "-",
            paid: "400,000 GB-s",
            additional: "$12.50 / 1,000,000 GB-s",
          },
          {
            name: "Memory size allocation",
            description:
              "Each Durable Object allocate 128 MB of memory to run regardless of actual usage",
            free: "-",
            paid: "128 MB",
          },
          {
            name: "Durable Object namespaces per account",
            free: "-",
            paid: "500 (identical to Workers limit)",
          },
          {
            name: "Storage per account",
            link: "https://developers.cloudflare.com/durable-objects/platform/limits/#how-many-durable-objects-can-i-create",
            free: "-",
            paid: "50 GB (can be raised)",
          },
          {
            name: "Key size",
            free: "-",
            paid: "2 KiB (2,048 bytes)",
          },
          {
            name: "Value size",
            free: "-",
            paid: "128 KiB (131,072 bytes)",
          },
          {
            name: "WebSocket incoming message size",
            free: "-",
            paid: "1 MiB",
          },
          {
            name: "WebSocket incoming messages",
            description: "Incoming WebSocket protocol pings are not billed",
            free: "-",
            paid: "20 messages billed as 1 request",
          },
          {
            name: "WebSocket outgoing messages",
            free: "-",
            paid: "Unlimited",
          },
          {
            name: "CPU time per request",
            link: "https://developers.cloudflare.com/durable-objects/platform/limits/",
            description:
              "Each incoming HTTP request or WebSocket message resets the remaining available CPU time to 30 seconds",
            free: "-",
            paid: "30 s",
          },
          {
            name: "Transactional Storage API Reads",
            type: "price",
            link: "https://developers.cloudflare.com/durable-objects/platform/pricing/#transactional-storage-api-billing",
            // description:
            //   "1 request unit is 4 KB of data, so i.e. reading 9 KB of data in 1 request will consume 3 request units",
            free: "-",
            paid: "1,000,000 request units",
            additional: "$0.20 / 1,000,000 request units",
          },
          {
            name: "Transactional Storage API Writes",
            type: "price",
            link: "https://developers.cloudflare.com/durable-objects/platform/pricing/#transactional-storage-api-billing",
            // description:
            //   "1 request unit is 4 KB of data, so i.e. writing 9 KB of data in 1 request will consume 3 request units",
            free: "-",
            paid: "1,000,000 request units",
            additional: "$1 / 1,000,000 request units",
          },
          {
            name: "Transactional Storage API Deletes",
            type: "price",
            link: "https://developers.cloudflare.com/durable-objects/platform/pricing/#transactional-storage-api-billing",
            // description: 'Delete requests does not use request units, so i.e. deleting 100 KB of data in 1 request will be billed as 1 request',
            free: "-",
            paid: "1,000,000 requests",
            additional: "$1 / 1,000,000 requests",
          },
          {
            name: "Transactional Storage API Stored data",
            type: "price",
            link: "https://developers.cloudflare.com/durable-objects/platform/pricing/#transactional-storage-api-billing",
            free: "-",
            paid: "1 GB",
            additional: "$0.20 / 1 GB-month",
          },
          {
            name: "Request unit size",
            link: "https://developers.cloudflare.com/durable-objects/platform/pricing/#transactional-storage-api-billing",
            description:
              "As example, reading or writing 9 KB of data in 1 request will consume 3 request units",
            free: "-",
            paid: "4 KB",
          },
        ],
      },
      {
        name: "Pages",
        link: "https://developers.cloudflare.com/pages/",
        pricing: "https://pages.cloudflare.com/#pricing",
        limits: "https://developers.cloudflare.com/pages/platform/limits/",
        logo: <Pages />,
        metrics: [
          {
            name: "Static assets requests",
            type: "price",
            link: "https://developers.cloudflare.com/pages/functions/pricing/#static-asset-requests",
            free: "Unlimited",
          },
          {
            name: "Pages Functions requests",
            type: "price",
            free: "Billed as Workers requests",
          },
          {
            name: "Builds per account",
            type: "price",
            link: "https://pages.cloudflare.com/#pricing",
            free: "500 / month on Free plan\n5,000 / month on Pro plan\n20,000 / month on Business plan",
          },
          {
            name: "Concurrent builds per account",
            type: "price",
            link: "https://pages.cloudflare.com/#pricing",
            free: "1 on Free plan\n5 on Pro plan\n20 on Business plan",
          },
          {
            name: "Custom domains per project",
            type: "price",
            link: "https://pages.cloudflare.com/#pricing",
            free: "100 on Free plan\n250 on Pro plan\n500 on Business plan",
          },
          {
            name: "Build timeout",
            free: "20 min",
          },
          {
            name: "Preview deployments",
            link: "https://developers.cloudflare.com/pages/configuration/preview-deployments/",
            free: "Unlimited",
          },
          {
            name: "Pages projects per account",
            link: "https://developers.cloudflare.com/pages/platform/limits/#projects",
            free: "Soft limit of 100 projects",
          },
          {
            name: "Files per project",
            link: "https://developers.cloudflare.com/pages/platform/limits/#files",
            free: "20,000",
          },
          {
            name: "Maximum file size",
            link: "https://developers.cloudflare.com/pages/platform/limits/#file-size",
            free: "25 MiB",
          },
          {
            name: "Headers",
            link: "https://developers.cloudflare.com/pages/configuration/headers/",
            description: "Custom headers to attach to static assets",
            free: "100 header rules",
          },
          {
            name: "Redirects",
            link: "https://developers.cloudflare.com/pages/configuration/redirects/",
            description: "Custom redirects for static projects",
            free: "2,000 static redirects\n100 dynamic redirects",
          },
        ],
      },
    ],
  },
  {
    name: "Storage",
    products: [
      {
        name: "Workers KV",
        link: "https://developers.cloudflare.com/kv/",
        pricing: "https://developers.cloudflare.com/kv/platform/pricing/",
        limits: "https://developers.cloudflare.com/kv/platform/limits/",
        logo: <KV />,
        metrics: [
          {
            name: "Read request",
            type: "price",
            free: "100,000 / day",
            paid: "10,000,000 / month",
            additional: "$0.50 / 1,000,000 requests",
          },
          {
            name: "Write request",
            type: "price",
            free: "1,000 / day",
            paid: "1,000,000 / month",
            additional: "$5 / 1,000,000 requests",
          },
          {
            name: "Delete request",
            type: "price",
            free: "1,000 / day",
            paid: "1,000,000 / month",
            additional: "$5 / 1,000,000 requests",
          },
          {
            name: "List request",
            type: "price",
            free: "1,000 / day",
            paid: "1,000,000 / month",
            additional: "$5 / 1,000,000 requests",
          },
          {
            name: "Stored data",
            type: "price",
            free: "1 GB",
            additional: "$0.50 / 1 GB-month",
          },
          {
            name: "Writes to the same key",
            free: "1 / second",
          },
          {
            name: "Operations per Worker invocation",
            description:
              "Must be wrong, because this regulated by Workers Subrequests limit",
            free: "1000",
          },
          {
            name: "KV namespaces per account",
            free: "200",
          },
          {
            name: "Key size",
            free: "512 bytes",
          },
          {
            name: "Key metadata size",
            free: "1024 bytes",
          },
          {
            name: "Value size",
            free: "25 MiB",
          },
        ],
      },
      {
        name: "R2",
        link: "https://developers.cloudflare.com/r2/",
        pricing: "https://developers.cloudflare.com/r2/pricing/",
        limits: "https://developers.cloudflare.com/r2/platform/limits/",
        logo: <R2 />,
        metrics: [
          {
            name: "Standard storage",
            type: "price",
            free: "10 GB / month",
            additional: "$0.015 / 1 GB-month",
          },
          {
            name: "Standard storage Class A Operations",
            type: "price",
            link: "https://developers.cloudflare.com/r2/pricing/#class-a-operations",
            description: "Operation to mutate data, such as writes",
            free: "1,000,000 requests / month",
            additional: "$4.50 / 1,000,000 requests",
          },
          {
            name: "Standard storage Class B Operations",
            type: "price",
            link: "https://developers.cloudflare.com/r2/pricing/#class-b-operations",
            description: "Opeations to read existing data",
            free: "10,000,000 requests / month",
            additional: "$0.36 / 1,000,000 requests",
          },
          {
            name: "Infrequent Access storage",
            type: "price",
            link: "https://developers.cloudflare.com/r2/buckets/storage-classes/#infrequent-access-storage",
            free: "-",
            additional: "$0.010 / 1 GB-month",
          },
          {
            name: "Infrequent Access storage Class A Operations",
            type: "price",
            link: "https://developers.cloudflare.com/r2/pricing/#class-a-operations",
            description: "Operation to mutate data, such as writes",
            free: "-",
            additional: "$9 / 1,000,000 requests",
          },
          {
            name: "Infrequent Access storage Class B Operations",
            type: "price",
            link: "https://developers.cloudflare.com/r2/pricing/#class-b-operations",
            description: "Opeations to read existing data",
            free: "-",
            additional: "$0.90 / 1,000,000 requests",
          },
          {
            name: "Infrequent Access storage Data retrieval fee",
            type: "price",
            link: "https://developers.cloudflare.com/r2/pricing/#data-retrieval",
            free: "-",
            additional: "$0.01 / 1 GB",
          },
          {
            name: "Infrequent Access storage Minimum storage duration",
            type: "price",
            link: "https://developers.cloudflare.com/r2/pricing/#minimum-storage-duration",
            free: "-",
            additional: "30 days",
          },
          {
            name: "Ergees",
            free: "Free",
          },
          {
            name: "R2 buckets per account",
            free: "1,000",
          },
          {
            name: "Object key size",
            free: "1,024 bytes",
          },
          {
            name: "Object metadata size",
            free: "8,192 bytes",
          },
          {
            name: "Object size",
            free: "4,995 TiB",
          },
          {
            name: "Maximum upload size in 1 request",
            free: "4.995 GiB",
          },
          {
            name: "Maximum upload parts",
            free: "10,000",
          },
          {
            name: "Custom domains per bucket",
            free: "50",
          },
        ],
      },
      {
        name: "D1",
        link: "https://developers.cloudflare.com/d1/",
        pricing: "https://developers.cloudflare.com/d1/platform/pricing/",
        limits: "https://developers.cloudflare.com/d1/platform/limits/",
        logo: <D1 />,
        metrics: [
          {
            name: "Rows reads",
            type: "price",
            free: "5,000,000 / day",
            paid: "25 billion / month",
            additional: "$0.001 / 1,000,000 rows",
          },
          {
            name: "Rows writes",
            type: "price",
            free: "100,000 / day",
            paid: "50,000,000 / month",
            additional: "$1 / 1,000,000 rows",
          },
          {
            name: "Storage per account",
            type: "price",
            free: "5 GB",
            additional: "$0.75 / 1 GB-month",
          },
          {
            name: "D1 databases per account",
            free: "10",
            paid: "50,000",
          },
          {
            name: "Maximum database size",
            free: "500 MB",
            paid: "10 GB",
          },
          {
            name: "Maximum storage per account",
            free: "5 GB",
            paid: "250 GB (can be increased)",
          },
          {
            name: "Time Travel duration",
            link: "https://developers.cloudflare.com/d1/reference/time-travel/",
            free: "7 days",
            paid: "30 days",
          },
          {
            name: "Maximum Time Travel restore operations",
            free: "10 restores per 10 minute per database",
          },
          {
            name: "Maximum number of columns per table",
            free: "100",
          },
          {
            name: "Maximum table row size",
            free: "1 MB",
          },
          {
            name: "Maximum SQL statement length",
            free: "100 KB",
          },
          {
            name: "Maximum bound parameters per query",
            free: "100",
          },
          {
            name: "Maximum arguments per SQL function",
            free: "32",
          },
          {
            name: "Maximum bytes in a LIKE or GLOB pattern",
            free: "50 bytes",
          },
          {
            name: "Maximum bindings per Worker script",
            free: "Approximately 5,000",
          },
          {
            name: "Maximum SQL query duration",
            free: "30 s",
          },
        ],
      },
      {
        name: "Queues",
        link: "https://developers.cloudflare.com/queues/",
        pricing: "https://developers.cloudflare.com/queues/platform/pricing/",
        limits: "https://developers.cloudflare.com/queues/platform/limits/",
        logo: <Queues />,
        badge: "paid",
        metrics: [
          {
            name: "Standard operations",
            type: "price",
            free: "-",
            paid: "1,000,000 operations / month",
            additional: "$0.40 / 1,000,000 operations",
          },
          {
            name: "Operation size",
            link: "https://developers.cloudflare.com/queues/platform/pricing/",
            description:
              "As example, read, write or delete action on 65 KB message will counts as 2 operations",
            free: "-",
            paid: "64 KB",
          },
          {
            name: "Queues per account",
            free: "-",
            paid: "10,000 (while in beta)",
          },
          {
            name: "Message size",
            free: "-",
            paid: "128 KB (including up to 100 bytes of internal metadata)",
          },
          {
            name: "Message retries",
            free: "-",
            paid: "100",
          },
          {
            name: "Maximum consumer batch size",
            free: "-",
            paid: "100 messages (while in beta)",
          },
          {
            name: "Maximum messages per `sendBatch` call",
            free: "-",
            paid: "100 (or 256KB in total)",
          },
          {
            name: "Batch wait time",
            free: "-",
            paid: "60 s",
          },
          {
            name: "Per-queue message throughput",
            free: "-",
            paid: "400 messages / second (while in beta)",
          },
          {
            name: "Message retention period",
            free: "-",
            paid: "4 days (96 hours)",
          },
          {
            name: "Per-queue backlog size",
            free: "-",
            paid: "25 GB",
          },
          {
            name: "Concurrent consumer invocations",
            free: "-",
            paid: "20 (push-based only)",
          },
          {
            name: "Duration of consumer invocation",
            link: "https://developers.cloudflare.com/workers/platform/limits/#duration",
            free: "-",
            paid: "15 min",
          },
          {
            name: "`visibilityTimeout` (pull-based queues)",
            free: "-",
            paid: "12 hours",
          },
          {
            name: "`delaySeconds` (when sending or retrying)",
            free: "-",
            paid: "12 hours",
          },
          {
            name: "Requests to the Queues API",
            link: "https://developers.cloudflare.com/fundamentals/api/reference/limits/",
            free: "-",
            paid: "1,200 requests / 5 min",
          },
        ],
      },
      {
        name: "Hyperdrive",
        link: "https://developers.cloudflare.com/hyperdrive/",
        pricing:
          "https://developers.cloudflare.com/hyperdrive/platform/pricing/",
        limits: "https://developers.cloudflare.com/hyperdrive/platform/limits/",
        logo: <Hyperdrive />,
        badge: "paid",
        metrics: [
          {
            name: "Usage of Hyperdrive",
            type: "price",
            free: "-",
            paid: "Free",
          },
          {
            name: "Maximum configured databases",
            free: "-",
            paid: "25 / account",
          },
          {
            name: "Initial connection timeout",
            free: "-",
            paid: "15 s",
          },
          {
            name: "Idle connection timeout",
            free: "-",
            paid: "10 min",
          },
          {
            name: "Maximum cached query response size",
            free: "-",
            paid: "50 MB",
          },
          {
            name: "Maximum query duration",
            free: "-",
            paid: "60 s",
          },
          {
            name: "Maximum username & database name length",
            free: "-",
            paid: "63 bytes",
          },
          {
            name: "Maximum origin database connections per region",
            free: "-",
            paid: "10 - 20",
          },
          {
            name: "Maximum potential origin database connections",
            free: "-",
            paid: "Approximately 80 - 100",
          },
        ],
      },
      {
        name: "Workers Analytics Engine",
        link: "https://developers.cloudflare.com/analytics/analytics-engine/",
        pricing:
          "https://developers.cloudflare.com/analytics/analytics-engine/pricing/",
        limits:
          "https://developers.cloudflare.com/analytics/analytics-engine/limits/",
        logo: <AnalyticsEngine />,
        badge: "free-beta",
        metrics: [
          {
            name: "Data points written",
            type: "price",
            free: "100,000 / day",
            paid: "10,000,000 / month",
            additional: "$0.25 / 1,000,000 data points",
          },
          {
            name: "Read queries",
            type: "price",
            free: "10,000 / day",
            paid: "1,000,000 / month",
            additional: "$1 / 1,000,000 queries",
          },
          {
            name: "Data retention",
            free: "3 month",
          },
          {
            name: "Payload limit per 1 data point",
            free: "12 blobs, 12 doubles and 1 index",
          },
          {
            name: "Maximum size of all blobs in data point",
            free: "5,120 bytes",
          },
          {
            name: "Maximum index size",
            free: "96 bytes",
          },
          {
            name: "Maximum data points written",
            free: "25 / Worker invocation",
          },
        ],
      },
    ],
  },
  {
    name: "Observability",
    products: [
      {
        name: "Workers Logpush",
        link: "https://developers.cloudflare.com/workers/observability/logging/logpush/",
        pricing:
          "https://developers.cloudflare.com/workers/platform/pricing/#workers-trace-events-logpush",
        limits:
          "https://developers.cloudflare.com/workers/observability/logging/logpush/#limits",
        logo: <Logpush />,
        badge: "paid",
        metrics: [
          {
            name: "Requests",
            type: "price",
            free: "-",
            paid: "10,000,000 / month",
            additional: "$0.05 / 1,000,000 requests",
          },
          {
            name: "Message size",
            free: "-",
            paid: "2,056 / log line",
          },
          {
            name: "Array limit",
            free: "-",
            paid: "20 elements",
          },
          {
            name: "Log message array",
            free: "-",
            paid: "A nested array with a limit of 20 elements",
          },
        ],
      },
      {
        name: "Tail Workers",
        link: "https://developers.cloudflare.com/workers/observability/logging/tail-workers/",
        logo: <Workers />,
        badge: "paid",
        metrics: [
          {
            name: "CPU time",
            type: "price",
            free: "-",
            paid: "Billed as regular Workers",
          },
          {
            name: "Requests",
            type: "price",
            free: "-",
            paid: "Not billed for requests",
          },
        ],
      },
    ],
  },
  {
    name: "AI",
    products: [
      {
        name: "Workers AI",
        link: "https://developers.cloudflare.com/workers-ai/",
        pricing:
          "https://developers.cloudflare.com/workers-ai/platform/pricing/",
        limits: "https://developers.cloudflare.com/workers-ai/platform/limits/",
        logo: <WorkersAI />,
        metrics: [
          {
            name: "Usage of non-beta models on Workers AI",
            link: "https://developers.cloudflare.com/workers-ai/platform/pricing/#non-beta-models",
            type: "price",
            free: "10,000 Neurons / day",
            additional: "$0.011 / 1,000 Neurons",
          },
          {
            name: "Usage of beta models on Workers AI",
            link: "https://developers.cloudflare.com/workers-ai/models/",
            type: "price",
            free: "Unlimited",
          },
          {
            name: "Price example of Speech Recognition",
            link: "https://developers.cloudflare.com/workers-ai/platform/pricing/#automatic-speech-recognition",
            free: "-",
            additional: "whisper: $0.0022 / 1 min of audio",
          },
          {
            name: "Price example of Image Classification",
            link: "https://developers.cloudflare.com/workers-ai/platform/pricing/#image-classification",
            free: "-",
            additional: "Resnet-50: $0.0000025 / 1 image",
          },
          {
            name: "Price example of Text Classification",
            link: "https://developers.cloudflare.com/workers-ai/platform/pricing/#text-classification",
            free: "-",
            additional: "distilbert-sst-2-int8: $0.33 / 1M input tokens",
          },
          {
            name: "Price example of Text Embeddings",
            link: "https://developers.cloudflare.com/workers-ai/platform/pricing/#text-embeddings",
            free: "-",
            additional:
              "bge-small-en-v1.5: $0.003 / 1M input tokens\nbge-base-en-v1.5: $0.014 / 1M input tokens\nbge-large-en-v1.5: $0.022 / 1M input tokens",
          },
          {
            name: "Price example of Text Generation",
            link: "https://developers.cloudflare.com/workers-ai/platform/pricing/#text-generation",
            free: "-",
            additional:
              "llama-2-7b-chat-fp16: $0.56 / 1M input tokens, $6.66 / 1M output tokens\nllama-2-7b-chat-int8: $0.16 / 1M input tokens, $0.24 / 1M output tokens\nmistral-7b-instruct: $0.11 / 1M input tokens, $0.19 / 1M output tokens",
          },
          {
            name: "Price example of Translation",
            link: "https://developers.cloudflare.com/workers-ai/platform/pricing/#translation",
            free: "-",
            additional:
              "m2m100-1.2b: $0.13 / 1M input tokens, $0.70 / 1M output tokens",
          },
        ],
      },
      {
        name: "Vectorize",
        link: "https://developers.cloudflare.com/vectorize/",
        pricing:
          "https://developers.cloudflare.com/vectorize/platform/pricing/",
        limits: "https://developers.cloudflare.com/vectorize/platform/limits/",
        logo: <Vectorize />,
        badge: "free-beta",
        metrics: [
          {
            name: "Stored vector dimensions",
            type: "price",
            free: "5,000,000",
            paid: "10,000,000",
            additional: "$0.040 / 1,000,000 stored dimensions",
          },
          {
            name: "Queried vector dimensions",
            type: "price",
            free: "30,000,000 / month",
            paid: "50,000,000 / month",
            additional: "$0.040 / 1,000,000 queried dimensions",
          },
          {
            name: "Indexes per account",
            free: "100 (while in beta)",
          },
          {
            name: "Maximum dimensions per vector",
            free: "1536 (while in beta)",
          },
          {
            name: "Maximum vector ID length",
            free: "64 bytes",
          },
          {
            name: "Metadata per vector",
            free: "10 KiB (while in beta)",
          },
          {
            name: "Maximum returned results (`topK`)",
            free: "20 (while in beta)",
          },
          {
            name: "Maximum upsert batch size",
            free: "1,000 from Workers / 5,000 from HTTP API (while in beta)",
          },
          {
            name: "Maximum index & namespace names length",
            free: "63 bytes",
          },
          {
            name: "Maximum vectors per index",
            free: "200,000 (while in beta)",
          },
          {
            name: "Maximum namespaces per index",
            free: "1,000 (while in beta)",
          },
        ],
      },
      {
        name: "AI Gateway",
        link: "https://developers.cloudflare.com/ai-gateway/",
        pricing: "https://developers.cloudflare.com/ai-gateway/pricing/",
        logo: <AIGateway />,
        metrics: [
          {
            name: "Usage of AI Gateway",
            type: "price",
            free: "Free",
          },
        ],
      },
    ],
  },
  {
    name: "Media",
    products: [
      {
        name: "Images",
        link: "https://developers.cloudflare.com/images/",
        pricing: "https://developers.cloudflare.com/images/pricing/",
        limits:
          "https://developers.cloudflare.com/images/reference/troubleshooting/#limits",
        logo: <Images />,
        badge: "addon",
        metrics: [
          {
            name: "Images stored",
            type: "price",
            link: "https://developers.cloudflare.com/images/pricing/#images-stored",
            description:
              "This is price for images stored within Cloudflare Images. This is not required to use Images product",
            free: "$5 / 100,000 original images (pre-paid plan)",
          },
          {
            name: "Images delivered",
            link: "https://developers.cloudflare.com/images/pricing/#images-delivered",
            type: "price",
            description:
              "This is price for delivered images that stored within Cloudflare Images. This is not required to use Images product",
            free: "$1 / 100,000 images stored in Images",
          },
          {
            name: "Images transformed",
            type: "price",
            link: "https://developers.cloudflare.com/images/pricing/#images-transformed",
            description:
              "Unique transformation is a request to transform an original image with a combination of flags, exluding `format` flag",
            free: "$0.50 / 1,000 unique transformations / month",
          },
          {
            name: "Maximum image size",
            link: "https://developers.cloudflare.com/images/reference/troubleshooting/#limits",
            free: "100 megapixels\nGIF/WebP animations up to 50 MP total (sum of all frames)",
          },
          {
            name: "Maximum file size",
            free: "100 MB",
          },
          {
            name: "Generate AVIF format images longest side limit",
            link: "https://developers.cloudflare.com/images/transform-images/#limits-per-format",
            free: "1,200 pixels & 1,600 when `format=avif` explicitly used\n640 pixels when system is overloaded",
          },
          {
            name: "Generate WebP format images longest side limit",
            link: "https://developers.cloudflare.com/images/transform-images/#limits-per-format",
            free: "2,560 pixels for lossy & 1,920 for lossless when system is overloaded",
          },
          {
            name: "Generate other format images longest side limit",
            link: "https://developers.cloudflare.com/images/transform-images/#limits-per-format",
            free: "12,000 pixels",
          },
        ],
      },
      {
        name: "Stream",
        link: "https://developers.cloudflare.com/stream/",
        pricing: "https://www.cloudflare.com/plans/",
        logo: <Stream />,
        badge: "addon",
        metrics: [
          {
            name: "Video stored",
            type: "price",
            link: "https://community.cloudflare.com/t/calculation-of-streaming-cost/533578/4",
            free: "$5 / 1,000 min / month",
          },
          {
            name: "Video delivered",
            type: "price",
            link: "https://community.cloudflare.com/t/calculation-of-streaming-cost/533578/4",
            free: "$1 / 1,000 min / month",
          },
          {
            name: "Video upload size",
            link: "https://developers.cloudflare.com/stream/reference/faq/#is-there-a-limit-to-the-amount-of-videos-i-can-upload",
            free: "30 GB",
          },
          {
            name: "Concurrent uploading videos to Stream",
            link: "https://developers.cloudflare.com/stream/reference/faq/#is-there-a-limit-to-the-amount-of-videos-i-can-upload",
            free: "120 (can be raised)",
          },
        ],
      },
      {
        name: "Calls",
        link: "https://developers.cloudflare.com/calls/",
        pricing:
          "https://developers.cloudflare.com/calls/turn/faq/#what-is-cloudflare-calls-turn-pricing-how-exactly-is-it-calculated",
        logo: <Calls />,
        metrics: [
          {
            name: "Data sent from Cloudflare TURN server",
            type: "price",
            link: "https://developers.cloudflare.com/calls/turn/faq/#what-is-cloudflare-calls-turn-pricing-how-exactly-is-it-calculated",
            free: "1,000 GB",
            additional: "$0.05 / 1 GB",
          },
        ],
      },
    ],
  },
];
