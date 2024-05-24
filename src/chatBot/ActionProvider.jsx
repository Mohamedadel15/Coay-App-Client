import React from "react";
import { useTranslation } from "react-i18next";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [t] = useTranslation();
  const handleHello = (message) => {
    if (message.length >= 4) {
      const HelloName = createChatBotMessage(`${t("ChatBot.handleHello.HelloName")} ${message}`);
      const message2 = createChatBotMessage(`${t("ChatBot.handleHello.message2")}`, {
        withAvatar: true,
        delay: 1000,
        widget: 'overview',
      });
      const message3 = createChatBotMessage(`${t("ChatBot.handleHello.message3")}`, {
        withAvatar: true,
        delay: 1200,
        widget: 'overview',
      });
      const message4 = createChatBotMessage(`${t("ChatBot.handleHello.message4")}`, {
        withAvatar: true,
        delay: 1400,
        widget: 'overview',
      });
      const message5 = createChatBotMessage(`${t("ChatBot.handleHello.message5")}`, {
        withAvatar: true,
        delay: 1600,
        widget: 'overview',
      });
      const message6 = createChatBotMessage(`${t("ChatBot.handleHello.message6")}`, {
        withAvatar: true,
        delay: 1800,
        widget: 'overview',
      });
      updateMessage(HelloName, "Name")
      updateMessage(message2, "Name")
      updateMessage(message3, "Name")
      updateMessage(message4, "Name")
      updateMessage(message5, "Name")
      updateMessage(message6, "Name")
    } else {
      const HelloName = createChatBotMessage(`${t("ChatBot.handleHello.falseHelloName")} ${message} `);
      updateMessage(HelloName, false)
    }
  };

  const afterNameMessage = (userMessage) => {
    switch (userMessage) {
      case "1":
      case "Booking":
        const message1 = createChatBotMessage(`${t("ChatBot.afterNameMessage.message1")}`);
        updateMessage(message1, "Guest")
        break;
      case "2":
      case "Information":
        const message2 = createChatBotMessage(`${t("ChatBot.afterNameMessage.message2")}`);
        updateMessage(message2, "CheckInfo")
        break;
      case "Contact":
      case "3":
        const message3 = createChatBotMessage(`${t("ChatBot.afterNameMessage.message3")}`);
        const UserMail = createChatBotMessage(`${t("ChatBot.afterNameMessage.UserMail")}`, {
          withAvatar: true,
          delay: 1000,
          widget: 'overview',
        });
        updateMessage(message3, "Contact")
        updateMessage(UserMail, "Contact")
        break;
      case "Login":
      case "Register":
      case "4":
        const message4 = createChatBotMessage(`${t("ChatBot.afterNameMessage.message4")}`);
        const pathPage = createChatBotMessage((<p className="underline cursor-pointer" onClick={() => window.location.href = "/login"}>{t("ChatBot.afterNameMessage.pathPage")}</p>), {
          withAvatar: true,
          delay: 1000,
          widget: 'overview',
        })
        updateMessage(pathPage, false)
        updateMessage(message4, false)
        break;
      default:
        const message6 = createChatBotMessage(`${t("ChatBot.afterNameMessage.message5")}`);
        updateMessage(message6, false)
        break;
    }

  }


  const GuestNumber = () => {
    const message = createChatBotMessage(` ${t("ChatBot.GuestNumber.message")}`);
    updateMessage(message, "children")
  }
  const childrenNumber = () => {
    const message = createChatBotMessage(`${t("ChatBot.childrenNumber.message")}`);
    updateMessage(message, "BookingIn")
  }

  const BookingCheckIn = () => {
    const message = createChatBotMessage(`${t("ChatBot.BookingCheckIn.message")}`);
    updateMessage(message, "BookingOut")
  }
  const BookingCheckOut = () => {
    const message = createChatBotMessage(`${t("ChatBot.BookingCheckOut.message")}`);
    updateMessage(message, "CheckList");
  }

  const confirmCheckOut = () => {
    const message = createChatBotMessage(`${t("ChatBot.confirmCheckOut.message")}`);
    updateMessage(message, "AfterConfirm");
  }
  const applyOrNotConfirm = (userMessage) => {
    if (userMessage === "yes" || userMessage === "نعم") {
      const confirmMessage = createChatBotMessage(`${t("ChatBot.applyOrNotConfirm.confirmMessage")}`);
      updateMessage(confirmMessage, false)
    } else {
      const NotConfirm = createChatBotMessage(`${t("ChatBot.applyOrNotConfirm.NotConfirm")}`);
      updateMessage(NotConfirm, false)
    }
  }

  const checkInfo = (userMessage) => {
    const message = createChatBotMessage(`${t("ChatBot.checkInfo.message")} ${userMessage}`)
    updateMessage(message, false)
  }

  const contactWithUser = (userMessage) => {
    if (userMessage === "yes" || userMessage === "نعم") {
      const message = createChatBotMessage(`${t("ChatBot.contactWithUser.message")} `)
      updateMessage(message, "UserMail")
    } else {
      const message = createChatBotMessage(`${t("ChatBot.contactWithUser.message2")}`);
      updateMessage(message, false)
    }
  }

  const userMail = (userMessage) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(userMessage)) {
      const message = createChatBotMessage(`${t("ChatBot.userMail.message")} ${userMessage}`);

      updateMessage(message, false)

    } else {
      const message = createChatBotMessage(`${t("ChatBot.userMail.message2")}`);
      updateMessage(message, "UserMail")
    }

  }




  const updateMessage = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            afterNameMessage,
            GuestNumber,
            childrenNumber,
            BookingCheckIn,
            BookingCheckOut,
            confirmCheckOut,
            applyOrNotConfirm,
            checkInfo,
            contactWithUser,
            userMail


          },
        });
      })}
    </div>
  );
};

export default ActionProvider;