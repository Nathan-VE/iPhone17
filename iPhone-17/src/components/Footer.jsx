function Footer() {
  const sections = [
    {
      title: "Comprar e Saber Mais",
      links: [
        "iPhone 17 Pro",
        "iPhone 17 Pro Max",
        "Comparar modelos",
        "Acessórios",
      ],
    },
    {
      title: "Especificações",
      links: ["Ficha técnica", "Câmera", "Bateria", "Display"],
    },
    {
      title: "Suporte",
      links: ["Suporte ao iPhone", "AppleCare+", "iOS 19", "Contato"],
    },
    {
      title: "Apple",
      links: ["Sobre a Apple", "Newsroom", "Privacidade", "Carreiras"],
    },
  ];

  const buttonLinks = ["Politica de Privacidade", "Termos e uso", "Vendas"];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>

              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p>
              Entre em contato comigo pelo email nathansesiesposito@gmail.com 🪪
            </p>
            <div className="flex gap-10 text-sm text-gray-400">
              {buttonLinks.map((link, index) => (
                <a href="#" key={index}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <p className="text-sx text-gray-500 mt-6 text-center">
            Site criado para fins de educaionais, estdo, treino e
            autodesenvolvimento!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
