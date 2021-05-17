import React, { useEffect, useRef, useState } from 'react'

const MainScreen = () => {
    // const cursor = useRef (null)
    // const cursor123 = useRef (null)

    // useEffect(() => {
    //     document.addEventListener("mousemove", e => {
    //         // const { clientX, clientY } = e
    //         const mouseX = e.pageX 
    //         const mouseY = e.pageY
            
    //         cursor.current.style = `left:${mouseX}px; top: ${mouseY -98}px`
    //         setTimeout(() => {
    //             cursor123.current.style = `left:${mouseX}px; top: ${mouseY -98}px`
    //         },100)
    //     })
    //     return () => {}

    // }, [])
   
    return(
        <section id="main-screen" className="height-76vh w-100 position-relative">
           
            <div className="wrapper">
                {/* MainScreen page */}
            </div>
        </section>
    )
}

export default MainScreen
