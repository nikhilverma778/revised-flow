import { AnimatePresence, motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { FaShieldHeart } from "react-icons/fa6";

interface Props {
  plan: any;
  open: boolean;
  onClose: () => void;
  onContinue?: () => void;
}

export default function PlanDetailsModal({
  plan,
  open,
  onClose,
  onContinue,
}: Props) {
  if (!plan) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
            fixed
            inset-0
            z-50
            bg-black/75
            backdrop-blur-md
            "
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            p-4
            "
          >
            <div
              className="
  relative
  w-full
  max-w-4xl
  overflow-hidden
  rounded-[36px]
  border
  border-yellow-500/10
  bg-zinc-900/90
  backdrop-blur-2xl
  shadow-[0_20px_100px_rgba(0,0,0,0.6),0_0_80px_rgba(234,179,8,0.06)]
  "
            >
                <div
  className="
  absolute
  -top-20
  left-1/2
  -translate-x-1/2
  h-72
  w-72
  rounded-full
  bg-yellow-500/[0.03]
  blur-[120px]
  pointer-events-none
  "
/>
              {/* Glow line */}
              <div
                className="
                absolute
                top-0
                inset-x-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-yellow-500/80
                to-transparent
                "
              />
              <motion.div
  animate={{
    x: ["-100%", "200%"],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
  absolute
  top-0
  h-px
  w-40
  bg-gradient-to-r
  from-transparent
  via-yellow-400
  to-transparent
  opacity-70
  pointer-events-none
  "
/>

              {/* Close */}
              <button
                onClick={onClose}
                className="
                absolute
                top-5
                right-5
                h-10
                w-10
                rounded-xl
                border
                border-zinc-700
                bg-zinc-800/50
                flex
                items-center
                justify-center
                hover:border-zinc-500
                "
              >
                <FiX />
              </button>

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-5">
                <motion.div
  animate={{
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
  }}
  className="
  relative
  h-16
  w-16
  rounded-3xl
  bg-yellow-500/10
  border
  border-yellow-500/20
  flex
  items-center
  justify-center
  text-yellow-500
  shadow-[0_0_35px_rgba(234,179,8,0.12)]
  "
>
                    <FaShieldHeart size={28} />
                    <motion.div
  animate={{
    opacity: [0.15, 0.4, 0.15],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="
  absolute
  inset-0
  rounded-3xl
  border
  border-yellow-500/20
  "
/>
                  </motion.div>

                  <div>
                    <h2 className="text-4xl font-bold tracking-tight">{plan.name}</h2>

                    <p className="mt-2 text-zinc-500">
                      Healthcare Protection Plan
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-6xl font-bold tracking-tight text-yellow-500">
                    {plan.price}
                  </span>

                  <span className="mb-3 text-zinc-500">/ year</span>
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-800/30 p-4">
                    <p className="text-xs text-zinc-500 uppercase">Coverage</p>

                    <p className="mt-2 font-semibold">{plan.coverage}</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-800/30 p-4">
                    <p className="text-xs text-zinc-500 uppercase">Claims</p>

                    <p className="mt-2 font-semibold">24×7</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-800/30 p-4">
                    <p className="text-xs text-zinc-500 uppercase">Support</p>

                    <p className="mt-2 font-semibold">Priority</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-800/30 p-4">
                    <p className="text-xs text-zinc-500 uppercase">Network</p>

                    <p className="mt-2 font-semibold">Cashless</p>
                  </div>
                </div>

                {/* Included */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold">What's Included</h3>

                  <div className="mt-5 grid md:grid-cols-2 gap-4">
                    {plan.benefits.map((benefit: string) => (
                      <div
                        key={benefit}
                        className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-800/20
                        p-4
                        "
                      >
                        <div
                          className="
                          h-7
                          w-7
                          rounded-full
                          bg-yellow-500/10
                          flex
                          items-center
                          justify-center
                          "
                        >
                          <HiCheck size={14} className="text-yellow-500" />
                        </div>

                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusions */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold">Important Notes</h3>

                  <div
                    className="
                    mt-4
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-800/20
                    p-5
                    "
                  >
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Waiting period conditions may apply.</li>

                      <li>• Coverage subject to policy terms.</li>

                      <li>• Benefits vary by selected plan.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div
                className="
                border-t
                border-zinc-800
                bg-zinc-900/95
                p-6
                "
              >
                <button
                  onClick={onContinue}
                  className="
                  w-full
                  h-14
                  rounded-2xl
                  bg-yellow-500
                  hover:bg-yellow-400
                  text-black
                  font-bold
                  transition-all
                  shadow-lg
                  shadow-yellow-500/20
                  "
                >
                  Continue with {plan.name} →
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
