import React from "react";
import Image from "next/image";

function SocialAside() {
  const contactItem = [
    {
      url: "https://www.linkedin.com/in/vikashkumar003/",
      socialMediaIcon: "LINKEDIN",
    },
    {
      url: "https://github.com/Ninja-Vikash",
      socialMediaIcon: "GITHUB",
    },
  ];
  return (
    <div className=" w-28 h-[100vh] fixed top-0 right-0 flex items-center justify-center flex-col gap-4">

      {contactItem.map((social, index) => (
        <figure key={index} className="bg-zinc-950 h-12 w-12 rounded-full flex items-center justify-center">
          <a target="_blank" href={social.url}>
            <Image
              src={`/Icons/${social.socialMediaIcon}.svg`}
              width={36}
              height={24}
              alt={`social media image of ${social.socialMediaIcon}`}
            />
          </a>
        </figure>
      ))}

    </div>
  );
}

export default SocialAside;
