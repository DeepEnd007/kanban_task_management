import React from "react";

function DeleteModal({ type, title, onDeleteBtnClick }) {
  return (
    // Modal Container
    <div className="fixed right-0 botton-0 left-0 top-0 px-2 py-4 overflow-x-scroll scrollbar-hide z-50 justify-center items-center flex bg-[#00000080] ">
      {/* Delete Modal */}
      <div className="scrollbar-hide overflow-x-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white w-full px-8 py-8 rounded-xl">
        <h3 className="font-bold text-red-500 text-lg">Delete this {type}</h3>
      </div>
    </div>
  );
}

export default DeleteModal;