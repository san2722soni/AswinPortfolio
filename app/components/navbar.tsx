"use client"
import React from "react"
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconActivity, IconBlockquote, IconBriefcase, IconH1, IconHome, IconMessage, IconPhotoFilled, IconSettings, IconSettings2, IconUser } from "@tabler/icons-react"

interface navbarProps{
    name: string;
    description: string;
}

const Navbar: React.FC<navbarProps> = ({
    name,
    description
}) => {    

    const navItems = [
        {
          name: "Home",
          link: "/",
          to: "home",
          icon: <IconHome className="h-5 w-5 text-neutral-500" />,
        },
        {
          name: "About",
          link: "/",
          to: "about",
          icon: <IconUser className="h-5 w-5 text-neutral-500" />,
        },
        {
          name: "Contact",
          link: "/",
          to: "contact",
          icon: (
            <IconMessage className="h-5 w-5 text-neutral-500" />
          ),
        },
        {
          name: "Services",
          link: "/",
          to: "services",
          icon: <IconSettings className="h-5 w-5 text-neutral-500"/>
        },
        {
            name: "Portfolio",
            link: "/",
            to: "portfolio",
            icon: <IconBriefcase className="h-5 w-5 text-neutral-500" />,
        },
        {
          name: "Exhibition",
          link: "/",
          to: "gallery",
          icon: <IconPhotoFilled className="h-5 w-5 text-neutral-500" />
        },
        {
          name: "Testimonial",
          link: "/",
          to: "testimonial",
          icon: <IconBlockquote className="h-5 w-5 text-neutral-500" />
        }
      ];
    return (
        <>
        <FloatingNav navItems={navItems} />
        </>
    )
}

export default Navbar;