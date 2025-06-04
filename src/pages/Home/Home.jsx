import { useEffect, useState } from 'react'
import './Home.css'
import Product from '../Product/Product'
import { useNavigate } from 'react-router-dom'

export default function Home({data}) {

    const navigate = useNavigate()

    const [currentId, setCurrentId] = useState(1)
    const [produit, setProduit] = useState([])
    const [filtreEtoiles, setFiltreEtoiles] = useState([])


    // Carousel automatique
    useEffect(()=> {
        if (!data) return;
        const interval = setInterval(()=>{
            setCurrentId(prev => (prev === data.length ? 1 : prev + 1))
        }, 5000)
        return() => clearInterval(interval)
    },[data])

    // Création du filtre
    useEffect(()=>{
        if (data) {
            const newProduit = data.filter(element => element.id === currentId)
            setProduit(newProduit)
        }
    },[data, currentId])
    useEffect(()=>{
        if (data) {
            const newFiltreEtoiles = data.filter(element => element.rating.rate >= 4)
            setFiltreEtoiles(newFiltreEtoiles)
        }
    },[data])



    return(
        <div className='Home'>
            <section className='carousel'>
                {data ? produit.map(element => (
                    <>
                    <div className='header'>LES MEILLEURS PRODUITS<br />CHEZ NOUS, POUR VOUS.</div>
                    <div className='divImgCarousel'>
                        <img className='imgCarousel' key={element.id} src={element.image} alt="" />
                    </div>
                    </>
                )): "loading"}
            </section>
            <section className='section-vedettes'>
                <div className='divTitre'><span className='titre'>Nos produits vedettes</span><span className='sousTitre'>Articles à plus de 4 étoiles</span></div>
                <div className='vedettes'>
                    {filtreEtoiles.map(element => (
                        <div key={element.id} className='divProduit' onClick={()=> navigate(`products/${element.id}`)} >
                            <div className="divProduitImage">
                                <img src={element.image} alt="" />
                            </div>
                            <div className="divProduitInfos">
                                <h3>{element.title}</h3>
                                <div className='divProduitsInfosBot'>
                                <h4>{element.price}€</h4>
                                <h4>{element.rating.rate}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg><span className='count'>{`(${element.rating.count})`}</span></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}
