import { Pagination } from "@/components/List/Pagination";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import ResourceButton from "@/components/ResourceButton";
import { DEMO_POSTS } from "@/data/posts";
import useResourceAction from "@/hooks/useResourceAction";
import React, { useEffect, useState } from "react";
import BookFilter from "./components/Filter";
import HeroSection from "./components/HeroSection";
import BookListItem from "./components/ListItem";
import BackgroundSection from "@/components/backgroundSection/BackgroundSection";
import SectionSliderPosts from "@/components/sectionSlider/SectionSlidersPosts";

export const BookList = ({ resource = "books" }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { fetchList } = useResourceAction();
  const [filters, setFilters] = useState([]);

  const { items, pagination } = fetchList({
    pagination: { page: currentPage },
    filters,
  }); 

  const { last_page: totalPages = 1 } = pagination;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filters, currentPage]);

  return (
    <Page>
      <Page.Content class="space-y-4 relative ">
        <Placeholder.Card
          title="کتاب‌ها"
          icon="book"
          meta={
            <div className="lg:ms-6 flex items-center space-s-3">
              <ResourceButton.Filter>
                <BookFilter filters={filters} setFilters={setFilters} />
              </ResourceButton.Filter>
              <ResourceButton.Create withLabel={false} />
            </div>
          }
        ></Placeholder.Card>

        {/* hero section */}
        <HeroSection subPosts={DEMO_POSTS} />

        {/* section 1 */}
        <div className="relative py-16">
          <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderPosts
              postCardName="card1"
              sliderStype="style2"
              heading="Sea travel enthusiast"
              subHeading="Over 218 articles about sea travel"
              posts={DEMO_POSTS.filter((_, i) => i < 8)}
              uniqueSliderClass="PageHomeDemo2_section1"
            />
          </div>
        </div>

        {/* books item */}
        <div className="grid grid-cols-4 gap-4">
          {items.map(({ id, ...restItemProps }) => (
            <BookListItem
              key={id}
              id={id}
              resource={resource}
              data={{ id, ...restItemProps }}
            />
          ))}
        </div>
        <Pagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </Page.Content>
    </Page>
  );
};
