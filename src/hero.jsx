import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "./assets/logo.png";
import checkmark from "./assets/whitecheck.png";
import ScreenShot1 from "./assets/screenshot1.jpeg";
import ScreenShot2 from "./assets/screenshot2.jpeg";
import ScreenShot3 from "./assets/screenshot3.jpeg";
import ScreenShot4 from "./assets/screenshot4.jpeg";
import ScreenShot5 from "./assets/screenshot5.jpeg";
import ScreenShot6 from "./assets/screenshot6.jpeg";

function Hero() {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden bg-[linear-gradient(to_right,black_10%,#362417_35%,#362417_60%,black_100%)] px-5 md:px-8 min-h-screen py-13 text-center">
        {/* low-opacity background text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0.06 }}
        >
          <span className="font-head font-bold whitespace-nowrap text-white text-7xl md:text-[15vw] rotate-[-6deg]">
            SUMMER SALE
          </span>
        </div>

        <img
          src={logo}
          alt="Company Logo"
          className="relative size-35 mx-auto mb-4"
        />

        <div className="relative flex flex-col items-center justify-between gap-3">
          <h2 className="text-4xl md:text-6xl font-head font-bold mb-5">
            Emmpire Solutions
          </h2>
          <h1 className="text-xl md:text-2xl backdrop-blur-3xl border-[#F1DABF] w-fit border p-3  rounded-xl mb-4 font-body text-[#ffffff]">
            Reset your foundation. Elevate your future.
          </h1>

          <p className="text-lg md:text-xl leading-6 font-body text-neutral-300 max-w-xl">
            We work to remove negative items from your credit by leveraging your
            consumer rights.
          </p>

          {/* Free consultation dropdown */}
          <div className="w-full max-w-xl mt-6 text-left">
            <button
              onClick={() => setConsultOpen((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl bg-[#173420] border border-green-600"
            >
              <span className="font-semibold text-green-400 uppercase text-sm tracking-wide font-body">
                Free 15 min consultation available
              </span>
              <ChevronDown
                size={20}
                className={`text-green-400 transition-transform duration-300 ${
                  consultOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {consultOpen && (
              <div className="px-5 py-5 rounded-b-xl -mt-1 bg-black border border-green-600 border-t-0">
                <p className="text-sm mb-3 text-neutral-300 font-body">
                  Consultations are completely optional—many of our clients join
                  without ever booking a call because our results and reviews
                  speak for themselves. But if you'd like answers before getting
                  started, we've made it easier than ever to connect with our
                  team!
                </p>
                <p className="text-sm font-semibold mb-1 text-[#F1DABF] font-body">
                  • Questions about repairing your credit?
                </p>
                <p className="text-sm mb-4 text-neutral-300 font-body">
                  This is your chance to get clarity, confidence, and
                  direction—in just 15 minutes with our expert team. No charge,
                  no excuses.
                </p>

                <div className="px-4 py-3 rounded-lg mb-4 text-sm font-bold bg-[#3a1411] text-red-400 border border-red-500 font-body">
                  Must have my free core 7 days free trial account
                </div>

                <button className="w-full py-3 rounded-lg font-bold font-body text-sm uppercase bg-[#F1DABF] text-black hover:-translate-y-1 duration-300">
                  Book my free consultation
                </button>
              </div>
            )}
          </div>

          {/* Big CTA + small price */}
          <div className="mt-10 flex flex-col items-end gap-2 self-end">
            <button className="uppercase active:border active:border-white hover:-translate-y-1 duration-300 transition-all rounded-full font-body font-bold px-10 py-5 bg-[#F1DABF] text-black text-lg">
              Start Now
            </button>
            <span className="text-xs text-neutral-400 font-body">
              only $79 a month
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-8 py-10">
        <h1 className="text-3xl font-head md:5xl mb-1">What We Can Remove</h1>
        <p className="text-md md:text-xl leading-5 mb-5 text-neutral-200">
          We help challenge inaccurate, outdated, or unverifiable negative items
          that may be hurting your credit profile.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Foreclosures</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Collections</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Charge-Offs</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Student Loans</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Judgments</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Late Payments</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Medical Bills</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Repossessions</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Public Records</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Bankruptcies</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Child-Support</p>
          </div>
          <div className="rounded-lg flex flex-row gap-3  items-center px-3 py-3 bg-[#362417] border-[#F1DABF] text-[#F1DABF] border ">
            <img
              src={checkmark}
              alt="checkmark"
              className="rounded-full size-5 py-0.5 px-1 text-white border border-[#F1DABF]"
            />
            <p className="text-lg font-body font-bold">Hard Inquiries</p>
          </div>
        </div>

        <div className="flex justify-center sm:justify-start mt-8">
          <a
            href="#consultation"
            className="bg-[#F1DABF] active:scale-95 cursor-pointer px-8 py-4 rounded-full text-md uppercase font-bold font-body text-black hover:-translate-y-1 duration-300 transition-all inline-block"
          >
            Book my free consultation
          </a>
        </div>
      </div>

      <div className="bg-linear-to-r from-[black] to-[#2b1d13] px-5 md:px-8 py-10">
        <h1 className="text-3xl font-head md:text-5xl mb-7">
          Your 4-Step Process
        </h1>
        <div className="flex flex-col gap-5">
          <div className="border border-b-[#362417] border-t-[#362417] hover:shadow-md shadow-[#362417] rounded-lg px-5 md:px-9 py-8 md:py-10">
            <h1 className="text-5xl mb-3 opacity-30 font-body ">01</h1>
            <h2 className="text-xl md:text-2xl mb-4 uppercase font-bold font-body">
              Purchase your plan
            </h2>
            <a
              href="https://buy.stripe.com/dRm5kF2KsecA1pC6HRcfK09"
              target="_blank"
              className="text-md font-body text-neutral-300  hover:underline cursor-pointer active:scale-95"
            >
              Secure Your Spot and get started
            </a>
          </div>

          <div className="border border-b-[#362417] font-body border-t-[#362417] hover:shadow-md shadow-[#362417] rounded-lg px-5 md:px-9 py-8 md:py-10">
            <h1 className="text-5xl mb-3 opacity-30 font-body ">02</h1>
            <h2 className="text-xl md:text-2xl mb-2 uppercase font-bold font-body">
              Activate MyFreeScoreNow
            </h2>
            <h3 className="mb-4 text-[#F1DABF]">
              ($39/MONTH REQUIRED) — MANDATORY TO START YOUR SERVICE
            </h3>
            <p className="">. Must be activated immediately after purchase.</p>
            <p>. We cannot access or work your credit without it.</p>
            <p className="mt-2 mb-2 text-sm ">
              NO MYFREESCORENOW = NO SERVICE (ACCOUNT ON HOLD)
            </p>
            <div className="flex sm:justify-start justify-center">
              <a
                href="https://buy.stripe.com/dRm5kF2KsecA1pC6HRcfK09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#362417] active:scale-95 cursor-pointer px-5 mt-3 py-3 rounded-full text-md uppercase font-bold font-body text-[#F1DABF] hover:underline inline-block"
              >
                Pay $39 myfreescorenow fee
              </a>
            </div>
          </div>

          <div className="border border-b-[#362417] font-body border-t-[#362417] hover:shadow-md shadow-[#362417] rounded-lg px-5 md:px-9 py-8 md:py-10">
            <h1 className="text-5xl mb-3 opacity-30 font-body ">03</h1>
            <h2 className="text-xl md:text-2xl mb-2 uppercase font-bold font-body">
              Complete Onboarding + Submit Documents
            </h2>
            <h3>Check your email after purchase and complete onboarding.</h3>
            <div>
              <h1 className="mb-4 text-[#F1DABF]">
                REQUIRED DOCUMENTS (NON-NEGOTIABLE):
              </h1>
              <p className="">. Valid Government ID</p>
              <p>. Social Security Card or SSN</p>
              <p>. Proof of Address (dated within last 30 days)</p>
              <p className="mt-2 mb-2 text-[#F1DABF] text-sm ">
                NO MYFREESCORENOW = NO SERVICE (ACCOUNT ON HOLD)
              </p>
            </div>
          </div>

          <div className="border border-red-500 bg-red-500/10 font-body border-t-[#362417] hover:shadow-md shadow-[#362417] rounded-lg px-5 md:px-9 py-8 md:py-10">
            <h1 className="text-5xl mb-3 opacity-30 font-body ">04</h1>
            <h2 className="text-xl md:text-2xl mb-2 uppercase font-bold font-body">
              Action Plan + We Begin Your Disputes
            </h2>
            <h3>Once myfreescorenow is active and onboarding is complete:</h3>
            <p className="">. Your 1st round is sent out after onboarding</p>
            <p>. You receive 6 total rounds (unless on the Unlimited plan)</p>
            <p>. A new round is sent every 30–45 days</p>
            <p className="mt-2 mb-2 text-[#F1DABF] text-sm ">
              We handle the process — you focus on results
            </p>
          </div>

          <div className="border bg-red-500/10 border-red-500 font-body  hover:shadow-md shadow-[#362417] rounded-xl px-5 md:px-9 py-8 md:py-10">
            <h1 className="text-5xl mb-3 opacity-100 text-red-500 font-body ">
              !
            </h1>
            <h2 className="text-xl text-[#F1DABF] md:text-2xl mb-2 uppercase font-bold font-body">
              Important
            </h2>
            <h3>IF ANY STEP IS INCOMPLETE:</h3>
            <p className="mt-3">. MyFreeScoreNow not active</p>
            <p>. Onboarding not completed</p>
            <p>. Documents not submitted</p>
            <p className="mt-3 mb-2 text-[#F1DABF] text-md ">
              Your account will not be started.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] px-5 md:px-8 py-10">
        <h1 className="text-3xl font-head md:text-5xl mb-7">Client Success</h1>
        <div className="grid  md:grid-cols-3 items-center justify-center gap-5 ">
          <div className="overflow-hidden h-89 w-full border-[#F1DABF] flex justify-center items-center rounded-md text-center">
            <img
              src={ScreenShot1}
              className="w-full object-cover h-full object-center rounded-lg"
            />
          </div>
          <div className="border overflow-hidden h-90 w-full border-[#F1DABF] flex justify-center items-center rounded-md text-center">
            <img
              src={ScreenShot2}
              className="w-full object-cover h-full object-center rounded-lg"
            />
          </div>
          <div className="border overflow-hidden h-90 w-full border-[#F1DABF] flex justify-center items-center rounded-md text-center">
            <img
              src={ScreenShot3}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="border overflow-hidden h-90 w-full border-[#F1DABF] flex justify-center items-center rounded-md text-center">
            <img
              src={ScreenShot4}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="border overflow-hidden h-90 w-full border-[#F1DABF] flex justify-center items-center rounded-md text-center">
            <img
              src={ScreenShot5}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="border overflow-hidden h-90 w-full border-[#F1DABF] flex justify-center items-center rounded-md text-center">
            <img
              src={ScreenShot6}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="px-5 md:px-8 py-10">
        <div className="border px-5 flex flex-col gap-4 items-center py-6 rounded-xl">
          <h1 className="text-3xl font-head md:text-5xl mb-3">
            Ready To Start?
          </h1>
          <p className="text-center font-body md:text-lg">
            Get 3 months of credit disputes for $169 and start positioning your
            credit for your next move.
          </p>
          <a
            href="https://buy.stripe.com/dRm5kF2KsecA1pC6HRcfK09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F1DABF] active:scale-95 font-body mt-4 min-w-[60%] md:text-lg font-bold hover:text-[#362315] text-black py-2 px-4 rounded-full text-center inline-block"
          >
            Get started now
          </a>
        </div>
      </div>

      <div className="mt-6">
        <hr className="w-full mb-5 text-[#362417] h-0.5" />
        <p className="text-sm mb-3 text-center text-neutral-600 font-body ">
          © 2026 Emmpire Solutions. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Hero;
