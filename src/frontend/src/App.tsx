import { NikeContentBand } from "./components/NikeContentBand";
import { NikeFooter } from "./components/NikeFooter";
import { NikeHero } from "./components/NikeHero";
import { NikeNavbar } from "./components/NikeNavbar";

export default function App() {
  return (
    <div className="min-h-screen bg-nike-black">
      <NikeNavbar />
      <NikeHero />
      <NikeContentBand />
      <NikeFooter />
    </div>
  );
}
