import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { ReactNode, useReducer, useState } from "react";
import PokerForm from "../components/poker-form";
import PokerSeats from "../components/poker-seats";
import Seo from "../components/seo";
import { initialState, reducer } from "../utils/pokerReducer";

const PokerPanel: React.FC<{
    title: string;
    isActive: boolean;
    handleClick: () => void;
    children: ReactNode;
}> = ({ title, isActive, handleClick, children }) => {
    return (
        <>
            <button className="accordion" onClick={handleClick}>
                {title}
            </button>

            <div className={`panel ${isActive && "active"}`}>{children}</div>
        </>
    );
};

const PokerPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="poker-page">
            <Seo title="Poker Notes" />

            <PokerPanel
                title={`Game Seats (${state.seats.length})`}
                isActive={activeSection === 1}
                handleClick={() =>
                    setActiveSection(val => (val === 1 ? -1 : 1))
                }
            >
                <PokerSeats
                    seats={state.seats}
                    handleAddSeat={() =>
                        dispatch({
                            type: "add_seat",
                        })
                    }
                    handleUpdateSeat={(idx, update) =>
                        dispatch({
                            type: "update_seat",
                            payload: {
                                seatIdx: idx,
                                update,
                            },
                        })
                    }
                />
            </PokerPanel>

            <PokerPanel
                title="Take Notes"
                isActive={activeSection === 2}
                handleClick={() =>
                    setActiveSection(val => (val === 2 ? -1 : 2))
                }
            >
                <PokerForm seats={state.seats} />
            </PokerPanel>

            <PokerPanel
                title={`All Hands (${state.hands.length})`}
                isActive={activeSection === 3}
                handleClick={() =>
                    setActiveSection(val => (val === 3 ? -1 : 3))
                }
            >
                <h1>all hands</h1>
            </PokerPanel>
            <footer>
                <b>Poker Hand Notes</b>
                <Link to="/">
                    <StaticImage
                        layout="fixed"
                        formats={["auto", "webp", "avif"]}
                        src="../../content/img/jr-icon.png"
                        width={36}
                        height={36}
                        quality={95}
                        alt="jordan rhea header"
                    />
                </Link>
            </footer>
        </div>
    );
};

export default PokerPage;
