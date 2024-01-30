import { useEffect, useState } from "react";

const CompleteProfileStep = (props) => {
  const { title, button } = props.data;
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [error, setError] = useState("");

  const [componentDisabled, setComponentDisabled] = useState(true);
  useEffect(() => {
    if (props.data.id == props.currentStep) {
      setComponentDisabled(false);
    }
    if (props.data.id < props.currentStep) {
      setComponentDisabled(true);
    }
  });
  const handleSubmit = async () => {
    if (checkboxChecked) {
      setError("");
      props.setCurrentStep((prev) => prev + 1);
    } else {
      setError("Please check the box");
    }
  };
  return (
    <div
      className={`p-[20px] h-[156px] flex flex-col gap-[40px] bg-white ${error ? "border-2 border-red-500" : ""}`}
    >
      <div className="whitespace-nowrap w-full flex  gap-[30px]">
        <input
          type="checkbox"
          className="w-[20px]"
          value={checkboxChecked}
          onClick={() => {
            setError("");
            setCheckboxChecked(!checkboxChecked);
          }}
          disabled={componentDisabled}
        />
        <p className="text-[20px]">{title}</p>
      </div>
      <div className="w-full flex justify-end align-middle text-[14px]">
        <button
          className="hover:bg-blue-800 transition ease-in-out delay-150 w-[169px] h-[52px] py-[17px] px-[31px] bg-blue-600 text-white disabled:opacity-75"
          onClick={handleSubmit}
          disabled={componentDisabled}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default CompleteProfileStep;
