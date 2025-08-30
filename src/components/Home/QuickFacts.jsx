export default function QuickFacts() {
    return (
      <div className="bg-[#11182a] border border-white/10 rounded-xl p-4 shadow-xl">
        <h3 className="text-lg font-semibold mb-3">Быстрые факты</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5"><strong>Город:</strong> Ярославль</div>
          <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5"><strong>Опыт:</strong> 5+ лет</div>
          <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5"><strong>Проектов:</strong> 12</div>
          <div className="p-3 rounded-lg bg-[#1c2438] border border-white/5"><strong>Дней в деле:</strong> 1000+</div>
        </div>
      </div>
    );
  }