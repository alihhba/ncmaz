import React from "react";

import Section from './components/Section';
import List from './components/List';
import ListItem from './components/ListItem';
import Card from "@/components/Placeholder/components/Card";

const Placeholder = ({children, restProps}) => {
    return (
        <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center font-bold">
                {children}
            </div>
        </div>
    );
};

Placeholder.Section = Section;
Placeholder.List = List;
Placeholder.List.Item = ListItem;

Placeholder.Card = Card;

export default Placeholder;