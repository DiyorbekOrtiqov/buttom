import React from 'react'
import Skrol from './Skrol'
import { BsFillCarFrontFill } from "react-icons/bs"



function data() {
    const data = [
        {
            id: 1,
            title: "Olmazor tumani",
            info: "Hozirda ishlayorgan kameralar soni ",
            infocamera: "Hozirda ishlamayotgan  kameralar soni ",
            cameracount: " 20",
            color: '#842A31',
            count: 20,
            img: <BsFillCarFrontFill />,


        }, {
            id: 2,
            title: "Mirzo Ulug'bek tumani",
            info: "Hozirda ishlayorgan kameralar soni ",
            infocamera: "Hozirda ishlamayotgan  kameralar soni ",
            cameracount: " 20",
            color: '#842A31',
            img: <BsFillCarFrontFill />,
            count: 20,


        }, {
            id: 3,
            title: "	Bo'stonliq tumani",
            info: "Hozirda ishlayorgan kameralar soni ",
            infocamera: "Hozirda ishlamayotgan  kameralar soni ",
            cameracount: " 20",
            color: '#842A31',
            count: 20,           
             img: <BsFillCarFrontFill />,



        }, {
            id: 4,
            title: "Chinoz tumani",
            info: "Hozirda ishlayorgan kameralar soni ",
            infocamera: "Hozirda ishlamayotgan  kameralar soni ",
            cameracount: " 20",
            color: '#842A31',
            count: 30,
            img: <BsFillCarFrontFill />,
            



        }, {
            id: 5,
            title: "Parkent tumani",
            info: "Hozirda ishlayorgan kameralar soni ",
            infocamera: "Hozirda ishlamayotgan  kameralar soni ",
            cameracount: " 20",
            count: 20,
            color: '#842A31',
            img: <BsFillCarFrontFill />,

        }, 

    ]

    return (
        <div>
            <Skrol data={data} />
        </div>
    )
}

export default data