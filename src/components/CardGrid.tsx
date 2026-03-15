import { motion } from "motion/react";
import { cardData } from "./Data";
import { ChevronLeft } from "lucide-react";

type Props = {
  onCardClick: (i: number) => void;
  onBack: () => void;
};

const CardGrid = ({ onCardClick, onBack }: Props) => (
  <div className="absolute left-1/2 -translate-x-1/2 top-0 sm:top-1/2 sm:-translate-y-1/2 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-10 py-8 sm:py-0 z-100">
    {cardData.map((card, i) => {
      const IconComponent = card.logo;
      return (
        <motion.div
          key={card.id}
          layoutId={`card-${card.id}`}
          style={{ zIndex: i + 3 }}
          transition={{
            delay: i * 0.04 + 0.02,
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            transition: { duration: 0.25, delay: 0 },
          }}
          className="bg-[#dfeaf9] rounded-2xl w-full h-40 sm:h-64 p-5 sm:p-8 cursor-pointer shadow-2xl flex flex-col gap-3 sm:gap-4 will-change-transform"
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeInOut", duration: 0.25 },
          }}
          onClick={() => onCardClick(i)}
        >
          <div className="w-full flex justify-between items-center">
            <div className="p-2 sm:p-3 bg-white rounded-2xl flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12">
              <IconComponent
                size={18}
                className="text-gray-600 sm:hidden"
                strokeWidth={2}
              />
              <IconComponent
                size={24}
                className="text-gray-600 hidden sm:block"
                strokeWidth={2}
              />
            </div>
            <div className="font-mono text-sm sm:text-base">#{i + 1}</div>
          </div>
          <h2 className="text-black text-lg sm:text-2xl font-black leading-tight">
            {card.title}
          </h2>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="h-1.5 sm:h-2 w-full bg-[#cbd6e7] rounded" />
            <div className="h-1.5 sm:h-2 w-3/4 bg-[#cbd6e7] rounded" />
          </div>
        </motion.div>
      );
    })}

    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="sm:hidden col-span-1 px-6 py-2 bg-white rounded-full shadow-md flex items-center justify-center gap-1 cursor-pointer mx-auto"
      onClick={onBack}
    >
      <ChevronLeft size={16} /> Back
    </motion.button>
  </div>
);

export default CardGrid;
