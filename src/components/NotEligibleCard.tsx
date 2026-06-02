import { motion } from "framer-motion";
import { HiShieldExclamation } from "react-icons/hi2";

function NotEligibleCard() {
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

      w-full
      max-w-[560px]

      overflow-hidden

      rounded-[32px]

      border
      border-red-500/10

      bg-zinc-900/90
      backdrop-blur-xl

      p-6
      sm:p-8

      shadow-[0_25px_100px_rgba(0,0,0,0.5)]
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
          via-red-500
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
          via-red-500
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
          via-red-500
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
          via-red-500
          to-transparent
        "
        />
      </div>

      {/* Icon */}
      <div className="flex justify-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
          relative

          h-20
          w-20

          rounded-[24px]

          border
          border-red-500/20

          bg-red-500/10

          flex
          items-center
          justify-center

          text-red-400
        "
        >
          <HiShieldExclamation size={34} />

          <motion.div
            animate={{
              scale: [1, 1.5],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
            absolute
            inset-0

            rounded-[24px]

            border
            border-red-500/20
          "
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="mt-8 text-center">
        <p
          className="
          text-red-400
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

          text-3xl
          sm:text-4xl

          font-bold

          tracking-tight
        "
        >
          Eligibility Not Met
        </h1>

        <p
          className="
          mt-4

          text-zinc-400

          leading-relaxed

          max-w-sm
          mx-auto
        "
        >
          We're unable to continue your Flashaid Care
          application at this time.
        </p>
      </div>

      {/* Divider */}
      <div
        className="
        mt-8

        h-px

        bg-gradient-to-r
        from-transparent
        via-zinc-800
        to-transparent
      "
      />

      {/* Button */}
      <button
        onClick={() => window.location.reload()}
        className="
        mt-8

        w-full
        h-12

        rounded-xl

        bg-red-600
        border
        border-red-700
        text-white
        font-semibold

      "
      >
        Start New Review
      </button>
    </motion.div>
);
}

export default NotEligibleCard;