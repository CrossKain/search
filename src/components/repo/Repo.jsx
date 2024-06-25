import React from 'react'
import s from "./Repo.module.css"
const Repo = ({avatar_url, login}) => {
  return (
    <div className={s.Repo}>
        <img height={100} width={100} src={avatar_url} alt={login} />
        <h2>{login}</h2>
    </div>
  )
}

export default Repo