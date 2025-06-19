(function () { 
    'use strict';

    const detailsForm = document.querySelector('#destination_details');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const destName = event.target.elements['name'].value;
        const destLocation = event.target.elements['location'].value;
        const destPhoto = event.target.elements['photo'].value;
        const destDescription = event.target.elements['description'].value;

        for (let i = 0; i < detailsForm.length; i++){
            detailsForm.elements[i].value = '';
        }

        const destinationCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);

        const wishListContainer = document.getElementById('destinations_container');
        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = 'My Wish List';
        }

        document.querySelector('#destinations_container').appendChild(destinationCard);
    }

    function createDestinationCard(name, location, photoURL, description) {

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt', name);
        
        const constantPhotoURL = 'images/default.avif';

        if (photoURL.length === 0) {
            img.src = constantPhotoURL;
            // img.setAttribute('src', constantPhotoURL);
        } else {
            img.setAttribute('src', photoURL);
        }

        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card_body';

        const cardTitile = document.createElement('h3');
        cardTitile.innerHTML = name;
        cardBody.appendChild(cardTitile);

        const cardSubtitle = document.createElement('h4');
        cardSubtitle.innerHTML = location;
        cardBody.appendChild(cardSubtitle);

        if (description.length !== 0) {
            const cardText = document.createElement('p');
            cardText.className = 'card_text';
            cardText.innerHTML = description;
            cardBody.appendChild(cardText);
        }

        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerHTML = 'Remove';

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event) {
        const card = event.target.parentElement.parentElement;
        card.remove();    
    }
})();
