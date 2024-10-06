import Header from "./Header";

const PageTemplate = () => {
  return (
    <div className="relative min-h-screen w-full px-4 py-5 sm:px-4 sm:py-5 lg:px-14 xl:px-36 2xl:px-96 lg:py-12 flex flex-col justify-normal items-center gap-10 bg-zinc-900">
      <div className="absolute inset-0 bg-[url('/src/assets/paper_texture.jpg')] bg-cover bg-center mix-blend-multiply opacity-80 z-999"></div>
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
