import React from "react";
import Image from "next/image";

function ContactItem() {
  const contactItems = [
    {
      icon: "GMAIL",
      textValue: "vikashloharjsr@gmail.com",
    },
    {
      icon: "PHONE",
      textValue: "+91 7033916936",
    },
    {
      icon: "LINKEDIN",
      textValue: "/vikashkumar003",
      link: "https://www.linkedin.com/in/vikashkumar003/",
    },
    {
      icon: "GITHUB",
      textValue: "/Ninja-Vikash",
      link: "https://github.com/Ninja-Vikash",
    },
  ];
  return (
    <>
      {contactItems.map((e, index) => {
        return (
          <p key={index} className="tracking-wider font-light text-xl my-2 flex items-center relative ">
            <Image
              className="inline"
              src={`./Icons/${e.icon}.svg`}
              height={30}
              width={30}
              alt={`${e.icon} icon`}
            />
            <input
              className="mx-2 px-3 py-2 w-3/4 focus:outline-none text-sm bg-indigo-950 rounded-md hover:bg-blue-950 transition-all duration-300"
              disabled
              type="email"
              placeholder={e.textValue}
            />

            {e.link ? (
              <a target="_blank" href={e.link} className="absolute right-20">
                <Image
                  src="./Icons/LINK.svg"
                  height={30}
                  width={24}
                  className="p-1 rounded-lg bg-purple-900 hover:bg-purple-800"
                ></Image>
              </a>
            ) : (
              ""
            )}
          </p>
        );
      })}
    </>
  );
}

export default ContactItem;
