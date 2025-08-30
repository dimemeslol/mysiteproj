export default function ContactInfo() {
  return (
    <div className="bg-[#11182a] border border-white/10 rounded-xl p-5">
      <h2 className="text-2xl font-bold mb-3">Контакты</h2>
      <p className="mb-3">Готов к сотрудничеству и интересным задачам.</p>
      <ul className="text-sm space-y-2">
        <li>Почта: <a href="mailto:hello@example.com" className="text-cyan-300">hello@example.com</a></li>
        <li>Телеграм: <a href="https://t.me/your_handle" target="_blank" className="text-cyan-300">@your_handle</a></li>
      </ul>
    </div>
  );
}