import type { StateUpdater } from "preact/compat"



const options = [
    {
        val: "TOP",
        text: "Top Stories"
    },
    {
        val: "BEST",
        text: "Best Stories"
    },
    {
        val: "NEW",
        text: "New Stories"
    },
]
type SelectProps = {
    setSelected: StateUpdater<string>
}

export const Select = ({ setSelected }: SelectProps) => {
    return (
        <div class="flex justify-center w-full">
            <div class="mb-3 w-40 md:w-60">
                <select class="appearance-none 
      block
      w-full
      px-3
      py-1.5
      text-base
      text-center
      font-semibold
      text-main 
      bg-secondary 
      rounded
      transition
      ease-in-out
      cursor-pointer"
                    onChange={(e: JSX.TargetedEvent<HTMLSelectElement, Event>) => setSelected(e.currentTarget.value)
                    }

                >
                    {options.map(({ val, text }) => (
                        <option value={val} >{text}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}