import { createContext, options } from "preact";

export const OptionsContext = createContext({
  options: {
    storiesNumber: 5,
    orderStoriesBy: "Top",
    numberOfStories: 500,
  },
  changeStoriesNumber: (storiesNumber: number) => {},
  changeOrderStoriesBy: (orderStoriesBy: "TOP" | "BEST" | "NEW") => {},
  changeNumberOfStories: (numberOfStories: number) => {},
});
