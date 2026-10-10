import Link from "next/link";

export default function NotFound(){
    return (
        <div className="page-container">
            <h2>Page not found :(</h2>
            <Link href={'/'}>
                <button className="btn--ghost">Go back home</button>
            </Link>
        </div>
    )
}