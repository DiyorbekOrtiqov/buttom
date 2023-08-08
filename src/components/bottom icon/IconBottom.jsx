import React from 'react'
import "./IconBottom.css"
import { BsFillBusFrontFill } from "react-icons/bs"


function IconBottom() {
    return (
        <div className='body'>
            <div className='BGTranspatent'>
                <div className='TopPart'>

                </div>
                <div className='MainContent'>
                    <div className='Bgbigcard'>

                    </div>
                    <div className='Bigcard'>
                        <div className='b'>
                            <BsFillBusFrontFill className='Bus' />
                            <p className='BusP'>
                                52
                            </p>
                        </div>
                    </div>
                    <div className='SmallLine'>

                    </div>
                    <div className='BgSmallLine'>
                        
                    </div>
                    
                </div>
                <div className='BottomPart'>
                    <div className='BottomPartBG'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconBottom