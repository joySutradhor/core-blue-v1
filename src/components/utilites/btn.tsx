import { IBtnInterface } from "@/iterfaces/sectionHeaderInterface";


export default function Btn({ btnText }: IBtnInterface) {
  return (
    <div>
      <button className="cb__border cb__btn__styles">
        {btnText}
      </button>
    </div>
  )
}
