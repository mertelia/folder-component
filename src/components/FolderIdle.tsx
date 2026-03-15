import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ChevronRight, Paperclip } from "lucide-react";
import { cardConfigs, cardData } from "./Data";

type Props = {
  folderPosition: "idle" | "cards";
  onOpen: () => void;
};

const FolderIdle = ({ folderPosition, onOpen }: Props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-10, 10]);
  const exitY = typeof window !== "undefined" ? window.innerHeight * 0.4 : 350;

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: 118, height: 90 }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
          width: 118,
          height: 90,
        }}
        className="relative cursor-pointer flex flex-col justify-end p-2"
        animate={folderPosition === "idle" ? "idle" : "exit"}
        whileHover={folderPosition === "idle" ? "hover" : ""}
        variants={{
          idle: { y: 0, scale: 1 },
          hover: { scale: 1.5 },
          exit: { y: exitY, scale: 1 },
        }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        onClick={onOpen}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;
          x.set(relX / rect.width - 0.5);
          y.set(relY / rect.height - 0.5);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        {/* Folder front */}
        <svg
          width="124"
          height="96"
          viewBox="0 0 62 48"
          fill="none"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-z-3.25"
        >
          <defs>
            <filter id="flap-blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
            </filter>
            <radialGradient id="flap-fresnel" cx="50%" cy="50%" r="50%">
              <stop offset="50%" stopColor="rgba(255,255,255,0.0)" />
              <stop offset="100%" stopColor="rgba(160, 160, 160, 0.02)" />
            </radialGradient>
          </defs>
          <path
            d="M0 4.00001C0 1.79087 1.78449 8.17237e-06 3.99363 6.43785e-06C9.70163 1.95617e-06 19.8517 -4.36348e-06 23 4.36287e-06C27.4634 1.67344e-05 28.7967 7 32.7642 7C35.7308 7 50.3268 7.00001 57.5026 7.00001C59.7117 7.00001 61.5 8.79088 61.5 11V43.5C61.5 45.7091 59.7091 47.5 57.5 47.5L4 47.5C1.79086 47.5 0 45.7091 0 43.5V4.00001Z"
            fill="#242426"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
            filter="url(#flap-blur)"
          />
          <path
            d="M0 4.00001C0 1.79087 1.78449 8.17237e-06 3.99363 6.43785e-06C9.70163 1.95617e-06 19.8517 -4.36348e-06 23 4.36287e-06C27.4634 1.67344e-05 28.7967 7 32.7642 7C35.7308 7 50.3268 7.00001 57.5026 7.00001C59.7117 7.00001 61.5 8.79088 61.5 11V43.5C61.5 45.7091 59.7091 47.5 57.5 47.5L4 47.5C1.79086 47.5 0 45.7091 0 43.5V4.00001Z"
            fill="url(#flap-fresnel)"
          />
        </svg>

        {/* Cards inside folder */}
        {folderPosition === "idle" &&
          cardData.map((card, i) => (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              className="w-26.25 h-14 bg-white absolute left-2 top-1.5 rounded-md shadow-sm border border-gray-200"
              style={{ originX: 0.5, originY: 1, z: (3 - i) * 3 }}
              variants={{
                idle: { y: 0, opacity: i === 0 ? 1 : 0, rotate: 0 },
                hover: {
                  y: cardConfigs[i].y,
                  opacity: cardConfigs[i].opacity,
                  rotate: cardConfigs[i].rotate,
                },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          ))}

        {/* Folder back */}
        <svg
          width="118"
          height="90"
          viewBox="0 0 59 45"
          fill="none"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -translate-z-0.5"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H55C57.2091 0 59 1.79086 59 4V41C59 43.2091 57.2091 45 55 45H4C1.79086 45 0 43.2091 0 41V4Z"
            fill="#141414"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Label */}
        <div
          className="relative w-full z-20 text-white flex items-center gap-1.5 px-1 pb-1 will-change-auto "
          style={{ transform: "translateZ(13px)" }}
        >
          <div className="w-4 h-4 rounded-sm bg-[#181818] flex items-center justify-center shrink-0  ">
            <Paperclip width={11} height={11} />
          </div>
          <div className="text-[10px] flex-1 font-diatype leading-none flex items-center font-bold">
            N O T E S
          </div>

          <div className="opacity-50 flex items-center">
            <ChevronRight width={14} height={14} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FolderIdle;
