import { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      image: "/img/iphone-blue.jpg",
      colorClass: "bg-gray-900",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      image: "/img/iphone-silver.jpg",
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      image: "/img/iphone-orange.jpg",
      colorClass: "bg-orange-500",
    },
  ];

  const moels = [
    {
      name: "Pro",
      screen: "6.3 polegadas",
      storage: "256GB, 512GB, 1T, 2T",
      battery: "29h de video",
      weight: "199g",
    },
    {
      name: "Pro Max",
      screen: "6.9 polegadas",
      storage: "256GB, 512GB, 1T, 2T",
      battery: "33h de video",
      weight: "221g",
    },
  ];

  const [selectColor, setSelectColor] = useState("silver");

  return (
    <section id="Cores" className="bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Escolha a sua cor
          </h2>
          <p className="text-xl text-gray-400">
            Três acabamentos em titânio lindos
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-[500px]">
              <img
                src={colors.find((color) => color.id === selectColor).image}
                alt="iPhone 17"
                className="max-w-full max-h-[600px] mx-auto"
              />
            </div>

            <div className="absolute bottom-5 left-0 right-0 text-center">
              <div className="px-5 py-3 rounded-full backdrop-blur-md bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {colors.find((color) => color.id === selectColor).name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectColor(color.id)}
              className={`relative transition-all duration-300 cursor-pointer`}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 ${
                  color.colorClass
                } ${
                  selectColor === color.id ? "border-white" : "border-gray-700"
                }`}
              ></div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 mt-20">
          {moels.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border-2 border-black/20"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-200">
                {model.name}
              </h3>
              <p className="text-gray-400 mb-4">{model.screen}</p>
              <ul className="space-y-2 text-gray-400">
                <li>{model.storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-6 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer">
            Compre agora á partir de R$ 9.399
          </button>
          <p className="text-gray-400">Ou em 12x de R$ 783,25 sem juros</p>
        </div>
      </div>
    </section>
  );
}
export default Colors;
