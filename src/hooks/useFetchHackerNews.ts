import useSwr from 'swr'
import axios from 'axios'


type useFetchHackerNewsProps = {
    uri: string
}

const baseUrl = "https://hacker-news.firebaseio.com/v0/"

export const useFetchHackerNews = <T>({ uri }: useFetchHackerNewsProps) => { // id/123 /artciles
    const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);

    console.log({ fetcher });

    // https://app.quicktype.io/?l=ts


    const { data, error } = useSwr<T>(`${baseUrl}${uri}`, fetcher)

    console.log(data);[12312, 12, 321, 3, 123, 12, 312, 321, {
        by: 213123
    }]

    return {
        data, error
    }

}

