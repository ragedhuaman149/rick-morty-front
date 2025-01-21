'use client'
import useMainStore from '@/app/store/mainStore';
import { Character } from '../../types/character';

type CardProps = {
    item: Character
}
const Card = ({ item }: CardProps) => {
    const { name, image } = item;
    const { setCharacter, setIsOpenModal} = useMainStore();

    const handleHoverCard = () =>{
        setCharacter(item)
    }

    const handleLeaveHoverCard = () =>{
        setCharacter(null)
    }

    return (
        <div className=''>
            <div 
                className="relative md:w-40 sm:w-full h-72 bg-cover bg-center rounded-md" 
                style={{ backgroundImage: `url(${image})` }}
                onMouseEnter={() => handleHoverCard()}
                onMouseLeave={() => handleLeaveHoverCard()}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                    <div className='flex flex-col'>
                    <div className="text-xl font-bold">
                        {name}
                    </div>
                    <div className='bg-blue-400 text-white text-center p-1 rounded-md cursor-pointer' 
                        onClick={() =>{
                            setCharacter(item);
                            setIsOpenModal(true)
                        }}
                    >
                        Informacion
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card