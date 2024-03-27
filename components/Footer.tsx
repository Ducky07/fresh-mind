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
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="grid grid-cols-2 items-center p-4 text-left text-base font-medium text-white sm:grid-flow-col sm:grid-rows-1">
          {links.map((link) => (
            <a href={link.href} class="hover:text-orange-300 sm:px-6">
              {link.name}
            </a>
          ))}
        </div>
        <div class="flex items-center justify-evenly py-2">
          <a
            href="https://github.com/Ducky07?tab=overview&from=2021-12-01&to=2021-12-31"
            class="px-2"
          >
            <img src="/github.svg" class="h-8 w-8" alt="Github" />
          </a>
          <a href="mailto:juuso.laakso@edu.turkuamk.fi" class="px-2">
            <img src="/mail.svg" class="h-8 w-8" alt="Email" />
          </a>
        </div>
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
