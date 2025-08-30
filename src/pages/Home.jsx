import HeroSection from '../components/Home/HeroSection';
import QuickFacts from '../components/Home/QuickFacts';

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
      <HeroSection />
      <QuickFacts />
    </section>
  );
}