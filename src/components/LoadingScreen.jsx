import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState('')
    const fulltext = "<Arnedo Digital/>"

    useEffect(() => {
      let index = 0
        const interval = setInterval(() => {
        setText(fulltext.substring(0, index))
        index = index + 1

        if (index > fulltext.length) {
            clearInterval(interval)

            setTimeout(() => {
                onComplete()
            }, 2000)   
        }
       
    }, 100)
     return () => clearInterval(interval)
    }, [onComplete])
    
    return (
        <div className="fixed inset-0 z-50 text-gray-100 bg-black flex-col items-center flex justify-center">
            <div className="mb-4 text-2xl md:text-4xl font-mono font-bold">{text}<span className="animate-blink ml-1">|</span></div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">{' '}</div>
            </div>
        </div>
    )
}