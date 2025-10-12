// Variables for manipulating the DOM
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

const apiKey = 'j-d28-0IMA7JRD39e1pgN9sa_AC_QJyv3TZYPFk19no';
const count = 30;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let photoArray = [];

let ready = false;
let totalImages = 0;
let imagesLoaded = 0;

// Check if all images have loaded
function imageLoading() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

// Helper function to set multiple attributes
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Display photos in DOM
function displayPhoto() {
    imagesLoaded = 0;
    totalImages = photoArray.length;

    photoArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
            loading: 'lazy', // better performance
        });

        // When an image finishes loading
        img.addEventListener('load', imageLoading);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    ready = false;          // lock until batch finishes
    loader.hidden = false;  // show loader
    try {
        const res = await fetch(apiUrl);
        photoArray = await res.json();
        displayPhoto();
    } catch (error) {
        console.log('Error', error);
    }
}

// On load
getPhotos();

// Infinite scroll event listener
window.addEventListener('scroll', () => {
    const totalHeight = window.innerHeight;
    const distanceFromTheTop = window.scrollY;
    const heightOfBody = document.body.offsetHeight;

    if (totalHeight + distanceFromTheTop > heightOfBody - 1000 && ready) {
        getPhotos();
    }
});
