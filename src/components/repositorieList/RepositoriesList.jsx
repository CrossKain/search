
import { Link } from 'react-router-dom'
import Repo from '../repo/Repo'
import s from "./RepositoriesList.module.css"
const RepositoriesList = ({data}) => {
  return (
    <div>
      {  data?.items.map((elem, index)=> <Link className={s.repoList} to={`/user/${elem.id}`} key={index}> <Repo  avatar_url={elem.avatar_url} login={elem.login} /> </Link>)}
    </div>
  )
}

export default RepositoriesList