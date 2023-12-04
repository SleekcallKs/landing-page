import Link from 'next/link'


function Navlinks() {
    return (
        <>
            {/* <li className="mr-2"><Link href="/features">Features</Link></li> */}
            {/* <li className="mr-2"><Link href="/pricing">Pricing</Link></li> */}
            {/* <li className="mr-2"><Link href="/blogs">Blogs</Link></li> */}
            <li className="mr-2"><Link href="/contact-us">Uns kontaktieren</Link></li>
            <li className="mr-2"><Link href="/blog">Blog</Link></li>
        </>
    )
}

export default Navlinks