import Header from "./components/Layout/Header";
import { Badge } from "./components/Badge";
import Image from "next/image";
import ThreePhones from "./components/home/ThreePhones";
import { ProjectsList } from "./components/Projects/ProjectList/ProjectList";
import { firstProjects } from "./projects/page";
import { BlogLink } from "./components/BlogLink";

const imagesPhones = [
  {
    src: "/images/other/coiae.png",
    mt: 40,
  },
  {
    src: "/images/other/santJordi.png",
    mt: 0,
  },
  {
    src: "/images/other/gymZ.png",
    mt: 80,
  },
];
const universities = [
  {
    name: "Universitat Autònoma de Barcelona",
    href: "https://www.uab.cat",
  },
  {
    name: "Universidad de Salamanca",
    href: "https://usal.es",
  },
  {
    name: "Linnaeus University",
    href: "https://lnu.se/en/",
  },
];

export default async function Page() {
  const thisYear = new Date().getFullYear();
  const yearSince2018 = thisYear - 2018;
  return (
    <section className="overflow-visible">
      <Header />

      <main className="flex flex-col  w-full flex-1 gap-8 text-neutral-900 dark:text-neutral-50">
        <div className="inline">
          <p className="text-neutral-900 dark:text-neutral-50 inline">
            👋🏼 Hi, I'm a full time tech enthusiast graduated in{" "}
            <strong>Interactive Communication</strong> and currently working at
          </p>
          <Badge href="https://mesalvo.com/en" label="Mesalvo." />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            With +{yearSince2018} years of experience, I have a strong
            background in web development and have worked from small websites to{" "}
            <strong>large-scale web applications</strong>. I started my career
            as graphic designer thanks to my <strong>Arts Bachelor</strong>{" "}
            degree. Then I had the opportunity to attend universities such as:{" "}
          </p>
          <ul className="flex flex-wrap gap-4 flex-col md:flwx-row">
            {universities.map((university) => (
              <li key={university.name}>
                <Badge href={university.href} label={university.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className=" gap-4 grid grid-cols-1 md:grid-cols-2">
          <BlogLink slug="blog/bio" name="My biography and career" />
          <BlogLink
            slug="blog/shouldGoUniversity"
            name="Should you go to university?"
          />
        </div>
        <h2 className="text-3xl font-medium   balance">
          A pixel perfectionist, even though I work with vectors. 🎨👨‍💻
        </h2>
        <p>
          My roots are in arts and design, my passion is in technology and my
          goal is to combine both in digital products that are{" "}
          <strong>beautiful</strong> and <strong>functional</strong>.
        </p>
        <ThreePhones images={imagesPhones} />
        <h2 className="text-3xl font-medium   balance mt-16">
          I'm a <strong>performance</strong> and <strong>accessibility</strong>{" "}
          advocate. 🥑🚀
        </h2>
        <p>
          I'm a big fan of{" "}
          <strong>progressive enhancement and graceful degradation</strong> and
          I always try to make my websites as accessible as possible. Reaching a
          professional level in both SEO and performance is the key for a
          successful digital project.
        </p>
        <Image
          className="rounded-xl object-cover h-full"
          alt="A preview of the performance stats in my technical blog"
          src="/images/other/blog-preview.png"
          width={800}
          height={600}
        />
        <small>My technical blog is a good example of this.</small>
        <h2 className="text-3xl font-medium   balance mt-16">
          I love to create personal projects and experiments. 🧪👨‍🔬
        </h2>

        <div className=" gap-4 grid grid-cols-1 md:grid-cols-2">
          <BlogLink
            slug="blog/whyHaveSideProjects"
            name="Why you should have a side project"
          />
          <BlogLink
            slug="blog/chooseSideProjects"
            name="How to choose a side project"
          />
        </div>
        <ProjectsList projects={firstProjects} />

        <div className=" gap-4 grid grid-cols-1 md:grid-cols-2">
          <BlogLink slug="/projects" name="See all my projects" />
        </div>
      </main>
    </section>
  );
}
