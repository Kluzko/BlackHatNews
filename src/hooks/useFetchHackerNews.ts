import useSwr from "swr";
import axios from "axios";
import { useDebounce } from "./useDebounce";

type useFetchHackerNewsProps = {
  uri: string;
};

const baseUrl = "https://hacker-news.firebaseio.com/v0/";

export const useFetchHackerNews = <T>({ uri }: useFetchHackerNewsProps) => {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  const debounce = useDebounce(`${baseUrl}${uri}`, 300);
  const { data, error } = useSwr<T>(() => debounce, fetcher);

  return {
    data,
    error,
  };
};
