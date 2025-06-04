import { useNavigate } from 'react-router-dom'
import './Product.css'
import { useEffect } from 'react'

export default function Product({data, listeFavoris, setListeFavoris}) {

    const navigate = useNavigate()

    const addFavorites = (e, element)=> {
        e.stopPropagation()
        if (listeFavoris.includes(element)) {
            setListeFavoris(prev => prev.filter(ancien =>  ancien !== element))
        }
        else {
            setListeFavoris(prev => [...prev, element])
        }
    }

    useEffect(()=> {
        console.log(listeFavoris)
    },[listeFavoris])

    return(
        <>
        <div className='divTitreProduct'>
            <span className='titre'>Tout nos produits :</span>
        </div>
        <div className='Product'>
            {data ? data.map(element => (
                <div key={element.id} className='divProduit' onClick={()=> navigate(`${element.id}`)}>
                    <div className="divProduitImage">

                        <svg onClick={(e)=> {addFavorites(e, element.id)}} className={`w-6 h-6 text-gray-800 dark:text-white heart ${listeFavoris.includes(element.id) ? "active" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/></svg>

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
            )) : "Content loading..."}
        </div>
            </>
    )
}
