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
    date: "15 Sep 2026",
    category: "IA & Création",
    title: "Le rôle de la créativité humaine dans une ère dominée par l’IA",
  },
  {
    id: 2,
    img: blogImg2,
    date: "15 Sep 2026",
    category: "Design Web",
    title: "L’avenir du design web : IA, automatisation et outils no-code",
  },
  {
    id: 3,
    img: blogImg3,
    date: "15 Sep 2026",
    category: "Portfolio",
    title: "L’importance de mettre en avant la croissance dans ses projets",
  },
];

export default function Blog() {
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-[8%] 2xl:px-[14%] py-16 sm:py-20 pt-10">
        <div className="title text-center">
          <h2 className="uppercase text-(--prim) Rubik text-xl">Dernier blog</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl Rajdhani font-semibold my-3">
            Transformer les idées en créations <br className="hidden sm:block" /> uniques et inspirantes
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
                  className="rounded-2xl transition-transform duration-700 ease-out w-full h-auto group-hover:scale-110"
                />
                <div className="absolute top-5 left-3">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 bg-black/90 rounded-full px-3 sm:px-5 py-1">
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
                    En savoir plus <i className="ri-arrow-right-s-line"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
