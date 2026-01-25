import { Suspense } from "react";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <>
      <h1>Blog Posts</h1>
      <Suspense fallback={<div>Loading posts...</div>}>
        <Posts />
      </Suspense>
    </>
  )
}
