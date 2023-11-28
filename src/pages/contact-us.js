import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
  return (
    <InnerPageContainer title="Uns kontaktieren">
      <PageMetaTags title="Uns kontaktieren" description={"Wir sind erreichbar unter - contact@sleekcall-ks.com"} url="/contact-us" />
      <p className="mt-12">
        Wir sind erreichbar unter - contact@sleekcall-ks.com
      </p>

    </InnerPageContainer>
  )
}
