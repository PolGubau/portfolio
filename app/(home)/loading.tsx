import { Header } from "../components/Layout";
import HomeSkeleton from "../components/home/HomeSkeleton";

export default function Loading() {
  return (
    <section className="overflow-visible">
      <Header />

      <HomeSkeleton />
    </section>
  );
}
