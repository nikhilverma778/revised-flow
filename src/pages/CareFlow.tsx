import { useState } from "react";
import axios from "axios";
import Step1AccountCheck from "../components/Step1AccountCheck";
import Step2CriticalIllness from "../components/Step2CriticalIllness";
import { HiShieldCheck, HiUserGroup } from "react-icons/hi2";
import { FaHeartbeat } from "react-icons/fa";
import { getCareDetails } from "../services/careFlowService";

export default function CareFlow() {
  const [data, setData] = useState({
    hasFlashaidAccount: null as boolean | null,
    mobile: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const [careDetails, setCareDetails] = useState<any>(null);

  const sendOtp = async (mobile: string) => {
    await axios.post(
      `https://flashaid-v3-dev-backened.flashaid.in/auth/v1/tirumala/generate-otp?phoneNumber=${mobile}`,
    );
  };

  const verifyOtp = async (mobile: string, otp: string): Promise<boolean> => {
    try {
      const response = await axios.post(
        `https://flashaid-v3-dev-backened.flashaid.in/auth/v1/tirumala/verify-otp?phoneNumber=+91${mobile}&otp=${otp}`,
      );

      const data = response.data;

      return (
        (typeof data === "object" && data?.type === "success") ||
        (typeof data === "string" && data.toLowerCase().includes("verified"))
      );
    } catch {
      return false;
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
        absolute
        -top-72
        -left-72
        h-[700px]
        w-[700px]
        rounded-full
        bg-yellow-500/5
        blur-[180px]
      "
        />

        <div
          className="
        absolute
        -bottom-72
        -right-72
        h-[700px]
        w-[700px]
        rounded-full
        bg-yellow-500/5
        blur-[180px]
      "
        />

        <div
          className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
        grid
        lg:grid-cols-[1.1fr_0.9fr]
        gap-10
        xl:gap-20
        min-h-screen
        py-8
        lg:py-12
        items-center
      "
        >
          {/* LEFT SIDE */}
          <div className="hidden lg:flex flex-col justify-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-yellow-500/50" />

                <p className="text-yellow-500 text-sm font-semibold uppercase tracking-[0.35em]">
                  Flashaid Care
                </p>
              </div>

              <h1
                className="
              text-5xl
              xl:text-6xl
              font-bold
              leading-[1.05]
              tracking-[-0.03em]
            "
              >
                Protect What
                <br />
                Matters Most
              </h1>

              <p
                className="
              mt-6
              text-lg
              text-zinc-400
              leading-relaxed
              max-w-xl
            "
              >
                Complete a secure verification to explore health protection
                options tailored to you and your family.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <div
                    className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-yellow-500/20
                  bg-yellow-500/10
                  text-yellow-500
                "
                  >
                    <HiShieldCheck size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Secure Verification
                    </h3>

                    <p className="mt-1 text-zinc-500">
                      OTP-based authentication keeps your information protected
                      throughout the process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-yellow-500/20
                  bg-yellow-500/10
                  text-yellow-500
                "
                  >
                    <FaHeartbeat size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Health Protection Plans
                    </h3>

                    <p className="mt-1 text-zinc-500">
                      Discover healthcare coverage options designed around
                      different needs and lifestyles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-yellow-500/20
                  bg-yellow-500/10
                  text-yellow-500
                "
                  >
                    <HiUserGroup size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Family First Approach
                    </h3>

                    <p className="mt-1 text-zinc-500">
                      Protection solutions built to support you and your loved
                      ones when it matters most.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-5">
                  <p className="text-3xl font-bold text-yellow-500">100%</p>

                  <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
                    Secure
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-5">
                  <p className="text-3xl font-bold text-yellow-500">2 Min</p>

                  <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
                    Quick Setup
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-5">
                  <p className="text-3xl font-bold text-yellow-500">24×7</p>

                  <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
                    Digital Access
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE HERO */}
          <div className="lg:hidden text-center py-6">
            <p className="text-yellow-500 text-sm font-semibold uppercase tracking-[0.35em]">
              Flashaid Care
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight">
              Protect What
              <br />
              Matters Most
            </h1>

            <p className="mt-4 text-zinc-400">
              Explore health protection options tailored for you and your family.
            </p>
          </div>

          {/* FORM SIDE */}
          <div
            className="
          flex
          items-center
          justify-center
          lg:justify-end
          w-full
        "
          >
            <div
              className="
            w-full
            max-w-[560px]
            lg:max-w-[520px]
            xl:max-w-[560px]
            max-h-[92vh]
            overflow-y-auto
          "
            >
              {currentStep === 1 && (
                <Step1AccountCheck
                  data={data}
                  setData={setData}
                  sendOtp={sendOtp}
                  verifyOtp={verifyOtp}
                  onOtpVerified={async () => {
                    try {
                      const response = await getCareDetails(data.mobile);

                      console.log("CARE DETAILS:", response);

                      setCareDetails(response);
                      setCurrentStep(2);
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                />
              )}

              {currentStep === 2 && (
                <Step2CriticalIllness
                  mobileNumber={data.mobile}
                  careDetails={careDetails}
                  onNext={() => {
                    setCurrentStep(3);
                  }}
                  onDrop={() => {
                    alert("User not eligible");
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
