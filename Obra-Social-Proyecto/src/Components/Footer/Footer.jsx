import "./Footer.css"
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
        <section className="social--media h-72 flex justify-center gap-6 items-center w-full">
            <div className="flex gap-2 items-center justify-center ">
                <IoLogoWhatsapp className="text-5xl text-red-600" />
                <p className="text-red-600 text-xl">WhatsApp</p>
            </div>
            <div className="flex gap-2 items-center justify-center " >
                <FaFacebook className="text-5xl text-red-600" />
                <p className="text-red-600 text-xl">Facebook</p>
            </div>
            <div className="flex gap-2 items-center justify-center ">
                <RiInstagramLine className="text-5xl bg-red-600 rounded-full p-2 text-white"  />
                <p className="text-red-600 text-xl">Instagram</p>
            </div>
        </section>
        <section className="logo--copyright p-10 flex justify-center lg:gap-72 lg:items-end">
            <img src="/logo.png" alt="" />
            <p className="text-red-700 w-60">
                Copyright © 2024 mental health |
                Powered by argentina.power®
            </p>
        </section>
    </>
  )
}

