import { OptionsContext } from "@/Context/options-context";
import { StateUpdater, useContext } from "preact/compat";
import { Select } from "./Select";

const SelectStorieNumberOptions = [
  {
    val: 5,
    text: "5",
  },
  {
    val: 10,
    text: "10",
  },
  {
    val: 20,
    text: "20",
  },
];

type SelectStoriesNumberProps = {
  setPage: StateUpdater<number>;
};

export const SelectStoriesNumber = ({ setPage }: SelectStoriesNumberProps) => {
  const {
    changeStoriesNumber,
    options: { storiesNumber },
  } = useContext(OptionsContext);

  return (
    <Select
      tailwindCss={"w-15 md:w-20"}
      onChange={(e) => {
        changeStoriesNumber(Number(e.currentTarget.value));
        if (Number(e.currentTarget.value) !== storiesNumber) {
          setPage(0);
        }
      }}
    >
      {SelectStorieNumberOptions.map(({ val, text }) => (
        <option value={Number(val)}>{text}</option>
      ))}
    </Select>
  );
};
