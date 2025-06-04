import { Link, Outlet } from 'react-router-dom'
import './Shop.css'
import { useState } from 'react'

export default function Shop({listeFavoris, setListeFavoris}) {


    const [show, setShow] = useState(false)



    return(
        <div className='Shop'>
            <nav>
                <Link to="/"><h1>EShop</h1></Link>
                <ul>
                    <Link to="/products"><li>Boutique</li></Link>
                    <Link className='disabledLink'><li>Homme</li></Link>
                    <Link className='disabledLink'><li>Femme</li></Link>
                    <Link className='disabledLink'><li>Bijoux</li></Link>
                    <Link className='disabledLink'><li>Électroniques</li></Link>
                </ul>
                <div style={{display: "flex", gap: "10px"}}>
                    <button onClick={()=> setShow(true)}>Mes Favoris</button>
                    <button>Panier</button>
                </div>
            </nav>
            {show ? (
                <div className='showFavoris'>
                    <button onClick={()=> setShow(false)}>Fermer</button>
                    {listeFavoris.map(element => (
                        <span>{element}</span>
                    ))}
            </div>
            ): ""}
            <Outlet />
            <footer>
                <h1>EShop</h1>
                <ul>
                    <Link to="/products"><li>Boutique</li></Link>
                    <Link className='disabledLink'><li>Homme</li></Link>
                    <Link className='disabledLink'><li>Femme</li></Link>
                    <Link className='disabledLink'><li>Bijoux</li></Link>
                    <Link className='disabledLink'><li>Électroniques</li></Link>
                </ul>
            </footer>
        </div>
    )
}
