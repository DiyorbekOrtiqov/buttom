import React from 'react';
import "./main.css";

const data = [
    {
      id: 1,
      title: "Bektemir",
      count: 10,
    },
    {
      id: 2,
      title: "Parkent",
      count: 45,
    },
];

function main() {
    return (
        <div>
            <div className='body'>
                <div>
                    {data.map(item => (
                        <div className='BasicManagement'>
                            <div className='CentralKomponenet' style={{ marginLeft: '40px', marginTop: '20px', display: 'flex' }}>
                                <div className='CentralUpSkrol'></div>
                                <div key={item.id} className='CentralSkrolText' data-count={item.count} data-location={item.title}>
                                    {item.count}%
                                    <p className='CentralSkrolTextP'>
                                    {item.title}
                                    </p>
                                </div>
                                
                                <div className='CentralDownSkrol'></div>
                                <div className='circleAnimation'>
                                    <div className='circleAnimation1'></div>
                                    <div className='circleAnimation2'></div>
                                    <div className='circleAnimation3'></div>
                                    <div className='circleAnimation4'></div>
                                    <div className='circleAnimation5'></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default main;