import { useEffect, useState } from "react";
import { Post } from "./types";

export const useFetchPost = (id: number) => {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setPost(json);
      })
      .catch(() => {
        setIsLoading(false);
        setError("unable to fetch posts");
      });
  }, []);

  return { isLoading, post, error };
};
