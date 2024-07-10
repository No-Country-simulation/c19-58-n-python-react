import "./Header.css"

export const Header = () => {
  return (
   <>
    <header className="p-10 bg-white flex justify-between">
        <img src="/logo.png" alt="" />
        <nav>
            <ul className="flex gap-11 px-4">
                <li>
                    <a className="text-red-600" href="">Inicio</a>
                </li>
                <li>
                    <a className="text-red-600" href="">¿Quienes Somos?</a>
                </li>
                <li>
                    <a className="text-red-600" href="">Testimonios</a>
                </li>
                <li>
                    <a className="text-red-600" href="">Contactanos</a>
                </li>
                <li>
                    <a className="bg-neutral-800 rounded-md font-semibold text-white px-4 p-4" href="">Haz una cita</a>
                </li>
            </ul>
        </nav>
    </header>
   </>
  ) 
}

