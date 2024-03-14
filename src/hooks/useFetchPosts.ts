import { useEffect, useState } from "react";
import { Post } from "./types";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("api/posts", { next: { tags: ["posts"] } })
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setPosts(json.data);
      })
      .catch(() => {
        setIsLoading(false);
        setError("unable to fetch posts");
      });
  }, []);

  return { isLoading, posts, error };
};
