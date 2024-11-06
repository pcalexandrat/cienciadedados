const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que  do total de <span> ${dados.total_pessoas_mundo} </span> de pessoas no mundo,  
            <span> ${dados.total_trabalhadores_mundo} </span> são trabalhadores e aproximadamente <span> ${dados.total_pessoas_que_necessitam_transporte_para_trabalho} </span> necessitam de transporte
            para ir ao trabalho?  E o tempo médio gasto para o deslocamento ao trabalho
            é de menos de <span> ${dados.tempo_medio_deslocamento_para_trabalho}</span>`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);

}
vizualizarInformacoesGlobais()
