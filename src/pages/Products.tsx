export default function Products() {
  return (
    <div className="container mx-auto px-6 py-16 min-h-[60vh] animate-in fade-in">
      <h2 className="text-4xl font-light mb-4">Nossos Produtos</h2>
      <p className="text-gray-500 mb-12">
        Navegue por nossa coleção completa de itens premium.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6].map((prod) => (
          <div key={prod} className="group cursor-pointer border border-gray-100 p-4 transition-all hover:shadow-lg">
            <div className="aspect-[4/5] bg-gray-50 mb-4"></div>
            <div className="p-2">
              <h3 className="text-[13px] font-medium uppercase tracking-wide mb-2">
                Item Premium {prod}
              </h3>
              <p className="text-gray-500 text-[12px] mb-4">
                 Acabamento premium de alta qualidade.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">
                  R$ {(prod * 149.99).toFixed(2)}
                </span>
                <button className="bg-black text-white text-[11px] uppercase tracking-widest px-4 py-2 hover:bg-gray-800 transition-colors">
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
