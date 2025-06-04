import { useParams } from 'react-router-dom'
import './Details.css'
import { useEffect, useState } from 'react'

export default function Details({data, listeFavoris, setListeFavoris}) {

    const {id} = useParams()
    const [currentId, setCurrentId] = useState(parseInt(id))
    const [filtre, setFiltre] = useState([])

    useEffect(()=>{
        if (data) {
            const newProduct = data.filter(element => element.id === currentId)
            setFiltre(newProduct)
        }
    },[data])

    return(
        <div className='Details'>
            {filtre.map(element => (
                <div key={element.id} className='detailsProduit'>
                    <div className='divDetailsImage'>
                        <img className='detailsImage' src={element.image} alt="" />
                    </div>
                    <div className='divDetailsInfos'>
                        <div className='avis'>
                            <span>{element.rating.rate} <svg className={`detailsStar ${element.rating.rate >= 1 ? "active": ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg><svg className={`detailsStar ${element.rating.rate >= 2 ? "active": ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg><svg className={`detailsStar ${element.rating.rate >= 3 ? "active": ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg><svg className={`detailsStar ${element.rating.rate >= 4 ? "active": ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg><svg className={`detailsStar ${element.rating.rate >= 5 ? "active": ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg></span>
                            <span>+{element.rating.count} avis</span>
                        </div>
                        <span className='detailsTitre'>{element.title}</span>
                        <span className='detailsDesc'>{element.description}</span>
                        <button className='btnAjoutPanier'>AJOUTER AU PANIER</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
