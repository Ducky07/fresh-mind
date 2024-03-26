import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="mx-auto bg-zinc-800 text-white">
        <main class="mx-auto flex h-screen max-w-screen-md flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Page not found</h1>
          <p class="my-4">The page you were looking for doesn't exist.</p>
          <a
            href="/"
            class="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Go back home
          </a>
        </main>
      </div>
    </>
  );
}
