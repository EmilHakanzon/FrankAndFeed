"use client";

import ProfilePageHeader from "@/components/ProfilePageHeader";

export default function ProfilePage() {
  return (
    <div>
      <ProfilePageHeader />

      {/* Profile Actions */}
      <section className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium">
            Edit Profile
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
            Settings
          </button>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h3 className="font-semibold text-gray-800 text-lg mb-4">
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
            <span className="text-gray-600">No recent activity</span>
            <span className="text-sm text-gray-400">-</span>
          </div>
        </div>
      </section>

      {/* My Posts */}
      <section className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h3 className="font-semibold text-gray-800 text-lg mb-4">My Posts</h3>
        <div className="text-center py-8 text-gray-500">
          <p>You haven't created any posts yet</p>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Create Your First Post
          </button>
        </div>
      </section>
    </div>
  );
}
