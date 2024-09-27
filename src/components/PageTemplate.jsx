import Header from "./Header";

const PageTemplate = () => {
  return (
    <div className="bg-zinc-900 min-h-screen w-full px-4 py-5 sm:px-4 sm:py-5 lg:px-32 lg:py-12 flex flex-col justify-normal items-center gap-10">
      <Header></Header>
      <svg
        className="w-full"
        viewBox="0 0 1184 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="0.5"
          x2="1183.5"
          y2="0.5"
          stroke="#A1A1AA"
          stroke-linecap="round"
          stroke-dasharray="2 4 6 8"
        />
      </svg>
    </div>
  );
};

export default PageTemplate;
