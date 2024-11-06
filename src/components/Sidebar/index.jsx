import SidebarNarrow from "@/components/Sidebar/narrow";
import SidebarWide from "@/components/Sidebar/wide";

const Sidebar = ({type = 'narrow', ...restProps}) => {
    if (type === 'wide') {
        return (
            <SidebarWide {...restProps} />
        );
    }

    return (
        <SidebarNarrow {...restProps} />
    );
};

export default Sidebar;