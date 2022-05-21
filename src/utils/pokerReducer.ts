export interface PokerSeat {
    name: string;
    hero: boolean;
    in?: number;
    out?: number;
}

// export interface PokerHand {

// }

type Actions =
    | { type: "add_seat" }
    | {
        type: "update_seat";
        payload: {
            seatIdx: number;
            update: Partial<PokerSeat>;
        };
    };

const initialSeat = {
    name: "",
    hero: false,
    in: 0,
};

export const initialState = {
    seats: [initialSeat] as PokerSeat[],
    hands: [],
};

export const reducer = (state: typeof initialState, action: Actions) => {
    switch (action.type) {
        case "add_seat": {
            state.seats.push(initialSeat);
            return { ...state };
        }

        case "update_seat": {
            let seat = state.seats[action.payload.seatIdx];
            state.seats[action.payload.seatIdx] = {
                ...seat,
                ...action.payload.update,
            };

            console.log(state);
            return { ...state };
        }

        // case "add_hand": {
        //     const updatedHands = [...state.hands, action.payload];
        //     return { ...state, hands: updatedHands };
        // }

        default:
            return state;
    }
};
