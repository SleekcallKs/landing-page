import Link from "next/link"


function Hero() {
    return (
        <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                <img src="/images/hero-image.png" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" />
                <div className="text-center mt-4">
                    <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">Anrufe, endlich einfach</h1>
                    <p className="py-2 text-xl text-slate-100 mt-4 pr-12">Offshore-Anrufe zu uns bringen Ihre Geschäftsunterstützung auf die nächste Ebene</p>
                    <Link href="/start-designing"><button className="btn text-lg mt-16 px-12 btn-primary normal-case">Get Started</button></Link>
                    <Link href="/start-designing"><button className="btn text-lg mt-16 px-12 btn-primary normal-case">Mehrere Lernen</button></Link>

                </div>
            </div>
        </div>
    )
}

export default Hero