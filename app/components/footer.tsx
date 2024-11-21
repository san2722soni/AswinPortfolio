import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-scroll";
import "@/app/globals.css";
import { toast } from "sonner";

export const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-[#ffffff04] mt-40">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white hover:text-gray-500 tracking-widest text-sm mb-3">
                Navigate
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link smooth={true} duration={700} to="home">
                    <a className="text-white hover:text-gray-400">Home</a>
                  </Link>
                </li>
                <li>
                  <Link smooth={true} duration={700} to="about">
                    <a className="text-white hover:text-gray-400">About</a>
                  </Link>
                </li>
                <li>
                  <Link smooth={true} duration={700} to="contact">
                    <a className="text-white hover:text-gray-400">Contact</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white hover:text-gray-500 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link smooth={true} duration={700} to="services">
                    <a className="text-white hover:text-gray-400">Services</a>
                  </Link>
                </li>
                <li>
                  <Link smooth={true} duration={700} to="portfolio">
                    <a className="text-white hover:text-gray-400">Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link smooth={true} duration={700} to="testimonial">
                    <a className="text-white hover:text-gray-400">
                      Testimonial
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white hover:text-gray-500 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    className="text-white hover:text-gray-400"
                    href="https://www.linkedin.com/in/aswin-anand-90ab91275/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-gray-400"
                    href="https://github.com/san2722soni"
                    target="_blank"
                  >
                    Git-Hub
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-gray-400"
                    href="https://www.instagram.com/code2006asw"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white hover:text-gray-500 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start lg:items-centre">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-[#ffffff12] rounded border border-gray-300 text-base outline-none text-white focus:bg-transparent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="bg-[#525252] border border-white text-white hover:bg-transparent py-2 px-5 rounded-md" onClick={() => toast.info("Please click on 'Contact Me' button,to send messsage.")}>
                  Submit
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Enter your email to stay tuned!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff12]">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white hover:text-gray-500">
              <img
                src={`/pfp3.jpg`}
                alt="Image"
                className="rounded-full w-24 h-24 hover:scale-150 transition-all duration-500"
              />

              <span className="ml-3 text-xl">{`<ASWIN/>`}</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 aswinPortfolio —
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="ml-3 text-gray-500 group"
                href="/"
                onDoubleClick={() =>
                  navigator.clipboard.writeText("9852502007")
                }
                target="_blank"
              >
                <IconPhone className="w-10 h-10 p-2 bg-white text-black hover:border hover:border-white hover:bg-transparent hover:text-white rounded-full" onClick={() => toast.info('Please double click to copy phone no.')}/>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="/"
                onDoubleClick={() =>
                  navigator.clipboard.writeText("invictusasw7@gmail.com")
                }
                target="_blank"
              >
                <IconMail className="w-10 h-10 p-2 bg-white text-black hover:border hover:border-white hover:bg-transparent hover:text-white rounded-full" onClick={() => toast.info('Please double click to copy mail id.')}/>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://github.com/san2722soni"
                target="_blank"
              >
                <IconBrandGithub className="w-10 h-10 p-2 bg-white text-black hover:border hover:border-white hover:bg-transparent hover:text-white rounded-full" />
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://www.instagram.com/code2006asw/"
                target="_blank"
              >
                <IconBrandInstagram className="w-10 h-10 p-2 bg-white text-black hover:border hover:border-white hover:bg-transparent hover:text-white rounded-full" />
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://www.linkedin.com/in/aswin-anand/"
                target="_blank"
              >
                <IconBrandLinkedin className="w-10 h-10 p-2 bg-white text-black hover:border hover:border-white hover:bg-transparent hover:text-white rounded-full" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
