'use client'

import { useState, useRef, useEffect } from "react"

export default function ImageBanner(){
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef()

    useEffect(() => {
        if (imgRef.current.complete){
            setIsLoaded(true)
        }
    }, [])

    return(
        <div className="banner-images">
            <img className="low-res-img" src="low_res/banner.jpeg" alt="low resolution banner displaying stickers that can be purchased"/>
            <img ref={imgRef} className="high-res-img" src="med_res/banner.png" alt="medium resolution banner displaying stickers that can be purchased" style={{opacity: isLoaded ? 1 : 0}} onLoad={()=>{
                // show the image after it is loaded 
            }}/>

            <div className="cta-btns-container">
                <div>
                    <div>
                        <h3>Welcome to</h3>
                        <h1>Mary Ann&apos;s Art Studio</h1>
                    </div>
                    <div>
                        <button className="btn--ghost">Shop Stickers</button>
                        <button className="btn--ghost">Shop Planners</button>
                    </div>
                </div>
            </div>
        </div>
    )
}