'use client'

import Link from "next/link";
import { useEffect } from "react"

export default function Error(props){
    const { error, reset } = props;

    useEffect(() => {
        console.log(error);
    }, [error])
    return(
        <div className="page-container">
            <h1>Something went wrong</h1>
            <div>
                <button className="btn--ghost" onClick={reset}>Reset</button>
                <Link href={'/'}>
                    <button className="btn--ghost">Home</button>
                </Link>
            </div>
        </div>
    )
}