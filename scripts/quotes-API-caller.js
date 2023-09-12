const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const refreshButton = document.querySelector('.refresh_icon');
const apiURL = 'https://type.fit/api/quotes';


async function getQuote() {
  const res = await fetch(apiURL);
  const quotes = await res.json(); 
  const randomQuoteNumber = Math.floor(Math.random() * 1644);
  const quoteObj = quotes[randomQuoteNumber];

  quote.textContent = quoteObj.text;
  author.textContent = quoteObj.author;
}
getQuote();


refreshButton.addEventListener('click', () => {
  getQuote();
});