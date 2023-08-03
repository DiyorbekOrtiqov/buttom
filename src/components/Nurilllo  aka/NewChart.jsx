import React from 'react'
import "./newbar.css"


export default function NewChart({ data }) {
    // const sortedData = data?.sort((a, b) => b.count - a.count); 
    return (
        <div className='boxAll'>
            {
                data?.map(i => (
                    <>
                        <div key={i.id} className="lineAll"> 
                            <div className='lineCountH1'>
                                {i.count}%
                            </div>
                            <div style={{ width: `${i.count}%`, backgroundColor: i.color  }} className="Line">
                            <div className='triangle-up '  ></div>
                                 <div className='linetitle'>{i.title}</div>
                                <div style={{ width: i.count  }} className="paintLine">
                                </div>
                            </div>
                        </div>
                      
                    </>
                ))
            }
        </div>
    )
}
