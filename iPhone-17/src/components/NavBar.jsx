function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7x1 mx-auto px-6 py-4 flex items-center justify-center gap-8">
        <a href="#Design" className="hover:text-gray-300">
          Design
        </a>
        <a href="#Camera" className="hover:text-gray-300">
          Câmera
        </a>
        <a href="#Performance" className="hover:text-gray-300">
          Performance
        </a>
        <a href="#Cores" className="hover:text-gray-300">
          Cores
        </a>

        <button className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer px-6 py-2 rounded-full transition-all duraction-300 hover:scale-105">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
