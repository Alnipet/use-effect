import React, {useEffect, useState} from 'react'

export const List = ({handleGetId}) => {
  const [isDataList, setIsDataList] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(r => r.json())
      .then(data => {
        setIsDataList(data)
      })
  }, [])

  const handleClick = (id) => {
    handleGetId(id)
  }

  const list = isDataList.map(item => {
    return (
      <li key={item.id} className={'item'} onClick={() => handleClick(item.id)}>
        {item.name}
      </li>
    )
  })


  return (
    <div>
      <ul className={'list'}>
        {list}
      </ul>
    </div>
  )
}

