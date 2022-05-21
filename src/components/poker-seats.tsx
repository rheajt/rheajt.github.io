import React from "react";
import { PokerSeat } from "../utils/pokerReducer";

const PokerSeats: React.FC<{
    seats: PokerSeat[];
    handleUpdateSeat: (idx: number, update: Partial<PokerSeat>) => void;
    handleAddSeat: () => void;
}> = ({ seats, handleUpdateSeat, handleAddSeat }) => {
    const updateSeat = (
        idx: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        console.log("on change", idx);
        if (e.target.type === "checkbox") {
            let isChecked = e.target.checked;

            handleUpdateSeat(idx, {
                [e.target.name]: isChecked,
            });
        } else {
            handleUpdateSeat(idx, {
                [e.target.name]: e.target.value,
            });
        }
    };
    return (
        <>
            {seats.map((seat, idx) => {
                return (
                    <div className="poker-seat" key={idx}>
                        <input
                            name="hero"
                            type="checkbox"
                            checked={seat.hero}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => updateSeat(idx, e)}
                        />

                        <input
                            name="name"
                            value={seat.name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => updateSeat(idx, e)}
                        />

                        <input
                            name="in"
                            type="number"
                            value={seat.in}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => updateSeat(idx, e)}
                        />

                        <input
                            name="out"
                            type="number"
                            value={seat.out}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => updateSeat(idx, e)}
                        />
                    </div>
                );
            })}

            <button onClick={handleAddSeat}>+</button>
        </>
    );
};

export default PokerSeats;
