export default function PersonalInfo() {
  return (
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
  );
}