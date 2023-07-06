const quotes = [
    {
        quote : "HI1325",
        author : "hello1"
    },
    {
        quote : "HI9",
        author : "hello2"
    },
    {
        quote : "HI8",
        author : "hello3"
    },
    {
        quote : "HI77",
        author : "hello4"
    },
    {
        quote : "HI6",
        author : "hello5"
    },
    {
        quote : "HI5",
        author : "hello6"
    },
    {
        quote : "HI4",
        author : "hello7"
    },
    {
        quote : "HI3",
        author : "hello8"
    },
    {
        quote : "HI2",
        author : "hello9"
    },
    {
        quote : "HI1",
        author : "hello10"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuoto = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuoto.quote;
author.innerText = todaysQuoto.author;