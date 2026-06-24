export type NavItem = {
  label: string;
  href: string;
  icon: "home" | "user" | "grid" | "file";
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Work", href: "/projects", icon: "grid" },
  { label: "Blog", href: "/blog", icon: "file" },
];

export const isNavActive = (href: string, pathname: string): boolean => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
};
