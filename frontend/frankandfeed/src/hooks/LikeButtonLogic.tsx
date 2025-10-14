"use client";
import { useState } from "react";

interface LikeButtonProps {
  initialLikes?: number;
}

export default function useLikeLogic({ initialLikes = 0 }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  return { isLiked, likeCount, handleLike };
}