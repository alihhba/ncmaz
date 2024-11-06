import React from "react";
import classNames from "@/utils/classNames";
import usePagination from "@/hooks/usePagination";

export const PrevButton = ({
                               className,
                               children,
                               dataTestId,
                               as = <button/>,
                               ...buttonProps
                           }) => {
    const pagination = React.useContext(PaginationContext);
    const previous = () => {
        if (pagination.currentPage > 1) {
            pagination.setCurrentPage(pagination.currentPage - 1);
        }
    };

    return (
        <as.type
            {...buttonProps}
            {...as.props}
            className={classNames(className, as.props.className)}
            onClick={() => previous()}
            disabled={pagination.currentPage === 1}
            data-testid={dataTestId}
        >
            {children}
        </as.type>
    );
};

export const NextButton = ({
                               className,
                               children,
                               dataTestId,
                               as = <button/>,
                               ...buttonProps
                           }) => {
    const pagination = React.useContext(PaginationContext);
    const next = () => {
        if (pagination.currentPage < pagination.pages.length) {
            pagination.setCurrentPage(pagination.currentPage + 1);
        }
    };

    return (
        <as.type
            {...buttonProps}
            {...as.props}
            className={classNames(className, as.props.className)}
            onClick={() => next()}
            disabled={pagination.currentPage === pagination.pages.length}
            data-testid={dataTestId}
        >
            {children}
        </as.type>
    );
};

const TruncableElement = ({prev}) => {
    const pagination = React.useContext(PaginationContext);

    const {
        isPreviousTruncable,
        isNextTruncable,
        truncableText,
        truncableClassName,
    } = pagination;

    return (isPreviousTruncable && prev === true) ||
    (isNextTruncable && !prev) ? (
        <li className={truncableClassName || undefined}>{truncableText}</li>
    ) : null;
};

export const PageButton = ({
                               as = <a/>,
                               className,
                               dataTestIdActive,
                               dataTestIdInactive,
                               activeClassName,
                               inactiveClassName,
                               contentRender = page => page,
                           }) => {
    const pagination = React.useContext(PaginationContext);

    const renderPageButton = (page) => (
        <as.type
            key={page}
            data-testid={
                classNames({
                    [`${dataTestIdActive}`]:
                    dataTestIdActive && pagination.currentPage === page,
                    [`${dataTestIdInactive}-${page}`]:
                    dataTestIdActive && pagination.currentPage !== page,
                }) || undefined
            }
            tabIndex={0}
            onKeyPress={(event) => {
                if (event.key === "Enter") {
                    pagination.setCurrentPage(page);
                }
            }}
            onClick={() => pagination.setCurrentPage(page)}
            className={classNames(
                className,
                pagination.currentPage === page
                    ? activeClassName
                    : inactiveClassName,
            )}
            {...as.props}
        >
            {contentRender(page)}
        </as.type>
    );

    return (
        <>
            {pagination.previousPages.map(renderPageButton)}
            <TruncableElement prev/>
            {pagination.middlePages.map(renderPageButton)}
            <TruncableElement/>
            {pagination.nextPages.map(renderPageButton)}
        </>
    );
};

const defaultState = {
    currentPage: 1,
    setCurrentPage: () => {
    },
    truncableText: "...",
    truncableClassName: "",
    pages: [],
    hasPreviousPage: false,
    hasNextPage: false,
    previousPages: [],
    isPreviousTruncable: false,
    middlePages: [],
    isNextTruncable: false,
    nextPages: [],
};

const PaginationContext =
    React.createContext(defaultState);

export const Pagination = ({
                               dataTestId,
                               ...paginationProps
                           }) => {
    const pagination = usePagination(paginationProps);

    return (
        <PaginationContext.Provider value={pagination}>
            <div className={paginationProps.className} data-testid={dataTestId}>
                {paginationProps.children}
            </div>
        </PaginationContext.Provider>
    );
};

Pagination.PrevButton = PrevButton;
Pagination.NextButton = NextButton;
Pagination.PageButton = PageButton;