import { PiMapPinAreaBold } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import "./Contact.css"

export const Contact = () => {
  return (
    <>
        <section id="cita" className="form bg-neutral-900 lg:h-60 w-full flex justify-center items-center gap-5 ">
            <div className="form--text text-white font-bold">
                <h3 className="text-3xl">Suscríbete a nuestro boletín</h3>
                <p>Recibe información de tratamientos actualizados. servicios que ofrecemos y noticias</p>
            </div>
            <div>
                <input className="p-3 px-40" type="email" placeholder="Ingrese su mail aqui" name="" id="" />
            </div>
            <button className="bg-red-800 p-3 w-40 text-white">Enviar</button>
        </section>
        
        <section className="contact--section bg-red-800 lg:h-60 md:h-96 w-full text-white flex justify-center items-center gap-5">
       
          <div className="icon ">
                  <PiMapPinAreaBold className="text-5xl" />
          </div>
              <div>
                <h5 className="font-bold">Dirección</h5>
                <p className="w-60">
                  Av. Catacaos 12, Puerta de Hierro,
                  Andares, Zapopan, Jalisco, MX
                </p>
              </div> 
            
            <hr />
            
            <div className="icon">
              <FaPhoneVolume className="text-5xl" />
            </div>
            
            <div>
              <h5 className="font-bold">Llámanos</h5>
              <p>+52 33 1769 3893</p>
            </div>
            
            <hr />

            <div className="icon">
            <TbMailFilled className="text-7xl" />
            </div>

            <div>
              <h5 className="font-bold">
                Nuestro Correo
              </h5>
              <p>sicoayuda.ongetc@gmail.com</p>
            </div>
        </section>
    </>
  )
}

 