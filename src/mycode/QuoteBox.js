import React, { useState } from 'react';
import {quotes} from "./quotes.json";

const Quote = ({text,author}) => {
    

    
    return(
        <div className="quotes">
            <p>"{text}"</p>
            <p className="author">-{author}</p>
        </div>
    )
}

const QuoteBox = () => {
    let random = Math.floor(Math.random() * 102);
    let q = "";
    const [number, setNumber] = useState(random);
    const [quote, setQuote] = useState(quotes[number].quote);
    const [author, setAuthor] = useState(quotes[number].author);
    

    const handleNumber = () => {
        random = Math.floor(Math.random() * 102);
        setNumber(random);
        q = quotes[random]
        setQuote(q.quote);
        setAuthor(q.author);
    }

    return(
        <div className="quoteBox">
            <Quote text={quote} author={author} />
            <button className="btn" onClick={handleNumber}>Cambia</button>
        </div>
    )
}

export default QuoteBox;