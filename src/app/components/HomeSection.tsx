import { FaSearch } from "react-icons/fa";
import TokenCard from "./TokenCard"; // Reutilizando o componente TokenCard

const tokenExample = {
  image: "https://via.placeholder.com/50",
  name: "$PHANTOM",
  mint: "CZWMP...PUMP",
  platform: "RAYDIUM",
  comments: 222,
  marketCap: "$33.3k",
  holders: 389,
};

export default function HomeSection() {
  return (
    <section className="bg-gray-900 text-white p-10 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-8"> {/* Ajustamos a largura máxima */}
        {/* Título com foguinhos */}
        <h1 className="text-4xl font-bold flex items-center justify-center space-x-2">
          <span>🔥</span>
          <span>TRY SOL TRENDING</span>
          <span>🔥</span>
        </h1>

        {/* Link de chamada */}
        <p className="text-yellow-400 text-center text-lg cursor-pointer hover:underline">
          👉 Click here to send your token to raydium
        </p>

        {/* Card do Token */}
        <TokenCard {...tokenExample} />

        {/* Título abaixo do Card */}
        <h2 className="text-5xl font-bold text-center">TECHDEX.XYZ</h2>

        {/* VERIFY DEX com ícones de lupa */}
        <h3 className="text-2xl flex items-center justify-center space-x-2">
          <FaSearch />
          <span>VERIFY DEX</span>
          <FaSearch />
        </h3>

        {/* Campo de Pesquisa */}
        <div className="flex space-x-2 w-full flex-col gap-3">
          <input
            type="text"
            placeholder="Solana, Tron, Eth, Base, Polygon, BSC or Blast address"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 transition">
            Check Dex Screener Paid
          </button>
        </div>
      </div>
    </section>
  );
}
