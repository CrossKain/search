
import Button from '../button/Button'
import s from "./Pagination.module.css"
const Pagination = ({previewPages, pages, setCurrentPage, currentPage}) => {
    const onClick = (value) => {
        setCurrentPage(value)
    }
    const handlePage = (mode)=> {
        if(mode==="prev"){
            if(currentPage > 1){
                setCurrentPage(currentPage - 1)}
        }else{
            
            if(currentPage < pages){
                setCurrentPage(currentPage + 1)
            }
        }
    }
  return (
    <div className={s.block}>
    <Button onClick={()=> handlePage("prev")}>
    ᐸ
    </Button>
    {
        previewPages?.map((page, index)=> <Button active={currentPage===page} key={index} onClick={()=>onClick(page)}>
        {page}
        </Button>

        )
    }
    <Button onClick={()=> handlePage("next")}>
    ᐳ
    </Button>
    </div>
  )
}

export default Pagination