import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-gray-200">
      <Header />
      <main className="container mx-auto flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
}