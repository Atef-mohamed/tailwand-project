const StayProductive = () => {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay-productive-img"
          />
        </div>
        <div className="text-white text-center   md:text-left">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay Productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              sapiente exercitationem atque velit, illo vero praesentium totam
              eligendi facere libero!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, enim quia! Laborum error adipisci est distinctio
              veritatis explicabo fugit magni.
            </p>
          </div>
          <a
            href="/"
            className=" flex items-center gap-[15px] w-fit text-primary hover:text-[#42b0d1] border-b-2 border-primary border-solid pb-[5px] transition-colors duration-200"
          >
            See how Fylo works
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="icon-arrow"
              className="h-[20px] w-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
