import React from "react";
import List from "@/modules/server/common/list";
import {fetchList} from "@/modules/ticket/services";

const TicketListGenerator = () => {

    const items = fetchList();

    return (
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="min-w-full bg-white">
                <thead>
                <List.Header.Container>

                    <List.Header.Data.Text>بخش</List.Header.Data.Text>

                </List.Header.Container>
                <tbody className="divide-y">
                {items.map(({department}) => (
                    <List.Item.Container>

                        <List.Item.Data.Text>
                            {department}
                        </List.Item.Data.Text>
                        
                    </List.Item.Container>
                ))}
                </tbody>
                </thead>
            </table>
        </div>
    );
};

export default TicketListGenerator;