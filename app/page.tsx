import Image from "next/image";
import Divider from "./components/divider";

export default function Home() {
  return (
    <>
      <header>
        <Image src={""} height={0} width={0}></Image>

        <input
          placeholder="What Tech Topic Are You Curious About?"
          className="bg-transparent border-black border"
        />

        <ul className="flex">
          <li>About</li>
          <li>Contact</li>
          <li>Subscribe</li>
          <li>My Posts</li>
        </ul>
      </header>

      <main>
        <Divider orientacion="horizontal" />

        <h1 className="size-96">
          Welcome to TechWith2: Your Hub for Technology, Programming, and All
          Things Tech
        </h1>

        <div className="flex">
          <Divider orientacion="vertical" />

          <h2 className="size-10">
            TechWith2 is a technology-focused blog dedicated to sharing valuable
            insights, tutorials, and news about programming, software
            development, and the latest trends in the tech industry. Whether
            you’re a developer looking to enhance your skills or a tech
            enthusiast eager to stay updated, TechWith2 offers practical guides,
            coding tips, and deep dives into emerging technologies to help you
            stay ahead in the digital world.
          </h2>
        </div>

        <Divider orientacion="horizontal" />

        <div>
          <div className="flex-col">
            <h3 className="size-70">Recent posts</h3>
            <h4>
              Welcome to a world of limitless possibilities, where the journey
              is as exhilarating as the destination, and where every moment is
              an opportunity to make your mark.
            </h4>
          </div>

          <span>
            In The Moment I Don't have Any Post, Because i Am Bulder My Fisrt
            Post
          </span>
        </div>
      </main>
    </>
  );
}
