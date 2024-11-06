import React from "react";
import ActionMenu from "@/components/ActionMenu";
import useResourceAction from "@/hooks/useResourceAction";
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
import findItemBy from "@/utils/findItemBy.jsx";
// import statuses from '@/modules/service-config/sub-modules/manager/definitions/statuses';
import ImageShow from '@/components/Image';

const BookListItem = ({
                          resource = 'books',
                          id,
                          data = {},
                          className='h-full',
                          hoverClass = '',
                          ratio = "aspect-w-5 aspect-h-5 sm:aspect-h-7",
                          ...restProps
                      }) => {


    const {showUrl, editUrl, deleteAction} = useResourceAction();

    const {
        title,
        href,
        featuredImage = 'https://fastly.picsum.photos/id/600/200/300.jpg?hmac=Ub3Deb_eQNe0Un7OyE33D79dnextn3M179L0nRkv1eg',
        categories,
        author,
        date,
        readingTime,
        postType,
        updated_at_persian: updatedAtPersian = '',
        created_at_persian: createdAtPersian = '',
        status: statusSlug = '',
    } = data || {};

    const status = findItemBy({source: [], key: 'slug', value: statusSlug});

    return (
        <div
            className={`nc-Card7 relative flex flex-col group rounded-3xl overflow-hidden bg-red-400/20 h-64 p-5 ${hoverClass} ${className}`}
            data-nc-id="Card7"
        >
            <div
                className="absolute inset-x-0 top-0 p-3  flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
                {/*<PostCardLikeAndComment className="relative" postData={post} />*/}
                {/*<PostCardSaveAction className="relative" postData={post} />*/}
            </div>
            <Link to={href} className={`flex items-start relative w-full ${ratio}`}>
                <ImageShow
                    containerClassName="absolute inset-0 overflow-hidden"
                    className="object-cover w-full h-full rounded-3xl "
                    src={featuredImage}
                />
                {/*<PostTypeFeaturedIcon*/}
                {/*    className="absolute top-3 left-3 group-hover:hidden"*/}
                {/*    postType={postType}*/}
                {/*    wrapSize="w-7 h-7"*/}
                {/*    iconSize="w-4 h-4"*/}
                {/*/>*/}
                <span
                    className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>

            <div
                className="absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow">
                <Link to={showUrl(id)} className="absolute inset-0"></Link>
                <div className="space-y-2.5 mb-3">
                    {/*<CategoryBadgeList categories={categories} />*/}
                    <h2 className="block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
                        <Link to={href} className="line-clamp-2" title={title}>
                            {title}
                        </Link>
                    </h2>
                </div>
                {/*<CardAuthor2 readingTime={readingTime} date={date} author={author} />*/}
            </div>
        </div>
    );
};

export default BookListItem;