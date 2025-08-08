import clsx from "clsx";
import { Card } from "@/components/card";
import { useMath } from "@/hooks/useMath";
import { journeys as journeyData } from "@/data/journeys";

// -----------------------------------------------

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

// -----------------------------------------------

export function HomeJourney() {
  const { math } = useMath();

  return (
    <div className="relative px-4 py-3 flex justify-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

      <div className="w-2/3">
        {journeyData.map((data, index) => (
          <TimeLineCard {...data} key={index} position={math.isEven(index) ? "right" : "left"} />
        ))}
      </div>
    </div>
  );
}
