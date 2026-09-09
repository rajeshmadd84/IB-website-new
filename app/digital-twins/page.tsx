import { permanentRedirect } from "next/navigation";

export default function LegacyDigitalTwinsRedirect() {
  permanentRedirect("/material-data-layer");
}
