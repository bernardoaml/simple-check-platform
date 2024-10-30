export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 border-t border-green-400 flex items-center px-10">
        {/* Logo e Texto Centralizado */}
        <div className="flex justify-center w-screen">

        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">LOGO</div>
          <span className="text-sm text-gray-400">
            © 2024 Tech House. All Rights Reserved.
          </span>
        </div>
        </div>
  
        {/* Botão Contact Us */}
        <button className="bg-green-500 text-black px-6 py-2 rounded-md hover:bg-green-600 transition w-40">
          Contact Us
        </button>
      </footer>
    );
  }
  