export default function Home() {
  return (
    <main class="grid bg-zinc-800 text-center">
      <div class="prose mx-auto flex h-screen max-w-screen-md flex-col items-center justify-center sm:prose-lg">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="Jack's universe logo"
        />
        <h1 class="font-semibold text-white">Welcome to my Universe</h1>
      </div>
    </main>
  );
}
