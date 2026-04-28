import { For } from "solid-js";
import { styled } from "solid-styled-components";
import type { PokerSeat } from "../utils/pokerReducer";

interface Props {
    seats: PokerSeat[];
    handleUpdateSeat: (idx: number, update: Partial<PokerSeat>) => void;
    handleAddSeat: () => void;
}

const PokerSeats = (props: Props) => {
    return (
        <StyledSeats>
            <For each={props.seats}>
                {(seat, idx) => (
                    <div class="seat">
                        <input
                            type="text"
                            placeholder="Name"
                            value={seat.name}
                            onInput={e =>
                                props.handleUpdateSeat(idx(), {
                                    name: e.currentTarget.value,
                                })
                            }
                        />
                        <input
                            type="number"
                            placeholder="In"
                            value={seat.in ?? 0}
                            onInput={e =>
                                props.handleUpdateSeat(idx(), {
                                    in: Number(e.currentTarget.value),
                                })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Out"
                            value={seat.out ?? 0}
                            onInput={e =>
                                props.handleUpdateSeat(idx(), {
                                    out: Number(e.currentTarget.value),
                                })
                            }
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={seat.hero}
                                onChange={e =>
                                    props.handleUpdateSeat(idx(), {
                                        hero: e.currentTarget.checked,
                                    })
                                }
                            />{" "}
                            Hero
                        </label>
                    </div>
                )}
            </For>
            <button onClick={() => props.handleAddSeat()}>Add Seat</button>
        </StyledSeats>
    );
};

export default PokerSeats;

const StyledSeats = styled.div`
    .seat {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        align-items: center;
    }
    input[type="text"],
    input[type="number"] {
        padding: 4px 8px;
        border: 1px solid lightgray;
        border-radius: 3px;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        margin-top: 0.5rem;
    }
`;
