import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-gray-200">
      <header className="sticky top-0 backdrop-blur bg-[#11182acc] border-b border-white/10">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 shadow-lg" />
            Dimemes
          </Link>
          <div className="flex gap-2 flex-wrap">
            {[
              ["/", "Главная"],
              ["/about", "Обо мне"],
              ["/resume", "Резюме"],
              ["/skills", "Навыки"],
              ["/hobbies", "Увлечения"],
              ["/contacts", "Контакты"],
            ].map(([href, label]) => (
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
      <main className="container mx-auto flex-1 p-4">{children}</main>
      <footer className="container mx-auto py-8 text-gray-500 flex justify-between">
        <span>© Dimemes. Все права не защищены :)</span>
        <span>Сделано на React</span>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
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
      <div className="bg-[#11182a] border border-white/10 rounded-xl p-4 shadow-xl">
        <h3 className="text-lg font-semibold mb-3">Быстрые факты</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5"><strong>Город:</strong> Ярославль</div>
          <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5"><strong>Опыт:</strong> 5+ лет</div>
          <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5"><strong>Проектов:</strong> 12</div>
          <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5"><strong>Дней в деле:</strong> 1000+</div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <div className="bg-[#11182a] border border-white/10 rounded-xl p-5">
        <h2 className="text-2xl font-bold mb-3">Обо мне</h2>
        <p className="text-gray-300 mb-3">Я Иванов Дима, системный аналитик и просто хороший парень.</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div><strong>День рождения:</strong> 07 Dec 1999</div>
          <div><strong>Сайт:</strong> dimemes.ru</div>
          <div><strong>Телефон:</strong> +7 XXX XXX XX XX</div>
          <div><strong>Город:</strong> Ярославль, Россия</div>
        </div>
      </div>
      <div className="bg-[#11182a] border border-white/10 rounded-xl p-5">
        <h3 className="text-lg font-semibold mb-2">Системный аналитик</h3>
        <p className="text-gray-400 mb-2">Немного текста про экспертизу, стек и подход к работе.</p>
        <ul className="list-disc pl-5 text-gray-300 text-sm">
          <li>Сбор и формализация требований</li>
          <li>Диаграммы (C4, BPMN, UML)</li>
          <li>Взаимодействие с командой и владельцами</li>
        </ul>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <div className="bg-[#11182a] border border-white/10 rounded-xl p-5">
        <h2 className="text-2xl font-bold mb-3">Опыт</h2>
        <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5 mb-2">
          <strong>Системный аналитик</strong> — Компания X (2022–н.в.)<br />
          <span className="text-gray-400 text-sm">B2B, интеграции, документация</span>
        </div>
        <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5">
          <strong>Бизнес-аналитик</strong> — Компания Y (2020–2022)
        </div>
      </div>
      <div className="bg-[#11182a] border border-white/10 rounded-xl p-5">
        <h2 className="text-2xl font-bold mb-3">Образование</h2>
        <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5 mb-2">
          Бакалавр — Университет Z (2017–2021)
        </div>
        <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5">
          Курсы — Python / SQL / Архитектура
        </div>
      </div>
    </section>
  );
}

function Skills() {
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
  return (
    <section className="bg-[#11182a] border border-white/10 rounded-xl p-5">
      <h2 className="text-2xl font-bold mb-3">Навыки</h2>
      <div className="grid gap-4">
        {data.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{s.name}</span>
              <span>{s.val}%</span>
            </div>
            <div className="h-2 bg-[#0b1220] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-cyan-400"
                style={{ width: `${s.val}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Hobbies() {
  const hobbies = ["Картинг", "Путешествия", "Музыка", "Чтение", "Фотография", "Настолки"];
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {hobbies.map((h) => (
        <div key={h} className="bg-[#11182a] border border-white/10 rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-2">{h}</h3>
          <p className="text-gray-400 text-sm">Немного про хобби.</p>
        </div>
      ))}
    </section>
  );
}

function Contacts() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <div className="bg-[#11182a] border border-white/10 rounded-xl p-5">
        <h2 className="text-2xl font-bold mb-3">Контакты</h2>
        <p className="mb-3">Готов к сотрудничеству и интересным задачам.</p>
        <ul className="text-sm space-y-2">
          <li>Почта: <a href="mailto:hello@example.com" className="text-cyan-300">hello@example.com</a></li>
          <li>Телеграм: <a href="https://t.me/your_handle" target="_blank" className="text-cyan-300">@your_handle</a></li>
        </ul>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<p>Страница не найдена</p>} />
        </Routes>
      </Layout>
    </Router>
  );
}
