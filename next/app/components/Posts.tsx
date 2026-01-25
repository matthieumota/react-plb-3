export default async function Posts() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
