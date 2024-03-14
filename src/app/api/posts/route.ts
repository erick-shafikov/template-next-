// import { cookies } from "next/headers";

export async function GET() {
  // const cookieStore = cookies();
  // console.log(cookieStore);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return Response.json({ data });
}

// export const revalidate = 60
