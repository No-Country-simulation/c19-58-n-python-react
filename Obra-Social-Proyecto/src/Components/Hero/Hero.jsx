import "./Hero.css"
export const Hero = () => {
  return (
    <>
    <section className="Hero--container flex justify-center items-center p-20 ">

        <div className="Hero--info text-center flex flex-col justify-center items-center p-20">
            <h2 className="text-[2.75rem] text-center font-semibold "> Impulsamos una ley para ofrecer segurmo médico psicológico gratuito a jóvenes adultos Argentinos. </h2>
            <img className="mt-4" src="/hero.png" alt="" />
            <p className="mt-2 ">  </p>
                En Salud Mental Para Todos, nos comprometemos con la salud menta de los jóvenes adultos argentinos. En Argentina, el 30% de los jóvenes adultos de entre 17 y 31 años reportan haber sufrido algún trastorno mental en el último año. Los trastornos de ansiedad y depresión son los mas comunes, afectando sifnificativamente su calidad de vida.
            <div className="Button--Hero--Container w-[60%] flex flex-col mt-4 gap-2">
                <button className="bg-red-800 cursor-pointer p-3 rounded-xl text-white font-semibold">Apoyar a la propuesta de ley</button>
                <button className="bg-black cursor-pointer p-3 rounded-xl text-white font-semibold" >Quiero una cita</button>
            </div>
        </div>
        
        <div className="Hero--Banner">
            <img className="banner--img rounded-2xl "  src="/banner.jpg" alt="" />
        </div>

    </section>

    </>
  )
}

