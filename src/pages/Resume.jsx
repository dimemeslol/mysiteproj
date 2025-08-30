import Experience from '../components/Resume/Experience';
import Education from '../components/Resume/Education';

export default function Resume() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <Experience />
      <Education />
    </section>
  );
}