import HobbyCard from '../components/Hobbies/HobbyCard';

const hobbies = ["Картинг", "Путешествия", "Музыка", "Чтение", "Фотография", "Настолки"];

export default function Hobbies() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {hobbies.map((hobby) => (
        <HobbyCard key={hobby} hobby={hobby} />
      ))}
    </section>
  );
}