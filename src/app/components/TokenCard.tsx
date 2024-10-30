import { FaTwitter, FaTelegramPlane, FaGlobe } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';

interface TokenCardProps {
  image: string;
  name: string;
  mint: string;
  platform: string;
  comments: number;
  marketCap: string;
  holders: number;
}

export default function TokenCard({
  image,
  name,
  mint,
  platform,
  comments,
  marketCap,
  holders,
}: TokenCardProps) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex justify-between items-center w-full max-w-xl mb-4">
      {/* Esquerda: Imagem e Nome do Token */}
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <div className="flex items-center space-x-2 text-sm">
            <span>{mint}</span>
            <FaTwitter className="text-green-400 hover:text-green-500 transition cursor-pointer" />
            <FaTelegramPlane className="text-green-400 hover:text-green-500 transition cursor-pointer" />
            <FaGlobe className="text-green-400 hover:text-green-500 transition cursor-pointer" />
          </div>
          <span className="text-red-500">{platform}</span>
        </div>
      </div>

      {/* Direita: Botão e Detalhes */}
      <div className="flex flex-col items-end">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
          Buy Now
        </button>
        <div className="flex items-center space-x-2 text-sm mt-2">
          <IoMdChatbubbles />
          <span>{comments}</span>
          <span>MC: {marketCap}</span>
          <span className="text-green-400">HOLDERS: {holders}</span>
        </div>
      </div>
    </div>
  );
}
