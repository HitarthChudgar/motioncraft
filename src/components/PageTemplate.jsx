import Header from "./Header";

const PageTemplate = () => {
  return (
    <div className="bg-zinc-900 min-h-screen w-full px-32 py-12 flex flex-col justify-normal items-center gap-10">
      <Header></Header>
    </div>
  );
};

export default PageTemplate;
