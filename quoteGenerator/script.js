// Variables to manipulate the DOM
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('author');
const twitterButton = document.getElementById('twitter-btn');
const newQuoteButton = document.getElementById('new-quote-btn');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Loading effect
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Complete loading
function completeLoading() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Fetch quotes
async function getResponse() {
    loading();
    const apiUrl = 'https://dummyjson.com/quotes';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        apiQuotes = data.quotes;
        newQuote();
    } catch (error) {
        console.log('Error', error);
    }
}
getResponse();


// Show a new quote
function newQuote() {
    loading();
    const index = Math.floor(Math.random() * apiQuotes.length);

    if (!apiQuotes[index].quoteAuthor) {
        apiQuotes[index].author = 'Unknown';        
    } 

    quoteText.textContent = apiQuotes[index].quote;
    quoteAuthor.textContent = apiQuotes[index].author;
    completeLoading();
}

// Event listener for new quote
newQuoteButton.addEventListener('click', newQuote);

// Event listener for tweeting the quote
twitterButton.addEventListener('click', function () {
    const text = encodeURIComponent(quoteText.textContent);
    const author = encodeURIComponent(quoteAuthor.textContent);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    window.open(tweetUrl, "_blank");
});
