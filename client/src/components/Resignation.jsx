import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Resignation() {
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
        CADA Membership Resignation
      </h1>

      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        Secure and verified resignation process.
      </p>
    </div>

    {/* <!-- Info Notice --> */}
    <div class="mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
      At the Citizens Alliance for Democratic Affairs (CADA), we respect your right to voluntarily resign.
      Your status will <strong class="text-slate-800 dark:text-slate-200">only be removed after you personally confirm your resignation request</strong>.
      This ensures no one can withdraw your membership without your explicit consent.
    </div>

    {/* <!-- Form Card --> */}
    <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">

      <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-8">
        Online Resignation Form
      </h2>

      <form id="resignationForm" class="space-y-6">

        {/* <!-- Full Name --> */}
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Full Name
          </label>
          <input id="fullName" name="fullName" type="text" required
            placeholder="Enter your full name"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                   bg-white dark:bg-slate-950
                   px-4 py-3 text-sm
                   text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        {/* <!-- ID Number --> */}
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            National ID / Passport Number
          </label>
          <input id="idNumber" name="idNumber" type="text" required
            placeholder="Enter your ID or passport number"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                   bg-white dark:bg-slate-950
                   px-4 py-3 text-sm
                   text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        {/* <!-- Email --> */}
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Email Address
          </label>
          <input id="email" name="email" type="email" required
            placeholder="Enter the exact email used during registration"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                   bg-white dark:bg-slate-950
                   px-4 py-3 text-sm
                   text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

          <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Must match exactly the email used during registration.
          </p>

          <button id="sendOtpBtn" type="button"
            class="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                   bg-gradient-to-r from-blue-600 to-emerald-500
                   text-white text-sm font-semibold
                   shadow-md hover:shadow-lg
                   transition disabled:opacity-50">
            Verify Registered Email
          </button>
        </div>

        {/* <!-- OTP Section --> */}
        <div id="otpSection" class="hidden border-t border-slate-200 dark:border-slate-800 pt-8">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Email Verification
          </h3>

          <input id="otpCode" maxlength="6" type="text"
            placeholder="Enter 6-digit verification code"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                   bg-white dark:bg-slate-950
                   px-4 py-3 text-sm
                   text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

          <button id="verifyOtpBtn" type="button"
            class="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                   bg-gradient-to-r from-blue-600 to-emerald-500
                   text-white text-sm font-semibold
                   shadow-md hover:shadow-lg transition">
            Verify Code
          </button>

          <div id="otpMessage" class="mt-3 text-sm"></div>
        </div>

        {/* <!-- Phone --> */}
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" required
            placeholder="Enter your phone number"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                   bg-white dark:bg-slate-950
                   px-4 py-3 text-sm
                   text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        {/* <!-- Reason --> */}
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Reason for Resignation (Optional)
          </label>
          <textarea id="reason" rows="4"
            placeholder="Share your reason (optional)"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                   bg-white dark:bg-slate-950
                   px-4 py-3 text-sm
                   text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition"></textarea>
        </div>

        {/* <!-- Timeline Box --> */}
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          <strong class="text-slate-800 dark:text-slate-200">
            Your resignation will be automatically processed within 7 business days
          </strong>
          if no action is taken by the party administration.
        </div>

        {/* <!-- Confirmation --> */}
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          By submitting this form, I request to resign my membership from CADA effective immediately.
          I understand that my membership will be processed within 7 business days.
        </div>

        {/* <!-- Submit --> */}
        <div class="pt-6">
          <button id="submitBtn" type="submit"
            class="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl
                   bg-gradient-to-r from-blue-600 to-emerald-500
                   text-white font-semibold text-sm
                   shadow-md hover:shadow-lg
                   transition disabled:opacity-50">
            Submit Resignation Request
          </button>
        </div>

      </form>
    </div>

    {/* <!-- ORPP Section --> */}
    <div class="mt-16 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Other Ways to Resign
      </h3>
      <p>
        Resignation is also possible through the ORPP's official USSD code (*509#)
        or via their online portal at
        <a href="https://orpp.or.ke/"
           class="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-1">
           https://orpp.or.ke/
        </a>.
      </p>
    </div>

  </div>
  <Footer />
</section>
   </>
  )
}

export default Resignation