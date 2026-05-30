import { ImSpinner2 } from "react-icons/im";

export default function CardLoader() {
  return (
    <div
      className="
      bg-zinc-900/90
      border
      border-zinc-800
      rounded-3xl
      p-12
      text-center
      "
    >
      <ImSpinner2
        size={28}
        className="
        animate-spin
        mx-auto
        text-yellow-500
        "
      />

      <p className="mt-4 text-zinc-400">
        Loading...
      </p>
    </div>
  );
}