//get the elements from the DOM
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const tweetQuoteButton = document.getElementById('tweet-quote');


// Array of the quotes 

const quote = [
    {
        text:'The only way to do great work is to love what you do' ,
        author : 'Steve Jobs'  
    } ,
    {
        text:'Courage is like a muscle. We strengthen it by use' ,
        author : 'Ruth Gordo'  
    } ,
    {
        text:'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success' ,
        author : 'Dale Carnegie'  
    } ,
    {
        text:'I’d rather regret the things I’ve done than regret the things I haven’t done' ,
        author : 'Lucille Ball'  
    } ,
    {
        text:'I will not lose, for even in defeat, there’s a valuable lesson learned, so it evens up for me' ,
        author : 'Jay-Z'  
    } ,
    {
        text:'Doubt is a killer. You just have to know who you are and what you stand for' ,
        author : 'Jennifer Lopez'  
    } ,
    
]

// generate the random quote

function getRandomQuote(){
     return quote[Math.floor(Math.random()*quote.length)];
}

//update and display quote and author 

function displayQuote(){
    const {text , author} = getRandomQuote();
    quoteText.textContent = text;
    quoteAuthor.textContent = author;
}

//Tweet the current quote

function tweetQuote(){
    const tweetText = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
     
 const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    window.open(tweetUrl);
}

//Event Listners 

newQuoteButton.addEventListener('click',displayQuote);

tweetQuoteButton.addEventListener('click' , tweetQuote);

// Initial quote Display

displayQuote();
