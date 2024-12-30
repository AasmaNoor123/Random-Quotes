
let quoteElement = document.getElementById("quote");
let button = document.getElementById("generate-quote");

function generate(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

let quotes = [

     "Success is not final, failure is not fatal: It is the courage to continue that counts. Winston Churchill",
     "It is never too late to be what you might have been.  George Eliot",
     "Believe you can and you're halfway there.  Theodore Roosevelt",
     "The future belongs to those who believe in the beauty of their dreams.  Eleanor Roosevelt",


     "The greatest glory in living lies not in never falling, but in rising every time we fall. ~Nelson Mandela",

     "The way to get started is to quit talking and begin doing. ~Walt Disney",
     "Your time is limited, so don't waste it living someone else's life ~Steve Jobs",
     "If life were predictable it would cease to be life, and be without flavor.  ~Eleanor Roosevelt",
     "If you look at what you have in life, you'll always have more. ~Oprah Winfrey",
     "Spread love everywhere you go. Let no one ever come to you without leaving happier. ~Mother Teresa",


     "You miss 100% of the shots you don't take.  Wayne Gretzky",
     "Act as if what you do makes a difference. It does. William James",
     "The only limit to our realization of tomorrow is our doubts of today.  Franklin D. Roosevelt",
     "In three words I can sum up everything I've learned about life: it goes on.  Robert Frost",
     "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.  Ralph Waldo Emerson"
];

    // "  خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلےخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",

// "انا کا حتمی مقصد کچھ دیکھنا نہیں بلکہ 
// ,"کچھ بننا ہے۔"


// "میں سب اس کو پھی اور غیر اس کو مکمل کرتا ہوں۔ یا غیر اس کو انہوں کو اور اپنے دوستان کو دوست دینے کے لئے کچ",

// "وہا اہم طور پر انہوں کو اپنے دوستان کو دوست دینے کے لئے کچھ دیکھنا نہیں بلکہ 
// ,"کچھ بننا ہے۔"

    // "میں سب اس کو پھی اور غیر اس کو مکمل کرتا ہوں۔ یا غیر اس کو انہوں کو اور اپنے دوستان کو دوست دینے کے لئے کچھ دیک 












