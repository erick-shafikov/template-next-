"use client";
import { useFetchPost } from "@/hooks/useFetchPost";

export default function Home({ params }: { params: { post: number } }) {
  const { isLoading, post, error } = useFetchPost(params.post);

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}

/* 

app/shop/[...slug]/page.js	/shop/a	{ slug: ['a'] }
app/shop/[...slug]/page.js	/shop/a/b	{ slug: ['a', 'b'] }
app/shop/[...slug]/page.js	/shop/a/b/c	{ slug: ['a', 'b', 'c'] }

TS: 	{ slug: string[] }

*/

/* 
app/shop/[[...slug]]/page.js	/shop	{}
app/shop/[[...slug]]/page.js	/shop/a	{ slug: ['a'] }
app/shop/[[...slug]]/page.js	/shop/a/b	{ slug: ['a', 'b'] }
app/shop/[[...slug]]/page.js	/shop/a/b/c	{ slug: ['a', 'b', 'c'] }

TS: { categoryId: string, itemId: string }
*/
