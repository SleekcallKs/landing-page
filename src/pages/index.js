
import Hero from '@/components/home/Hero'
import Testimonials from '@/components/home/Testimonials'
import FeatureSection from '@/components/home/FeatureSection'
import PageMetaTags from '@/containers/PageMetaTags'
import ContactForm from '@/components/contact-form/ContactForm'

const features = [
  {
    title: "Kundenbindung",
    description: "Inbound-Callcenter ermöglichen es Unternehmen, effektiv auf Kundenanfragen und -probleme zu reagieren. Dies trägt zur Verbesserung der Kundenzufriedenheit bei und fördert die Kundenbindung.",
    link: "/kundenbindung",
    image: "/images/landing/sleekcall-1.png"
  },
  {
    title: "Effizienzsteigerung",
    description: "Inbound-Callcenter können effiziente Tools und Technologien einsetzen, um Anrufe zu routen und Kunden schnell an die richtigen Mitarbeiter weiterzuleiten. Dies hilft dabei, Wartezeiten zu minimieren und die Kundenerfahrung zu verbessern.",
    link: "/effizienzsteigerung",
    image: "/images/landing/sleekcall-2.png"
  },
  {
    title: "Lead Generierung",
    description: "Outbound-Callcenter sind effektive Instrumente zur Generierung von potenziellen Kunden (Leads). Sie können proaktiv Kunden kontaktieren, um Interesse an Produkten oder Dienstleistungen zu wecken und Verkaufsmöglichkeiten zu schaffen.",
    link: "/lead-generierung",
    image: "/images/landing/sleekcall-3.png"
  },
  {
    title: "Marktforschung",
    description: "Durch den Einsatz von Outbound-Callcentern können Unternehmen wertvolle Informationen über ihre Zielgruppen sammeln. Sie können Umfragen durchführen und Feedback von Kunden erhalten, um ihre Produkte oder Dienstleistungen kontinuierlich zu verbessern.",
    link: "/arktforschung",
    image: "/images/landing/sleekcall-4.png"
  },
]
export default function Home() {
  return (
    <div className='min-h-screen'>
      <PageMetaTags title="Sleekcallks" description={"Inbound- und Outbound-Callcenter von Pristina"} url="/" />
      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://www.sleekcall-ks.com/" />
        <meta itemProp="name" content="SleekCallKs" />
      </div>
      <Hero />
      {/* <GenerationStep /> */}

      {features.map((feature, i) => {
        return (
          <FeatureSection
            key={i}
            showHeading={i == 0} title={feature.title}
            description={feature.description}
            image={feature.image}
            link={feature.link}
            leftText={i % 2 == 1}
          />
        )
      })}

      <Testimonials />
      <ContactForm />
    </div>
  )
}
