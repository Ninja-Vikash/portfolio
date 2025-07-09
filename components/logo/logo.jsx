import Image from "next/image";

export function Logo() {
  return (
    <h2 className="tracking-wider flex items-center gap-3 text-md">
      <Image 
        src="/dev-bot.svg"
        alt="brand logo"
        width={20}
        height={20}
        className="invert"
      />

      <span className="text-white font-bold">
        vikash.<span className="text-blue-400">ai</span>
      </span>
    </h2>
  )
}