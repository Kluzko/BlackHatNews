import { useLayoutEffect, useState } from "preact/hooks";
import { Footer } from "@/components/Footer";
import { Articles } from "@/components/Articles";
import { Pagination } from "@/components/Pagination";
import { SelectStoriesNumber, SelectStorieType } from "@/components/Select";
import { BackToTopBtn } from "@/components/Buttons";
import { GlobalContext } from "./Context";
import { useShowBackToTop } from "./hooks";

export function App() {
  const [page, setPage] = useState(0);

  const isVisableBackToTop = useShowBackToTop();

  return (
    <GlobalContext>
      <div class="flex flex-col items-center h-full w-screen">
        <h1 class="text-4xl md:text-4xl font-bold text-center text-slate-500 mt-10 mb-5">
          BlackHat <span class="text-orange-600">News!</span>
        </h1>
        <div class="flex justify-evenly w-2/3">
          <SelectStorieType />
          <SelectStoriesNumber />
        </div>
        <Articles pageNumber={page} />
        <div class="mt-7 ">
          <Pagination pageNum={page} setPageNumber={setPage} />
        </div>
        {isVisableBackToTop && <BackToTopBtn />}
        <Footer />
      </div>
    </GlobalContext>
  );
}
