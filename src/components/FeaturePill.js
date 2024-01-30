import thunder from "../thunder.svg";
const FeaturePill = (props) => {
  return (
    <div className="flex bg-slate-100 py-[1px] px-[5px] gap-[5px] justify-between text-[#00000080]">
      <img src={thunder} alt="thundericon" />
      <p>{props.title}</p>
    </div>
  );
};

export default FeaturePill;
