import { DEMO_CATEGORIES } from "@/data/taxonomies";
import React from "react";
import CardCategory2 from "../cards/CardCategory2";
import Heading from "../heading/Heading";

const DATA = DEMO_CATEGORIES.filter((_, i) => i < 10);

const SectionGridCategoryBox = ({
  categories = DATA,
  categoryCardType = "card2",
  headingCenter = true,
  className = "",
}) => {
  let CardComponentName = CardCategory2;
  switch (categoryCardType) {
    case "category":
      CardComponentName = CardCategory2;
      break;

    default:
      CardComponentName = CardCategory2;
  }

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      <Heading desc="Discover over 100 topics" isCenter={headingCenter}>
        Top trending topics
      </Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 md:gap-8">
        {categories.map((item, i) => (
          <CardComponentName
            index={i < 3 ? `#${i + 1}` : undefined}
            key={item.id}
            taxonomy={item}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;
