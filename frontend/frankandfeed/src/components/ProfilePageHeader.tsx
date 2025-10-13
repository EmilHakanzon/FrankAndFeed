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
    <section className="absolute top-23 left-1/4 rounded-b-lg shadow-md w-2xl mx-auto bg-white">
      <div className="bg-gray-50 p-4">
        <div className="flex items-center space-x-3">
          {/* Avatar Skeleton */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
          </div>

          {/* Username and Bio Skeleton */}
          <div className="flex-1">
            {/* Username skeleton */}
            <div className="h-4 bg-gray-300 rounded animate-pulse mb-2 w-20"></div>
            {/* Bio skeleton */}
            <div className="h-3 bg-gray-300 rounded animate-pulse w-32"></div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProfileLoading = () => (
    <section className="absolute top-23 left-1/4 rounded-b-lg shadow-md w-2xl mx-auto bg-white">
      <div className="bg-gray-50 p-4">
        <LoadingSpinner
          size="md"
          color="blue"
          showText={true}
          text="Loading profile..."
          className="py-8"
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
    <section className="absolute top-23 left-1/4 rounded-b-lg shadow-md w-2xl mx-auto bg-white ">
      {/* Profile Area */}
      <div className="bg-gray-50 p-4">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
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
                    className="w-5 h-5 text-white"
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
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>

          {/* Username */}
          <div>
            <h2 className="font-medium text-gray-800 text-sm">
              {user.username}
            </h2>
            {user.bio && (
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                "{user.bio}"
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
