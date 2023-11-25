// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Freezing';
const hotelName = "Cozy Stay";

const config = {
  initialMessages: [
    createChatBotMessage(
      localStorage.getItem("Language") === "en"?
      `Welcome to ${hotelName}! I'm here to help you find the perfect room for your stay..`:
      `مرحبًا في ${hotelName}! أنا هنا لمساعدتك في العثور على الغرفة المثالية لإقامتك `
    ),
    createChatBotMessage(
      localStorage.getItem("Language") === "en"?
      "Need help booking a hotel room? I'm here to help!":
  ` تحتاج مساعدة في حجز غرفة الفندق؟ أنا هنا لمساعدتك!`,
      {
        withAvatar: true,
        delay: 500,
        widget: 'overview',
      }
    ),
    createChatBotMessage(
      localStorage.getItem("Language")==="en"?
      `Hi there! I'm ${botName}, the hotel booking chatbot for ${hotelName}.`:
      ` مرحبًا! أنا ${botName},  الروبوت الالي لحجز الغرف  للفندق   ${hotelName}.`,
      {
        withAvatar: true,
        delay: 1000,
        widget: 'overview',
      }
    ),
    createChatBotMessage(
      localStorage.getItem("Language") === "en"?
      `please enter your name `:
      `من فضلك، أدخل اسمك`,
      {
        withAvatar: true,
        delay: 1200,
        widget: 'overview',
      }
    ),
  ],


  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },

  state: {
    checker: null,
    userData: {
      name: "",
      email: "",
      Rooms:0,
      Guest: 0,
      children: 0,
      BookingIn: 0,
      BookingOut: 0,
      product: {
        name: "",
        link: "",
        imageUrl: ""
      }
    }
  },
};




export default config;