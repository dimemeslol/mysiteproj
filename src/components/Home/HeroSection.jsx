import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div>
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-cyan-600/20 border border-cyan-400/30 text-cyan-200 mb-2">
        Профессиональный муж и картингист
      </span>
      <h1 className="text-4xl font-bold mb-3">Дмитрий Иванов</h1>
      <p className="text-gray-300 mb-4">
        Здесь могла бы быть ваша краткая презентация: чем занимаетесь, чем поможете, что любите делать.
      </p>
      <div className="flex gap-3 flex-wrap">
        <Link to="/contacts" className="px-4 py-2 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 text-white">
          Связаться
        </Link>
        <Link to="/about" className="px-4 py-2 rounded-lg bg-gray-800 border border-white/10">
          Подробнее обо мне
        </Link>
      </div>
    </div>
  );
}