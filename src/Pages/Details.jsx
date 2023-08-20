import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { Preloader } from '../Component/Preloader.jsx'
import axios from 'axios'

const Details = () => {
    const id = useParams().id
    const navigate = useNavigate()
    const [details, setDetails] = useState({})
    const [preloader, setPreloader] = useState(true)
    const fetchDetails = async () => {
        setPreloader(true)
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_API}/${id}`)
            if(response.data.photo!==null){
                setDetails(response.data.photo)
            }else{
                navigate('*')
            }
        } catch (error) {
            navigate('*')
        }
        setPreloader(false)
    }
    useEffect(() => {
        fetchDetails()
    }, [id])
    return (
        <div id='details'>
            <div><Preloader preloader={preloader} /></div>
            <div className='details'>
                <img src={(details) ? details.url : ''} alt="Image" />
                <div>
                    <h1>{details && details.title}</h1>
                    <p>{details && details.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Details
