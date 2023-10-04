// import { useState } from 'react';
import { BsPeople, BsSpeedometer} from 'react-icons/bs';
import { PiSteeringWheelBold } from 'react-icons/pi';
import { BiGasPump } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

const CarCard = ({ car }) => {
    const { title, img, year, capacity, transmission, power, engine,price } = car;
   

    return (
        <div>
           
            <div className="card  shadow-xl h-full">
                <figure>
                    <img src={img} alt="image" />
                </figure>
                <div className="card-body">
                    <div className="flex ">
                        <h2 className="card-title">{title}</h2>
                        <p className="flex justify-end">
                            <small className="border-dashed border-2  border-blue-500 w-12 text-center rounded-full">{year}</small>
                        </p>
                    </div>
                    <div className="flex ">
                       <BsPeople className='mt-1 mr-1 text-blue-600'></BsPeople>
                       <p>{capacity}</p>
                       <BiGasPump className='mt-1 mr-1 text-blue-600'></BiGasPump>
                       <p>{engine}</p>
                    </div>
                    <div className="flex mb-1">
                        <BsSpeedometer className='mt-1 mr-1 text-blue-600'></BsSpeedometer>
                        <p>{power}</p>
                        <PiSteeringWheelBold className='mt-1  text-blue-600'></PiSteeringWheelBold>
                        <p>{transmission}</p>
                        
                    </div>
                    <hr />
                    <div className="flex justify-between mt-1">
                        <h2 className="text-xl">${price}\<small>month</small></h2>
                        <div className='flex'>
                        <AiOutlineHeart className='mt-4 text-2xl text-blue-600 mr-4 bg-blue-100 w-6 h-6'></AiOutlineHeart>
                        <button className="btn btn-info bg-blue-500">Rent Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;