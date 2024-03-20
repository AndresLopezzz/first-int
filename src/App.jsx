import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="AnLuuuFx" isFollowing={true}>
        Andres Felipe Lopez
      </TwitterFollowCard>
      <TwitterFollowCard userName="Sparkleredpanda" isFollowing={false}>
        Vincent Chansard
      </TwitterFollowCard>
    </section>
  );
}
