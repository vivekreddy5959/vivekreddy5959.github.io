const Exp_prop = (props) => {
  return (
    <>
      <div className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[490px] max-sm:h-[600px] hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]">
        <div className="HEADER flex ">
          <div className=" max-w-[80px] m-3">
            <img src={props.img} alt="" />
          </div>

          <div className="">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold ">
              {props.title}
            </h1>
            <p className="text-[#00040f] dark:text-white text-lg my-2">
              {props.subtitle}
            </p>
            <p className="italic text-sm text-slate-700 dark:text-slate-300">
              {props.date}
            </p>
          </div>
        </div>
        {props.para.map((exp) => (
          <p className="text-sm text-slate-700 dark:text-slate-300 mt-5 p-2 leading-10">
            {exp}
          </p>
        ))}
      </div>
    </>
  );
};
export default Exp_prop;
