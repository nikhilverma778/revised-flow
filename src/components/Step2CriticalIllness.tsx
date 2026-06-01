import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi2";
import { ImSpinner2 } from "react-icons/im";

import { saveDiseaseStatus } from "../services/careFlowService";

interface Props {
  mobileNumber: string;
  careDetails: any;
  onNext: () => void;
  onDrop: () => void;
}

export default function Step2CriticalIllness({
  mobileNumber,
  careDetails,
  onNext,
  onDrop,
}: Props) {
  const illnessStatus = careDetails?.criticalIllness;

  if (illnessStatus === false) {
    return <EligibilityVerifiedCard onNext={onNext} />;
  }

  if (illnessStatus === null) {
    return (
      <NewUserQuestionCard
        mobileNumber={mobileNumber}
        onNext={onNext}
        onDrop={onDrop}
      />
    );
  }

  if (illnessStatus === true) {
    return (
      <ExistingCriticalIllnessCard
        mobileNumber={mobileNumber}
        onNext={onNext}
        onDrop={onDrop}
      />
    );
  }
}

function EligibilityVerifiedCard({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
    relative
    overflow-hidden
    
    rounded-[30px]

    border
    border-green-500/10

    bg-zinc-900/90
    backdrop-blur-xl

    p-7
    sm:p-8

    text-center

    shadow-[0_20px_80px_rgba(0,0,0,0.45)]
    "
    >
      {/* Top Glow Line */}
      <div
        className="
      absolute
      top-0
      inset-x-0
      h-px
      bg-gradient-to-r
      from-transparent
      via-green-500/70
      to-transparent
      "
      />

      {/* Success Icon */}
      <motion.div
        initial={{
          scale: 0.8,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
      relative
      mx-auto

      h-14
      w-14

      rounded-2xl

      border
      border-green-500/20

      bg-green-500/10

      flex
      items-center
      justify-center

      text-green-400
      "
      >
        <HiShieldCheck size={24} />

        <motion.div
          animate={{
            scale: [1, 1.5],
            opacity: [0.25, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
        absolute
        inset-0

        rounded-2xl

        border
        border-green-500/20
        "
        />
      </motion.div>

      {/* Heading */}
      <h2 className="mt-6 text-3xl font-bold tracking-tight">
        Eligibility Verified
      </h2>

      <p className="mt-3 text-zinc-400">
        You're eligible to continue with Flashaid Care.
      </p>

      {/* Status Badge */}
      <div
        className="
      mt-5

      inline-flex
      items-center
      gap-2

      rounded-full

      border
      border-green-500/20

      bg-green-500/10

      px-3
      py-1.5

      text-xs
      font-medium

      text-green-300
      "
      >
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        Verification Complete
      </div>

      {/* Progress */}
      <div
        className="
      mt-6

      h-1.5

      w-full

      rounded-full

      bg-zinc-800

      overflow-hidden
      "
      >
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="
        h-full

        rounded-full

        bg-gradient-to-r
        from-green-500
        to-yellow-500
        "
        />
      </div>

      <p className="mt-3 text-xs text-zinc-500">
        Redirecting to the next step...
      </p>
    </motion.div>
  );
}

function NewUserQuestionCard({
  mobileNumber,
  onNext,
  onDrop,
}: {
  mobileNumber: string;
  onNext: () => void;
  onDrop: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleAnswer = async (hasIllness: boolean) => {
    try {
      setLoading(true);

      await saveDiseaseStatus(mobileNumber, hasIllness);

      if (hasIllness) {
        onDrop();
      } else {
        onNext();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
    relative
    overflow-hidden

    rounded-[30px]

    border
    border-yellow-500/10

    bg-zinc-900/90
    backdrop-blur-xl

    p-7
    sm:p-8

    shadow-[0_20px_80px_rgba(0,0,0,0.45)]

    w-full
    "
    >
      {/* Top Glow */}
      <div
        className="
      absolute
      inset-x-0
      top-0
      h-px
      bg-gradient-to-r
      from-transparent
      via-yellow-500/70
      to-transparent
      "
      />

      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className="
        relative

        h-14
        w-14

        rounded-2xl

        border
        border-yellow-500/20

        bg-yellow-500/10

        flex
        items-center
        justify-center

        text-yellow-500
        "
        >
          <FaHeartbeat size={24} />

          <div
            className="
          absolute
          inset-0

          rounded-2xl

          border
          border-yellow-500/10

          animate-pulse
          "
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Health Check
          </h2>

          <p className="text-sm text-zinc-500">
            Eligibility Verification
          </p>
        </div>
      </div>

      {/* Question */}
      <div
        className="
      mt-6

      rounded-2xl

      border
      border-zinc-800

      bg-zinc-800/30

      p-5
      "
      >
        <p className="text-lg font-medium text-white leading-relaxed">
          Any critical illness or heart condition in your family?
        </p>
      </div>

      {/* Options */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          disabled={loading}
          onClick={() => handleAnswer(true)}
          className="
        group
        relative
        overflow-hidden

        h-12

        rounded-xl

        border
        border-red-500/20

        bg-red-500/5

        hover:bg-red-500/10

        transition-all
        duration-300
        "
        >
          <div
            className="
          absolute
          inset-0

          opacity-0

          group-hover:opacity-100

          transition-opacity

          bg-gradient-to-r
          from-transparent
          via-white/5
          to-transparent

          -translate-x-full
          group-hover:translate-x-full

          duration-700
          "
          />

          <span className="relative font-semibold text-red-300">
            Yes
          </span>
        </button>

        <button
          disabled={loading}
          onClick={() => handleAnswer(false)}
          className="
        group
        relative
        overflow-hidden

        h-12

        rounded-xl

        bg-yellow-500
        hover:bg-yellow-400

        text-black
        font-semibold

        transition-all
        duration-300

        shadow-lg
        shadow-yellow-500/20

        hover:shadow-yellow-500/40
        "
        >
          <div
            className="
          absolute
          inset-0

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent

          -translate-x-full
          group-hover:translate-x-full

          transition-transform
          duration-700
          "
          />

          <span className="relative">
            No
          </span>
        </button>
      </div>

      {loading && (
        <div className="mt-5 flex items-center justify-center gap-3 text-yellow-500">
          <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />

          <span className="text-sm">
            Verifying eligibility...
          </span>
        </div>
      )}
    </motion.div>
  );
}

function ExistingCriticalIllnessCard({
  mobileNumber,
  onNext,
  onDrop,
}: {
  mobileNumber: string;
  onNext: () => void;
  onDrop: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      await saveDiseaseStatus(mobileNumber, false);

      onNext();
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
  relative
  overflow-hidden

  rounded-[30px]

  border
  border-yellow-500/10

  bg-zinc-900/90
  backdrop-blur-xl

  p-7
  sm:p-8

  shadow-[0_20px_80px_rgba(0,0,0,0.45)]

  w-full
"
    >
      {/* Top Glow */}
      <div
        className="
    absolute
    top-0
    inset-x-0
    h-px
    bg-gradient-to-r
    from-transparent
    via-yellow-500/70
    to-transparent
  "
      />

      {/* Icon */}
      <div
        className="
    h-14
    w-14

    rounded-2xl

    border
    border-yellow-500/20

    bg-yellow-500/10

    flex
    items-center
    justify-center

    text-yellow-500

    shadow-[0_0_40px_rgba(234,179,8,0.15)]
  "
      >
        <FaHeartbeat size={24} />
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-3xl font-bold tracking-tight">
        Existing Health Information
      </h2>

      <p className="mt-3 text-zinc-400">
        We found a critical illness record linked to this profile.
      </p>

      {/* Alert */}
      <div
        className="
    mt-6

    rounded-2xl

    border
    border-yellow-500/20

    bg-yellow-500/[0.04]

    p-5
  "
      >
        <div className="flex items-start gap-4">
          <div
            className="
        h-11
        w-11

        shrink-0

        rounded-xl

        bg-yellow-500/10

        border
        border-yellow-500/20

        flex
        items-center
        justify-center

        text-yellow-500
      "
          >
            <HiShieldCheck size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-yellow-400">
              Update Required
            </h3>

            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Would you like to update this information and continue with
              Flashaid Care?
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-7 grid grid-cols-2 gap-3">
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="
      h-12

      rounded-xl

      bg-yellow-500
      hover:bg-yellow-400

      text-black
      font-semibold

      transition-all

      shadow-lg
      shadow-yellow-500/20

      disabled:opacity-60
    "
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <ImSpinner2
                className="animate-spin"
                size={16}
              />
              Updating...
            </span>
          ) : (
            "Yes, Continue"
          )}
        </button>

        <button
          onClick={onDrop}
          disabled={loading}
          className="
      h-12

      rounded-xl

      border
      border-red-500/20

      bg-red-500/5

      text-red-300

      hover:bg-red-500/10

      transition-all
    "
        >
          No, Exit
        </button>
      </div>
    </motion.div>
  );
}
