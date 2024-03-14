// "use client";

// import { useSelectedLayoutSegment } from "next/navigation";

export default function ParallelLayout({
  parallel1,
  parallel2,
}: {
  children: React.ReactNode;
  parallel1: React.ReactNode;
  parallel2: React.ReactNode;
}) {
  // const loginSegments = useSelectedLayoutSegment("auth");
  // console.log(loginSegments);
  return (
    <section>
      <div>Parallel layout</div>
      {parallel1}
      {parallel2}
    </section>
  );
}
