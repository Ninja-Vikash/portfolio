import { Icon } from "../icon";

// -------------------------------------------

export function Logo() {
  return (
    <h2 className="flex gap-2">
      <Icon src="/assets/logo/logo.svg" alt="logo" width={28} height={28} />

      <div className="text-green-500 font-extrabold text-xl">
        Index
      </div>
    </h2>
  );
}
