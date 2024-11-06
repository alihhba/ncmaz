import Navigation from '../Navigation';

const SidebarWide = () => {

    return (
        <div className="flex flex-col flex-grow border-gray-200 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-cyan-700 scrollbar-thumb-rounded scrollbar-thumb-rounded-full">
            {/*<div className="flex items-center justify-center flex-shrink-0 px-4 pt-7 pb-1 bg-cyan-700 text-cyan-800">*/}
            {/*    <img*/}
            {/*        className="p-1 h-20 w-20 rounded-full bg-purple shadow-md bg-white"*/}
            {/*        src={logo}*/}
            {/*        alt="Logo"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="mt-5 flex-grow flex flex-col">
                <Navigation withLabel />
            </div>
        </div>
    );
};

export default SidebarWide;