# 🌤️ Previsão do Tempo

Este é um projeto simples de previsão do tempo desenvolvido com **HTML**, **CSS** e **JavaScript puro**, que consome a API da **[OpenWeatherMap](https://openweathermap.org/api)** para exibir informações climáticas em tempo real com base no nome da cidade informada pelo usuário.

## 🖼️ Demonstração

O usuário digita o nome da cidade e recebe como resposta:

- Temperatura atual
- Condição do tempo (nublado, ensolarado, etc.)
- Velocidade do vento

![preview](https://via.placeholder.com/600x300.png?text=Weather+App+Preview)

---

## 🚀 Tecnologias utilizadas

- HTML5
- CSS3 (com responsividade e estilo amigável)
- JavaScript (ES6+)
- API OpenWeatherMap

---

## ⚙️ Como usar

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/previsao-do-tempo.git
cd previsao-do-tempo
Adicione sua chave da OpenWeatherMap:

Abra o arquivo script.js e substitua:

javascript
Copiar
Editar
const apiKey = 'SUA_CHAVE_AQUI';
por:

javascript
Copiar
Editar
const apiKey = 'sua-chave-real';
Abra o projeto no navegador:

Se preferir rodar localmente com um servidor (recomendado para evitar problemas de CORS):

bash
Copiar
Editar
npx live-server
# ou
python -m http.server
🔑 Como obter uma chave da OpenWeatherMap
Acesse https://openweathermap.org/api

Crie uma conta gratuita

Vá em API Keys e copie sua chave

Cole no lugar indicado no script.js

📁 Estrutura do Projeto
bash
Copiar
Editar
/weather-app
├── index.html       # Interface principal
├── style.css        # Estilos do app
└── script.js        # Lógica para consumir a API
📌 Observações
Esta é uma aplicação didática e não usa bibliotecas externas.

Funciona em navegadores modernos.

📝 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e compartilhar.

Desenvolvido com 💙 por Seu Misael
