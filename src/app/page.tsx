import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-gray-800 min-h-screen">
      <Header />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-white">Página Principal</h1>
      </div>
    </main>
  );
}
