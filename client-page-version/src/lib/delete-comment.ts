export default async function deleteComment(commentId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/comment/${commentId}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res;
}
