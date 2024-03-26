export function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Contact", href: "/" },
  ];
  return (
    <footer class="flex justify-between bg-zinc-900 p-4">
      <a href="/" class="self-center">
        <img src="/logo.svg" class="h-24 w-24" alt="Jack's Logo" />
      </a>
      <div class="grid grid-cols-2 items-center text-left text-base font-medium text-white sm:grid-flow-col sm:grid-rows-1">
        {links.map((link) => (
          <a href={link.href} class="hover:text-orange-300 sm:px-6">
            {link.name}
          </a>
        ))}
      </div>
      <div
        class="flex w-min text-left sm:w-fit sm:text-center"
        aria-hidden="true"
      >
        <p class="my-auto text-xs text-gray-400" aria-hidden="true">
          Jack Valley © 2024
        </p>
      </div>
    </footer>
  );
}
