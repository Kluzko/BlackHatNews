import type { FunctionComponent, StateUpdater } from "preact/compat"

const SelectStorieOptions = [
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
const SelectStorieNumberOptions = [
    {
        val: 5,
        text: "5"
    },
    {
        val: 10,
        text: "10"
    },
    {
        val: 20,
        text: "20"
    },
]

// figure out type 
type SelectProps = {
    tailwindCss?: string
    onChange: (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => void // sett
}

// https://stackoverflow.com/questions/36531525/value-of-selectoption-coming-back-as-string

// https://stackoverflow.com/questions/33256274/typesafe-select-onchange-event-using-reactjs-and-typescript

const Select: FunctionComponent<SelectProps> = ({ children, tailwindCss, onChange }) => {
    return (

        <div class={`${tailwindCss} mb-3`}>
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
                onChange={onChange}
            >
                {children}
            </select>
        </div>

    )
}

type SelectStorieType = {
    setSelectedStorie: StateUpdater<string>

}

export const SelectStorieType = ({ setSelectedStorie }: SelectStorieType) => (
    <Select tailwindCss={"w-40 md:w-60"}
        onChange={(e => setSelectedStorie(e.currentTarget.value))}
    >
        {SelectStorieOptions.map(({ val, text }) => (
            <option value={val} >{text}</option>
        ))}
    </Select>
)

type SelectStoriesNumber = {
    setNumberOfStories: StateUpdater<number>
}

export const SelectStoriesNumber = ({ setNumberOfStories }: SelectStoriesNumber) => (
    <Select tailwindCss={"w-10 md:w-20"}
        onChange={(e => setNumberOfStories(Number(e.currentTarget.value)))}

    >
        {SelectStorieNumberOptions.map(({ val, text }) => (
            <option value={Number(val)} >{text}</option>
        ))}
    </Select>
)