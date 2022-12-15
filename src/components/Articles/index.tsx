import { OptionsContext } from "@/Context/options-context";
import { useFetchHackerNews } from "@/hooks";
import { useContext, useEffect } from "preact/hooks";
import Card from "../Card";
import { BaseLoader } from "../Loader";

type ArticlesProps = {
  pageNumber: number;
};

export const Articles = ({ pageNumber }: ArticlesProps) => {
  const {
    changeNumberOfStories,
    options: { storiesNumber, orderStoriesBy },
  } = useContext(OptionsContext);

  let currentStorie: storiesUriType =
    orderStoriesBy === "TOP"
      ? "topstories.json"
      : orderStoriesBy === "BEST"
      ? "beststories.json"
      : "newstories.json";

  const { data } = useFetchHackerNews<number[]>({
    uri: currentStorie,
  });

  const startIndex = pageNumber * storiesNumber;
  const endIndex = startIndex + storiesNumber;

  if (!data) return <BaseLoader />;

  // Set number of stories
  useEffect(() => {
    if (data) changeNumberOfStories(data.length);
  }, [data]);

  return (
    <div class="flex flex-col items-center w-full">
      {data.slice(startIndex, endIndex).map((id: number) => (
        <Card id={id} />
      ))}
    </div>
  );
};
