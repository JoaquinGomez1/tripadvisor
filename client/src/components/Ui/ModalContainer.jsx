import React from "react";

const ModalContainer = React.forwardRef((props, ref) => {
  return (
    <div
      className='mx-auto w-full bg-gray-100 max-w-lg px-2 py-4 rounded bg-light shadow-lg'
      ref={ref}
      {...props}
    />
  );
});

export default ModalContainer;
