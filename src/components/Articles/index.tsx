import { useFetchHackerNews } from "../../hooks"
import Card from "../Card"
import { LoadingError } from "../Error"
import { BaseLoader } from "../Loader"


type ArticlesProps = {
    storieType: storiesUriType
    storiesQuantity: number
    pageNumber: number
}



export const Articles = ({ storieType, storiesQuantity, pageNumber }: ArticlesProps) => {

    const { data, error } = useFetchHackerNews<number[]>({
        uri: storieType
    })

    const startIndex = pageNumber === 0 ? (pageNumber * storiesQuantity) : (pageNumber * storiesQuantity) + 1
    const endIndex = startIndex + storiesQuantity

    if (error)
        return <LoadingError />
    if (!data)
        return <BaseLoader />

    return (
        <div class="flex flex-col items-center w-full">
            {
                data.slice(startIndex, endIndex).map((id: number) => (
                    <Card id={id} />
                ))
            }
        </div>
    )
}