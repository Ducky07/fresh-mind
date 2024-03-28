import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Fresh Mind - 404</title>
      </Head>
      <main class="grid bg-zinc-800 text-center">
        <div class="prose prose-invert mx-auto flex h-screen max-w-screen-md flex-col items-center justify-center sm:prose-lg">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="Jack's universe logo"
          />
          <h1 class="mb-0">Page not found</h1>
          <p class="my-4">The page you were looking for doesn't exist.</p>
          <a
            href="/"
            class="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-black no-underline shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Go back home
          </a>
        </div>
      </main>
    </>
  );
}
