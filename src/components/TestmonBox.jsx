const TestmonBox = ({ name, image, desc, position }) => {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="text-sm font-normal mb-[30px] tracking-[0.8px]">{desc}</p>
      <div className="flex gap-[15px] items-center">
        <img
          src={`/src/assets/images/${image}`}
          alt="profile-img"
          className="w-[50px] h-[50px] rounded-[50%] object-contain"
        />
        <div className="">
          <strong className="block mb-5px">{name}</strong>
          <p className="font-normal text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestmonBox;
