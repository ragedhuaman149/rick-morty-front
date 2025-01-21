"use client"

import InfoModal from "./components/InfoModal";
import CardList from "./pages/Cards/CardList";
import FavoriteList from "./pages/Favorites/FavoriteList";
import useMainStore from "./store/mainStore";

export default function Home() {
  const { isLoading, favorites, characters, isOpenModal, character, setIsOpenModal } = useMainStore()
  return (
    <div className="">
      {
        isLoading
          ? (<div>Loading ...</div>)
          : (<div className="w-full flex justify-center">
            <div className="flex flex-col p-4">
              <CardList data={characters} />
              <FavoriteList data={favorites}/>
            </div>
          </div>)
      }
      {
        isOpenModal && (
          <InfoModal item={character} open={isOpenModal} setClose={() => setIsOpenModal(false)}/>
        )
      }
    </div>
  );
}
