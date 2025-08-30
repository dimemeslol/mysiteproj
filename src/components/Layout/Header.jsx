import { Link, NavLink } from "react-router-dom";

const navItems = [
  ["/", "Главная"],
  ["/about", "Обо мне"],
  ["/resume", "Резюме"],
  ["/skills", "Навыки"],
  ["/hobbies", "Увлечения"],
  ["/contacts", "Контакты"],
];

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur bg-[#11182acc] border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 shadow-lg" />
          Dimemes
        </Link>
        <div className="flex gap-2 flex-wrap">
          {navItems.map(([href, label]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm ${
                  isActive
                    ? "bg-purple-600/20 text-white border border-purple-500/40"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}