import {
  ScrollText,
  MessagesSquare,
  Lightbulb,
  SquareChartGantt,
} from "lucide-react";

export const cardData = [
  {
    id: 0,
    title: "Project Card",
    content: "Project Card that explains upcoming projects.",
    logo: ScrollText,
  },
  {
    id: 1,
    title: "Discussion card",
    content: "Explains the points that developers have different views.",
    logo: MessagesSquare,
  },
  {
    id: 2,
    title: "Idea Card",
    content:
      "Cool ideas that comes from the developers that they want to show us.",
    logo: Lightbulb,
  },
  {
    id: 3,
    title: "Management Card",
    content: "Work Groups for the projects.",
    logo: SquareChartGantt,
  },
];

export const cardConfigs = [
  { y: -6, opacity: 1, rotate: 0 },
  { y: -9, opacity: 0.88, rotate: -7 },
  { y: -14, opacity: 0.76, rotate: 2 },
  { y: -19, opacity: 0.64, rotate: 3 },
];
