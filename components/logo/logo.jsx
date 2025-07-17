import Image from "next/image";

export function Logo() {
  return (
    <h2 className="logo-base">
      <Image src="/dev-bot.svg" alt="logo" width={20} height={20} className="invert" />

      <span className="logo-text">
        vikash.<span className="logo-text-end">ai</span>
      </span>
    </h2>
  );
}
