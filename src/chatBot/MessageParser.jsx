import React from 'react';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;
  const parse = (message) => {
    if (!checker) {
      actions.handleHello(message)
      children.props.state.userData.name = message
    }
    if (checker === "Name") {
      actions.afterNameMessage(message)
    }
    if (checker === "Guest" && Number(message)) {
      actions.GuestNumber()
      children.props.state.userData.Rooms = message
    }
    if (checker === "children" && Number(message)) {
      actions.childrenNumber()
      children.props.state.userData.Guest = message

      
    }
    if (checker === "BookingIn" && Number(message)) {
      actions.BookingCheckIn()
      
      children.props.state.userData.children = message


    }
    if (checker === "BookingOut" && Number(message)) {
      actions.BookingCheckOut()
      children.props.state.userData.BookingIn = message
    }
    if (checker === "CheckList" && Number(message)) {
      actions.confirmCheckOut()
      children.props.state.userData.BookingOut = message
    }
    if (checker === "AfterConfirm") {
      actions.applyOrNotConfirm(message)
    }
    if (checker === "CheckInfo" && Number(message)) {
      actions.checkInfo(message)
    }
    if (checker === "Contact") {
      actions.contactWithUser(message)
    }
    if (checker === "UserMail") {
      actions.userMail(message)
      children.props.state.userData.mail = message
    }

  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;