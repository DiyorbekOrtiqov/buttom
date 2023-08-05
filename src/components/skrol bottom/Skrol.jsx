import { color } from 'highcharts';
import React, { useState } from 'react'
import "./Skrol.css"

export default function Skrol({ data }) {
    const [selectedId, setSelectedId] = useState(null);

    const handleClick = (id) => {
        if (selectedId === id) {
            setSelectedId(null);
        } else {
            setSelectedId(id);
        }
    }

    return (
        <div className='Skrol_card'>

        <div className='SkrolAll'>
            {
                data?.map(i => (
                    <div key={i.id} className="SklorDiv" onClick={() => handleClick(i.id)}>
                        <div className='Skrol_main' >
                            <div className="SkrolBox" >
                                <span style={{ backgroundColor: selectedId === i.id ? '#00ccff' : '' }}></span>
                                <div className='SkrolIcon ' style={{ backgroundColor: selectedId === i.id ? '#00ccff' : '' }} >
                                    {i.img}
                                </div>
                            </div>
                        </div>

                        {
                            selectedId === i.id && (
                                <div className='Skrol_extraInfo'>
                                    <div className='Skrol_info'>
                                        <div style={{ color: 'white', fontSize: ' 25px' }} className='Skrol_region'>
                                            {i.title}
                                        </div>
                                        <br />
                                        <di className="Skrol_dubleinfo">
                                            <div style={{ fontSize: '20px', color: "white", justifyContent: "space-between" }} className='Skrol_infotext' >
                                                {i.info}
                                                <span style={{ color: i.color, paddingRight: "20px" }}>
                                                    {i.count}
                                                </span>
                                            </div>
                                            <div style={{ fontSize: '20px', color: "white", justifyContent: "space-between" }} className='Skrol_infotext' >

                                                {i.infocamera}
                                                <span style={{ color: i.color, paddingRight: "20px" }}>
                                                    {i.count}
                                                </span>
                                            </div><div style={{ fontSize: '20px', color: "white", justifyContent: "space-between" }} className='Skrol_infotext' >
                                                {i.infocamera}
                                                <span style={{ color: i.color, paddingRight: "20px" }}>
                                                    {i.count}
                                                </span>
                                            </div><div style={{ fontSize: '20px', color: "white", justifyContent: "space-between" }} className='Skrol_infotext' >

                                                {i.infocamera}
                                                <span style={{ color: i.color, paddingRight: "20px" }}>
                                                    {i.count}
                                                </span>
                                            </div>
                                        </di>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
        </div>
    )
}