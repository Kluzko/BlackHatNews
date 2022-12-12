import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { OptionsContext } from "./options-context";

export const GlobalContext: FunctionComponent = ({ children }) => {
  const [option, setOption] = useState({
    storiesNumber: 5,
    orderStoriesBy: "Top",
    numberOfStories: 500,
  });

  const changeStoriesNumber = (storiesNumber: number) => {
    setOption((prevState) => ({
      ...prevState,
      storiesNumber,
    }));
  };
  const changeOrderStoriesBy = (orderStoriesBy: "TOP" | "BEST" | "NEW") => {
    setOption((prevState) => ({
      ...prevState,
      orderStoriesBy,
    }));
  };

  const changeNumberOfStories = (numberOfStories: number) => {
    setOption((prevState) => ({
      ...prevState,
      numberOfStories,
    }));
  };

  const changePage = (page: number) => {
    setOption((prevState) => ({
      ...prevState,
      page,
    }));
  };

  return (
    <OptionsContext.Provider
      value={{
        options: {
          storiesNumber: option.storiesNumber,
          orderStoriesBy: option.orderStoriesBy,
          numberOfStories: option.numberOfStories,
        },
        changeStoriesNumber,
        changeOrderStoriesBy,
        changeNumberOfStories,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
