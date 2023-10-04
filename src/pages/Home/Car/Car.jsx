
import { useEffect, useState } from "react";
import Cars from '../../../../public/cars.json'
import CarCard from "./CarCard";
import { FaSearch } from 'react-icons/fa';


const Car = () => {
    const [, setCars] = useState()
    const [search, setSearchVal] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])

    const recordsPage = 6;
    const lastIndex = currentPage*recordsPage;
    const firstIndex = lastIndex - recordsPage;
    const records = Cars.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(Cars.length / recordsPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);




    return (
        <div>
            <div className="w-[400px] flex  mx-auto">
                <form action="/"method="get" className="flex">
                    <input onChange={e => setSearchVal(e.target.value)} type="text" placeholder="Search" className="input input-bordered  h-8 md:w-auto rounded-full" />
                    <div className="relative">
                       <button className='absolute -ms-6 mt-2 text-gray-500'> <FaSearch  ></FaSearch></button>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {
                    records?.filter((car) => {
                        return search.toLowerCase() === ""
                            ? car
                            : car.title.toLowerCase().includes(search)

                    })
                        .map(car => <CarCard
                            key={car._id}
                            car={car}
                        ></CarCard>)
                }

            </div>
            <nav className="join">
                <ul className="pagination flex gap-2">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prevPage}>Prev</a>

                    </li>
                    {
                        numbers.map((n,i) => (
                            <li className= {`page-item ${currentPage === n? 'active' : ""}`} key={i}>
                                <a  href={`#/${n}`} className="page-item " onClick={()=>changePage(n)}>{n}</a>

                            </li>

                        ))
                    }
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage}>Next</a>

                    </li>

                </ul>
            </nav>
        </div>
    );
    
    function prevPage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
        

    }

    function changePage(id){
        setCurrentPage(id)


    }
    function nextPage(){
        if(currentPage !== nPage){
            setCurrentPage(currentPage + 1)
        }

    }
};

export default Car;
