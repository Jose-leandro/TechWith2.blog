// components/NavMenu.tsx
import Link from "next/link";

const links = ["About", "Contact", "Subscribe", "My Posts"];

export default function NavMenu() {
  return (
    <nav>
      <ul className="flex gap-6 mt-2">
        {links.map((text, i) => (
          <li key={i}>
            <Link href="#">{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
