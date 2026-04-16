import { createSignal } from "solid-js";
import Layout from "~/components/solid/layout";
import Seo from "~/components/solid/seo";
import { Section } from "~/components/solid/section";
import PokerSeats from "~/components/solid/poker-seats";
import PokerForm from "~/components/solid/poker-form";
import type { PokerSeat } from "~/utils/pokerReducer";

const initialSeat: PokerSeat = { name: "", hero: false, in: 0 };

export default function Poker() {
  const [seats, setSeats] = createSignal<PokerSeat[]>([{ ...initialSeat }]);

  function handleUpdateSeat(idx: number, update: Partial<PokerSeat>) {
    setSeats(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], ...update };
      return next;
    });
  }

  function handleAddSeat() {
    setSeats(prev => [...prev, { ...initialSeat }]);
  }

  return (
    <Layout>
      <Seo title="Poker" />
      <Section>
        <h1>Poker Tracker</h1>
        <PokerSeats seats={seats()} handleUpdateSeat={handleUpdateSeat} handleAddSeat={handleAddSeat} />
        <PokerForm seats={seats()} />
      </Section>
    </Layout>
  );
}
