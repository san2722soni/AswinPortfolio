import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-scroll";
import { toast } from "sonner";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Skills", to: "services" },
  { label: "Contact", to: "contact" },
];

export const Footer = () => {
  return (
    <footer className="mt-28 border-t border-white/10 bg-white/[0.03] text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-4">
            <img
              src="/image.png"
              alt="Aswin Anand"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold text-white">{"<ASWIN/>"}</p>
              <p className="mt-1 text-sm text-neutral-400">
                Full-Stack Developer | Systems & CLI Tooling
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
            Building modern web apps, backend systems, terminal workflows, and
            production-ready project documentation.
          </p>
        </div>

        <nav>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Navigate
          </h2>
          <ul className="grid gap-2">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  smooth={true}
                  duration={700}
                  to={item.to}
                  className="cursor-pointer text-sm text-neutral-300 hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Connect
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-full bg-white p-3 text-black transition hover:bg-cyan-200"
              onClick={() => {
                navigator.clipboard.writeText("9852502007");
                toast.success("Phone number copied");
              }}
              aria-label="Copy phone number"
            >
              <IconPhone className="h-5 w-5" />
            </button>
            <button
              className="rounded-full bg-white p-3 text-black transition hover:bg-cyan-200"
              onClick={() => {
                navigator.clipboard.writeText("invictusasw7@gmail.com");
                toast.success("Email copied");
              }}
              aria-label="Copy email"
            >
              <IconMail className="h-5 w-5" />
            </button>
            <a
              className="rounded-full bg-white p-3 text-black transition hover:bg-cyan-200"
              href="https://github.com/san2722soni"
              target="_blank"
              aria-label="GitHub"
            >
              <IconBrandGithub className="h-5 w-5" />
            </a>
            <a
              className="rounded-full bg-white p-3 text-black transition hover:bg-cyan-200"
              href="https://www.linkedin.com/in/aswin-anand-90ab91275/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="h-5 w-5" />
            </a>
            <a
              className="rounded-full bg-white p-3 text-black transition hover:bg-cyan-200"
              href="https://www.instagram.com/code2006asw/"
              target="_blank"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-neutral-500">
        (c) 2026 Aswin Anand. Portfolio built with Next.js, Tailwind, shadcn/Radix,
        and motion components.
      </div>
    </footer>
  );
};
