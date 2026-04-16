import { createSignal } from "solid-js";
import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
import PokerSeats from "~/components/poker-seats";
import PokerForm from "~/components/poker-form";
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
