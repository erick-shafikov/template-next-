"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const LazyComponent = dynamic(() => import("../components/Lazy/Lazy"), {
  ssr: false,
  loading: () => <>Loading...</>,
});

const src =
  "https://miro.medium.com/v2/resize:fit:875/1*KDMx1YspSrBcFJG-NDZgDg.png";

const imageLoader = () => {
  return src;
};

export default function Home() {
  return (
    <>
      <div style={{ width: "800px", height: "400px", position: "relative" }}>
        <Image
          src={src}
          alt="picture"
          fill
          blurDataURL="./"
          sizes="(min-width: 808px) 50%, 100%"
          placeholder="blur"
          loader={imageLoader}
          // onLoad={(img) => console.log("onLoad:", img)}
        />
      </div>
      <LazyComponent />
    </>
  );
}
