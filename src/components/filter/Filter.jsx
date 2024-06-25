
import s from "./Filter.module.css"
const Filter = ({filterValue, setFilterValue}) => {
const onChange = (e) => {
    setFilterValue(e.target.value)
}
  return (
    <div className={s.block}>
    <h3 className={s.paragraf}>Сортировка</h3>
        <select className={s.select} onChange={onChange} value={filterValue}>
        
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
        </select>
    </div>
  )
}

export default Filter