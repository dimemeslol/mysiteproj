import PersonalInfo from '../components/About/PersonalInfo';
import Expertise from '../components/About/Expertise';

export default function About() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <PersonalInfo />
      <Expertise />
    </section>
  );
}