import React, { useEffect, useState } from 'react';
import data from '../assets/data';
import Card from '../Components/Card';

const LatestArticles = () => {
    const [page, changePage] = useState(1);
    const [cards, setCards] = useState([]);
    const totalPages = Math.ceil(data.length / 3);
    useEffect(() => {
        cardDisplay();
    }, [page,cards]);

    const nextPage = () => {
        if (page + 1 > totalPages) return;
        changePage(page + 1);
    }

    const prevPage = () => {
        if (page - 1 === 0) return;
        changePage(page - 1);
    }

    const cardDisplay = () => {
        var s = (page - 1) * 3;
        let displayedCards = [];
        console.log("display cards");
        console.log(page);
        for (let i = 0; i < 3; i++) {
            if (s + i < data.length) {
                displayedCards.push(
                    <Card
                        key={data[s + i].id} 
                        title={data[s + i].title}
                        description={data[s + i].description}
                        pic={data[s + i].pic}
                    />
                );
            }
        }

        setCards(displayedCards);
    }
    console.log(cards);
    return (
        <div className='latestArticles'>
            <h1>Latest Articles</h1>
            <div className='cardsContainer'>{cards}</div>
            <div className='navigation'>
            <button onClick={prevPage}><i class="fa-solid fa-angle-left"></i></button> 
            {page}/{totalPages} 
            <button onClick={nextPage}><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    );
}

export default LatestArticles;
