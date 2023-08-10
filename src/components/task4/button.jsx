import React from 'react'
import "./main.css"



const data = [
  {
    id: 1,
    title: "Tuman 1981 yilda tashkil etilgan [5] va Toshkent shahrining janubi",
    count: 15455,
  },
  {
    id: 2,
    title: "Toshkent shahridagi maʼmuriy-hududiy birlik  ",
    count: 21454,

  }, {
    id: 3,
    title: "Sergeli ( oʻzbek : Sirgʻali tumani , rus . Sergeliyskiy rayon , romanlashtirilgan ",
    count: 1312,

  },
]

function button() {
  return (
    <div>
      <div className='body'>
        <div className='FirsButtonBox'>
          {data.map(item => (

            <div className='FirsButton'>


              <div className='FirsButtonComponent'>
                <div className='FirsButtonComponentDown'>

                </div>
                <div className='FirsButtonComponentDown2'>

                </div>
                <div key={item.id} data-count={item.count} className='FirsButtonBoxNumber'>
                  {item.count}
                  
                </div>
              </div>
              <div className='SecondButtonComponent'>
                <div className='SecondButtonComponentIcon'>

                </div>
                <div className='SecondButtonComponentIconUP'>

                </div>
                <div className='SecondButtonComponentIconUP2'>

                </div>
              </div>
              <div className='ThirdButtonComponent'>
                <div className='ThirdButtonComponentIn'>
                </div>
                <div key={item.id}  data-location={item.title}  className='FirsButtonBoxTitile'>
                {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='SecondButton'>

        </div>

        <div className='ThirdButton'>

        </div>
      </div>
    </div>
  )
}

export default button