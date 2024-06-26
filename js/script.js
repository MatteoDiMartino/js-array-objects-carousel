const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let containerPrincipalimg = document.querySelector('#mainBox');
console.log(containerPrincipalimg)

let thumbnail = document.querySelector('#senBox')
console.log(thumbnail)

let arrowUp = document.querySelector('#arrowUp');
console.log(arrowUp)

let arrowDown = document.querySelector('#arrowDown');
console.log(arrowDown)

for (let i = 0; i < images.length; i++) {
    let makeThumb = document.createElement('div')
    console.log(makeThumb);
    makeThumb.classList.add('col-20');
    makeThumb.classList.add('thumb-no')
    let imgElement = document.createElement('img');
    imgElement.src = images[i].image;
    makeThumb.appendChild(imgElement);
    thumbnail.appendChild(makeThumb);

    arrowUp.addEventListener('click', function() {
        for (let i = 0; i < images.length; i++) {
            containerPrincipalimg.innerHTML = '';
            let imgFull = document.createElement('img');
            imgFull.src = images[i].image;
            containerPrincipalimg.appendChild(imgFull);

        }

    })

    arrowDown.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
            updateThumbnails();
        }
    });
}

// definisco l'elemento attivo in falso
// da li seleziono il box con l'immagine attiva e per ogni valore 
// image in un oggetto dell'array images lo vado ad inserire all'interno