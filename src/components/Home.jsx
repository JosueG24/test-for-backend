import React from 'react'
import { useState } from 'react'
import ModeCookies from './ModeCookies'
import ModeList from './ModeList'
import ModeNormal from './ModeNormal'

export default function Home({url}) {
const [mode, setMode] = useState("")

  return (
    <div>
      <p className='p-1 border-2 border-white rounded-md  bg-emerald-500 m-2 text-white text-center'>{url}</p>
    {mode === ""      && 
      <div className='text-white bg-emerald-500 border-2 border-white p-5'>
        <button className='p-1 border-2 border-white rounded-md ' onClick={()=>setMode("normal")}>Modo normal</button>
        <button className='p-1 border-2 border-white rounded-md ' onClick={()=>setMode("cookies")}>Modo cookies</button>
        <button className='p-1 border-2 border-white rounded-md ' onClick={()=>setMode("list")}>Modo Lista</button>
      </div>}
      {mode === "cookies"      && 
        <ModeCookies url={url}/>
      }
      {mode === "list"      && 
        <ModeList url={url}/>
      }
      {mode === "normal"      && 
        <ModeNormal url={url}/>
      }
    </div>
  )
}
