import { OptionsContext } from "@/Context/options-context";
import { StateUpdater, useContext } from "preact/hooks";
import { Select } from "./Select";

const SelectStorieOptions = [
  {
    val: "TOP",
    text: "Top Stories",
  },
  {
    val: "BEST",
    text: "Best Stories",
  },
  {
    val: "NEW",
    text: "New Stories",
  },
];

type SelectStorieTypeProps = {
  setPage: StateUpdater<number>;
};
export const SelectStorieType = ({ setPage }: SelectStorieTypeProps) => {
  const {
    changeOrderStoriesBy,
    options: { orderStoriesBy },
  } = useContext(OptionsContext);

  return (
    <Select
      tailwindCss={"w-40 md:w-60"}
      onChange={(e) => {
        changeOrderStoriesBy(e.currentTarget.value as "TOP" | "BEST" | "NEW");
        if (e.currentTarget.value !== orderStoriesBy) {
          setPage(0);
        }
      }}
    >
      {SelectStorieOptions.map(({ val, text }) => (
        <option value={val}>{text}</option>
      ))}
    </Select>
  );
};
