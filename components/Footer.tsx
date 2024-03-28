export function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <footer class="grid grid-flow-col justify-between bg-zinc-900 p-4">
      <a href="/" class="self-center">
        <img src="/logo.svg" class="h-24 w-24" alt="Jack's Logo" />
      </a>
      <div class="prose prose-invert flex flex-col md:prose-lg sm:flex-row sm:justify-between">
        <div class="grid w-max grid-cols-2 items-center text-left text-white sm:grid-flow-col sm:grid-rows-1">
          {links.map((link) => (
            <a
              href={link.href}
              class="px-4 py-2 no-underline hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div class="flex items-center">
          <a
            target="_blank"
            href="https://github.com/Ducky07?tab=overview&from=2021-12-01&to=2021-12-31"
            class="px-4 sm:px-6"
          >
            <img src="/github.svg" class="size-8" alt="Github" />
          </a>
          <a href="mailto:juuso.laakso@edu.turkuamk.fi" class="px-4 md:px-6">
            <img src="/mail.svg" class="size-8" alt="Email" />
          </a>
        </div>
      </div>
      <div class="prose prose-sm flex w-12 sm:w-fit" aria-hidden="true">
        <p class="self-center text-gray-400" aria-hidden="true">
          Jack Valley © 2024
        </p>
      </div>
    </footer>
  );
}
