import type { Metadata } from "next";
import PilotForm from "@/components/ib/pilot-form";
import { JsonLd, webPageJsonLd } from "@/components/ib/json-ld";

const TITLE = "Join Pilot";
const DESCRIPTION = "Free pilot for select developers, GCs, and EPC teams. Connect one site and see AI-assisted coordination in your own data during a focused project pilot.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pilot" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/pilot" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function PilotPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: "/pilot" })} />
      <PilotForm />
    </>
  );
}
