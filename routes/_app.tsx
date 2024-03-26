import { type PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

export default function App({ Component, url }: PageProps) {
  const pathname =
    url.pathname === "/"
      ? "Home"
      : url.pathname.slice(1).charAt(0).toUpperCase() + url.pathname.slice(2);
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Jack Valley's personal website and blog"
        />
        <title>Fresh Mind - {pathname}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="antialiased">
        <Partial name="body">
          <Component />
        </Partial>
      </body>
    </html>
  );
}
