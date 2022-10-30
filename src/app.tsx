
import { useState } from 'preact/hooks';
import Card from './components/Card'
import { LoadingError } from './components/Error';
import { BaseLoader } from './components/Loader';
import { Select } from './components/Select';
import { useFetchHackerNews } from './hooks';
export function App() {


  const [selectedStorie, setSelectedStorie] = useState<string>("TOP")

  let currentStorie = "topstories.json"

  if (selectedStorie === "TOP") {
    currentStorie = "topstories.json"
  }
  if (selectedStorie === "BEST") {
    currentStorie = "beststories.json"
  }
  if (selectedStorie === "NEW") {
    currentStorie = "newstories.json"
  }

  console.log(currentStorie, selectedStorie);


  const { data, error } = useFetchHackerNews({
    uri: currentStorie
  })

  if (error)
    return <LoadingError />
  if (!data)
    return <BaseLoader />



  const articlesIds = data.slice(0, 5);


  return (
    <div class="flex flex-col items-center h-screen w-screen">
      <h1 class="text-4xl md:text-4xl font-bold text-center text-slate-500 mt-10 mb-5">
        BlackHat <span class="text-orange-600">News!</span>
      </h1>
      <Select setSelected={setSelectedStorie} />
      <div class="flex flex-col items-center w-full">
        {
          articlesIds.map((id: number) => (
            <Card id={id} />
          ))
        }

      </div>
    </div>
  )
}
