import { Analytics } from '@vercel/analytics/react';
import { Footer } from '@/components/Footer';
import { useState } from 'preact/hooks';
import { Articles } from '@/components/Articles';
import { Pagination } from '@/components/Pagination';
import { SelectStoriesNumber, SelectStorieType } from '@/components/Select';

export function App() {


  const [selectedStorie, setSelectedStorie] = useState("TOP")
  const [numberOfStories, setNumberOfStories] = useState(5)
  const [page, setPage] = useState(0)


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
    <>


      <div class="flex flex-col items-center h-full w-screen">
        <h1 class="text-4xl md:text-4xl font-bold text-center text-slate-500 mt-10 mb-5">
          BlackHat <span class="text-orange-600">News!</span>
        </h1>
        <div class="flex justify-evenly w-2/3">
          <SelectStorieType setSelectedStorie={setSelectedStorie} />
          <SelectStoriesNumber setNumberOfStories={setNumberOfStories} />
        </div>
        <Articles storieType={currentStorie} storiesQuantity={numberOfStories} pageNumber={page} />
        <div class="mt-7 ">
          <Pagination articlesPerPage={numberOfStories} pageNum={page} setPageNumber={setPage} />
        </div>
        <Footer />
      </div>
      <Analytics />
    </>
  )
}
