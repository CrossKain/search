import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"


export const useOutsideClick = () => {
  const ref = useRef(null)
  
  const navigate = useNavigate()
 
  useEffect(()=>{
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            navigate(-1)
        }
    }
    document.addEventListener("click", handleClickOutside

    )
    return ()=>{
        document.removeEventListener("click", handleClickOutside)
    }
  },[navigate])
    return {ref}
   
  
}

