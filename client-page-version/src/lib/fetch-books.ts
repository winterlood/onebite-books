import { BookListItem } from "@/types";

export default async function fetchBooks(
  category?: "FE" | "BE"
): Promise<BookListItem[]> {
  let url = `${process.env.NEXT_PUBLIC_API_SERVER_URL!}/book`;
  if (category) {
    url += `?category=${category}`;
  }

  const data = await fetch(url);
  if (!data.ok) {
    throw new Error(data.statusText);
  }

  return await data.json();
}
