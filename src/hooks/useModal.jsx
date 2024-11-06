import React from "react";

const useModal = ({}) => {
  const { visible, show, close } = useModal();

  return (
    <>
      <button onClick={show}>Show Modal</button>
      {visible && (
        <YourModalComponent>
          <p>Dummy Modal Content</p>
          <button onClick={close}>Close Modal</button>
        </YourModalComponent>
      )}
    </>
  );
};

export default useModal;
