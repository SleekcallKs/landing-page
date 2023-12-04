import Link from "next/link"
import FeatureImageContainer from "../common/FeatureImageContainer"


import { motion } from "framer-motion"



function FeatureSection({ title, description, leftText, showHeading, image, link }) {
    return (
        <>
            {showHeading && <h2 className="text-3xl mt-12 text-center font-bold">Warum ein externer Anbieter

                besonders uns</h2>}
            <motion.div
                initial={{ bottom: "-150px", opacity: 0 }}
                whileInView={{ opacity: 1, bottom: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}

                className={`grid relative place-items-center w-full ${leftText ? "" : ""}`}>
                <div className="max-w-6xl px-4 py-0 content-center justify-center">
                    <div className="grid  md:grid-cols-2 grid-cols-1 gap-8 items-center">
                        {
                            !leftText && <FeatureImageContainer imageUrl={image} />
                        }

                        <div className="text-center  ">
                            <h2 className="text-2xl lg:text-4xl  text-center leading-10 font-bold"> {title}</h2>
                            {description && <p className="text-gray-600 mt-2">{description}</p>}
                            <Link href="/start-designing"><button className="btn btn-primary mt-8 px-8 normal-case">Lehr mehr</button></Link>
                        </div>
                        {
                            leftText && <FeatureImageContainer imageUrl={image} />
                        }
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default FeatureSection