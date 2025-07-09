import Image from "next/image"
import SOCIAL_HANDLES from "./SOCIAL_HANDLE.json"

export function Aside() {
  return (
    <div className=" w-28 h-[100vh] fixed top-0 right-0 flex items-center justify-center flex-col gap-4">
    
      {SOCIAL_HANDLES.map(({ url, icon }, index) => (
        <figure key={index} className="bg-zinc-950 h-12 w-12 rounded-full flex items-center justify-center">
          <a target="_blank" href={url}>
            <Image
              src={`/Icons/${icon}.svg`}
              width={36}
              height={24}
              alt={`social media image of ${icon}`}
            />
          </a>
        </figure>
      ))}

    </div>
  )
}