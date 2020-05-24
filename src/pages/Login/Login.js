import React from 'react'
import styles from './Login.module.css'

export const Login = () => {
  
  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={e => {
        e.preventDefault()
      }}>
        <input type="text" className={styles.input} />
        <input type="password" className={styles.input} />
        <button type="submit" className={styles.btn}>Вход</button>
      </form>
    </div>
  )
}
