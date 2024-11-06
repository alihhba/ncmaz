import React from "react";
import NcModal from "../Modal/NcModal";
import CardCategoriesPodcast from "../cards/CardCategoriesPodcast";

const ModalCategories = ({ categories }) => {
  const renderModalContent = () => {
    return (
      <div className="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
        {categories.map((cat) => (
          <CardCategoriesPodcast key={cat.id} taxonomy={cat} size="normal" />
        ))}
      </div>
    );
  };

  return (
    <div className="nc-ModalCategories">
      <NcModal
        triggerText={
          <span>
            <span className="hidden sm:inline">Other</span> Categories
          </span>
        }
        modalTitle="Discover other categories"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalCategories;
