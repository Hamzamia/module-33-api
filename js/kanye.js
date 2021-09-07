function loadQuotes() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
}


function displayQuotes(quote) {
    // console.log(quote)
    const quotesElemet = document.getElementById('quotes');
    quotesElemet.innerText = quote.quote;
};