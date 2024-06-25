import { useEffect, useRef } from "react"

import s from "./InfoModal.module.css"
import { useNavigate } from "react-router-dom"
import Button from "../button/Button"
const InfoModal = ({login, id, avatar_url, html_url }) => {
  
  const ref = useRef(null)
  const navigate = useNavigate()
  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(ref.current && !ref.current.contains(e.target)){
}
    })
  },[])
  return (
    <div className={s.wrapper}>
    <div ref={ref} className={s.infoModal}>
    <div title="Закрыть окно" className={s.block}>
    <Button onClick={()=>navigate("/")}>
      X
    </Button>
    </div>
    Никнейм
        <p className={s.paragraf}>
        {login}
        </p>
        Айди
        <p className={s.id}>
        {id}
        </p>
        <img className={s.avatar} src={avatar_url}/>
        <a target="_blank" href={html_url}>Ссылка на репозиторий {login}</a>
    </div>
    </div>
  )
}

export default InfoModal