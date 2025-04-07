import Image from "next/image";
import Divider from "./components/divider";
import CategoryCard from "./components/categoryCard";
import FooterSection from "./components/footerSection";
import NavMenu from "./components/navMenu";

const categories = [
  { title: "Web Dev", src: "/images/web-dev.jpg", alt: "Web Development" },
  { title: "AI", src: "/images/ai.jpg", alt: "Artificial Intelligence" },
  { title: "Cloud", src: "/images/cloud.jpg", alt: "Cloud Computing" },
];

export default function Home() {
  return (
    <>
      <header className="p-4 border-b flex justify-around items-center gap-4">
        <Image src="/logo.png" alt="TechWith2 Logo" width={90} height={60} />
        <input
          placeholder="What Tech Topic Are You Curious About?"
          className="bg-transparent border border-black px-4 py-2 w-full max-w-md"
        />
        <NavMenu />
      </header>

      <main className="p-6">
        <Divider orientacion="horizontal" />

        <section className="text-center my-10">
          <h1 className="text-4xl font-bold max-w-4xl mx-auto">
            Welcome to TechWith2: Your Hub for Technology, Programming, and All
            Things Tech
          </h1>
        </section>

        <section className="flex flex-col md:flex-row gap-6 my-10 items-start">
          <Divider orientacion="vertical" />
          <article className="text-lg max-w-3xl">
            <h2 className="text-2xl font-semibold mb-2">About TechWith2</h2>
            <p>
              TechWith2 is a blog focused on tutorials, insights, and trends in
              programming and software development. Perfect for developers and
              tech enthusiasts looking to stay ahead.
            </p>
          </article>
        </section>

        <Divider orientacion="horizontal" />

        <section className="my-10">
          <h3 className="text-3xl font-semibold mb-4">Recent Posts</h3>
          <p className="mb-2">
            Welcome to a world of limitless possibilities, where the journey is
            as exciting as the destination.
          </p>
          <span className="text-gray-500 italic">
            Currently no posts — first post coming soon!
          </span>
        </section>

        <Divider orientacion="horizontal" />

        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-2">
            Discover a world of possibilities
          </h2>
          <p className="mb-6 max-w-2xl">
            Explore tutorials, tech trends, and developer insights to boost your
            knowledge and stay ahead in the digital world!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 p-6 mt-10">
        <Divider orientacion="horizontal" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mt-6">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-2">Stay Ahead in Tech!</h3>
            <p>
              Explore new trends and guides to boost your skills. Dive into our
              articles and grow as a developer!
            </p>
          </div>

          <FooterSection
            title="Resources"
            items={["My Recent Post", "My Best Post"]}
          />
          <FooterSection title="Company" items={["What is TechWith2"]} />
          <FooterSection title="Help" items={["Contact Us"]} />
          <FooterSection title="Social Media" items={["Facebook"]} />
        </div>
      </footer>
    </>
  );
}
