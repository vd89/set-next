import styles from './page.module.css'
import { newLocationData } from '../lib/constant'

import { headers } from "next/headers";

export default async function Home() {

  const _headers = headers()
    const forwarded = _headers.get("x-forwarded-for");
    const ip =forwarded ? forwarded.split(/, /)[0] : _headers.get("x-real-ip")
    const res = await fetch(`http://ip-api.com/json/${ip}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log('Response', data)
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

{Object.values(data).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </div>
    </main>
  )
}
