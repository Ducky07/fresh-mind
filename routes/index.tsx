export default function Home() {
  return (
    <main class="grid bg-zinc-800 text-center">
      <div class="mx-auto flex h-screen max-w-screen-md flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold text-white">Welcome to my Universe</h1>
      </div>
    </main>
  );
}
