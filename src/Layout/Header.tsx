import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const Header = () => {
  return (
    <header className="flex items-center justify-center">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className="text-lg">{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
