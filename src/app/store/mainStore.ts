import { create } from 'zustand';
import { Character } from '../types/character';
import { getCharactersService, getFavoritesService, postFavoriteService } from '../services/characters';

interface MainStoreState {
  isLoading: boolean;
  success: boolean;
  characters: Character[];
  favorites: Character[];
  isOpenModal: boolean;
  character: Character | null;
  setIsOpenModal: (status: boolean) => void;
  getAllData: () => void;
  setCharacter: (character: Character | null) => void;
  setFavorite: (character: Character) => void;
}

const useMainStore = create<MainStoreState>((set, get) => ({
  isLoading: false,
  success: false,
  characters: [],
  favorites: [],
  character: null,
  isOpenModal: false,
  setIsOpenModal: (status) => set({
    isOpenModal: status
  }),
  getAllData: async () => {
    set({
      isLoading: true,
      success: false,
      characters: [],
      favorites: [],
    });

    try {
      const [characters, favorites] = await Promise.all([
        getCharactersService(),
        getFavoritesService(),
      ]);

      set({
        isLoading: false,
        success: true,
        characters,
        favorites,
      });
    } catch (error) {
      set({
        isLoading: false,
        success: false,
        characters: [],
        favorites: [],
      });
    }
  },
  setCharacter: (character) => set({
    character
  }),
  setFavorite: async (character) => {
    const { favorites } = get();
    const isAlreadyFavorite = favorites.some((fav) => fav.id === character.id);
    if (!isAlreadyFavorite) {
      const updatedFavorites = [character, ...favorites];
      await postFavoriteService(character)

      set({
        favorites: updatedFavorites,
      })
    }
  },
}));

export default useMainStore;