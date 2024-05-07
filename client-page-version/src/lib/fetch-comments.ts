import { Comment } from "@/types";

export async function fetchComments(
  bookId: string
): Promise<Comment[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/comment/book/${bookId}`
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}
