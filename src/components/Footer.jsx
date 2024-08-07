import { useState } from "react";

function Footer() {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+201018539323" },
    { icon: "icon-email.svg", text: "example@gmail.com" },
  ]);
  const [links, setLinks] = useState([
    "About US",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Bolg",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-icon"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full ">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="location-icon"
              className="h-[18px] w-[18px] object-contain"
            />
            <p className="text-sm font-normal tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus provident commodi similique non iure fugiat, esse
              molestias necessitatibus consequuntur iusto.
            </p>
          </div>
          <div id="contact">
            {contact.map((item) => (
              <div
                className=" flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
                key={item.text}
              >
                <img
                  src={`/src/assets/images/${item.icon}`}
                  alt="phone-icon"
                  className="h-[18px] w-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div id="links">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {links.map((link) => (
                <li>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((sIcon) => (
              <li key={sIcon}>
                <a href={`${sIcon}.com`} className="group">
                  <i
                    className={`fa-brands fa-${sIcon} group-hover:text-primary`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
