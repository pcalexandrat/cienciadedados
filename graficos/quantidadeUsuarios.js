async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const total_pessoas_mundo = Object.keys(dados)
    const total_pessoas_que_necessitam_transporte_para_trabalho = Object.values(dados)
  
  const data = [
    {
      x: total_pessoas_mundo,
      y: total_pessoas_que_necessitam_transporte_para_trabalho,
      type: 'bar'
    }
  ]
  
  const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}
quantidadeUsuarios()