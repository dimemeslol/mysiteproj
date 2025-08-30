import SkillItem from '../components/Skills/SkillItem';

const data = [
  { name: "HTML", val: 100 },
  { name: "CSS", val: 90 },
  { name: "JavaScript", val: 75 },
  { name: "GIT", val: 75 },
  { name: "SQL", val: 80 },
  { name: "Python", val: 90 },
  { name: "C4", val: 55 },
  { name: "Linux", val: 55 },
];

export default function Skills() {
  return (
    <section className="bg-[#11182a] border border-white/10 rounded-xl p-5">
      <h2 className="text-2xl font-bold mb-3">Навыки</h2>
      <div className="grid gap-4">
        {data.map((s) => (
          <SkillItem key={s.name} name={s.name} val={s.val} />
        ))}
      </div>
    </section>
  );
}