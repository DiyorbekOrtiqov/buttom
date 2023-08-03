import React from 'react'
import NewChart from './NewChart'

function Data() {
  const data = [
    {
      id: 1,
      title: "Bektemir",
      count: 10,
      color: '#2086E0',


    },
    {
      id: 2,
      title: "Parkent",
      count: 45,
      color: '#2086E0',
    },
    {
      id: 3,
      title: "Oqqoʻrgʻon ",
      count: 60,
      color: '#2086E0',

    },
    {
      id: 4,
      title: "Zangiota ",
      count: 55,
      color: '#2086E0',

    },
    {
      id: 5,
      title: "Bo'stonlig'",
      count:  90,
      color: '#2086E0',

    },
    {
      id: 6,
      title: "Boʻka",
      count:100 ,
      color: '#2086E0',

    },
    {
      id: 7,
      title: "Bekobod",
      count: 79.8,
      color: '#2086E0',
    },
  ]
  return (
    <div>
      <NewChart data={data} />
    </div>
  )
}

export default Data