const SideInfo = (props) => {
  return (
    <div className="flex flex-col">
      <p className="text-[20px]">{props.title}</p>
      <p className="text-[11px] text-[#000000]">{props.detail}</p>
    </div>
  );
};

export default SideInfo;
