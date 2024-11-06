import Navigation from '../Navigation';
import logo from '@/assets/logo.svg';

const SidebarNarrow = () => {

    return (
        <div className="flex flex-col flex-grow border-gray-200 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-cyan-700 scrollbar-thumb-rounded scrollbar-thumb-rounded-full">
            <div className="flex items-center justify-center flex-shrink-0 px-4 pt-5 pb-1">
                <img
                    className="p-2 w-12"
                    src={logo}
                    alt="Logo"
                />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
                <Navigation withLabel={false} />
            </div>
        </div>
    );
};

export default SidebarNarrow;