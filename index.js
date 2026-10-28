
function rollDice() {

    const numberOfDice = document.getElementById(`numberOfDice`).value;
    const diceImages = document.getElementById(`diceImages`);
    const result = document.getElementById(`result`);
    const values = [];
    const images = [];

    for (let i=0; i < numberOfDice; i++) {
        const value = Math.floor(Math.random() *6) +1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }

    result.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}