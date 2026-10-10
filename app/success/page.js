import Link from "next/link";

export default function SuccessPage(){
    return (
        <div className="page-container">
            <h2>Thank you for your purchase! </h2>
            <Link href={'/'}>
                <button className="btn--ghost">Continue shopping &rarr;</button>
            </Link>
        </div>
    )
}