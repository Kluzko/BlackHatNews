export const BaseLoader = () => (
  <div class="flex items-center justify-center w-full h-screen">
    <div class="flex justify-center items-center space-x-1">
      <svg
        fill="none"
        class="w-14 h-14 animate-spin"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
          fill="currentColor"
          fill-rule="evenodd"
        />
      </svg>
      <div class={"text-xl"}>Loading ...</div>
    </div>
  </div>
);

export const CardLoaderSkielton = () => (
  <div class={`w-10/12 md:w-6/12 lg:w-4/12 xl:3/12 mx-auto mt-10`}>
    <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
      <div class="flex flex-col space-y-3 w-full ">
        <div class={`w-full  bg-neutral-600 h-6 rounded-md`}></div>
        <div class={`w-full  bg-neutral-600 h-6 rounded-md`}></div>
        <div class="flex flex-row justify-between  w-full ">
          <div class="w-14 bg-neutral-600 h-6 rounded-md "></div>
          <div class="w-10 bg-neutral-600 h-6 rounded-md "></div>
        </div>
      </div>
    </div>
  </div>
);
