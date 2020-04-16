document.addEventListener('DOMContentLoaded', () => {
    // card options 
    const cardArray = [
        {
            name: "bone",
            imgs: "imgs/bone.png"
        },
        {
            name: "bunny",
            imgs: "imgs/bunny.png"
        },
        {
            name: "cat",
            imgs: "imgs/cat.png"
        },
        {
            name: "dog",
            imgs: "imgs/dog.png"
        },    
        {
            name: "frog",
            imgs: "imgs/frog.png"
        },
        {
            name: "pawPrint",
            imgs: "imgs/pawPrint.png"
        },
        {
            name: "tutle",
            imgs: "imgs/turtle.png"
        },
        {
            name: "gradientBackground",
            imgs: "imgs/gradientBackground.png"
        }, 
    ]

    const grid = document.querySelector('.grid')

    // CREATE THE GAME BOARD 

    function createGameBoard() {
        for (let i = 0; i < carArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'imgs/gradientBackground.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }



    createGameBoard()

    

})