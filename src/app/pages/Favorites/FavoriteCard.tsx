import { Character } from '@/app/types/character'
import Image from 'next/image'
import React from 'react'

type FavoriteCardProps = {
    item: Character
}
const FavoriteCard = ({ item }: FavoriteCardProps) => {
    const { name, species, image } = item;

    return (
        <div className='p-2 rounded-md border border-gray-500'>
            <Image
                className='rounded-md sm:overflow-x-auto'
                src={image}
                alt='card'
                width={232}
                height={232}
            />
            <div className='mt-1'>
                <div className='font-bold text-lg'>
                    {name}
                </div>
                <div>
                    {species}
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard