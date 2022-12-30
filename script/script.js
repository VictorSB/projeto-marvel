const characters = document.querySelectorAll('.character')

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        const idSelect = character.attributes.id.value;
        if(idSelect === 'ultron') return

        const characterSelect = document.querySelector('.selecionado')
        characterSelect.classList.remove('selecionado')

        character.classList.add('selecionado')

        
        const imagePlayer1 = document.getElementById('character-player-1');
        imagePlayer1.src = `./src/images/${idSelect}.png`

        const namePlayer1 = document.getElementById('name-character-1')
        const nameSelect = character.getAttribute('data-name')
        namePlayer1.innerHTML = nameSelect

    });
});