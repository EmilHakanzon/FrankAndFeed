import Image from "next/image";

interface PostCardProps {
  username: string;
  avatar: string;
  image: string;
}
  {/*
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
  */}

export default function PostCard({ username, avatar, image }: PostCardProps) { //byter ut sen till  author, body, likedBy, createdAt enligt design bibel
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      {/*profil*/}
      <div className="flex items-center space-x-3 mb-3">
        <Image
          src="/profileIcon.png" //{author.avatarUrl || "/profileIcon.png"}
          alt="Profile icon"     //{`${author.username} avatar`}
          width={80}
          height={75}
          className="rounded-full"
        />
        <span className="font-semibold text-gray-500">{username}</span>
        {/*   
        <div>
          <span className="font-semibold text-gray-800">{author.username}</span>
          <p className="text-xs text-gray-400">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div> 
        */}
      </div>

      {/*post body */} 
      {/*byt ut allt med <p className="text-gray-700 mb-3">{body}</p>*/}
      <div className="overflow-hidden pb-6">
        <Image
          src={image} //feedbild
          alt="feed post"
          width={600}
          height={400}
          className="w-full object-cover"
        />
      </div>

      {/*interaktionsfält */}
      <div className="flex justify-around text-gray-500 mt-3 border-t border-gray-300 pt-2">
       <button className="flex items-center gap-1 rounded-lg px-1 py-1 transition-all duration-200 hover:bg-gray-100">
          <Image
            src="/likeIcon.png"
            alt="Like icon"
            width={30}
            height={30}
            className="opacity-80 hover:opacity-100"
          />
          <span>Like</span> {/*byt ut till <span>{likedBy.length} Likes</span> */}
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