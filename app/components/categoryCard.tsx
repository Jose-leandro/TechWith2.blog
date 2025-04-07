// components/CategoryCard.tsx
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
};

export default function CategoryCard({ src, alt, title }: Props) {
  return (
    <div className="text-center">
      <Image src={src} alt={alt} width={150} height={100} className="mx-auto" />
      <h3 className="mt-2 font-medium">{title}</h3>
    </div>
  );
}
