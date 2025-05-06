async function buscarClima() {
    const cidade = document.getElementById("cidade").value;
    const resultado = document.getElementById("resultado");
    const apiKey = "960784b539af4042ad1124145250505";

    try {
      const resposta = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`);
      
      if (!resposta.ok) throw new Error("Erro na requisição");

      const dados = await resposta.json();

      resultado.innerHTML = `
        <h2>${dados.location.name}, ${dados.location.region}</h2>
        <p><strong>Temperatura:</strong> ${dados.current.temp_c}°C</p>
        <p><strong>Condição:</strong> ${dados.current.condition.text}</p>
        <img src="${dados.current.condition.icon}" alt="Ícone do clima" />
      `;
    } catch (erro) {
      resultado.innerHTML = `<p style="color: red;">Erro: ${erro.message}</p>`;
      console.error(erro);
    }
  }