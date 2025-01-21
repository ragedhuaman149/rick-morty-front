import { Character } from "@/app/types/character";
import Card from "./Card";

type CardListProps = {
  data: Character[];
}

const CardList = ({ data }: CardListProps) => {
  return (
    <div>
        <div className="grid md:grid-cols-5 gap-1 sm:grid-cols-1">
            {
                data?.slice(0,9).map((item, i) => (
                    <Card key={i} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default CardList