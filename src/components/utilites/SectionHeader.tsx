import { ISectionHeaderInterface } from "@/iterfaces/sectionHeaderInterface";


export default function SectionHeader({ shortTitle, sectionTitle, secDes }: ISectionHeaderInterface) {
    return (
        <section>
            <div className="text-center">
                <h5 className="cb__short__title">{shortTitle}</h5>
                <h2 className="cb__heading">{sectionTitle}</h2>
                <p className="cb__heading__des">{secDes}</p>
            </div>
        </section>
    )
}
