const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que  do total de ${dados.total_pessoas_mundo} de pessoas no mundo,  
             ${total_trabalhadores_mundo} são trabalhadores e aproximadamente ${dados.total_pessoas_que_necessitam_transporte_para_trabalho} necessitam de transporte
            para ir ao trabalho?  E o tempo médio gasto para o deslocamento ao trabalho
            é de menos de ${dados.tempo_medio_deslocamento_para_trabalho}`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);

}
vizualizarInformacoesGlobais()
