// Seleciona os elementos do HTML
const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Lista dos nomes das imagens
const imagens = [
    'gato2.jpeg',
    'gato3.jpeg',
    'gato4.jpeg',
    'gato5.jpeg'
];

// Loop para adicionar miniaturas dinamicamente
imagens.forEach(nomeArquivo => {
    const newImage = document.createElement('img');
    const caminho = `imagemGato/${nomeArquivo}`;
    newImage.setAttribute('src', caminho);
    newImage.setAttribute('alt', `Miniatura de ${nomeArquivo}`);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImg.setAttribute('src', caminho);
        displayedImg.setAttribute('alt', `Imagem grande de ${nomeArquivo}`);
    });
});

// Evento para o botão Darken/Lighten
btn.addEventListener('click', () => {
    const classeAtual = btn.getAttribute('class');

    if (classeAtual === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
