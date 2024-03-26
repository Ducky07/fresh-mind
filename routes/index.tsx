export default function Home() {
  return (
    <div class="mx-auto bg-zinc-800">
      <main class="mx-auto flex h-screen max-w-screen-md flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold text-white">Welcome to Fresh</h1>
        <p class="my-4 text-white">
          Try updating this message in the
          <code class="mx-2 text-white">./routes/index.tsx</code> file, and
          refresh.
        </p>
      </main>
    </div>
  );
}
