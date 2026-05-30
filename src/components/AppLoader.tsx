import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi2";

export default function AppLoader() {
  return (
  <div className="relative min-h-screen bg-zinc-950 overflow-hidden flex items-center justify-center">
    {/* Glow */}
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

    <div className="relative z-10 flex flex-col items-center">

      {/* Shield */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        relative
        h-28
        w-28
        rounded-[28px]
        border
        border-yellow-500/20
        bg-zinc-900/80
        backdrop-blur-xl
        flex
        items-center
        justify-center
        shadow-[0_0_50px_rgba(234,179,8,0.12)]
        "
      >
        <HiShieldCheck
          size={48}
          className="text-yellow-500"
        />

        {/* Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.35],
            opacity: [0.18, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="
          absolute
          inset-0
          rounded-[28px]
          border
          border-yellow-500/20
          "
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="mt-8 text-center"
      >
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

        <h2
          className="
          mt-4
          text-3xl
          font-semibold
          tracking-tight
          text-white
          "
        >
          Securing Your Journey
        </h2>
      </motion.div>

      {/* Progress Bar */}
      <div
        className="
        mt-8
        h-1.5
        w-72
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
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          h-full
          w-24
          bg-yellow-500
          rounded-full
          shadow-lg
          shadow-yellow-500/50
          "
        />
      </div>
    </div>
  </div>
);
}
