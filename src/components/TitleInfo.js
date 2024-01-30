const TitleInfo = (props) => {
  const title = props.data.title;
  const info = props.data.info;
  return (
    <div className="w-[507px] h-fit bg-white p-[30px]">
      <div className="min-w-1/2 flex gap-[30px] flex-col">
        <p className="text-[32px]">{title}</p>
        <p className="text-[16px] whitespace-break-spaces">{info}</p>
      </div>
    </div>
  );
};

export default TitleInfo;
