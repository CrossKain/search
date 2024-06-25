

const PerPageFilter = ({setLimit, limit}) => {
    const onChange = (event) =>{
        setLimit(event.target.value)
    }
  return (
    <div>
        <select onChange={onChange} value={limit}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </div>
  )
}

export default PerPageFilter