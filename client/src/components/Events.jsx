import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Event() {
  const [activeTab, setActiveTab] = useState("events");

  const upcomingEvents = [
    {
      title: "National Membership Drive",
      date: "Mar 10, 2026",
      location: "Nairobi Convention Center",
      description: "Join us to engage with party leadership and learn how to contribute to national development.",
    },
    {
      title: "Community Outreach Program",
      date: "Apr 5, 2026",
      location: "Kisumu Town Hall",
      description: "Participate in grassroots initiatives and meet local leaders.",
    },
  ];

  const gallery = [
    { type: "image", src: "/gallery1.jpg", alt: "CADA Event 1" },
    { type: "image", src: "/gallery2.jpg", alt: "CADA Event 2" },
    { type: "video", src: "/event_highlight.mp4", alt: "CADA Video Highlight" },
  ];

  const news = [
    { title: "New Membership Drive Launched", date: "Feb 15, 2026", description: "CADA invites citizens to join and participate in shaping the nation's development agenda." },
    { title: "Upcoming National Event", date: "Mar 10, 2026", description: "Join us at the Nairobi Convention Center for discussions on democratic engagement and policy development." },
  ];

  const downloads = [
    { name: "CADA Privacy Policy", link: "https://cada.co.ke/CADA_PRIVACY_POLICY.pdf" },
    { name: "CADA Manifesto", link: "https://cada.co.ke/CADA_MANIFESTO.pdf" },
    { name: "CADA Draft Ideology", link: "https://cada.co.ke/CADA_DRAFT_IDEOLOGY.pdf" },
    { name: "CADA Aspirant Form", link: "https://cada.co.ke/CADA%20ASPIRANT%20FORM.pdf" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "events":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="p-6 border rounded-2xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{event.date} — {event.location}</p>
                <p className="mt-2 text-slate-700 dark:text-slate-300">{event.description}</p>
              </div>
            ))}
          </div>
        );

      case "gallery":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, idx) =>
              item.type === "image" ? (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover rounded-2xl border border-slate-200 dark:border-slate-800"
                />
              ) : (
                <video
                  key={idx}
                  src={item.src}
                  controls
                  className="w-full h-64 rounded-2xl border border-slate-200 dark:border-slate-800"
                />
              )
            )}
          </div>
        );

      case "news":
        return (
          <div className="space-y-6">
            {news.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.date}</p>
                <p className="text-slate-700 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        );

      case "downloads":
        return (
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            {downloads.map((doc, idx) => (
              <li key={idx}>
                <a
                  href={doc.link}
                  download
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <div className=" bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
     <Navbar />
      {/* Header */}
      <header className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between mt-10">
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-1">Citizens Alliance for Democratic Affairs</h1>
          <h3 className="text-lg italic text-slate-500 dark:text-slate-400">Siasa za Maendeleo</h3>
        </div>
        <a href="https://www.cada.co.ke" target="_parent" rel="noopener noreferrer">
          <img src="assets/Logo.jpg" alt="CADA Logo" className="w-40 h-auto mt-6 sm:mt-0" />
        </a>
      </header>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {["events", "gallery", "news", "downloads"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl font-semibold transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-emerald-500 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-16">{renderTabContent()}</div>
      </div>

      <Footer />
    </div>
  );
}