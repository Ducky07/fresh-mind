import { MobileMenu } from "@/islands/MobileMenu.tsx";

const links = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
  { url: "/blog", name: "Blog" },
  { url: "/contact", name: "Contact" },
];

export function Navigation() {
  return (
    <header class="grid grid-flow-col items-center justify-between bg-zinc-900 p-4 sm:justify-between">
      <div class="flex flex-col items-center text-white sm:flex-row">
        <a href="/">
          <img src="/logo.svg" class="h-16 w-16" alt="Jack's Logo" />
        </a>
        <p class="font-bold sm:ml-4 sm:text-2xl">Jack's Universe</p>
      </div>
      <nav
        class="hidden grid-cols-2 items-center font-medium text-white sm:grid sm:grid-flow-col sm:grid-rows-1"
        f-client-nav={true}
      >
        {links.map((link) => (
          <a class="py-2 hover:text-orange-400 sm:px-6" href={link.url}>
            {link.name}
          </a>
        ))}
      </nav>
      <MobileMenu />
    </header>
  );
}
