export type NavItem = {
  label: string;
  href: string;
  icon: "home" | "user" | "grid" | "file" | "award";
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Work", href: "/projects", icon: "grid" },
  { label: "Blog", href: "/blog", icon: "file" },
  { label: "Certificates", href: "/certificates", icon: "award" },
];

export const isNavActive = (href: string, pathname: string): boolean => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
};
