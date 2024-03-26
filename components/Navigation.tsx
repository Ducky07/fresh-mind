export function Navigation() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div class="grid grid-flow-col items-center bg-zinc-900 p-4 sm:justify-between">
      <header class="flex flex-col items-center text-white sm:flex-row">
        <a href="/">
          <img src="/logo.svg" class="h-16 w-16" alt="Jack's Logo" />
        </a>
        <p class="font-bold sm:ml-4 sm:text-2xl">Jack's Blog</p>
      </header>
      <nav class="grid grid-cols-2 items-center text-left text-base font-medium text-white sm:grid-flow-col sm:grid-rows-1">
        {links.map((link) => (
          <a class="py-2 hover:text-orange-300 sm:px-6" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
