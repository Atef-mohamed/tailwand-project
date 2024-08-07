import { useState } from "react";
import TestmonBox from "./TestmonBox";

const Testimonialos = () => {
  const [testData, setTeastData] = useState([
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus blanditiis quam, eaque id alias error maxime necessitatibus nesciunt dolor.",
      image: "profile-1.jpg",
      position: "Founder & CEO ,Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus blanditiis quam, eaque id alias error maxime necessitatibus nesciunt dolor.",
      image: "profile-2.jpg",
      position: "Founder & CEO ,Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus blanditiis quam, eaque id alias error maxime necessitatibus nesciunt dolor.",
      image: "profile-3.jpg",
      position: "Founder & CEO ,Huddle",
      name: "Eman",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src="/src/assets/images/bg-quotes.png" alt="quote-icon" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] z-10 relative">
          {testData.map((item) => (
            <TestmonBox
              key={item.id}
              desc={item.description}
              image={item.image}
              position={item.position}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonialos;
