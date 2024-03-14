import { Metadata } from "next/types";
import { User } from "./types";

export const metadata: Metadata = {
  title: "user settings",
};

export default async function Home({ params }: { params: { user: number } }) {
  // server action
  // Можно импортировать в клиентские компоненты
  // можно передавать в качестве пропсов
  const { user } = params;

  async function getUser(id: number): Promise<User> {
    "use server";

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    return res.json();
  }

  const userData = await getUser(user);

  return (
    <>
      <ul>
        <li>{userData.username}</li>
        <li>{userData.phone}</li>
        <li>{userData.email}</li>
      </ul>
    </>
  );
}
