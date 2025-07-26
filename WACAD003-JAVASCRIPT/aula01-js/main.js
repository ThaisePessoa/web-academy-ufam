const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const storyText = 'Em uma cozinha americana, :insertx: , era um ótimo dia para fazer purê. De repente, :inserty:, Bob estranhou, :insertz:. Com falta de tempo para olhar a receita na internet, foi colocado quase 1 kg de manteiga e batido no liquidificador.';
const insertX = ['na cidade de Manaus, ', 'tempo corrido, ', 'Bob colocou as batatas que pesava 300 libras em uma panela com água em temperatura de 94 fahrenheit'];
const insertY = ['começou um cheiro de queimado', 'o purê estava com uma cor muito amarelo e grudento'];
const insertZ = ['o liquidificador estava forçando com o peso da massa de batata', 'foi decidido jogar tudo fora, no dia seguinte o liquidificador parou de funcionar'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    if (customName && customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.querySelector('input[value="uk"]').checked) {
        const weight = Math.round(300 * 0.0714286) + ' stone';
        const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';

        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 libras', weight);
    }

    story.textContent = newStory;
}