import { useFetchHackerNews } from "../../hooks"
import Card from "../Card"
import { LoadingError } from "../Error"
import { BaseLoader } from "../Loader"

type ArticlesProps = {
    storieType: storiesUriType
    storiesQuantity: number
}



export const Articles = ({ storieType, storiesQuantity }: ArticlesProps) => {

    const { data, error } = useFetchHackerNews({
        uri: storieType
    })

    if (error)
        return <LoadingError />
    if (!data)
        return <BaseLoader />

    return (
        <div class="flex flex-col items-center w-full">
            {
                data.slice(0, storiesQuantity).map((id: number) => (
                    <Card id={id} />
                ))
            }

        </div>
    )
}