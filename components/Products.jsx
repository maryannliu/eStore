'use client'

import { useState } from "react";
import Portal from "./Portal";
import { useProducts } from "@/context/ProductContext";

export default function Products(props) {
    const { planner, stickers } = props;
    const [portalImage, setPortalImage] = useState(null)

    const { handleIncrementProduct, cart } = useProducts();
    if (!stickers.length || !planner) { return null }
    
    

    return (
        <>
            {portalImage && (
                <Portal handleClosePortal={() => { setPortalImage(null) }}>
                    <div className="portal-content">
                        <img className="img-display" src={`med_res/${portalImage}.jpeg`} alt={`${portalImage} in high resolution`} />
                    </div>

                </Portal>
            )}
            <div className="section-container">
                <div className="section-header">
                    <h2>Shop Our Selection</h2>
                    <p>From organization to accessorization</p>
                </div>

                <div className="planner-container">
                    <div>
                        <button onClick={() => {
                            setPortalImage('planner')
                        }} className="img-button">
                            <img src="low_res/planner.jpeg" alt="low resolution image of the planner" />
                        </button>
                    </div>
                    <div className="planner-info">
                        <p className="text-large planner-header">
                            Medieval Dragon Month Planner
                        </p>
                        <h3><span>$</span>{planner.prices[0].unit_amount / 100}</h3>
                        <p>Step into a realm of fantasy and organization with our <strong>Medieval Dragon Month Planner</strong>! This high-resolution PNG asset combines the fierce elegance of dragons with intricate medieval designs to create a planner that&apos;s not only functional but also a work of art. Whether you&apos;re jotting down quests, planning battles, or just scheduling your weekly grocery run, this planner is your ultimate companion.</p>
                        <ul>
                            <li>
                                <strong>Epic Dragon Artwork:</strong> Stunning hand-drawn dragon motifs and medieval-inspired borders make every month feel legendary.
                            </li>
                            <li>
                                <strong>Fully Printable:</strong> Designed at ultra-high resolution, it&apos;s perfect for printing on any size paper, from A4 to poster-sized displays.
                            </li>
                        </ul>
                        <div className="purchase-btn">
                            <button className="btn--primary" onClick={()=>{
                                            const price_id = planner.prices[0].id
                                            handleIncrementProduct(price_id, 1, planner)
                                        }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2>Or Collect Your Favorite Tech</h2>
                    <p>Choose from our custom designed tech logos</p>
                </div>
                <div className="sticker-container">
                    {stickers.map((sticker, stickerIndex) => {
                        const stickerName = sticker.name
                        const stickerImgUrl = sticker.name.replaceAll(" ", "_")
                        return (

                            <div key={stickerIndex} className="sticker-card">
                                <button onClick={() => {
                                    setPortalImage(stickerImgUrl)
                                }} className="img-button">
                                    <img src={`low_res/${stickerImgUrl}.jpeg`} alt={`${stickerName} low resolution image`} />
                                </button>
                                <div className="sticker-info">
                                    <p className="text-medium">
                                        {stickerName.replaceAll('_', ' ')} Sticker.png
                                    </p>
                                    <p>
                                        {sticker.description}
                                    </p>
                                    <h4><span>$</span>{sticker.prices[0].unit_amount / 100}</h4>
                                    <div className="purchase-btn">
                                        <button onClick={()=>{
                                            const price_id = sticker.prices[0].id
                                            handleIncrementProduct(price_id, 1, sticker )
                                        }} className="btn--primary">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}