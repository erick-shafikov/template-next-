// server component
import { Metadata } from "next";
import Link from "next/link";
import { User } from "./[user]/types";

export const metadata: Metadata = {
  title: "User page",
};

async function getData(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const users = await getData();

  const length = users?.length;

  return (
    <>
      Users page{" "}
      {!!users?.length ? (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
