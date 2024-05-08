import Link from "next/link";
const WorkLine = ({ bg, link }: any) => {
  return (
    <Link href={link}>
      <div className="carousel-item">
        <div className="h-[440px] w-[660px] border-white p-2 border-[1px] cursor-pointer">
          <div
            style={{ backgroundImage: `url('${bg}')` }}
            className="backdrop-blur-sm bg-cover bg-no-repeat bg-center h-full flex items-end justify-start px-8 py-9"
          >
            {/* <div className="space-y-3">
            <button className="bg-white rounded-full p-2">Design</button>
            <h2 className="text-white text-4xl font-bold">{title}</h2>
          </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkLine;
