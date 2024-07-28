import "./About.css"

export const About = () => {
  return (
    <>
        <section id="quienes-somos" className="about--container bg-red-800 lg:h-96 w-full flex justify-center gap-6 text-center flex-col items-center ">
            <h3 className="text-white w-[800px]  text-3xl font-bold ">
                Apoyamos en proponer esta nueva ley para que podamos tener salud mental
                para jovenes adultos argentinos y se parte del cambio
            </h3>
            <button className="about--button bg-neutral-800 lg:px-40 p-4 rounded-md text-white font-bold text-2xl">Quiero mas información</button>
        </section>
        <section className="about--info flex gap-12 justify-center p-4 mt-5">
            <img className="w-[340px] mt-20 rounded-md " src="/about.jpg" alt="" />
            <div className="about--text flex flex-col">
                <h2 className="text-4xl lg:px-[10rem] text-center font-bold">Somos una ONG que da
                    Apoyo Psicológico Integral
                    para Jóvenes Adultos
                </h2>
                {/* <div className="w-full  flex flex-col justify-center items-center">
                    <p className="bg-red-800 max-w-full rounded-md p-10 mt-5 text-right text-white font-bold text-3xl">Acceso Gratuito Servicios psicologicos</p>
                    <p className="bg-red-800 rounded-md max-w-full p-10 mt-5 text-right text-white font-bold text-3xl">Coaching Oncologico Especializado</p>
                    <p className="bg-red-800 rounded-md max-w-full p-10 mt-5 text-right text-white font-bold text-3xl">Equipo Multidisciplinario</p>
                </div>
        */}
                <ul className="about--list [&>li]:bg-red-800 text-right [&>li]:items-end [&>li]:mt-5 [&>li]:rounded-md [&>li]:w-full [&>li]:p-12 [&>li]:text-white [&>li]:font-bold [&>li]:text-3xl flex flex-col  ">
                    <li>
                        Acceso Gratuito Servicios Psicológicos
                    </li>
                    <li>
                        Coaching Oncológico Especializado
                    </li>
                    <li>
                        Equipo Multidisciplinario
                    </li>
                </ul>
            </div>

        </section>
    </>
  )
}

