import { motion } from "motion/react";
import { cardData } from "./Data";

type Props = {
  onCardClick: (i: number) => void;
};

const CardGrid = ({ onCardClick }: Props) => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl grid grid-cols-2 gap-8 px-10 z-100">
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
          className="bg-[#dfeaf9] rounded-2xl w-full h-64 p-8 cursor-pointer shadow-2xl flex flex-col gap-4"
          whileHover={{
            scale: 1.05,
            transition: {
              delay: 0,
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          onClick={() => onCardClick(i)}
        >
          <div className="w-full flex justify-between items-center">
            <div className="p-3 bg-white rounded-2xl flex items-center justify-center w-12 h-12">
              <IconComponent
                size={24}
                className="text-gray-600"
                strokeWidth={2}
              />
            </div>
            <div>#{i + 1}</div>
          </div>
          <h2 className="text-black text-2xl font-black">{card.title}</h2>
          <div className="space-y-2">
            <div className="h-2 w-full bg-[#cbd6e7] rounded" />
            <div className="h-2 w-3/4 bg-[#cbd6e7] rounded" />
          </div>
        </motion.div>
      );
    })}
  </div>
);

export default CardGrid;
