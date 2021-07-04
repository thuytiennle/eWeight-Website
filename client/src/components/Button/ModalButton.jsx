import React from "react";

function ModalButton({
  buttonName,
  buttonColor,
  modalName,
  dataBStarget,
  handClickPopUpModal,
  functionButtonName,
  handleOnClick,
  children,
}) {
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className={buttonColor ? `btn btn-${buttonColor}` : "btn btn-success"}
        data-bs-toggle="modal"
        data-bs-target={`#${dataBStarget}`}
        onClick = {handClickPopUpModal}
      >
        {buttonName}
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id={dataBStarget}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modalName}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleOnClick}
                data-bs-dismiss="modal"
              >
                {functionButtonName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalButton;
