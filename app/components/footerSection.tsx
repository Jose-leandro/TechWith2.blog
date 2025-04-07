// components/FooterSection.tsx
import Link from "next/link";

type Props = {
  title: string;
  items: string[];
};

export default function FooterSection({ title, items }: Props) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
