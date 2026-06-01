import { Link } from "react-router-dom";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function NotFound() {
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

  max-w-md
  w-full

  rounded-[28px]

  border
  border-zinc-800

  bg-zinc-900/90
  backdrop-blur-sm

  p-6
  sm:p-7

  text-center

  shadow-2xl
  shadow-black/50
"
      >
        <div
          className="
    mx-auto

    h-12
    w-12

    rounded-xl

    bg-yellow-500/10
    border
    border-yellow-500/20

    flex
    items-center
    justify-center
  "
        >
          <HiOutlineExclamationTriangle
            size={22}
            className="text-yellow-500"
          />
        </div>

        <p
          className="
    mt-5

    text-yellow-500
    text-xs

    font-semibold
    uppercase

    tracking-[0.25em]
  "
        >
          Error 404
        </p>

        <h1
          className="
    mt-3

    text-3xl
    sm:text-4xl

    font-bold
    leading-tight
  "
        >
          Page Not Found
        </h1>

        <p
          className="
    mt-3

    text-sm
    sm:text-base

    text-zinc-400
    leading-relaxed
  "
        >
          The page you're looking for doesn't exist, may have been moved,
          or the link is invalid.
        </p>

        <Link
          to="/"
          className="
    mt-6

    inline-flex
    items-center
    justify-center

    w-full
    sm:w-auto

    px-5
    py-2.5

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
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}