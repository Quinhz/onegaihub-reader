const container = document.getElementById("grid-revistas");

container.innerHTML = zines.map(zine => {
    const buttons = zine.soon
        ? `<div class="buttons"><a class="btn soon">Em Breve</a></div>`
        : `<div class="buttons">
        <a class="btn ler" href="${zine.pdf}" target="_blank">Ler Online</a>
        <a download class="btn baixar" href="${zine.pdf}" download>Baixar</a>
        </div>`;
    return `
    <div class="card">
        <img src="${zine.image}" alt="${zine.title}">
        <div class="card-content">
            <h3>${zine.title}</h3>
            <p>${zine.description}</p>
            ${buttons}
        </div>
    </div>
    `;
}).join('');