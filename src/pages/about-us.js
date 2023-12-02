import PageMetaTags from '@/containers/PageMetaTags';
import React from 'react';
import InnerPageContainer from "@/components/common/InnerPageContainer";

const AboutUs = () => {
    return (
        <InnerPageContainer title="Uber uns">

            <PageMetaTags title="Uber uns" description={"Wer sind Wir"} url="/about-us" />
            <div className="container mx-auto px-4 py-8" >
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Über Uns</h2>
                    <p className="mt-4 text-gray-600">
                        Willkommen in unserem Callcenter! Wir sind spezialisiert auf erstklassige Inbound- und Outbound-Anrufdienste für den deutschsprachigen Markt. Unser Team setzt sich für hervorragende Kundenerlebnisse und effektive Kommunikationslösungen ein.
                    </p>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-800">Unsere Dienstleistungen</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Inbound-Kundensupport</li>
                            <li>Outbound-Verkauf und Marketinganrufe</li>
                            <li>Terminvereinbarung und Nachverfolgung</li>
                            <li>Marktforschung und Umfragen</li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-800">Warum Uns Wählen?</h3>
                        <p className="text-gray-600">
                            Unser Team spricht fließend Deutsch und versteht die kulturellen Feinheiten, was eine hochwertige und effektive Kommunikation gewährleistet. Wir nutzen modernste Technologie, um effiziente und zuverlässige Dienstleistungen anzubieten.
                        </p>
                    </div>
                </div>
            </div >
        </InnerPageContainer>
    );
};

export default AboutUs;
