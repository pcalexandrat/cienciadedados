async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-numero-tipos-locomocao.json'
    const res = await fetch(url)
  const dados = await res.json()
    const transporte = Object.keys(dados)
    const quantidade = Object.values(dados)
  
  const data = [
    {
      x: transporte,
      y: quantidade,
      type: 'bar'
    }
  ]
  
  const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}
quantidadeUsuarios()
