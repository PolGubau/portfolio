import Image from "next/image";
import { allProjects } from "contentlayer/generated";
import Header from "../components/Layout/header/header";
import { ProjectsList } from "../components/Projects/ProjectList/project-list";
 import { BlogLink } from "../components/blog-link";
import ThreePhones from "../components/home/three-phones";
import GeoTooltip from "app/components/GeoTooltip";
 
 const imagesPhones = [
  {
    src: "/media/other/coiae.png",
  },
  {
    src: "/media/other/santJordi.png",
  },
  {
    src: "/media/other/gymZ.png",
  },
];
// const universities = [
//   {
//     name: "Autònoma de Barcelona, Spain",
//     href: "https://uab.cat",
//   },
//   {
//     name: "Linnaeus University, Sweden",
//     href: "https://lnu.se/en/",
//   },
//   {
//     name: "Universidad de Salamanca, Spain",
//     href: "https://usal.es",
//   },
// ];
const orderedProjects = allProjects.sort((a, b) => {
  const today = new Date().toISOString().split("T")[0];
  const aEnded =  !a.endedAt ? today : a.endedAt || today 
  const bEnded = !b.endedAt ? today : b.endedAt || today;
  if(!aEnded || !bEnded) return 0;
  if (aEnded < bEnded) return 1;
  if (aEnded > bEnded) return -1;
  return 0;
});
export default function Page() {
  const firstProjects = orderedProjects.slice(0, 4); 
  const thisYear = new Date().getFullYear();
  const yearSince2018 = thisYear - 2018;
  return (
    <section className="overflow-visible">
      <Header />
      <main className="flex flex-col w-full flex-1 gap-8 text-secondary-900 dark:text-secondary-50">
        <div className="inline">
          <p className="text-secondary-900 dark:text-secondary-50 inline">
            👋🏼 Hi, I&apos;m a full time tech enthusiast graduated in{" "}
            <strong>Interactive Communication</strong> and based in {` `}
            <GeoTooltip/></p>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            With +{yearSince2018} years of experience, I have a strong
            background in web development and have worked from small websites to{" "}
            <strong>large-scale web applications</strong>.
</p>            
            {/* I started my career
            as graphic designer thanks to my <strong>Arts Bachelor</strong>{" "}
            degree. Then I had the opportunity to attend universities such as:{" "}
          </p>
          <ul className="flex flex-wrap gap-4 flex-col">
            {universities.map((university) => (
              <li key={university.name}>
                <Badge href={university.href} label={university.name} />
              </li>
            ))}
          </ul> */}
        </div>
        <div className=" gap-4 grid grid-cols-1 md:grid-cols-2">
          <BlogLink slug="blog/bio" name="My biography and career" />
          <BlogLink slug="projects" name="My projects" />
        </div>

        <hgroup className="text-3xl font-medium balance mt-16 flex flex-col gap-5">
          <p>🎨👨‍💻</p>
          <h2>Pixel perfectionist, even though I work with vectors. </h2>
        </hgroup>

        <p>
          My roots are in arts and design. My passion is in technology and my
          goal is to combine both in digital products that are{" "}
          <strong>beautiful</strong> and <strong>functional</strong>.
        </p>
        <ThreePhones images={imagesPhones} />


        <hgroup className="text-3xl font-medium balance mt-16 flex flex-col gap-5">
          <p>🧪🥼</p>
          <h2>I love to create personal projects and experiments.</h2>
        </hgroup>

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

        <BlogLink slug="/projects" name="See all my projects" />

        
        <hgroup className="text-3xl font-medium balance mt-16 flex flex-col gap-5">
          <p>🥑🚀</p>
          <h2> I&apos;m a performance and accessibility advocate.</h2>
        </hgroup>
        <p>
          I&apos;m a big fan of{" "}
          <strong>progressive enhancement and graceful degradation</strong> and
          I always try to make my websites as accessible as possible. Reaching a
          professional level in both SEO and performance is the key for a
          successful digital project.
        </p>
        <Image
          className="rounded-xl object-cover w-auto h-auto show-animation "
          alt="A preview of the performance stats in my technical blog"
          title="A preview of the performance stats in my technical blog"
          src="/media/other/blog-preview.png"
          width={800}
          height={600}
        />
        <small>My technical blog is a good example of this.</small>
      </main>
    </section>
  );
}


 