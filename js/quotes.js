const quotes = [
    {
        quote : "When you go through hardships and decide not to surrender, that is strength.",
        author : "- Arnold Schwarzenegger",
    },
    {
        quote : "It is kind of fun to do the impossible.",
        author : "- Walt Disney",
    },
    {
        quote : "Tough times never last, but tough people do.",
        author : "- Robert H. Schuller",
    },
    {
        quote : "I’ve failed over and over and over again in my life and that is why I succeed.",
        author : "- Michael Jordan",
    },
    {
        quote : "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author : "- Angelina Jolie",
    },
    {
        quote : "But I know, somehow, that only when it is dark enough can you see the stars.",
        author : "- Martin Luther King, Jr",
    },
    {
        quote : "Grind Hard, Shine Hard.",
        author : "- Dwayne Johnson",
    },
    {
        quote : "I didn’t get there by wishing for it or hoping for it, but by working for it. ",
        author : "- Estée Lauder",
    },
    {
        quote : "There are better starters than me but I’m a strong finisher.",
        author : "- Usain Bolt",
    },
    {
        quote : "The road to success and the road to failure are almost exactly the same.",
        author : "- Colin R. Davis",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;