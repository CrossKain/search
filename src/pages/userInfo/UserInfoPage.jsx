import  { useEffect, useState } from 'react'
import InfoModal from '../../components/infoModal/InfoModal'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const UserInfoPage = () => {
  const [repo, setRepo] = useState(null)
  const {repos} = useSelector((state)=> state.repo)
  const params = useParams()
 const navigate = useNavigate()

 useEffect(()=>{
  if(repos.length){
    const repoInfo =  repos.find((e) => +params.id === e.id)
    console.log(repoInfo)
    if (repoInfo){
      setRepo(repoInfo)
    }else{
      return navigate("/")
      
    }
  } 
 }, [repos])
  return (
    <InfoModal avatar_url={repo?.avatar_url} login={repo?.login} id={repo?.id} html_url={repo?.html_url}/>
  )
}

export default UserInfoPage