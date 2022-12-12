const handleClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const BackToTopBtn = () => {
  return (
    <button
      class="w-8 h-8 flex items-center justify-center fixed bg-secondary rounded-full p-6 bottom-10 right-10 hover:opacity-90 transition-opacity text-black"
      onClick={handleClick}
    >
      ↑
    </button>
  );
};
