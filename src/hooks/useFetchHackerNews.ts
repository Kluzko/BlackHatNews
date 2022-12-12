import useSwr from "swr";
import axios from "axios";

type useFetchHackerNewsProps = {
  uri: string;
};

const baseUrl = "https://hacker-news.firebaseio.com/v0/";

export const useFetchHackerNews = <T>({ uri }: useFetchHackerNewsProps) => {
  // id/123 /artciles
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  // https://app.quicktype.io/?l=ts

  const { data, error } = useSwr<T>(`${baseUrl}${uri}`, fetcher);

  return {
    data,
    error,
  };
};
