
import { useState } from 'preact/hooks';
import { Articles } from './components/Articles';
import { Select } from './components/Select';

export function App() {


  const [selectedStorie, setSelectedStorie] = useState<string>("TOP")

  let currentStorie: storiesUriType = "topstories.json"

  if (selectedStorie === "TOP") {
    currentStorie = "topstories.json"
  }
  if (selectedStorie === "BEST") {
    currentStorie = "beststories.json"
  }
  if (selectedStorie === "NEW") {
    currentStorie = "newstories.json"
  }


  return (
    <div class="flex flex-col items-center h-screen w-screen">
      <h1 class="text-4xl md:text-4xl font-bold text-center text-slate-500 mt-10 mb-5">
        BlackHat <span class="text-orange-600">News!</span>
      </h1>
      <Select setSelected={setSelectedStorie} />
      <Articles storieType={currentStorie} storiesQuantity={5} />
    </div>
  )
}
