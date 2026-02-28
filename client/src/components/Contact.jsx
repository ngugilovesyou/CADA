import Footer from "./Footer";

export default function Contact() {
  return (
    <section className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-gradient-to-r from-blue-600 to-emerald-500" />
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Contact Us
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            We'd love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">

          <form id="contactForm" className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-950
                           px-4 py-3 text-sm
                           text-slate-800 dark:text-slate-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-950
                           px-4 py-3 text-sm
                           text-slate-800 dark:text-slate-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-950
                           px-4 py-3 text-sm
                           text-slate-800 dark:text-slate-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this regarding?"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-950
                           px-4 py-3 text-sm
                           text-slate-800 dark:text-slate-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Please enter your message here..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-950
                           px-4 py-3 text-sm
                           text-slate-800 dark:text-slate-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                id="submitBtn"
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl
                           bg-gradient-to-r from-blue-600 to-emerald-500
                           text-white font-semibold text-sm
                           shadow-md hover:shadow-lg
                           hover:scale-[1.01] active:scale-[0.98]
                           transition-all duration-200"
              >
                Send Message
              </button>
            </div>

            {/* Success */}
            <div
              id="successMessage"
              className="hidden mt-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800
                         bg-slate-50 dark:bg-slate-950 text-sm text-slate-700 dark:text-slate-300"
            >
              ✅ Your message has been sent successfully! We'll get back to you soon.
            </div>

            {/* Error */}
            <div
              id="errorMessage"
              className="hidden mt-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800
                         bg-slate-50 dark:bg-slate-950 text-sm text-slate-700 dark:text-slate-300"
            >
              ❌ There was an error sending your message. Please try again later.
            </div>

            <div id="debugInfo" className="hidden text-xs text-slate-400"></div>

          </form>
        </div>

        {/* Other Contact Methods */}
        <div className="mt-16 p-8 rounded-2xl border border-slate-200 dark:border-slate-800
                        bg-slate-50 dark:bg-slate-900 text-center">

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
            Other Ways to Reach Us
          </h3>

          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <p>
              <span className="font-medium text-slate-800 dark:text-slate-200">Email:</span>{" "}
              <a
                href="mailto:info@cada.co.ke"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                info@cada.co.ke
              </a>
            </p>

            <p>
              <span className="font-medium text-slate-800 dark:text-slate-200">Phone:</span>{" "}
              0722 443 336 / 0734 617 603
            </p>

            <p>
              <span className="font-medium text-slate-800 dark:text-slate-200">Address:</span>{" "}
              Westpark Suites, 1st Floor, Ojijo Road, Parklands, Nairobi
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </section>
  );
}