import useMainStore from '../store/mainStore';

const Header = () => {
    const { character } = useMainStore();
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat md:h-80 sm:h-40"
            style={{
                backgroundImage: `url(${character?.image || '/header_background.webp'})`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end">
                <div className="w-full text-white text-left py-4 ml-2">
                    <span className="text-xl font-bold">
                        {character?.name || 'Bienvenido'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;