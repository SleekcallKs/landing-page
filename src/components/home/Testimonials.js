
const testimonialsData = [
    { text: "Meine Erfahrung mit SleekcallKs war hervorragend. Jedes Mal, wenn ich anrief, wurden meine Probleme schnell und effizient gelöst. Das Personal ist nicht nur kompetent, sondern auch außergewöhnlich freundlich und zuvorkommend. Ich habe noch nie einen so herausragenden Kundenservice erlebt. SleekcallKs hat meine Erwartungen übertroffen!.", name: "Maximilian Weber, Berlin:", profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" },
    { text: "Ich bin begeistert von der Qualität des Service bei SleekcallKs. Die Mitarbeiter sind äußerst hilfsbereit und verstehen es, auf individuelle Kundenbedürfnisse einzugehen. Sie bieten Lösungen, die wirklich funktionieren. Dank SleekcallKs fühle ich mich als Kunde wertgeschätzt und gut betreut. Ein großes Lob an das Team!", name: "Sophie Neumann, München", profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" },
    { text: "Als Geschäftsinhaber ist es für mich entscheidend, einen zuverlässigen Kundendienst zu haben. SleekcallKs hat meine Erwartungen nicht nur erfüllt, sondern übertroffen. Die schnelle Reaktionszeit und die Fachkompetenz der Mitarbeiter sind beeindruckend. SleekcallKs ist ein unverzichtbarer Partner für mein Geschäft geworden. Absolut empfehlenswert!", name: "Lukas Schmidt, Hamburg", profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" },

]

import { motion } from "framer-motion"

function Testimonials() {


    return (
        <>
            <div className="grid place-items-center w-full ">
                <div className="max-w-6xl px-4 py-24 content-center justify-center">
                    <h1 className="text-3xl  text-center font-bold">Testimonials</h1>
                    <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                        {
                            testimonialsData.map((t, k) => {
                                return (
                                    <motion.div
                                        initial={{ bottom: "-150px", opacity: 0 }}
                                        whileInView={{ opacity: 1, bottom: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5 }}
                                        key={k} className="card w-full bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img className="mask w-20 h-20 mask-circle object-cover" src={t.profilePic} />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>{t.text}</p>
                                            <p className="text-slate-500">-{t.name}</p>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials