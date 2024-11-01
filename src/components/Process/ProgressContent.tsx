import { IProgressContent } from "@/iterfaces/ProgressContecentInterface";
import { BiArrowToRight } from "react-icons/bi";


export default function ProgressContent({ title, des, btnText }: IProgressContent) {
    return (
        <div className="cb__progress__content">
            <h2 className="cb__progress__title">{title}</h2>
            <p className="cb__progress__description">{des}</p>
            <button className="cb__progress__btn">
                {btnText}
                <BiArrowToRight />
            </button>
        </div>
    )
}