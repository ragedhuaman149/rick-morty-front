import { Character } from '@/app/types/character';
import React from 'react'
import FavoriteCard from './FavoriteCard';

type FavoriteListProps = {
    data: Character[];
}
const FavoriteList = ({ data }: FavoriteListProps) => {
    return (
        <div>
            <div className='font-bold py-4'>
                FAVORITOS
            </div>
            <div className='flex justify-center w-full'>
                <div className='md:grid md:grid-cols-3 md:gap-3 sm:flex sm:flex-col sm:w-full'>
                    {
                        data?.slice(0, 3).map((item, i) => (
                            <FavoriteCard key={i} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FavoriteList