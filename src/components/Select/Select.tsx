import { FunctionComponent } from "preact/compat";
type SelectProps = {
  tailwindCss?: string;
  onChange: (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => void;
};

export const Select: FunctionComponent<SelectProps> = ({
  children,
  tailwindCss,
  onChange,
}) => {
  return (
    <div class={`${tailwindCss} mb-3`}>
      <select
        class="appearance-none 
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
  );
};
