export default function SkillItem({ name, val }) {
    return (
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>{name}</span>
          <span>{val}%</span>
        </div>
        <div className="h-2 bg-[#0b1220] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-cyan-400"
            style={{ width: `${val}%` }}
          />
        </div>
      </div>
    );
  }