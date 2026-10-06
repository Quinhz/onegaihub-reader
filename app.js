const container = document.getElementById('grid-revistas');

if (container && typeof zines !== 'undefined') {
    // 1. Ordena a lista: revistas disponíveis primeiro, "emBreve" depois
    const revistasOrdenadas = [...zines].sort((a, b) => {
        return (a.soon === b.soon) ? 0 : a.soon ? 1 : -1;
    });

    // 2. Gera o HTML com a nova lista ordenada
    container.innerHTML = revistasOrdenadas.map(zine => {
        const botoes = zine.soon 
            ? `<div class="botoes"><a class="btn soon">Em Breve</a></div>`
            : `<div class="botoes">
                 <a href="${zine.pdf}" target="_blank" class="btn ler">Ler Online</a>
                 <a href="${zine.pdf}" download class="btn baixar">Baixar</a>
               </div>`;

        return `
            <div class="card">
                <img src="${zine.image}" alt="${zine.title}">
                <div class="card-content">
                    <h3>${zine.title}</h3>
                    <p>${zine.description}</p>
                    ${botoes}
                </div>
            </div>
        `;
    }).join('');
}