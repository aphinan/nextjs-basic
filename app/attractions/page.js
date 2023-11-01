'use client'
import React ,{useState, useEffect} from 'react'
import { getTasks } from './data' 

export default async function USER() {

    const data = await getTasks() 

    console.log(data)

  return (
    <div>USER

      <ul>
        {data.map(attraction => (
          <li key={attraction.id}>
              {attraction.name}
              <br/>
              <img height={100} src={attraction.coverimage}/>
              <br/>
              {attraction.detail}
              <br/>
              <a href={`/attractions/${attraction.id}`}>
                Detail
              </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
