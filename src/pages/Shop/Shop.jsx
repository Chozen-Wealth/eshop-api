import { Link, Outlet } from 'react-router-dom'
import './Shop.css'
import { useState } from 'react'

export default function Shop({listeFavoris, setListeFavoris}) {


    const [show, setShow] = useState(false)
    const [menu, setMenu] = useState(false)



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
                <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                    <button onClick={()=> setShow(true)}>Mes Favoris</button>
                    <button>Panier</button>
                    {menu ? "" : (
                        <div onClick={()=> setMenu(true)} className='divBurger'><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div>
                    )}
                </div>
            </nav>
            {menu ? (
                <div className='sideMenu'>
                    <div onClick={()=> setMenu(false)} className='divClose'><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
                    <ul>
                    <Link onClick={()=> setMenu(false)} to="/products"><li>Boutique</li></Link>
                    <Link className='disabledLink'><li>Homme</li></Link>
                    <Link className='disabledLink'><li>Femme</li></Link>
                    <Link className='disabledLink'><li>Bijoux</li></Link>
                    <Link className='disabledLink'><li>Électroniques</li></Link>
                    <div style={{display: "flex", gap: "10px", alignItems: "center", flexDirection: "column"}}>
                        <button onClick={()=> setShow(true)}>Mes Favoris</button>
                        <button>Panier</button>
                    </div>
                </ul>
                </div>
            ):""}
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
