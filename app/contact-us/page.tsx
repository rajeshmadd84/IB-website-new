import type { Metadata } from "next";
import ContactForm from "@/components/ib/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to IntelliByld about a pilot, a partnership, or the platform. Headquartered in Singapore.",
};

export default function ContactPage() {
  return <ContactForm />;
}
