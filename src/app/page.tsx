import styles from './page.module.css'
import { newLocationData } from '../lib/constant'
export default function Home() {

  return (
    <main className={styles.main}>
      <h1>This is the test app </h1>
      location
      <div>
        {newLocationData.map((item,key) => {
          return(
          <div key={key}>
          <h5>{item.city}</h5>
          </div>
        )})}



      </div>
    </main>
  )
}
