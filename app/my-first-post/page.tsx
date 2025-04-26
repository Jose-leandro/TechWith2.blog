import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

type PostType = {
    type: string;
    left: string;
};

const TypeOfPost: PostType[] = [
    { type: "Programming", left: "left-12" },
    { type: "JavaScript", left: "left-20" },
    { type: "Language Of Programming", left: "left-28" },
];



export default function MyFirstPost() {
    return (
        <>
            <Header />

            <main>

                <section className="flex justify-around relative h-96">

                    <div>
                        <h1 className="text-4xl font-ibmplex ml-3 w-3/4 absolute top-5 left-7 z-10">Why <span className="font-garamond text-5xl">JavaScript</span> Remains One of the Most <span className="font-garamond text-5xl">Powerful</span> Languages in the World</h1>

                        <p className="mt-1 absolute top-28 left-7 w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure a nihil, fugiat officia mollitia deserunt ipsum? Impedit numquam nesciunt eius ullam magnam minima obcaecati, ad, expedita fugit tempore voluptatum.</p>

                        {TypeOfPost.map((element) => (
                            <span key={element.type} className={`className="bg-black text-white rounded-sm py-2 px-4 mt-1 mx-4 absolute top-30 ${element.left} `}>
                                {element.type}
                            </span>
                        ))}


                    </div>

                    <Image className="z-0 absolute top-5 right-16" src={""} width={400} height={350} alt="" />

                </section>
            </main>
            <Footer />
        </>
    )
}