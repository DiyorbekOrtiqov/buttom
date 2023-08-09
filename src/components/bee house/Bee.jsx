import React from 'react'
import "./bee.css"

const data = [
    {
        id: 1,
        title: "Bektemir",
        count: 1,
    },
    {
        id: 2,
        title: "Mirobot",
        count: 2,

    },{
        id: 3,
        title: "Sergili",
        count: 3,

    },{
        id: 4,
        title: "Bektemir",
        count: 4,

    },
    // {
    //     id: 5,
    //     title: "Bektemir",
    //     count: 5,

    // },{
    //     id: 6,
    //     title: "Bektemir",
    //     count: 6,

    // },{
    //     id: 7,
    //     title: "Bektemir",
    //     count: 7,

    // }





]


function Bee() {
    return (
        <div className='body'>
            <div className='BeeBox'>
            {data.map(item => (
                <div style={{ marginLeft:'-20px' }}>

                    
                    {/* aktiv holdagi ko'rinishi */}


                        <div className='BeeHeroBox'>
                            <div className='BeeHeroBoxin'>
                                <div className='BeeHeroBigLine'>
                                </div>
                                <div className='BeeHeroBigLine2'>

                                </div>
                                <div className='BeeHeroLineUp1'>

                                </div>
                                <div className='BeeHeroLineUp2'>

                                </div>
                                <div className='BeeHeroLineUp3'>

                                </div>

                                <div key={item.id} className='BeeHeroTextSimple' data-count={item.count} data-location={item.title}>
                                        {item.count}<br />
                                        <p>{item.title}</p>
                                    </div>
                            </div>
                        </div>

                    {/* statik holdagi ko'rinishi */}


                    <div  className='BeeHeroBoxSimple'>
                        <div className='BeeHeroBox2Simple'>
                            <div className='BeeHeroBoxinSimple'>
                                <div className='BeeHeroBigLineSimple'>
                                </div>
                                <div className='BeeHeroBigLine2Simple'>

                                </div>
                                <div className='BeeHeroLineUp1Simple'>

                                </div>
                                <div className='BeeHeroLineUp2Simple'>

                                </div>
                                <div className='BeeHeroLineUp3Simple'>

                                </div>
                                
                                    <div key={item.id} className='BeeHeroTextSimple' data-count={item.count} data-location={item.title}>
                                        {item.count}<br />
                                        <p>{item.title}</p>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default Bee