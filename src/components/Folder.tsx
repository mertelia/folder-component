"use client";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import FolderIdle from "./FolderIdle";
import CardGrid from "./CardGrid";
import FocusedView from "./FocusedView";

type FolderPosition = "idle" | "cards" | "focused";

const Folder = () => {
  const [folderPosition, setFolderPosition] = useState<FolderPosition>("idle");
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <div className="w-screen  h-screen flex justify-center items-center bg-black overflow-hidden font-sans">
      {/* ORIGINAL CONTENT FROM: */}
      <a
        href="https://www.are.na/block/44193495"
        className="fixed top-5 left-center text-gray-500 underline text-xs z-999"
        target="_blank"
      >
        Original content uploaded by Alexandre Gellard
      </a>
      <AnimatePresence mode="popLayout">
        {(folderPosition === "idle" || folderPosition === "cards") && (
          <FolderIdle
            key="folder-idle"
            folderPosition={folderPosition}
            onOpen={() =>
              setFolderPosition(folderPosition === "idle" ? "cards" : "idle")
            }
          />
        )}
        {folderPosition === "cards" && (
          <CardGrid
            key="card-grid"
            onCardClick={(i) => {
              setSelectedCard(i);
              setFolderPosition("focused");
            }}
            onBack={() => setFolderPosition("idle")}
          />
        )}
        {folderPosition === "focused" && (
          <FocusedView
            key="focused-view"
            selectedCard={selectedCard}
            onBack={() => setFolderPosition("idle")}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Folder;
