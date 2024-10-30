import Header from "./components/Header";
import TokenCard from "./components/TokenCard";
import HomeSection from "./components/HomeSection";
import FAQ from "./components/FAQ";

const tokens = [
  {
    image: "https://via.placeholder.com/50",
    name: "$PHANTOM",
    mint: "CZWMP...PUMP",
    platform: "RAYDIUM",
    comments: 219,
    marketCap: "$82.7k",
    holders: 418,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$SOLANA",
    mint: "XABC...SOL",
    platform: "RAYDIUM",
    comments: 150,
    marketCap: "$500k",
    holders: 1000,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$TCHAPS",
    mint: "XABC...SOL",
    platform: "RAYDIUM",
    comments: 150,
    marketCap: "$520k",
    holders: 1020,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$GRULIS",
    mint: "XABC...SOL",
    platform: "RAYDIUM",
    comments: 150,
    marketCap: "$520k",
    holders: 1020,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$TOKEN",
    mint: "XABC...SOL",
    platform: "RAYDIUM",
    comments: 150,
    marketCap: "$520k",
    holders: 1020,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$PHANTOM",
    mint: "CZWMP...PUMP",
    platform: "RAYDIUM",
    comments: 219,
    marketCap: "$82.7k",
    holders: 418,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$SOLANA",
    mint: "XABC...SOL",
    platform: "RAYDIUM",
    comments: 150,
    marketCap: "$500k",
    holders: 1000,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$TCHAPS",
    mint: "XABC...SOL",
    platform: "RAYDIUM",
    comments: 150,
    marketCap: "$520k",
    holders: 1020,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$GRULIS",
    mint: "XABC...SOL",
    platform: "RAYDIUM",
    comments: 150,
    marketCap: "$520k",
    holders: 1020,
  },
  {
    image: "https://via.placeholder.com/50",
    name: "$TOKEN",
    mint: "XABC...SOL",
    platform: "RAYDIUM",
    comments: 150,
    marketCap: "$520k",
    holders: 1020,
  }
];

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Header />
      <div className="flex items-center justify-center flex-col gap-1 mt-2">
        <HomeSection/>
        <FAQ/>
      </div>
    </main>
  );
}
