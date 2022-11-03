import { getDate } from "@/helpers";
import { CardLoaderSkielton } from "../Loader";
import { LoadingError } from "../Error";
import { useFetchHackerNews } from "@/hooks";



type CardProps = {
    id: number
}

const Card = ({ id }: CardProps) => {


    const { data, error } = useFetchHackerNews<HackerNewsArticleApi>({
        uri: `/item/${id}.json`
    })



    if (error)
        return <LoadingError />
    if (!data)
        return <CardLoaderSkielton />

    const { title, url, time } = data

    return (
        <div class="bg-neutral-600 w-10/12 md:w-6/12 lg:w-4/12 xl:3/12 my-5 h-40 rounded-md relative">
            <h1 class="absolute top-2 left-5 font-bold text-lg p-2 ">{title}</h1>
            <button class="absolute bottom-2 left-5 bg-gray-800 p-2 rounded-md font-bold">
                <a href={url} target="_blank" rel="noopener noreferrer" >
                    Read Article
                </a>
            </button>
            <p class=" absolute bottom-2 right-5 font-bold text-lg p-2">{getDate(time)}</p>
        </div>
    )
}


export default Card