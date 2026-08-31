"use client";

import { useEffect, useState } from "react";

const DISPLAY_TIME_MS = 15 * 60 * 1000;
const EXPIRY_KEY = "bb-rebrand-banner-expires-at";

export default function RebrandBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const now = Date.now();
    const savedExpiry = Number(window.sessionStorage.getItem(EXPIRY_KEY));
    const expiresAt = savedExpiry > now ? savedExpiry : savedExpiry ? 0 : now + DISPLAY_TIME_MS;

    if (!expiresAt) {
      setVisible(false);
      return;
    }

    if (!savedExpiry) {
      window.sessionStorage.setItem(EXPIRY_KEY, String(expiresAt));
    }

    const timer = window.setTimeout(() => setVisible(false), expiresAt - now);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <aside className="ib-rebrand-banner" aria-label="Company rebrand announcement">
      <div className="ib-wrap ib-rebrand-banner-inner">
        <strong>IntelliByld</strong>
        <span>is now</span>
        <strong>Bricks &amp; Brains</strong>
      </div>
    </aside>
  );
}
