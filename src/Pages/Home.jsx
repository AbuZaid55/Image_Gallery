import axios from 'axios'
import { useEffect, useState } from 'react'
import { Preloader } from '../Component/Preloader.jsx'
import { Link } from 'react-router-dom'
import env from 'react-dotenv'
const Home = () => {
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [totalData, setTotalData] = useState(0)
    const [limit, setLimit] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)
    const [preloader, setPreloader] = useState(true)

    const fetchImages = async () => {
        setPreloader(true)
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_API}?offset=${offset}&limit=${limit}`)
            setTotalData(response.data.total_photos)
            setData(response.data.photos)
        } catch (error) {
            console.log(error)
        }
        setPreloader(false)
    }

    const handlebtnClick = (action) => {
        if (action === "Inc") {
            if (totalData > offset + limit) {
                setOffset(offset + limit)
                setCurrentPage(currentPage + 1)
            }
        }
        if (action === "Desc") {
            if (offset >= limit) {
                setOffset(offset - limit)
                setCurrentPage(currentPage - 1)
            }
        }
    }

    useEffect(() => {
        fetchImages()
    }, [offset, limit])
    useEffect(() => {
        setCurrentPage(1)
        setOffset(0)
    }, [limit])
    return (
        <div id='home'>
            <div><Preloader preloader={preloader} /></div>
            <h1>Image Gallery</h1>
            <div className='select'>Limit:-
                <select defaultValue={20} onChange={(e) => { let limit = Number(e.target.value); setLimit(limit) }}>
                    <option value={10}>10</option>
                    <option value={20} >20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                </select>
            </div>
            <div className='imgDiv'>
                {
                    data.map((photo) => {
                        return <Link key={photo.id} to={`/details/${photo.id}`}><img src={photo.url} alt="Pic" /></Link>
                    })
                }
            </div>

            <div className='btnDiv'>
                <button onClick={() => { handlebtnClick("Desc") }} disabled={(offset === 0) ? true : false}> &#8592;</button>
                <div>
                    <p>{currentPage}</p>
                    <span>/</span>
                    <p>{Math.round(totalData / limit)}</p>
                </div>
                <button onClick={() => { handlebtnClick("Inc") }} disabled={(offset >= totalData - limit) ? true : false}> &#8594;</button>
            </div>

        </div>
    )
}

export default Home
