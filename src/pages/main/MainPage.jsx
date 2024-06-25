
import { useLazyGetReposQuery } from '../../store/api/repoApi'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

import { useEffect, useState } from 'react'
import RepositoriesList from '../../components/repositorieList/RepositoriesList'
import { Outlet } from 'react-router-dom'
import { setRepos } from '../../store/slices/repoSlice'
import { useDispatch } from 'react-redux'
import s from "./MainPage.module.css"
import Filter from '../../components/filter/Filter'
import Pagination from '../../components/pagination/Pagination'
import PerPageFilter from '../../components/filter/PerPageFilter'
const MainPage = () => {
  const [getRepos, { data, isLoading }] = useLazyGetReposQuery()
  const [value, setValue] = useState("")
  const [filterValue, setFilterValue] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const dispatch = useDispatch()
  const [previewPages, setPreviewPages] = useState([])
  const [isSearchStarted, setIsSearchStarted] = useState(false)
  const handlePreviewPages = (pages) => {
    const array = []
  
    const finalPage = pages > 9 ? currentPage + 9 : pages
    for (let i = currentPage; i <= finalPage; i++) {

      array.push(i)

    }
    
    return array
  }
  useEffect(() => {
    if (data?.items.length) {
      dispatch(setRepos(data.items))
      const pagesCount = Math.ceil(data.total_count / limit)
      setPages(pagesCount)
      setPreviewPages(handlePreviewPages(pagesCount))
    }
  }, [data])
  useEffect(() => {
    if (currentPage && data?.items.length) {
      setPreviewPages(handlePreviewPages())
      onClick()
    }
  }, [currentPage])
  const onClick = () => {
    if(!isSearchStarted){
      setIsSearchStarted(true)
    }
    
    if (!value.trim()) {
      return alert("Заполните поле")
    }
   
    getRepos({order: filterValue, user: value, page: currentPage, limit: limit })
  }
  return (
    <div className={s.main}>
      <form onSubmit={(event) => { event.preventDefault(); onClick() }}>
        <Input type="text" onChange={(e) => setValue(e.target.value)} value={value} placeholder="Введите логин" />
        <div className={s.block}>
        <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
        <PerPageFilter limit={limit} setLimit={setLimit} />
        </div>
        <Button onClick={onClick}>
          Найти Репозитории
        </Button>
      </form>
      <div>
        {isLoading ? "Загрузка" : <RepositoriesList data={data} />}
      </div>
      {isSearchStarted ? data?.items.length ? <Pagination previewPages={previewPages} pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} /> : "Результатов нет" : null}
      
      <Outlet />
    </div>
  )
}

export default MainPage