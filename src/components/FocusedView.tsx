import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cardData } from "./Data";
import { ChevronLeft } from "lucide-react";

type Props = {
  selectedCard: number;
  onBack: () => void;
};

const FocusedView = ({ selectedCard, onBack }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cardElements = el.children;
    const target = cardElements[selectedCard] as HTMLElement;

    if (target) {
      el.scrollTo({
        left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  }, [selectedCard]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      containerRef.current?.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
      });
    };
    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="w-screen h-screen flex flex-nowrap items-center p-4 gap-4 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {cardData.map((card, i) => {
        const IconComponent = card.logo;
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: i * 0.04 + 0.03,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className="h-full aspect-square bg-[#dfeaf9] rounded-2xl p-12 flex flex-col gap-12 shrink-0 snap-center"
          >
            <div className="flex w-full justify-between items-center">
              <div className="p-3 bg-white rounded-2xl flex items-center shadow-md justify-center w-16 h-16">
                <IconComponent
                  size={36}
                  className="text-gray-600"
                  strokeWidth={2}
                />
              </div>
              <div className="text-xl font-mono text-gray-600/50">
                {(i + 1).toString().padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <h2 className="text-black text-6xl font-black">{card.title}</h2>
              <div className="flex flex-col gap-2">
                <p>{card.content}</p>
                <div className="h-2 w-full bg-[#cbd6e7] rounded" />
                <div className="h-2 w-3/4 bg-[#cbd6e7] rounded" />
                <div className="h-2 w-4/5 bg-[#cbd6e7] rounded" />
                <div className="h-2 w-full bg-[#cbd6e7] rounded" />
                <div className="h-2 w-2/5 bg-[#cbd6e7] rounded" />
                <div className="w-full bg-white rounded-2xl p-6 flex flex-col gap-2">
                  <h3 className="font-bold text-xl mb-1">Section Details</h3>
                  <div className="h-2 w-3/4 bg-[#cbd6e7] rounded" />
                  <div className="h-2 w-3/4 bg-[#cbd6e7] rounded" />
                  <div className="h-2 w-3/4 bg-[#cbd6e7] rounded" />
                </div>
                <div className="w-full bg-white rounded-2xl p-6 flex flex-col gap-2">
                  <h3 className="font-bold text-xl mb-1">
                    Additional Information
                  </h3>
                  <div className="h-2 w-3/4 bg-[#cbd6e7] rounded" />
                  <div className="h-2 w-3/4 bg-[#cbd6e7] rounded" />
                  <div className="h-2 w-3/4 bg-[#cbd6e7] rounded" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-150 cursor-pointer flex items-center gap-1"
        onClick={onBack}
      >
        <ChevronLeft size={16} /> Back
      </motion.button>
    </motion.div>
  );
};

export default FocusedView;
