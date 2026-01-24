import Image from "next/image";
import blogImg1 from "@/public/blog-img-1.webp";
import blogImg2 from "@/public/blog-img-2.webp";
import blogImg3 from "@/public/blog-img-3.webp";
import Link from "next/link";
import { title } from "process";

const blogs = [
  {
    id: 1,
    img: blogImg1,
    date: "15 Sep 2025",
    category: "Ai Explore",
    title: "The Role of Human Creativity in an Era Dominated by AI",
  },
  {
    id: 2,
    img: blogImg2,
    date: "15 Sep 2025",
    category: "Ai Explore",
    title: "Future of Web Design: AI, Automation, and No-Code Tools",
  },
  {
    id: 3,
    img: blogImg3,
    date: "15 Sep 2025",
    category: "Ai Explore",
    title: "The Importance of Showcasing Growth in Portfolio Projects",
  },
];

export default function Blog() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-10">
        <div className="title text-center">
          <h2 className="uppercase text-(--prim) Rubik text-xl">Latest Blog</h2>
          <h1 className="text-5xl Rajdhani font-semibold my-3">
            Transforming Ideas into Exceptional <br /> the man can Creations
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="group border border-[#ffffff14] rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="rounded-2xl transition-transform duration-700 ease-out w-full h-full group-hover:scale-110"
                />
                <div className="absolute top-5 left-3">
                  <div className="flex gap-2 bg-black rounded-full px-5 py-1">
                    <div className="flex gap-1 items-center">
                      <i className="ri-calendar-2-line"></i>
                      <span className="Rubik text-sm">{item.date}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <i className="ri-pencil-line"></i>
                      <span className="Rubik text-sm">{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 py-8">
                <h2 className="Rajdhani font-semibold text-2xl mb-5">
                    {item.title}
                </h2>
                <Link href="/" className="Rubik text-(--gray-pere) uppercase inline-flex items-center gap-1 group-hover:text-(--prim) transition-all">
                    Learn More <i className="ri-arrow-right-s-line"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
