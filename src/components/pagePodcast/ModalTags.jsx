import React from "react";
import Tag from "../tag/Tag";
import NcModal from "../Modal/NcModal";

const ModalTags = ({ tags }) => {
  const renderModalContent = () => {
    return (
      <div className="flex flex-wrap dark:text-neutral-200">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} className="me-2 mb-2" />
        ))}
      </div>
    );
  };

  return (
    <div className="nc-ModalTags">
      <NcModal
        contentExtraClass="max-w-screen-md"
        triggerText={
          <span>
            <span className="hidden sm:inline">Other</span> Tags
          </span>
        }
        modalTitle="Discover other tags"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalTags;
