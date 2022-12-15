import { useContext, useEffect, useState } from "preact/hooks";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import type { StateUpdater } from "preact/hooks";
import { OptionsContext } from "@/Context/options-context";

const PAGES_TO_DISPLAY = 5;

type PaginationProps = {
  pageNum: number;
  setPageNumber: StateUpdater<number>;
};

export const Pagination = ({ pageNum, setPageNumber }: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([]);

  const {
    options: { numberOfStories, storiesNumber, orderStoriesBy },
  } = useContext(OptionsContext);

  const PAGE_COUNT = numberOfStories / storiesNumber;

  const buildPagination = (pageIndex: number) => {
    setPageNumber(pageIndex);

    const start = Math.max(0, pageIndex - (PAGES_TO_DISPLAY - 1) / 2);
    const end = Math.min(PAGE_COUNT, start + PAGES_TO_DISPLAY);
    const newPages = [];
    for (let i = start; i < end; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  };

  useEffect(() => {
    buildPagination(0);
  }, [storiesNumber, orderStoriesBy]);

  console.log(pages, pageNum);
  const btnClass =
    "grid place-items-center w-9 h-9 p-0 border-0 rounded text-gray-200  disabled:opacity-25 disabled:cursor-not-allowed ";

  return (
    <div class="flex gap-1 ">
      <button
        class={`${btnClass} bg-gray-800 `}
        disabled={pageNum === 0}
        onClick={() => buildPagination(0)}
        type="button"
      >
        <AiOutlineDoubleLeft />
      </button>
      {pages.map((p: number) => (
        <button
          key={p}
          class={
            p === pageNum
              ? `${btnClass} bg-purple-800`
              : `${btnClass} bg-gray-800`
          }
          onClick={() => buildPagination(p)}
          type="button"
        >
          {p + 1}
        </button>
      ))}
      <button
        disabled={pageNum === PAGE_COUNT - 1}
        class={`${btnClass} bg-gray-800`}
        onClick={() => buildPagination(PAGE_COUNT - 1)}
        type="button"
      >
        <AiOutlineDoubleRight />
      </button>
    </div>
  );
};
