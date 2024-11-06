import Item from './Item';
import { useMenu } from "@refinedev/core";
import classNames from "@/utils/classNames";

const Navigation = ({withLabel = false}) => {
    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();

    return (
        <nav className={classNames("relative flex flex-col space-y-4 p-3.5", withLabel ? "flex-shrink-0" : "w-20")}>
            {menuItems.map(({key, ...itemProps}) => <Item key={`nav-item-${key}`} {...itemProps} current={selectedKey === key} withLabel={withLabel}/>)}
        </nav>
    );
}

export default Navigation;