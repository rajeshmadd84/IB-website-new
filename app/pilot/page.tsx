import type { Metadata } from "next";
import PilotForm from "@/components/ib/pilot-form";

const TITLE = "Join Pilot";
const DESCRIPTION = "Free pilot for select developers, GCs, and EPC teams. Connect one site and see autonomous coordination in your own data within three weeks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pilot" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/pilot" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function PilotPage() {
  return <PilotForm />;
}
