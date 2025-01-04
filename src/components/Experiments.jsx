import Tabs from "./experiment components/Tabs";
import HeaderDropdown from "./experiment components/HeaderDropdown";
import CommandBar from "./CommandBar"; // Import the CommandBar component

// Experiment configurations
const experimentConfigs = [
  {
    title: "Adaptive Tab Navigation",
    subtitle:
      "A responsive tab system with smooth highlight effects, guiding focus through subtle hover and active tab distinctions for seamless navigation.",
    tags: ["react", "tailwind", "framer"],
    component: Tabs,
  },
  {
    title: "Header Dropdown",
    subtitle:
      "An intuitive navigation pattern that reinforces user context through subtle preview animations, helping users understand their location and potential actions before committing to them.",
    tags: ["react", "tailwind", "framer"],
    component: HeaderDropdown,
  },
  // Add other configurations if needed
];

const Experiments = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      {experimentConfigs.map((experiment, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row w-full md:gap-8 gap-6"
        >
          {/* Left content: Title, subtitle, tags, etc. */}
          <div className="md:w-1/4 w-full flex flex-col">
            <h2 className="text-zinc-50 font-medium text-sm sm:text-base leading-normal font-inter">
              {experiment.title}
            </h2>
            <p className="text-zinc-400 font-normal text-sm sm:text-base leading-5 sm:leading-6 font-inter mt-3 mb-3">
              {experiment.subtitle}
            </p>

            {/* Tags section */}
            <div className="flex flex-wrap gap-2 mt-2">
              {experiment.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-zinc-800 text-zinc-50 text-sm rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right content: Experiment box */}
          <div className="md:w-3/4 w-full flex justify-center items-center h-[480px] p-6 border border-zinc-800 rounded-lg">
            <experiment.component />
          </div>
        </div>
      ))}

      {/* Pass the experiment count to CommandBar */}
      <CommandBar componentCount={experimentConfigs.length} />
    </div>
  );
};

export default Experiments;
