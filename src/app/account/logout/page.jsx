"use client";

import { Beer } from "lucide-react";
import useAuth from "@/utils/useAuth";

export default function LogoutPage() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <header className="bg-[#2C1810] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Beer size={32} className="text-[#F59E0B]" />
            <h1 className="text-2xl font-bold font-merriweather">
              BrewMaster Admin
            </h1>
          </div>
        </div>
      </header>

      {/* Sign Out Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-[#2C1810] mb-6 font-merriweather">
            Sign Out
          </h2>

          <p className="text-gray-600 mb-8">
            Are you sure you want to sign out of your admin account?
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleSignOut}
              className="w-full bg-[#F59E0B] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 transition-colors"
            >
              Sign Out
            </button>

            <a
              href="/admin"
              className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors text-center block"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
