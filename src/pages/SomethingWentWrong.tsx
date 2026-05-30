import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function SomethingWentWrong() {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden flex items-center justify-center px-6">
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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        relative
        z-10
        max-w-xl
        w-full
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/90
        backdrop-blur-sm
        p-10
        shadow-2xl
        shadow-black/50
        text-center
      "
      >
        <div className="mx-auto h-16 w-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <HiOutlineShieldExclamation
            size={30}
            className="text-red-400"
          />
        </div>

        <p className="mt-8 text-yellow-500 text-sm font-semibold uppercase tracking-[0.35em]">
          Unexpected Error
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Something Went Wrong
        </h1>

        <p className="mt-5 text-zinc-400 leading-relaxed">
          We encountered an unexpected issue while
          processing your request. Please try again.
        </p>

        <button
          onClick={reload}
          className="
          mt-8
          px-6
          py-3
          rounded-xl
          bg-yellow-500
          text-black
          font-semibold
          hover:bg-yellow-400
          transition-all
          shadow-lg
          shadow-yellow-500/20
        "
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}