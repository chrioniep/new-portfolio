import { TailwindIcon } from "@/utils/icons";
const TechLine = ({ name, icon }: any) => {
  return (
    <div className="flex items-center space-x-5">
      {" "}
      <div
        className="flex items-center justify-center w-12 h-12 p-3 bg-white
                  rounded-full shadow-md"
      >
        {icon}
      </div>
      <h3 className="text-lg dark:text-black">{name}</h3>
    </div>
  );
};

export default TechLine;
