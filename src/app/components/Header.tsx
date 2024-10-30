import { FaTwitter, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between border-b border-green-400">
      {/* Logo e Texto */}
      <div className="flex items-center space-x-2">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">LOGO</div>
          <span className="text-green-400 text-sm">Powered by Tech House</span>
        </div>
      </div>

      {/* Ícones e Número Fictício */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🔍</span>
          <span className="text-yellow-400 text-lg">13,859,241 🚀</span>
        </div>

        {/* Botão Get Trending */}
        <button className="flex items-center space-x-2 bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition">
          <span>🔥</span>
          <span className="font-bold">Get Trending</span>
          <span>🔥</span>
        </button>

        {/* Ícones de Redes Sociais */}
        <div className="flex items-center space-x-4">
          <FaTwitter
            className="text-green-400 text-2xl cursor-pointer hover:text-green-500 transition duration-300"
            title="Twitter"
          />
          <FaTelegramPlane
            className="text-green-400 text-2xl cursor-pointer hover:text-green-500 transition duration-300"
            title="Telegram"
          />
          <FaYoutube
            className="text-green-400 text-2xl cursor-pointer hover:text-green-500 transition duration-300"
            title="YouTube"
          />
        </div>
      </div>
    </header>
  );
}
