export default function HobbyCard({ hobby }) {
  return (
    <div className="bg-[#11182a] border border-white/10 rounded-xl p-5">
      <h3 className="text-lg font-semibold mb-2">{hobby}</h3>
      <p className="text-gray-400 text-sm">Немного про хобби.</p>
    </div>
  );
}