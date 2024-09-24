import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header className="w-full h-10 flex justify-between items-center p-10 mb-10 text-white bg-red-900">
                <div>
                    <h1 className="font-bold text-2xl">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5 ">
                        <li >
                            <Link to='home'>Home</Link>
                            </li>
                        <li>
                            <Link to='movies'>Filmes</Link>
                            </li>
                        <li>
                            <Link to='genero'>Gêneros</Link>
                            </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}