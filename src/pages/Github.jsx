import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // loading data using loader
    const data= useLoaderData()

    //this is the normal way to load the data.

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/aditya-k-maurya')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);


  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Github picture" />
        {/* <h1>HI</h1> */}
    </div>
  )
}

export default Github

export const githubInforLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/aditya-k-maurya')
    return response.json()
}