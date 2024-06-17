const items = {
  "pucpet-gatos-5kg": {
    nome: "PucPet Gatos Castrados 5kg",
    descricao:
      "A ração PucPet Gatos Castrados foi especialmente  formulada para atender às necessidades nutricionais dos gatos castrados,  promovendo uma vida saudável e equilibrada para o seu pet. Após a castração, os gatos  passam por mudanças hormonais que podem afetar seu peso e saúde geral.  Pensando nisso, a PucPet desenvolveu uma ração que ajuda a controlar o  peso, mantendo seu querido amigo felino ativo e em forma.<br><strong>Composição</strong>:<br> Proteína de alta qualidade, cereais, fibras vegetais, ácidos graxos ômega-3 e ômega-6, vitaminas A, D, E, e C, minerais essenciais, e antioxidantes naturais. <br><strong>Embalagem</strong>:<br> Disponível em pacotes de 5Kg, garantindo frescor e qualidade a cada refeição.",
    preco:
      '<p class="price"><span class="purple-text">R$</span>68<span>,92</span></p>',
    tag: "Ração Seca",
    img: "../web/produto-pucpet.png",
  },
  "pucpet-gatos-1kg": {
    nome: "PucPet Gatos Castrados 1kg",
    descricao:
      "A ração PucPet Gatos Castrados foi especialmente  formulada para atender às necessidades nutricionais dos gatos castrados,  promovendo uma vida saudável e equilibrada para o seu pet. Após a castração, os gatos  passam por mudanças hormonais que podem afetar seu peso e saúde geral.  Pensando nisso, a PucPet desenvolveu uma ração que ajuda a controlar o  peso, mantendo seu querido amigo felino ativo e em forma.<br><strong>Composição</strong>:<br> Proteína de alta qualidade, cereais, fibras vegetais, ácidos graxos ômega-3 e ômega-6, vitaminas A, D, E, e C, minerais essenciais, e antioxidantes naturais. <br><strong>Embalagem</strong>:<br> Disponível em pacotes de 1Kg, garantindo frescor e qualidade a cada refeição.",
    preco:
      '<p class="price"><span class="purple-text">R$</span>14<span>,21</span></p>',
    tag: "Ração Seca",
    img: "../web/produto-pucpet.png",
  },
  "puche-gatos-filhotes-250g": {
    nome: "Puche Gatos Filhotes 250g",
    descricao:
      "O sachê Puche Gatos Filhotes é um alimento úmido e completo, desenvolvido especialmente para atender às necessidades nutricionais dos gatos filhotes. Com uma textura suave e saborosa, é perfeito para os gatinhos que estão começando a se alimentar sozinhos. <br><strong>Composição</strong>:<br> Proteína de alta qualidade, cereais, fibras vegetais, ácidos graxos ômega-3 e ômega-6, vitaminas A, D, E, e C, minerais essenciais, e antioxidantes naturais. <br><strong>Embalagem</strong>:<br> Disponível em sachês de 250g, garantindo frescor e qualidade a cada refeição.",
    preco:
      '<p class="price"><span class="purple-text">R$</span>03<span>,55</span></p>',
    tag: "Ração Úmida",
    img: "../web/produto-puche.png",
  },
  "banho-tosa-caes-m": {
    nome: "Banho e Tosa Completo | Cães Porte Médio",
    descricao:
      "Oferecemos uma experiência completa de cuidados para o seu pet, garantindo conforto, higiene e bem-estar. Nossa equipe especializada utiliza produtos de alta qualidade e técnicas avançadas para proporcionar um banho refrescante e uma tosa perfeita, adaptada às necessidades específicas de cada raça. Além dos serviços tradicionais, contamos com hidratação, desembaraço de pelos, corte de unhas e limpeza de ouvidos, tudo com muito carinho e atenção. Deixe seu pet em boas mãos e veja a diferença no brilho e na saúde do seu companheiro. Agende já uma visita!",
    preco:
      '<p class="price"><span class="purple-text">R$</span>74<span>,90</span></p>',
    tag: "Banho e Tosa",
    img: "../web/servico-caesm.png",
  },
  "banho-tosa-caes-g": {
    nome: "Banho e Tosa Completo | Cães Porte Grande",
    descricao:
      "Oferecemos uma experiência completa de cuidados para o seu pet, garantindo conforto, higiene e bem-estar. Nossa equipe especializada utiliza produtos de alta qualidade e técnicas avançadas para proporcionar um banho refrescante e uma tosa perfeita, adaptada às necessidades específicas de cada raça. Além dos serviços tradicionais, contamos com hidratação, desembaraço de pelos, corte de unhas e limpeza de ouvidos, tudo com muito carinho e atenção. Deixe seu pet em boas mãos e veja a diferença no brilho e na saúde do seu companheiro. Agende já uma visita!",
    preco:
      '<p class="price"><span class="purple-text">R$</span>87<span>,90</span></p>',
    tag: "Banho e Tosa",
    img: "../web/servico-caesg.png",
  },
  "banho-tosa-gatos": {
    nome: "Banho e Tosa Completo | Gatos",
    descricao:
      "Oferecemos uma experiência completa de cuidados para o seu pet, garantindo conforto, higiene e bem-estar. Nossa equipe especializada utiliza produtos de alta qualidade e técnicas avançadas para proporcionar um banho refrescante e uma tosa perfeita, adaptada às necessidades específicas de cada raça. Além dos serviços tradicionais, contamos com hidratação, desembaraço de pelos, corte de unhas e limpeza de ouvidos, tudo com muito carinho e atenção. Deixe seu pet em boas mãos e veja a diferença no brilho e na saúde do seu companheiro. Agende já uma visita!",
    preco:
      '<p class="price"><span class="purple-text">R$</span>56<span>,90</span></p>',
    tag: "Banho e Tosa",
    img: "../web/servico-gatos.png",
  },
};

function abrirModal(selected_item) {
  var item = items[selected_item];

  const modal = document.querySelector(".modal");
  const content = modal.querySelector(".content");
  const img = content.querySelector(".modal-img");
  const tag = content.querySelector(".tag");
  const title = content.querySelector(".modal-title");
  const desc = content.querySelector(".modal-desc");
  const price = content.querySelector(".modal-price");

  // Preencha os dados do item no modal
  img.style = "background-image: url('" + item.img + "');";
  img.alt = item.nome;
  tag.textContent = item.tag;
  title.textContent = item.nome;
  desc.innerHTML = item.descricao;
  price.innerHTML = item.preco;

  // Exiba o modal
  modal.style.display = "flex";
}

fecharModal = () => {
  document.querySelector(".modal").style.display = "none";
};
