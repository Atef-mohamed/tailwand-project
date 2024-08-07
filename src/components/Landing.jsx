const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[180px]">
          <div className="max-w-full w-[650px]">
            <img
              className="h-fit w-full"
              src="/src/assets/images/landing-img.png"
              alt="landing-img"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All Your files in one secure location,
              <br />
              accessilbe anyware
            </h1>
            <p className="font-normal text-lg max-w-full md:w-[600px] px-[15px] mb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit
              et hic veritatis consequatur minima nihil libero, aut adipisci
              dolorem.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium "
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img
          src="/src/assets/images/bg-curvy-desktop.svg"
          alt=""
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
