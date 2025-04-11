import { GeoTooltip } from "@/components/GeoTooltip";
import { sortedProjects } from "@/lib/sortedProjects";
import Image from "next/image";
import { BlogLink } from "../../components/BlogLink";
import { Header } from "../../components/Layout/header/header";
import { ProjectsList } from "../../components/Projects/ProjectList/ProjectsList";
import { ThreePhones } from "../../components/home/ThreePhones";
import { LoadingGallery } from "../../components/circularGallery/loading-gallery";
import { lazy, Suspense } from "react";
const CircularGallery = lazy(() => import("@/components/circularGallery/circularGallery"));
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

export default function Page() {
  const firstProjects = sortedProjects.slice(0, 4);
  const thisYear = new Date().getFullYear();
  const yearSince2018 = thisYear - 2018;

  return (
    <section>
      <Header />
      <main className="flex w-full flex-1 flex-col gap-8">
        <article className="flex flex-col gap-8 pb-10">
          <div>
            <p className="inline">
              👋🏼 Hi, I&apos;m a full time tech enthusiast graduated in <strong>Interactive Communication</strong> and
              based in <GeoTooltip />
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              With +{yearSince2018} years of experience, I have a strong background in web development and have worked
              from small websites to <strong>large-scale web applications</strong>.
            </p>
          </div>
          <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
            <BlogLink slug="projects" name="Recent projects" />
            <BlogLink slug="experiments" name="Some cool UI concepts" />
          </div>
        </article>
        <section className="flex flex-col gap-5">
          <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl">
            <p>🎨👨‍💻</p>
            <h2>Pixel perfectionist, even though I work with vectors. </h2>
          </hgroup>

          <p>
            My roots are in arts and design. My passion is in technology and my goal is to combine both in digital
            products that are <strong>beautiful</strong> and <strong>functional</strong>.
          </p>
        </section>
        <ThreePhones images={imagesPhones} />

        <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl">
          <p>🧪🥼</p>
          <h2>I love to create personal projects and experiments.</h2>
        </hgroup>

        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
          <BlogLink slug="blog/whyHaveSideProjects" name="Why you should have a side project" />
          <BlogLink slug="blog/chooseSideProjects" name="How to choose a side project" />
        </div>
        <ProjectsList projects={firstProjects} />

        <BlogLink slug="/projects" name="See all my projects" />

        <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl">
          <p>🥑🚀</p>
          <h2> I&apos;m a performance and accessibility advocate.</h2>
        </hgroup>
        <p>
          I&apos;m a big fan of <strong>progressive enhancement and graceful degradation</strong> and I always try to
          make my websites as accessible as possible. Reaching a professional level in both SEO and performance is the
          key for a successful digital project.
        </p>
        <div className="md:-space-y-40 flex flex-col max-md:gap-6">
          <Image
            className="show-animation rounded-3xl border-4 border-secondary-200 object-cover object-top shadow-lg md:h-[300px] md:scale-75 dark:border-secondary-700"
            alt="A preview of the performance stats in my technical blog"
            title="A preview of the performance stats in my technical blog"
            src="/media/other/example-3.webp"
            width={800}
            height={600}
          />
          <Image
            className="show-animation rounded-3xl border-4 border-secondary-200 object-cover object-top shadow-lg md:scale-90 dark:border-secondary-700"
            alt="A preview of the performance stats in my technical blog"
            title="A preview of the performance stats in my technical blog"
            src="/media/other/example-2.webp"
            width={800}
            height={500}
          />{" "}
          <Image
            className="show-animation rounded-3xl border-4 border-secondary-200 object-cover object-top shadow-lg dark:border-secondary-700"
            alt="A preview of the performance stats in my technical blog"
            title="A preview of the performance stats in my technical blog"
            src="/media/other/example-1.webp"
            width={1000}
            height={500}
          />
        </div>
        <small>My lastest websites are good examples of this.</small>

        {/* <section className="-space-y-12 flex flex-col gap-2">
          <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl">
            <p>📸✨</p>
            <h2>Some photos I like</h2>
          </hgroup>
          <div className="relative h-[550px] w-full">
            <div className="sticky top-0 left-0 w-full">
              <div className="-translate-x-1/2 absolute inset-x-0 top-0 left-1/2 h-[600px] w-screen">
                <Suspense fallback={<LoadingGallery />}>
                  <CircularGallery bend={0.3} textColor="#ffffff" borderRadius={0.05} />
                </Suspense>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </section>
  );
}
