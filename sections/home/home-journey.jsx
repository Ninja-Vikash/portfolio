import { Card } from "@/components/card";
import clsx from "clsx";

export function HomeJourney() {
  const journeyData = [
    {
      title: "When I have started?",
      timePeriod: "Apr 28, 2023",
      description: "Beginning of Web Development!",
      color: "green",
    },
    {
      title: "From an absolute Beginner!",
      timePeriod: "Apr 29, 2023",
      description:
        "I didn't have any prior knowledge of programming. Everything is new for me. Started the journey with nothing.",
      color: "red",
    },
    {
      title: "1st Milestone 🎖️",
      timePeriod: "May 13, 2023",
      description:
        "Built something amazing using only HTML for the first time. Not a big website, It was just a form with no styling just raw HTML.",
      color: "blue",
    },
    {
      title: "First step towards mastery 🚩",
      timePeriod: "May 13, 2023",
      description: "Gained good control over HTML. Confidently build structure of Websites.",
      color: "fuchsia",
    },
    // {
    //   title: "1st Milestone 🎖️",
    //   timePeriod: "May 13, 2023",
    //   description:
    //     "Built something amazing using only HTML for the first time. Not a big website, It was just a form with no styling just raw HTML.",
    //   color: "rose",
    // },
    // {
    //   title: "1st Milestone 🎖️",
    //   timePeriod: "May 13, 2023",
    //   description:
    //     "Built something amazing using only HTML for the first time. Not a big website, It was just a form with no styling just raw HTML.",
    //   color: "teal",
    // },
  ];

  return (
    <div className="relative px-4 py-3 flex justify-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

      <div className="w-2/3">
        {journeyData.map((data, index) => (
          <TimeLineCard
            {...data}
            key={index}
            positions={{
              justify: index % 2 === 0 ? "start" : "end",
              text: index % 2 === 0 ? "right" : "left",
            }}
            position={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </div>
  );
}

function TimeLineCard({ title, description, timePeriod, position, color }) {
  return (
    <div
      className={clsx(
        "mb-10 flex items-center w-full",
        position === "left" && "flex-row-reverse",
        position === "right" ? "justify-start" : "justify-end",
      )}
    >
      <div className={clsx("w-1/2", position === "right" ? "pr-8 text-right" : "pl-8 text-left")}>
        <Card>
          <h3
            className={clsx(
              "text-xl font-semibold",
              color === "red" && "text-red-400",
              color === "blue" && "text-blue-400",
              color === "teal" && "text-teal-400",
              color === "rose" && "text-rose-400",
              color === "green" && "text-green-400",
              color === "fuchsia" && "text-fuchsia-400",
            )}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-500">{timePeriod}</p>
          <p className="mt-1 text-gray-400">{description}</p>
        </Card>
      </div>
      <div className="relative w-0">
        <span
          className={clsx(
            "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-3 border-white z-10",
            color === "red" && "bg-red-400",
            color === "blue" && "bg-blue-400",
            color === "teal" && "bg-teal-400",
            color === "rose" && "bg-rose-400",
            color === "green" && "bg-green-400",
            color === "fuchsia" && "bg-fuchsia-400",
          )}
        ></span>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
