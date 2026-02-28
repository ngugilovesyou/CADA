import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function MembershipStatus() {
  return (
    <>
    <section class="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
  <Navbar />
  <div class="max-w-4xl mx-auto px-5 sm:px-8 py-20 mt-5">

    {/* <!-- Header --> */}
    <div class="mb-14 max-w-2xl">
      <p class="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <span class="w-4 h-px bg-gradient-to-r from-blue-600 to-emerald-500"></span>
        Membership
      </p>

      <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
        Membership Status Inquiry
      </h1>

      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        Verify your CADA membership status quickly and securely.
      </p>
    </div>

    {/* <!-- Card Container --> */}
    <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">

      {/* <!-- Instructions --> */}
      <div class="mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          Instructions
        </h3>
        Please provide accurate details as they appear in your original registration.
        This allows us to verify your membership records effectively.
      </div>

      <form id="membershipForm" action="submit_inquiry.php" method="POST" class="space-y-6">

        <p class="text-xs text-slate-500 dark:text-slate-400">
          * Indicates required field
        </p>

        {/* <!-- ID Number --> */}
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            ID / Passport Number *
          </label>
          <input id="idNumber" name="idNumber" type="text" required
            placeholder="Enter your National ID or Passport number"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                   bg-white dark:bg-slate-950
                   px-4 py-3 text-sm
                   text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        {/* <!-- Email --> */}
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Email Address *
          </label>
          <input id="email" name="email" type="email" required
            placeholder="Enter your registered email address"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                   bg-white dark:bg-slate-950
                   px-4 py-3 text-sm
                   text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

          <button id="verifyEmailBtn" type="button"
            class="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                   bg-gradient-to-r from-blue-600 to-emerald-500
                   text-white text-sm font-semibold
                   shadow-md hover:shadow-lg
                   transition">
            Send Verification Code
          </button>
        </div>

        {/* <!-- Verification Section --> */}
        <div id="verificationSection" class="hidden border-t border-slate-200 dark:border-slate-800 pt-8">

          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Email Verification
          </h3>

          <div id="emailSentNotice"
            class="hidden mb-4 text-sm text-slate-600 dark:text-slate-400">
            ✓ Verification code sent. Please check your inbox.
          </div>

          <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">
            Enter the 6-digit verification code sent to your email:
          </p>

          <div id="timerDisplay"
            class="text-xs font-medium text-blue-600 dark:text-blue-400 mb-4">
            This code will expire in 5:00
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <input id="otpCode" maxlength="6" name="otpCode" type="text"
              placeholder="Enter 6-digit code"
              class="flex-1 rounded-xl border border-slate-200 dark:border-slate-700
                     bg-white dark:bg-slate-950
                     px-4 py-3 text-sm
                     text-slate-800 dark:text-slate-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

            <button id="verifyOtpBtn" type="button"
              class="inline-flex justify-center items-center px-5 py-3 rounded-xl
                     bg-gradient-to-r from-blue-600 to-emerald-500
                     text-white text-sm font-semibold
                     shadow-md hover:shadow-lg transition">
              Verify Code
            </button>
          </div>

          <div id="verificationMessage" class="mt-3 text-sm"></div>
        </div>

        {/* <!-- Declaration --> */}
        <div class="mt-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Declaration and Consent
          </h3>

          <p class="mb-4">
            I consent to the processing of my personal information for the sole
            purpose of verifying my political party membership status, in accordance
            with the Data Protection Act, 2019.
          </p>

          <div class="flex items-start gap-3">
            <input id="consent" name="consent" required type="checkbox"
              class="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600
                     text-blue-600 focus:ring-blue-500" />
            <label for="consent" class="text-sm">
              I agree to the above declaration and consent to the processing
              of my personal data for membership verification purposes.
            </label>
          </div>
        </div>

        {/* <!-- Submit --> */}
        <div class="pt-6">
          <button id="submitBtn" type="submit" disabled
            class="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl
                   bg-gradient-to-r from-blue-600 to-emerald-500
                   text-white font-semibold text-sm
                   shadow-md hover:shadow-lg
                   transition disabled:opacity-50">
            Check Membership Status
          </button>
        </div>

        {/* <!-- Success Message --> */}
        <div id="successMessage"
          class="hidden mt-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        </div>

      </form>
    </div>

    {/* <!-- Footer Note --> */}
    <div class="mt-16 text-center text-xs text-slate-400 dark:text-slate-500">
      <p class="font-semibold text-slate-700 dark:text-slate-300">
        CADA - Citizens Alliance for Democratic Affairs
      </p>
      <p>© 2025 All rights reserved | Protecting Your Privacy</p>
    </div>

  </div>
  <Footer />
</section>
    </>
  )
}

export default MembershipStatus