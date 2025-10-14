import Image from "next/image";
import useLikeLogic from "@/hooks/LikeButtonLogic";

  interface PostCardProps {
  id: number;
  createdAt: string;
  authorID: number;
  username: string;
  avatar: string;
  body?: string;
  image?: string;
  likedBy: string[];
  children?: string[];
}

export default function PostCard({
  username, 
  avatar, 
  body, 
  image,
  likedBy = [],
  createdAt,
}: PostCardProps) {

   const { isLiked, likeCount, handleLike } = useLikeLogic({
    initialLikes: likedBy.length,
  });


  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      
      {/*profil med tid*/}
      <div className="flex items-center space-x-3 mb-3">
        <Image
          src={"/profileIcon.png" || avatar  }
          alt={`${username} avatar`}
          width={80}
          height={75}
          className="rounded-full object-cover"
        />
        <div>
          <span className="font-semibold text-gray-500">{username}</span>
         <p className="text-sm text-gray-400">
            {createdAt && !isNaN(new Date(createdAt).getTime())
              ? new Date(createdAt).toLocaleString("sv-SE", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })
              : "Unknown date"}
          </p>
        </div>
      </div>

      {/*text body */} 
      {body && (
          <p className="text-gray-700 mb-3 whitespace-pre-line">{body}</p>
        )}

      {/* bild body */}
      {image && (
        <div className="overflow-hidden rounded-lg">
          <Image
            src={image}
            alt="Post image"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
      )}

      {/* like räknare */}
      <div className="flex items-center mt-4">
        {isLiked && (
          <Image
            src="/Like.png"
            alt="Liked icon"
            width={25}
            height={25}
            className="animate-pulse"
          />
        )}
        <span className="text-blue-600 text-sm">
          {likeCount > 0 ? `${likeCount} ${likeCount === 1 ? " " : " "}` : ""}
        </span>
      </div>

      {/*interaktionsfält */}
      <div className="flex justify-around text-gray-500 mt-3 border-t border-gray-300 pt-2">
        <button
          onClick={handleLike}
          className="flex items-center gap-1 rounded-lg px-1 py-1 transition-all duration-200 hover:bg-gray-100"
        >
          <Image
            src="/likeIcon.png"
            alt="Like icon"
            width={30}
            height={30}
            className="opacity-80 hover:opacity-100"
          />
          <span className={isLiked ? "text-blue-600 font-semibold" : ""}>
            Like
          </span>
        </button>

        <button className="flex items-center gap-1 rounded-lg px-1 py-1 transition-all duration-200 hover:bg-gray-100">
          <Image
            src="/commentIcon.png"
            alt="Comment icon"
            width={30}
            height={30}
            className="opacity-80 hover:opacity-100"
          />
          <span>Comment</span>
        </button>

        <button className="flex items-center gap-1 rounded-lg px-1 py-1 transition-all duration-200 hover:bg-gray-100">
          <Image
            src="/shareIcon.png"
            alt="Share icon"
            width={30}
            height={30}
            className="opacity-80 hover:opacity-100"
          />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}