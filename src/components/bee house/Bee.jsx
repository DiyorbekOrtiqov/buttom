import React from 'react'
import "./bee.css"

const data = [
    {
        id: 1,
        title: "Bektemir",
        count: 20,
    },
    {
        id: 2,
        title: "Mirobot",
        count: 22,

    },{
        id: 3,
        title: "Sergili",
        count: 100,

    },{
        id: 4,
        title: "Bektemir",
        count: 22,

    },{
        id: 5,
        title: "Bektemir",
        count: 200,

    }





]


function Bee() {
    return (
        <div className='body'>
            <div className='BeeBox'>
            {data.map(item => (
                <div>

                    
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


                    <div className='BeeHeroBoxSimple'>
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