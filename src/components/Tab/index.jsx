import React from 'react';
import {useNavigate} from "react-router-dom";
import Placeholder from "@/components/Placeholder";
import Tabs from "./base";

const Tab = ({tabs = [], activeTab}) => {

    const navigate = useNavigate();
    const {component: PanelComponent, componentProps = {}} = tabs.find(({slug, current}) => activeTab ? slug === activeTab : current) || {};

    return (
        <>
            <Placeholder.Card bodyProps={{className: 'sm:p-3'}} className="my-4">
                <Tabs
                    tabs={tabs.map(({slug, link, current, ...restTabProps}) => ({
                        slug,
                        ...restTabProps,
                        current: activeTab ? slug === activeTab : current,
                        onClick: () => {navigate(link)},
                    }))}
                />
            </Placeholder.Card>

            {PanelComponent ? (
                <PanelComponent
                    {...componentProps}
                />
            ) : null}
        </>
    );
};

export default Tab;