import arrow_right from "../../arrow_right.svg";
import location from "../../location.svg";
import north_east from "../../north_east.svg";
import CompleteProfileStep from "../CompleteProfileStep";
import TitleInfo from "../TitleInfo";
import SideInfo from "../SideInfo";
import FeaturePill from "../FeaturePill";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { info, steps } from "../../dummyData";


const ChooseYourNewSite = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const allSteps = steps.length;
    setTotalSteps(allSteps);
  });
  return (
    <div className="flex flex-col py-[60px] px-[60px] gap-[10px] max-h-[calc(100vh-220px)] overflow-y-auto bg-white">
      <div className="min-h-[51px]">
        <h3>Market > Category1 > Theme park site > </h3>
      </div>

      <div
        className="shadow-xl relative  min-h-[371px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbmRzY2FwZSUyMHZpZXd8ZW58MHx8MHx8fDA%3D)",
          backgroundColor: "lightgray",
        }}
      ></div>

      <div className="bg-[#D9D9D9] p-[5px] flex flex-col gap-[5px]">
        <div className="flex p-[30px] justify-between bg-white">
          {
            //Theme park site
          }
          <div className="w-[462.5px] flex flex-col gap-[30px]">
            <h2 className="text-[32px]">Theme Park Site</h2>
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[5px]">
                <img src={location} />
                <p className="text-[16px] text-[#0000004D]">
                  Address of the site
                </p>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <FeaturePill title="Adult rides" />
              <FeaturePill title="Family rides" />

              <FeaturePill title="Restaurants" />
            </div>
            <div>
              <button className="hover:bg-blue-500 hover:text-white py-[5px] px-[10px] items-center gap-[10px] flex border-2 border-[#4375FB] text-[#4375FB]">
                {" "}
                <img src={north_east} />
                View opportunity on polygon
              </button>
            </div>
            <div className="flex gap-[30px]">
              <SideInfo title="200 Acres" detail="Area" />
              <SideInfo title="5 Lacks" detail="Starting price" />
              <SideInfo title="10 Dyas" detail="Remaining Days" />
              <SideInfo title="2.5 years" detail="Next check" />
            </div>
          </div>
          {
            //Complete button
          }
          <div className=" flex flex-col items-end gap-[10px]">
            <button
              className="w-[273px] min-h-[52px] py-[17px] px-[31px] bg-blue-600 text-white disabled:opacity-75"
              onClick={() => navigate("/market/step2")}
              disabled={currentStep == totalSteps ? false : true}
            >
              Complete
            </button>
            <button className="whitespace-nowrap hover:bg-blue-500 hover:text-white w-[136px] min-h-[52px] py-[17px] px-[31px] items-center gap-[10px] flex border-2 border-[#4375FB] text-[#4375FB]">
              Site visit <img src={arrow_right} />
            </button>
            <div className="flex flex-col justify-between min-w-[273px]">
              <div className="flex justify-between items-end">
                <p className="text-[#4375FB] text-[24px]">Rs 20,00,000</p>
                <p className="text-[#0000004D] text-[15px]">Rs 65.00,000</p>
              </div>

              <div className="w-[273px] bg-slate-400">
                <div className="w-1/2 min-h-[5px] bg-blue-700"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between max-h-[600px]">
          {
            //left half
          }
          <div className="flex flex-col gap-[5px] overflow-y-auto">
            {info.map((el) => (
              <TitleInfo data={el} />
            ))}
          </div>

          {
            //Right half
          }
          <div className="w-[458px] h-full overflow-y-auto flex flex-col gap-[5px]">
            {steps.map((el) => (
              <CompleteProfileStep
                data={el}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourNewSite;
