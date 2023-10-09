import { FC } from "react";
import clsx from "clsx";
import { numberToWords } from "@/utils";

interface StepperProps {
  current: number;
  items: {
    title: string;
  }[];
}

export const Stepper: FC<StepperProps> = ({ items, current }) => {
  return <StepperItem items={items} current={current} />;
};

const StepperItem: FC<StepperProps> = ({ items, current }) => {
  const lastItemIndex = items.length;

  return (
    <>
      {items &&
        items?.map((item, index) => {
          const positiveIndex = index + 1;
          const isFirstItem = positiveIndex === 1;
          const isLastItem = positiveIndex === lastItemIndex;
          const isCompleted = current > positiveIndex;
          const isActive = current === positiveIndex;
          const isPending = positiveIndex > current;

          return (
            <div className="flex" key={item.title + index}>
              <div
                className={clsx("flex flex-col items-center mr-4", {
                  "mt-[10px]": isFirstItem,
                })}
              >
                <div>
                  <div
                    className={clsx(
                      "flex items-center justify-center w-[18px] h-[18px] border rounded-full ",
                      {
                        "bg-primary": isCompleted,
                        "bg-primary_glare border-primary": isActive,
                        "bg-secondary_glare border-secondary": isPending,
                      }
                    )}
                  >
                    {isCompleted && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] h-[14px] text-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {isCompleted && !isLastItem && (
                  <div className="w-[2px] h-full bg-primary" />
                )}
              </div>
              <div
                className={clsx("relative -top-[5px]", {
                  "pb-5": !isLastItem,
                })}
              >
                <h4 className="text-[16px] font-normal text-mid uppercase font-saira">
                  Step {numberToWords(index + 1)}
                </h4>
                <h3 className="font-bold text-[20px] relative -top-[10px] font-asap">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
    </>
  );
};
