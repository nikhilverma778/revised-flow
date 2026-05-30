import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

interface Props {
  data: {
    hasFlashaidAccount: boolean | null;
    mobile: string;
  };

  setData: (data: any) => void;

  sendOtp: (mobile: string) => Promise<void>;
  verifyOtp: (mobile: string, otp: string) => Promise<boolean>;

  onOtpVerified: () => void;
}

const inputClass = `
w-full
bg-zinc-950
border
border-zinc-700
rounded-xl
px-4
py-3
text-white
placeholder:text-zinc-500
focus:outline-none
focus:ring-2
focus:ring-yellow-500/40
focus:border-yellow-500
focus:shadow-[0_0_25px_rgba(234,179,8,0.15)]
transition-all
`;

const Step1AccountCheck: React.FC<Props> = ({
  data,
  setData,
  sendOtp,
  verifyOtp,
  onOtpVerified,
}) => {
  const [showOtp, setShowOtp] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(6).fill(""));

  const [otpError, setOtpError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [sendingOtp, setSendingOtp] = useState(false);

  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const [resendTimer, setResendTimer] = useState(0);

  const mobileRegex = /^[6-9]\d{9}$/;

  useEffect(() => {
    if (resendTimer <= 0) return;

    const timer = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTimer]);

  useEffect(() => {
    const otp = otpDigits.join("");

    if (otp.length === 6) {
      handleVerifyOtp(otp);
    }
  }, [otpDigits]);

  const validate = () => {
    if (data.hasFlashaidAccount === null) {
      return false;
    }

    if (!data.mobile) {
      setMobileError("Mobile number is required");
      return false;
    }

    if (!mobileRegex.test(data.mobile)) {
      setMobileError("Enter a valid 10 digit mobile number");
      return false;
    }

    setMobileError("");
    return true;
  };

  const handleContinue = async () => {
    if (!validate()) return;

    try {
      setSendingOtp(true);
      setOtpError("");

      await sendOtp(data.mobile);

      setShowOtp(true);
      setResendTimer(30);

      setTimeout(() => {
        document.getElementById("otp-0")?.focus();
      }, 100);
    } catch {
      setOtpError("Failed to send OTP");
    } finally {
      setSendingOtp(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    try {
      setVerifyingOtp(true);
      setOtpError("");

      const success = await verifyOtp(data.mobile, otp);

      if (success) {
        onOtpVerified();
      } else {
        setOtpError("Invalid OTP");
        setOtpDigits(Array(6).fill(""));

        setTimeout(() => {
          document.getElementById("otp-0")?.focus();
        }, 50);
      }
    } catch {
      setOtpError("OTP verification failed");
      setOtpDigits(Array(6).fill(""));

      setTimeout(() => {
        document.getElementById("otp-0")?.focus();
      }, 50);
    } finally {
      setVerifyingOtp(false);
    }
  };

  

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
relative
overflow-hidden
bg-zinc-900/90
border
border-zinc-800
rounded-3xl
p-5
sm:p-6
md:p-8
shadow-2xl
shadow-black/50
backdrop-blur-xl
"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        Flashaid Care
      </h1>

      <p className="text-zinc-400 leading-relaxed mb-8">
        Let's verify your mobile number to continue.
      </p>

      {/* Account Question */}
      <div className="mb-8">
        <label className="block text-lg font-medium mb-4">
          Do you have a Flashaid account?
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() =>
              setData({
                ...data,
                hasFlashaidAccount: true,
              })
            }
            className={`p-4 rounded-xl border transition ${
              data.hasFlashaidAccount === true
                ? "bg-yellow-500/10 border-yellow-500 text-yellow-500 shadow-lg shadow-yellow-500/10 font-semibold"
                : "border-zinc-700 hover:border-zinc-500"
            }`}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() =>
              setData({
                ...data,
                hasFlashaidAccount: false,
              })
            }
            className={`p-4 rounded-xl border transition ${
              data.hasFlashaidAccount === false
                ? "bg-yellow-500/10 border-yellow-500 text-yellow-500 shadow-lg shadow-yellow-500/10 font-semibold"
                : "border-zinc-700 hover:border-zinc-500"
            }`}
          >
            No
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">
          Mobile Number
        </label>

        <div className="relative">
          <span
            className="
absolute
left-4
top-1/2
-translate-y-1/2
text-zinc-500
font-medium
"
          >
            +91
          </span>

          <input
            type="tel"
            placeholder="Enter mobile number"
            value={data.mobile}
            disabled={showOtp}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 10);

              setData({
                ...data,
                mobile: value,
              });
            }}
            className={`${inputClass} pl-14 ${
              showOtp ? "opacity-60 cursor-not-allowed" : ""
            }`}
          />
        </div>

        {mobileError && (
          <p className="text-red-500 text-sm mt-2">{mobileError}</p>
        )}
      </div>

      <AnimatePresence>
        {showOtp && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="mt-8 border-t border-zinc-800 pt-6"
          >
            <div
              className="
mb-5
rounded-xl
border
border-zinc-800
bg-zinc-800/30
px-4
py-3
backdrop-blur-sm
"
            >
              <p className="text-sm text-zinc-300">
                We've sent an OTP to +91 {data.mobile}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              {otpDigits.map((digit, index) => (
                <input
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                  key={index}
                  id={`otp-${index}`}
                  value={digit}
                  maxLength={1}
                  className="
w-11
h-11
sm:w-12
sm:h-12
md:w-14
md:h-14
bg-zinc-800/80
border
border-zinc-700
rounded-xl
sm:rounded-2xl
text-center
text-base
md:text-lg
font-semibold
text-white
outline-none
ring-0
focus:outline-none
focus:ring-0
focus:border-yellow-500
focus:shadow-[0_0_25px_rgba(234,179,8,0.15)]
transition-all
duration-200
"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 1);

                    const copy = [...otpDigits];
                    copy[index] = value;

                    setOtpDigits(copy);

                    if (value && index < 5) {
                      document.getElementById(`otp-${index + 1}`)?.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                      e.preventDefault();

                      const copy = [...otpDigits];

                      if (copy[index]) {
                        copy[index] = "";
                      } else if (index > 0) {
                        copy[index - 1] = "";

                        document.getElementById(`otp-${index - 1}`)?.focus();
                      }

                      setOtpDigits(copy);
                    }
                  }}
                />
              ))}
            </div>

            {otpError && (
              <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 backdrop-blur-sm px-4 py-3">
                <p className="text-sm text-red-300">{otpError}</p>
              </div>
            )}

            {verifyingOtp && (
              <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-3">
                <p className="text-sm text-yellow-300">Verifying OTP...</p>
              </div>
            )}

            <div className="mt-4">
              <button
                disabled={resendTimer > 0 || sendingOtp}
                onClick={async () => {
                  await sendOtp(data.mobile);
                  setResendTimer(30);
                }}
                className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      border
      border-yellow-500/20
      bg-yellow-500/10
      text-yellow-400
      text-sm
      font-medium
      backdrop-blur-sm
      hover:bg-yellow-500/15
      transition-all
      disabled:opacity-50
    "
              >
                {resendTimer > 0
                  ? `Resend OTP in ${resendTimer}s`
                  : "Resend OTP"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showOtp && (
        <div className="flex justify-stretch sm:justify-end mt-8">
          <button
            onClick={handleContinue}
            disabled={data.hasFlashaidAccount === null || sendingOtp}
            className="
w-full
sm:w-auto
px-6
py-3
bg-yellow-500
hover:bg-yellow-400
text-black
font-semibold
rounded-xl
transition-all
duration-200
shadow-lg
shadow-yellow-500/20
hover:shadow-yellow-500/30
disabled:opacity-50
"
          >
            <div className="flex items-center justify-center gap-2">
              {sendingOtp ? "Sending OTP..." : "Verify"}

              {!sendingOtp && <HiArrowRight />}
            </div>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Step1AccountCheck;
