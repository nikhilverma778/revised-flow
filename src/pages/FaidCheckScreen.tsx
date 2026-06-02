import { useEffect } from "react";
import { motion } from "framer-motion";
import {  HiIdentification } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function FaidCheckScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // TEMPORARY UNTIL API IS READY
      const hasFaid = false;

      if (hasFaid) {
        navigate("/existing-customer");
      } else {
        navigate("/member-selection");
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden flex items-center justify-center px-4">
      {/* Background Glow */}
      <div className="absolute -top-72 -left-72 h-[700px] w-[700px] rounded-full bg-yellow-500/5 blur-[180px]" />

      <div className="absolute -bottom-72 -right-72 h-[700px] w-[700px] rounded-full bg-yellow-500/5 blur-[180px]" />

      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
      />

      {/* Main Card */}
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
          duration: 0.4,
        }}
        className="
          relative
          w-full
          max-w-xl

          overflow-hidden

          rounded-[32px]

          border
          border-zinc-800

          bg-zinc-900/90
          backdrop-blur-xl

          p-8
          sm:p-10

          shadow-[0_20px_100px_rgba(0,0,0,0.5)]
        "
      >
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-0
              left-0
              h-[2px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-yellow-500
              to-transparent
            "
          />

          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
            className="
              absolute
              top-0
              right-0
              w-[2px]
              h-full
              bg-gradient-to-b
              from-transparent
              via-yellow-500
              to-transparent
            "
          />

          <motion.div
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            className="
              absolute
              bottom-0
              left-0
              h-[2px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-yellow-500
              to-transparent
            "
          />

          <motion.div
            animate={{
              y: ["100%", "-100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 3,
            }}
            className="
              absolute
              top-0
              left-0
              w-[2px]
              h-full
              bg-gradient-to-b
              from-transparent
              via-yellow-500
              to-transparent
            "
          />
        </div>

        {/* Main Center Icon */}
        <div className="flex justify-center">
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              relative

              h-24
              w-24

              rounded-[30px]

              border
              border-yellow-500/20

              bg-yellow-500/10

              flex
              items-center
              justify-center

              text-yellow-500
            "
          >
            <HiIdentification size={40} />

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

                rounded-[30px]

                border
                border-yellow-500/20
              "
            />
          </motion.div>
        </div>

        {/* Heading */}
        <div className="mt-10 text-center">
          <p
            className="
            text-yellow-500
            text-xs
            uppercase
            tracking-[0.35em]
            font-semibold
          "
          >
            Flashaid Care
          </p>

          <h1
            className="
            mt-4
            text-3xl sm:text-4xl
            font-bold
            tracking-tight
          "
          >
            Checking Your Profile
          </h1>

          <p
            className="
            mt-4
            text-zinc-400
            leading-relaxed
            max-w-lg
            mx-auto
          "
          >
            We're checking for an existing Flashaid ID
            and preparing the next steps for your journey.
          </p>
        </div>

        {/* Status Cards */}
        <div className="mt-10 grid gap-4">
          <div
            className="
            rounded-xl

            border
            border-green-500/10

            bg-green-500/[0.04]

            p-4
          "
          >
            <div className="flex items-center justify-between">
              <span className="text-zinc-300">
                Mobile Verification
              </span>

              <span className="text-green-400 font-medium">
                Completed
              </span>
            </div>
          </div>

          <div
            className="
            rounded-2xl

            border
            border-yellow-500/10

            bg-yellow-500/[0.03]

            p-4
          "
          >
            <div className="flex items-center justify-between">
              <span className="text-zinc-300">
                Flashaid ID Lookup
              </span>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />

                <span className="text-yellow-400 font-medium">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div
          className="
          mt-10
          h-1.5
          w-full
          rounded-full
          bg-zinc-800
          overflow-hidden
        "
        >
          <motion.div
            animate={{
              x: ["-100%", "300%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-full
              w-24

              rounded-full

              bg-yellow-500

              shadow-lg
              shadow-yellow-500/50
            "
          />
        </div>

        <p className="mt-4 text-center text-sm text-zinc-500">
          This usually takes a few seconds...
        </p>
      </motion.div>
    </div>
  );
}