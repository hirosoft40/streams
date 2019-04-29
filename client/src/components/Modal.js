//======== using PORTAL ====
// Portal enable a Component to render to an different element than root
// root以外のエレメントにChildrenとしてレンダーできる
// - using modal
// - render HTML on back end Ruby on Rail, Java, Django or something
// - 1st element: JSX / 2nd element : element to render
// ============================

import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
