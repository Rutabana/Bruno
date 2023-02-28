import { Quote } from "./quote";

export class Quotes {
    public quotes = [
        new Quote("The bow is broken if it be stretched too tight, but the soul is lost if it relaxed", "Ignatious of Loyola"),
        new Quote("If a man has nothing, he still has the audacity XD", "Favor Okechukwu"),
        new Quote("Entrepreneur’s mind. Athlete’s body. Artist’s soul", "James Clear"),
        new Quote("Rigidity is the ultimate killer of creativity, productivity and consistency", "Ali Abdaal"),
        new Quote("Faith is taking the first step even when you don't see the whole staircase", "Martin Luther King Jr"),
    ]

    public randomizeQuote(): Quote {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }
}