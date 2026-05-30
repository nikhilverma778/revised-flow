import { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldHeart } from "react-icons/fa6";
import { HiCheck } from "react-icons/hi";
import PlanDetailsModal from "../modals/PlanDetailsModal";

const plans = [
  {
    id: "gold",
    name: "Gold Care",
    price: "₹999",
    coverage: "Up to ₹5 Lakhs",
    recommended: true,
    benefits: [
      "Hospital Cash Benefit",
      "Accidental Coverage",
      "Digital Claims Support",
      "Family Assistance",
    ],
  },
  {
    id: "platinum",
    name: "Platinum Care",
    price: "₹1499",
    coverage: "Up to ₹10 Lakhs",
    recommended: false,
    benefits: [
      "Higher Coverage Limits",
      "Priority Claims",
      "Extended Benefits",
      "Premium Support",
    ],
  },
];

export default function CarePlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  return (
    <>
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-10">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-yellow-500/50" />

                  <p className="text-yellow-500 text-xs font-semibold uppercase tracking-[0.35em]">
                    Flashaid Care
                  </p>
                </div>

                <h1 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight">
                  Recommended Plans
                </h1>

                <p className="mt-2 text-zinc-500">
                  Choose the protection that's right for you.
                </p>
              </div>

              <div
                className="
        px-4
        py-2
        rounded-2xl
        border
        border-yellow-500/20
        bg-yellow-500/5
        text-yellow-400
        text-sm
        font-medium
        "
              >
                ✓ Eligibility Verified
              </div>
            </div>
          </div>

          {/* Plans */}
          <div className="grid xl:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <motion.div
                onClick={() => setSelectedPlan(plan)}
                key={plan.id}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`
          relative
          overflow-hidden
          rounded-[36px]
          backdrop-blur-xl
          p-8
          transition-all
          duration-300
          ${
            plan.recommended
              ? `
              border
              border-yellow-500/25
              bg-gradient-to-b
              from-yellow-500/[0.04]
              to-zinc-900/90
              shadow-[0_0_60px_rgba(234,179,8,0.08)]
            `
              : `
              border
              border-zinc-800
              bg-zinc-900/80
            `
          }
        `}
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
          via-yellow-500/40
          to-transparent
          "
                />

                {plan.recommended && (
                  <div
                    className="
            absolute
            top-6
            right-6
            px-3
            py-1
            rounded-full
            bg-yellow-500/10
            border
            border-yellow-500/20
            text-yellow-500
            text-xs
            font-semibold
            uppercase
            tracking-wider
            "
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className="
          h-14
          w-14
          rounded-2xl
          bg-yellow-500/10
          border
          border-yellow-500/20
          flex
          items-center
          justify-center
          text-yellow-500
          "
                >
                  <FaShieldHeart size={24} />
                </div>

                {/* Name */}
                <h2 className="mt-6 text-3xl font-bold">{plan.name}</h2>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-5xl font-bold text-yellow-500">
                    {plan.price}
                  </span>

                  <span className="mb-2 text-zinc-500">/ year</span>
                </div>

                <div className="mt-6 h-px bg-zinc-800" />

                {/* Benefits */}
                <div className="mt-8 space-y-4">
                  {plan.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div
                        className="
                h-6
                w-6
                rounded-full
                bg-yellow-500/10
                flex
                items-center
                justify-center
                "
                      >
                        <HiCheck size={14} className="text-yellow-500" />
                      </div>

                      <span className="text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div
                    className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-800/30
            p-3
            "
                  >
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                      Coverage
                    </p>

                    <p className="mt-2 font-semibold">{plan.coverage}</p>
                  </div>

                  <div
                    className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-800/30
            p-3
            "
                  >
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                      Claims
                    </p>

                    <p className="mt-2 font-semibold">24×7</p>
                  </div>

                  <div
                    className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-800/30
            p-3
            "
                  >
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                      Support
                    </p>

                    <p className="mt-2 font-semibold">Priority</p>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="
          mt-8
          w-full
          h-14
          rounded-2xl
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          font-bold
          transition-all
          duration-200
          shadow-lg
          shadow-yellow-500/20
          hover:shadow-yellow-500/40
          "
                >
                  Continue with {plan.name} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <PlanDetailsModal
        plan={selectedPlan}
        open={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        onContinue={() => {
          console.log("Selected:", selectedPlan);
        }}
      />
    </>
  );
}
