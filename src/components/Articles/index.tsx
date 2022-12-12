import { OptionsContext } from "@/Context/options-context";
import { useFetchHackerNews } from "@/hooks";
import { useContext, useEffect } from "preact/hooks";
import Card from "../Card";
import { LoadingError } from "../Error";
import { BaseLoader } from "../Loader";

type ArticlesProps = {
  pageNumber: number;
};

export const Articles = ({ pageNumber }: ArticlesProps) => {
  const {
    changeNumberOfStories,
    options: { storiesNumber, orderStoriesBy },
  } = useContext(OptionsContext);

  let currentStorie: storiesUriType = "topstories.json";

  if (orderStoriesBy === "TOP") {
    currentStorie = "topstories.json";
  }
  if (orderStoriesBy === "BEST") {
    currentStorie = "beststories.json";
  }
  if (orderStoriesBy === "NEW") {
    currentStorie = "newstories.json";
  }

  const { data, error } = useFetchHackerNews<number[]>({
    uri: currentStorie,
  });

  const startIndex =
    pageNumber === 0
      ? pageNumber * storiesNumber
      : pageNumber * storiesNumber + 1;

  const endIndex = startIndex + storiesNumber;

  if (error) return <LoadingError />;
  if (!data) return <BaseLoader />;

  // Set number of stories
  useEffect(() => {
    changeNumberOfStories(data.length);
  }, [data]);

  return (
    <div class="flex flex-col items-center w-full">
      {data.slice(startIndex, endIndex).map((id: number) => (
        <Card id={id} />
      ))}
    </div>
  );
};
