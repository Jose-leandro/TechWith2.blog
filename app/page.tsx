import Divider from "./components/divider";
import CategoryCard from "./components/categoryCard";
import Footer from "./components/footer";
import Header from "./components/header";

const categories = [
  { title: "Programming", src: "/programming.jpg", alt: "Programming" },
  { title: "App & Tools Recommendations", src: "/app-e-tools-recommendations.jpg", alt: "App & Tools Recommendations" },
  { title: "Tech Reviews", src: "/tech-reviews.jpg", alt: "Tech Reviews" },
  { title: "Tech News", src: "/tech-news.jpg", alt: "Tech News" },
];


export default function Home() {
  return (
    <>
      <Header />

      <main className="p-6">
        <Divider orientacion="horizontal" width="full" height="1px" />

        <section className="text-center my-10">
          <h1 className="text-8xl font-bold w-full font-garamond">
            Welcome to TechWith2: Your Hub for Technology, Programming, and All
            Things Tech
          </h1>
        </section>

        <section className="flex flex-col md:flex-row gap-6 my-10 items-center">
          <Divider orientacion="vertical" width="1px" height="24" />
          <article className="text-lg">
            <h2 className="text-2xl font-semibold mb-2">About TechWith2</h2>
            <p>
              <span className="font-bold">TechWith2</span> is a
              technology-focused blog dedicated to sharing valuable insights,
              tutorials, and news about{" "}
              <span className="font-bold">
                programming, software development, and the latest trends in the
                tech industry.
              </span>{" "}
              Whether you’re a developer looking to enhance your skills or a
              tech enthusiast eager to stay updated, TechWith2 offers practical
              guides, coding tips, and deep dives into emerging technologies to
              help you stay ahead in the digital world.
            </p>
          </article>
        </section>

        <Divider orientacion="horizontal" width="full" height="1px" />

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

        <Divider orientacion="horizontal" width="full" height="1px" />

        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-2">
            Discover a world of possibilities
          </h2>
          <p className="mb-6 max-w-2xl">
            Explore tutorials, tech trends, and developer insights to boost your
            knowledge and stay ahead in the digital world!
          </p>
          <div className="flex flex-wrap gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
