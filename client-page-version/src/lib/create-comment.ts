export default async function createComment(data: {
  bookId: string;
  content: string;
  author: string;
}) {
  console.log(data);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/comment`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  console.log(res);
  return await res.json();
}
