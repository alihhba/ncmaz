import React from "react";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";
import {Pagination as HeadlessPagination} from "@/headless/Pagination";
import Icon from '@/components/Icon';

export const Pagination = ({current = 1, total = 1, onPageChange, className, ...restProps}) => {

    return (
        <div>
            <HeadlessPagination
                currentPage={current}
                totalPages={total}
                setCurrentPage={onPageChange}
                edgePageCount={1}
                middlePagesSiblingCount={2}
                className={classNames("flex items-center justify-between border-t border-gray-200 px-4 sm:px-0", className)}
                truncableText="..."
                truncableClassName="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
                {...restProps}
            >
                <div className="-mt-px flex w-0 flex-1">
                    <HeadlessPagination.PrevButton
                        as={<button />}
                        className="inline-flex items-center border-t-2 border-transparent pt-7 pb-3 pe-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        <Icon type="arrow-long-start" className="me-3 h-5 w-5 text-gray-400" shouldFlipBasedOnDirection />
                        قبلی
                    </HeadlessPagination.PrevButton>
                </div>
                <div className="hidden md:-mt-px md:flex">
                    <HeadlessPagination.PageButton
                        as={<button />}
                        activeClassName="border-primary-500 text-primary-600"
                        inactiveClassName="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        className="inline-flex items-center border-t-2 px-5 pt-7 pb-3 text-sm font-medium"
                        contentRender={page => <PersianNumber>{page}</PersianNumber>}
                    />
                </div>
                <div className="-mt-px flex w-0 flex-1 justify-end">
                    <HeadlessPagination.NextButton
                        as={<button />}
                        className="inline-flex items-center border-t-2 border-transparent pt-7 pb-3 ps-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        بعدی
                        <Icon type="arrow-long-end" className="ms-3 h-5 w-5 text-gray-400" shouldFlipBasedOnDirection />
                    </HeadlessPagination.NextButton>
                </div>
            </HeadlessPagination>
        </div>
    );
}

export default Pagination;