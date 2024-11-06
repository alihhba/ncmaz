import React from "react";
import Icon from "@/components/Icon";
import Link from "@/components/Link";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/Tooltip";

export const RebuildAction = ({baseUrl}) => {

    return (
        <Tooltip placement="bottom">
            <TooltipTrigger
                asChild
            >
                <Link
                    to={`${baseUrl}/rebuild`}
                    className="text-gray-600 me-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    onClick={()=>{window.scrollTo(0, document.body.scrollHeight);}}
                >
                    <Icon type="arrows-pointing-out" className="h-4 w-4"/>
                </Link>
            </TooltipTrigger>

            <TooltipContent>
                <div className="bg-gray-600 rounded-lg py-1 px-2 text-xs text-white">بازسازی</div>
            </TooltipContent>
        </Tooltip>
    );
}