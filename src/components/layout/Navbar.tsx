import { Link } from 'react-router-dom';
import { Menu, Search, Heart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white border-b border-gray-100 uppercase tracking-widest text-[11px] font-medium text-black">
      
      {/* Esquerda: Menu e Busca */}
      <div className="flex flex-1 items-center gap-8">
        <button className="flex items-center gap-2 hover:opacity-50 transition-opacity">
          <Menu size={18} />
          <span className="hidden md:inline">Menu</span>
        </button>
        <button className="flex items-center gap-2 hover:opacity-50 transition-opacity">
          <Search size={18} />
          <span className="hidden md:inline">Buscar</span>
        </button>
      </div>

      {/* Centro: Nome da Loja */}
      <div className="flex-[2] text-center">
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-[0.4em] cursor-pointer">
            TECHHUB
          </h1>
        </Link>
      </div>

      {/* Direita: Links e Ícones */}
      <div className="flex flex-1 items-center justify-end gap-8">
        <Link to="#" className="hidden lg:inline hover:opacity-50 transition-opacity">
          Fale Conosco
        </Link>
        <button className="hover:opacity-50">
          <Heart size={18} />
        </button>
        <button className="hover:opacity-50">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
