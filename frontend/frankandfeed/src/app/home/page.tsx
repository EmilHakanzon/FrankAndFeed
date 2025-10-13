import PostCard from "@/components/PostCard";
//import { useEffect, useState } from "react";

interface Post {
  id: number;
  createdAt: string;
  author: {
    username: string;
    avatarUrl: string;
  };
  body: string;
  likedBy: string[];
}

export default function HomePage() {
  //dummy-data (senare hämtas via API)
  const feedData = [
    {
      username: "Monster name",
      avatar: "/monster.png",
      image: "/feed1.png",
    },
    {
      username: "Monster name",
      avatar: "/monster.png",
      image: "/feed2.png",
    },
  ]; // ska bytas ut mot fetch senare när backend är klar

  /*
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const res = await fetch("api_url", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Unable to fetch posts.");

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Something went wrong while fetching the feed.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);
  */

  /*
  // Loading och error states
  if (isLoading) {
    return (
      <div className="text-center text-gray-500 py-10 animate-pulse">
        Loading feed...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        {error}
        <button
          onClick={() => window.location.reload()}
          className="ml-2 text-blue-600 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No posts found
      </div>
    );
  }
  */

  return (
    <div>
      {/*filter komponent */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 text-gray-500 text-sm text-center">
        Filter-komponent kommer här senare
      </div>

      {/*postCard */}
      {feedData.map((post, i) => (
        <PostCard key={i} {...post} />
      ))}

      {/*rendering 
      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.author.username}
          avatar={post.author.avatarUrl}
          image={post.body}
        />
      ))}
      */}
    </div>
  );
}