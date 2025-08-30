export default function Expertise() {
  return (
    <div className="bg-[#11182a] border border-white/10 rounded-xl p-5">
      <h3 className="text-lg font-semibold mb-2">Системный аналитик</h3>
      <p className="text-gray-400 mb-2">Немного текста про экспертизу, стек и подход к работе.</p>
      <ul className="list-disc pl-5 text-gray-300 text-sm">
        <li>Сбор и формализация требований</li>
        <li>Диаграммы (C4, BPMN, UML)</li>
        <li>Взаимодействие с командой и владельцами</li>
      </ul>
    </div>
  );
}