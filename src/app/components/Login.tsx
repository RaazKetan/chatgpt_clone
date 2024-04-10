'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ChatGPT-Logo.png/1200px-ChatGPT-Logo.png"
      width={300}
        height={300}
        alt="ChatGPT Logo"
      />
      <button onClick={()=>signIn('google')} className="text-white font-bold text-3xl animate-pulse">
        Sign In to use ChatGpt
      </button>
    </div>
  )
}

export default Login
