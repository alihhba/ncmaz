import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import { SINGLE } from "@/data/single";
import useResourceAction from "@/hooks/useResourceAction";
import { useParsed } from "@refinedev/core";
import React from "react";
import BookPageSingleHeader from "./components/BookPageSingleHeader";
import SingleContent from "@/components/singlePage/Singlecontent";
import { Sidebar } from "@/components/singlePage/Sidebar";
import SingleRelatedPosts from "@/components/singlePage/SingleRelatedPosts";

export const BookShow = ({ resource, id: providedId }) => {
  const { fetchCurrent } = useResourceAction(resource || "books");
  const { id: parsedId } = useParsed();

  const id = providedId || parsedId;

  const book = fetchCurrent({ id });

  const {
    title = "",
    created_at_persian: createdAtPersian = "",
    updated_at_persian: updatedAtPersian = "",
  } = book || {};

  return (
    <Page>
      <Page.Content>
        <Placeholder.Card title="صفحه داخلی نمایش اطلاعات کتاب" icon="book">
          {title}
        </Placeholder.Card>

        <div>
          <>
            <div
              className={`nc-PageSingleTemp3Sidebar`}
              data-nc-id="PageSingleTemp3Sidebar"
            >
              <header className="relative pt-16 z-10 md:py-20 lg:py-28 dark:bg-neutral-900 bg-neutral-900  w-full ">
                {/* SINGLE HEADER */}
                <div className="dark container relative z-10">
                  <div className="max-w-screen-md">
                    <BookPageSingleHeader
                      hiddenDesc
                      metaActionStyle="style2"
                      pageData={SINGLE}
                    />
                  </div>
                </div>

                {/* FEATURED IMAGE */}
                <div className="mt-8 md:mt-0 md:absolute md:top-0 md:end-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
                  <div className="hidden md:block absolute top-0 start-0 bottom-0 w-1/5  to-neutral-900 dark:from-black bg-gradient-to-r"></div>
                  <img
                    className="block w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1554941068-a252680d25d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                </div>
              </header>

              <div></div>

              {/* SINGLE MAIN CONTENT */}
              <div className="container flex flex-col my-10 lg:flex-row ">
                <div className="w-full lg:w-3/5 xl:w-2/3 xl:pe-20">
                  <SingleContent data={SINGLE} />
                </div>
                <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:ps-10 xl:ps-0 xl:w-1/3">
                  <Sidebar />
                </div>
              </div>

              {/* RELATED POSTS */}
              <SingleRelatedPosts />
            </div>
          </>
        </div>
      </Page.Content>
    </Page>
  );
};
