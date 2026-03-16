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
    content: "A card that explains upcoming projects.",
    logo: ScrollText,
  },
  {
    id: 1,
    title: "Discussion Card",
    content: "Topics where developers share different opinions.",
    logo: MessagesSquare,
  },
  {
    id: 2,
    title: "Idea Card",
    content: "Cool ideas from developers that they want to share with us.",
    logo: Lightbulb,
  },
  {
    id: 3,
    title: "Management Card",
    content: "Workgroups organized for projects.",
    logo: SquareChartGantt,
  },
];

export const cardConfigs = [
  { y: -6, opacity: 1, rotate: 0 },
  { y: -9, opacity: 0.88, rotate: -7 },
  { y: -14, opacity: 0.76, rotate: 2 },
  { y: -19, opacity: 0.64, rotate: 3 },
];
