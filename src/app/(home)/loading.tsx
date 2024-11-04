import { Header } from "../../components/Layout";
import HomeSkeleton from "../../components/home/home-skeleton";

export default function Loading() {
  return (
    <section className="overflow-visible">
      <Header />

      <HomeSkeleton />
    </section>
  );
}
