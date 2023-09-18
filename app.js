let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people for things"`,
    person: `Albert Einsten`
},{
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst"`,
    person: `Aristole`
}, {
    quote: `"The journey of a thousand miles begins with one step"`,
    person: `Lao Tzu`
}, {
    quote: `"Remember that not getting what you want is smetimes a wonderful stroke of luck."`,
    person: `Dalai Lama`
},{
    quote: `"Our lives begin to end the day we become silent about things that matter"`,
    person: `Martin Luther King`
},{
    quote:`"It does not matter how slowly you go, as long as you do not stop"`,
    person: `Confuscus`
}, {
    quote: `"If you look at what you have in life, you will always have more. If you look at what you don't have in life, you'll never have enough"`,
    person: `Oprah Winfrey`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life"`,
    person: `Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn"`,
    person: `Benjamin Franklin`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

//math equations in javascript





































