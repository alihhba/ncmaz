import React, {Fragment, useState} from "react";
import classNames from "@/utils/classNames.jsx";
import {Menu, Transition} from "@headlessui/react";
import Icon from "@/components/Icon/index.jsx";

const ActionMenuContainer = ({id, button: MenuButton, children, className, itemContainerClassName,...restProps}) => {

    const [extraContents, setExtraContents] = useState({});
    const [currentExtraContent, setCurrentExtraContent] = useState();

    const itemKey = `action-${id}`;
    const cloneExtraContent = extraContent => {

        if (!React.isValidElement(extraContent)) {
            return React.cloneElement(<div>{extraContent}</div>);
        }


        if(!extraContent.props.onClose || typeof extraContent.props.onClose !== "function"){
            return React.cloneElement(extraContent, {
                onClose: () => {
                    setCurrentExtraContent(null);
                }
            });
        }



        return React.cloneElement(extraContent, {
            onClose: () => {
                if (extraContent.props.onClose && typeof extraContent.props.onClose === "function") {
                    extraContent.props.onClose();
                }

                setCurrentExtraContent(null);
            }
        });
    };
    const addExtraContent = ({key, extraContent}) => {

        if (!extraContent) {
            return;
        }

        const newExtraContents = extraContents;
        newExtraContents[key] = cloneExtraContent(extraContent);
        setExtraContents({...newExtraContents});
    };

    const showExtraContent = (key) => {
        if (extraContents[key]) {
            setCurrentExtraContent(React.cloneElement(extraContents[key]));
        }
    }


    const modifiedChildren = React.Children.toArray(children).map(child => (
        React.cloneElement(child, {
            addExtraContent,
            itemKey,
            showExtraContent,
        })
    ));

    return (
        <>
            <Menu
                as="div"
                className={classNames("right-0 relative xl:top-auto xl:right-auto xl:self-center", className)}
                {...restProps}
            >
                <div>
                    {MenuButton || (
                        <Menu.Button
                            className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50">
                            <span className="sr-only">نمایش منو</span>
                            <Icon type="ellipsis-horizontal" className="h-6 w-6" aria-hidden="true"/>
                        </Menu.Button>
                    )}
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        unmount={false}
                        className={classNames("absolute flex flex-col py-1 px-2 end-2 z-10 mt-2 w-40 origin-top-end rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", itemContainerClassName)}>
                        <div className="py-1">
                            {modifiedChildren}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            {currentExtraContent || null}
        </>
    );
};

export default ActionMenuContainer;