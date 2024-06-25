import React from 'react'

const Filter = ({filterValue, setFilterValue}) => {
const onChange = (e) => {
    setFilterValue(e.target.value)
}
  return (
    <div>
        <select onChange={onChange} value={filterValue}>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
        </select>
    </div>
  )
}

export default Filter