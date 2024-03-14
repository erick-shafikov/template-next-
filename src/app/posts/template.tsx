"use client";
import { useState } from "react";

import { Metadata } from "next";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<number>(0);

  const increment = () => setState((state) => state + 1);

  return (
    <section>
      <div>
        <span style={{ marginRight: "10px" }}>User layout state:</span>
        <span style={{ marginRight: "10px" }}>{state}</span>
        <button onClick={increment}>+1</button>
      </div>
      {children}
    </section>
  );
}
