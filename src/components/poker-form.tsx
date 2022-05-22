import React, { FormEvent, useState } from "react";
import { PokerSeat } from "../utils/pokerReducer";
import PokerCardSelector from "./poker-card-selector";

const handAction = {
    round: "",
    action: "",
};

const PokerForm: React.FC<{ seats: PokerSeat[] }> = ({ seats }) => {
    const [handActions, setHandActions] = useState<typeof handAction[]>([]);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(handActions);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="pre-flop">
                <span>Dealt:</span>
                <PokerCardSelector />
                <PokerCardSelector />
                <ActionSelect
                    seats={seats}
                    handleClick={() => {
                        const updatedActions = [
                            ...handActions,
                            { round: "pre-flop", action: `stuff` },
                        ];
                        setHandActions(updatedActions);
                    }}
                >
                    <div>
                        {handActions
                            .filter(ha => ha.round === "pre-flop")
                            .map(ha => {
                                return <p>{ha.action}</p>;
                            })}
                    </div>
                </ActionSelect>
            </div>
            <div className="flop">
                <span>Flop</span>
                <PokerCardSelector />
                <PokerCardSelector />
                <PokerCardSelector />

                <ActionSelect
                    seats={seats}
                    handleClick={() => {
                        const updatedActions = [
                            ...handActions,
                            { round: "flop", action: `stuff` },
                        ];
                        setHandActions(updatedActions);
                    }}
                >
                    <div>
                        {handActions
                            .filter(ha => ha.round === "flop")
                            .map(ha => {
                                return <p>{ha.action}</p>;
                            })}
                    </div>
                </ActionSelect>
            </div>

            <div className="turn">
                <span>Turn</span>
                <PokerCardSelector />

                <ActionSelect
                    seats={seats}
                    handleClick={() => {
                        const updatedActions = [
                            ...handActions,
                            { round: "turn", action: `stuff` },
                        ];
                        setHandActions(updatedActions);
                    }}
                >
                    <div>
                        {handActions
                            .filter(ha => ha.round === "turn")
                            .map(ha => {
                                return <p>{ha.action}</p>;
                            })}
                    </div>
                </ActionSelect>
            </div>

            <div className="river">
                <span>River</span>
                <PokerCardSelector />

                <ActionSelect
                    seats={seats}
                    handleClick={() => {
                        const updatedActions = [
                            ...handActions,
                            { round: "river", action: `stuff` },
                        ];
                        setHandActions(updatedActions);
                    }}
                >
                    <div>
                        {handActions
                            .filter(ha => ha.round === "river")
                            .map(ha => {
                                return <p>{ha.action}</p>;
                            })}
                    </div>
                </ActionSelect>
            </div>

            <div className="showdown">
                <button type="submit">Save Hand</button>
            </div>
        </form>
    );
};

export default PokerForm;

const ActionSelect: React.FC<{ seats: PokerSeat[]; handleClick: () => void }> =
    ({ seats, handleClick, children }) => {
        return (
            <>
                <div className="poker-action">
                    <select>
                        <option value="UTG">UTG</option>
                        <option value="UTG+1">UTG+1</option>
                        <option value="MP">MP</option>
                        <option value="HJ">HJ</option>
                        <option value="CO">CO</option>
                        <option value="BTN">BTN</option>
                        <option value="SB">SB</option>
                        <option value="BB">BB</option>
                    </select>

                    <select>
                        {seats.map((s, idx) => {
                            return (
                                <option value={s.name} key={"pre-flop-" + idx}>
                                    {s.name}
                                </option>
                            );
                        })}
                    </select>

                    <select>
                        <option value="check">check</option>
                        <option value="bet">bet</option>
                        <option value="raise">raise</option>
                        <option value="call">call</option>
                        <option value="fold">fold</option>
                    </select>

                    <input type="number" />
                </div>
                <button onClick={handleClick}>+</button>

                {children}
            </>
        );
    };
