"use client";

import { useFetchPosts } from "@/hooks/useFetchPosts";
import Link from "next/link";

export default function Home() {
  const { isLoading, posts, error } = useFetchPosts();

  // document.cookie = "cookie=test";

  return (
    <ul>
      {posts ? (
        posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`posts/${post.id}`}>Go to post {post.id}</Link>
          </li>
        ))
      ) : (
        <>No posts</>
      )}
    </ul>
  );
}
