import React, { useState } from "react";

const suits = ["clubs ♣", "diamonds ♦", "hearts ♥", "spades ♠"];
const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
];

const PokerCardSelector: React.FC = () => {
    const [card, setCard] = useState("");
    const [suit, setSuit] = useState("");

    if (card === "" || suit === "") {
        return (
            <div>
                <div>
                    {cards.map(card => (
                        <button onClick={() => setCard(card)}>{card}</button>
                    ))}
                </div>
                <div>
                    {suits.map(suit => (
                        <button onClick={() => setSuit(suit[0])}>{suit}</button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <span
            className="poker-card"
            onClick={() => {
                setCard("");
                setSuit("");
            }}
        >
            {card}
            {suit}
        </span>
    );
};

export default PokerCardSelector;
