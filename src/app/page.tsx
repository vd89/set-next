
// 'use client'

import styles from './page.module.css'
import { newLocationData } from '../lib/constant'

import { headers } from "next/headers";
import ViewData from '../components/ViewComponentData';

export default async function Home() {

  const _headers = headers()
  const onChangeLocation =  async (_value: any) => {
    "use server"
    console.log('data value -> ', _value)
   const dataChanges = _value

   }
    const forwarded = _headers.get("x-forwarded-for");
    const ip =forwarded ? forwarded.split(/, /)[0] : _headers.get("x-real-ip")
    const res = await fetch(`http://ip-api.com/json/${ip}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log('Response', data)
    const dataValue = [data]
  return (
    <main className={styles.main}>
      <h1>This is the test app </h1>
      location
      <ViewData changeLocation={onChangeLocation} dataChanges={'test stuff'}/>
      <div>
        {dataValue.map((item,key) => {
          return(
          <div key={key}>
          <li> City -  {item?.city}</li>
          <li> ip - {item?.query}</li>
          <li> lat - {item?.lat}</li>
          <li> lon - {item?.lon}</li>
          <li> country - {item?.country}</li>
          <li>timezone - {item?.timezone}</li>
          </div>
        )})}


      </div>
    </main>
  )
}
