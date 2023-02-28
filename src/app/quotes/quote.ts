export class Quote {
    quote: string;
    author: string;

    constructor(quote: string, author: string = "Unknown") {
        this.quote = quote;
        this.author = author;
    }
}