import "./Hero.css"
export const Hero = () => {
  return (
    <>
    <section className="Hero--container flex justify-center items-center p-20 ">

        <div className="Hero--info flex flex-col justify-center items-center p-20">
            <h2 className="text-6xl text-center font-semibold ">Garantizamos atención pediátrica avanzada disponible las <span className="text-red-500"> 24/7 </span>  horas. </h2>
            <img className="mt-4" src="/hero.png" alt="" />
            <p className="text-center mt-2 ">En <span className="font-bold">Juntos por tus hijos</span>, nos comprometemos con la excelencia. implementamos importantes del mundo a través de un equipo multidisciplinario de profesionales con un alto sentido humano, contando con la tecnologia mas avanzada para atender de forma mas oportuna a los mas pequeños del hogar.  </p>

            <div className="Button--Hero--Container flex flex-col mt-4 gap-2">
                <button className="bg-red-400 cursor-pointer p-5 rounded-md text-white font-semibold">Contactanos</button>
                <button className="bg-black cursor-pointer p-5 rounded-md text-white font-semibold" >Como llegar?</button>
            </div>
        </div>
        
        <div className="Hero--Banner">
            <img className="banner--img" src="/banner.jpg" alt="" />
        </div>

    </section>

    </>
  )
}

