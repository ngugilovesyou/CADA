import React from "react";
import { CircleAlert } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 w-full">

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">

          {/* Gradient Accent Line */}
          <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <CircleAlert
                size={64}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
          </div>

          {/* 404 */}
          <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-slate-900 dark:text-white">
            404
          </h1>

          <p className="mt-6 text-lg font-semibold text-slate-700 dark:text-slate-300">
            Page Not Found
          </p>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            The page you're looking for may have been moved, deleted, 
            or the URL might be incorrect.
          </p>

          {/* Button */}
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
                         bg-gradient-to-r from-blue-600 to-emerald-500
                         text-white font-semibold text-sm tracking-wide
                         shadow-md hover:shadow-lg
                         hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-200"
            >
              Go Back Home
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ErrorPage;