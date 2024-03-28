import { useState } from "preact/hooks";

const links = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
  { url: "/blog", name: "Blog" },
  { url: "/contact", name: "Contact" },
];

export function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div class="fixed right-5 z-10 text-right sm:hidden">
      <button
        name="navigation"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          class="h-10 w-10"
          fill="none"
          stroke="#fff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {mobileMenuOpen
            ? (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              >
              </path>
            )
            : (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              >
              </path>
            )}
        </svg>
      </button>
      {mobileMenuOpen && (
        <nav class="fixed right-2 flex flex-col rounded-md bg-zinc-900 text-left text-white shadow-lg ring-1 ring-orange-400">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              class="m-2 p-2 text-base font-bold hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
