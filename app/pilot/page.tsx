import type { Metadata } from "next";
import PilotForm from "@/components/ib/pilot-form";

export const metadata: Metadata = {
  title: "Join Pilot",
  description: "Free pilot for select developers, GCs, and EPC teams. Connect one site and see autonomous coordination in your own data within three weeks.",
};

export default function PilotPage() {
  return <PilotForm />;
}
