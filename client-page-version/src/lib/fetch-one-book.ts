import { Book } from "@/types";

export default async function fetchOneBook(
  id: string
): Promise<Book> {
  let url = `${process.env.NEXT_PUBLIC_API_SERVER_URL!}/book/${id}`;

  const data = await fetch(url);
  if (!data.ok) {
    throw new Error(data.statusText);
  }

  return await data.json();
}
