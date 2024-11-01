import { ISectionHeaderLeftInterface } from '@/iterfaces/sectionHeaderInterface'
import React from 'react'

export default function SectionHeaderLeft({ shortTitle, sectionTitle, secDes }: ISectionHeaderLeftInterface) {
    return (
        <div className='cb__sectionHeader__left'>
            <div>
                <h5 className="cb__short__title">{shortTitle}</h5>
                <h2 className="cb__heading">{sectionTitle}</h2>
                <p className="cb__heading__des__left">{secDes}</p>
            </div>
        </div>
    )
}
