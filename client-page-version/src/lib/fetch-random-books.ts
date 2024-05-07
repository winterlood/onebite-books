import { BookListItem } from "@/types";

export default async function fetchRandomBooks(): Promise<
  BookListItem[]
> {
  let url = `${process.env.NEXT_PUBLIC_API_SERVER_URL!}/book/random`;

  const data = await fetch(url);
  if (!data.ok) {
    throw new Error(data.statusText);
  }

  return await data.json();
}
