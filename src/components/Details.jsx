import React, {useEffect, useState} from 'react'


export const Details = ({id}) => {
  const [detailsData, setDetailsData] = useState(null)
  const [link, setLink] = useState('')

  useEffect(() => {
    setLink('https://i0.wp.com/apptractor.ru/wp-content/uploads/2017/04/spinner-icon-0.gif?fit=740%2C737&ssl=1')
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then(r => r.json(),
      )
      .then(data => {
        setDetailsData(data)
        console.log(data)
        setLink(data.avatar)
      })
  }, [id])


  return (
    <div>
      {detailsData && <div className={'card'}>
        <img src={link} width={250} height={250} alt={`фото ${detailsData.name}`} />
        <h2>{detailsData.name}</h2>
        <div className={'text'}>{detailsData.details.city}</div>
        <div className={'text'}>{detailsData.details.company}</div>
        <div className={'text'}>{detailsData.details.position}</div>
      </div>}
    </div>
  )
}

