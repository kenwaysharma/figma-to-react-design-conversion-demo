import circleTick from "../circleTick.svg";
import arrow from "../arrow.svg";
import { Link, Outlet } from "react-router-dom";

const Market = () => {
  return (
    <div className="container h-auto min-w-full flex flex-col gap-y-[5px]">
      <div className=" bg-white py-[30px] px-[60px] flex justify-between">
        <h3 className="font-bold">Choose your new site</h3>
        <div className="flex w-250px justify-between">
          <Link
            to={"step1"}
            className="border-b-4 border-black w-[29px] flex justify-around items-center"
          >
            <img src={circleTick} className="w-[12px] h-[12px]" />
            <h2 className="flex">1</h2>
          </Link>
          <img src={arrow} />

          <Link
            to={"step2"}
            className="border-b-4 border-[#00000040] text-[#00000040] w-[29px] flex justify-around"
          >
            <h2 className="flex">2</h2>
          </Link>
          <img src={arrow} />
          <Link
            to={"step3"}
            className="border-b-4 border-[#00000040] text-[#00000040] w-[29px] flex justify-around"
          >
            <h2 className="flex">3</h2>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Market;
