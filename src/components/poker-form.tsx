import { createSignal, Show, For } from "solid-js";
import { styled } from "solid-styled-components";
import type { PokerSeat } from "../utils/pokerReducer";

interface Props { seats: PokerSeat[]; }

const PokerForm = (props: Props) => {
  const [showResults, setShowResults] = createSignal(false);

  const results = () => {
    return props.seats.map(seat => ({
      name: seat.name || "Unknown",
      profit: (seat.out ?? 0) - (seat.in ?? 0),
    }));
  };

  return (
    <StyledPokerForm>
      <button onClick={() => setShowResults(!showResults())}>
        {showResults() ? "Hide Results" : "Show Results"}
      </button>
      <Show when={showResults()}>
        <table>
          <thead><tr><th>Player</th><th>Profit/Loss</th></tr></thead>
          <tbody>
            <For each={results()}>
              {(r) => (
                <tr>
                  <td>{r.name}</td>
                  <td style={{ color: r.profit >= 0 ? "green" : "red" }}>{r.profit >= 0 ? "+" : ""}{r.profit}</td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </Show>
    </StyledPokerForm>
  );
};

export default PokerForm;

const StyledPokerForm = styled.div`
  margin-top: 1rem;
  button { padding: 0.5rem 1rem; background-color: var(--color-primary); color: white; border: none; border-radius: 3px; cursor: pointer; }
  table { width: 100%; margin-top: 1rem; border-collapse: collapse; }
  th, td { padding: 0.5rem; border-bottom: 1px solid lightgray; text-align: left; }
`;
