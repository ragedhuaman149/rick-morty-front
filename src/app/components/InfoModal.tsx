'use client'

import React from 'react';
import { Character } from '../types/character';
import useMainStore from '../store/mainStore';
type InfoModalProps = {
    item: Character | null;
    open: boolean;
    setClose: () => void;
}

const InfoModal = ({ item, open, setClose }:InfoModalProps) => {
  const { character, setFavorite,setIsOpenModal, setCharacter} = useMainStore()
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <div className="flex justify-between items-center">
          <button 
            className="text-gray-500 hover:text-gray-800 ml-auto"
            onClick={setClose}
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <p className='text-gray-800'>{item?.species}</p>
          <div className='bg-yellow-700 text-white p-3 rounded-md my-2 text-center cursor-pointer'
            onClick={() =>{
                console.log('HOLII ', character)
                if(character){
                    setFavorite(character)
                    setCharacter(null)
                    setIsOpenModal(false)
                } 
            }}
          >
            Agregar a favorito
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;