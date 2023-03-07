import React from 'react'
import axios from 'axios'

export default function ModeCookies({url}) {
    
    async function handleSubmit(e){
        e.preventDefault()
        console.log({url:e.target.urlInp.value ,name:e.target.cookieNameInp.value, content:e.target.cookieContentInp.value, domain:e.target.domainInp.value})
        const response = await axios.post(url+e.target.urlInp.value, {withCredentials:true},{
            name:e.target.cookieNameInp.value,
            content:e.target.cookieContentInp.value, 
            domain:e.target.domainInp.value})
        console.log({url:url+e.target.urlInp.value, response})

    }
    async function handleSubmit2(e){
        e.preventDefault()
        const response = await axios.get(url+e.target.url.value, {withCredentials:true})
        console.log(response)
    }

  return (
    <div className='text-white bg-emerald-500 border-2 border-white p-5 flex flex-col items-center'>
    <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" name="urlInp" className="rounded-lg text-emerald-900 m-4 focus:outline-none" placeholder='url'/>
        <input type="text" name="cookieNameInp" className="rounded-lg text-emerald-900 m-4 focus:outline-none" placeholder='name'/>
        <input type="text" name="cookieContentInp" className="rounded-lg text-emerald-900 m-4 focus:outline-none" placeholder='content'/>
        <input type="text" name="domainInp" className="rounded-lg text-emerald-900 m-4 focus:outline-none" placeholder='domain'/>

        <button className='p-1 border-2 border-white rounded-md'>Pedir cookie</button>
    </form>
    <form onSubmit={handleSubmit2}>
        <input type="text" name="urlInp" className="rounded-lg text-emerald-900 m-4 focus:outline-none" placeholder='url'/>
        <button className='p-1 border-2 border-white rounded-md my-3'>Revisar mis cookies</button>
    </form>
  </div>
  )
}
