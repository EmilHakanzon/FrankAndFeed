"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "./loadingSpinner";

export default function ProfilePageHeader() {
  const [isLoading, setIsLoading] = useState(true);

  // Mock data, will be fetched
  const user = {
    username: "username",
    bio: "This is my bio text",
    isOnline: true,
    avatar: null,
  };

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton Loading Component
  const ProfileSkeleton = () => (
    <section className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center space-x-4 w-full">
          {/* Avatar Skeleton */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gray-300 animate-pulse"></div>
          </div>

          {/* Username and Bio Skeleton */}
          <div className="flex-1">
            {/* Username skeleton */}
            <div className="h-5 bg-gray-300 rounded animate-pulse mb-2 w-32"></div>
            {/* Bio skeleton */}
            <div className="h-4 bg-gray-300 rounded animate-pulse w-48 mb-3"></div>
            {/* Stats skeleton */}
            <div className="flex space-x-6">
              <div className="h-3 bg-gray-300 rounded animate-pulse w-12"></div>
              <div className="h-3 bg-gray-300 rounded animate-pulse w-16"></div>
              <div className="h-3 bg-gray-300 rounded animate-pulse w-14"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProfileLoading = () => (
    <section className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <LoadingSpinner
          size="md"
          color="blue"
          showText={true}
          text="Loading profile..."
          className="py-12"
        />
      </div>
    </section>
  );

  // Show skeleton while loading
  if (isLoading) {
    return (
      <>
        <ProfileSkeleton />;
        <LoadingSpinner />
      </>
    );
  }

  // Actual Profile Component
  return (
    <section className="bg-white rounded-lg shadow-sm p-4 mb-6">
      {/* Profile Area */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center space-x-4 w-full">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={`${user.username} avatar`}
                  className="w-full h-full object-cover"
                />
              ) : (
                // Fallback avatar
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Login Status Indicator */}
            {user.isOnline && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-3 border-white rounded-full"></div>
            )}
          </div>

          {/* Username and Bio */}
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-gray-800 text-lg mb-1">
              {user.username}
            </h2>
            {user.bio && (
              <p className="text-base text-gray-600 leading-relaxed">
                "{user.bio}"
              </p>
            )}

            {/* Profile Stats - Optional Enhancement */}
            <div className="flex items-center space-x-6 mt-3 text-sm text-gray-500">
              <span>0 Posts</span>
              <span>0 Following</span>
              <span>0 Followers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
