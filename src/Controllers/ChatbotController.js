import Message from '../Model/Message';

export default class ChatbotController {
  constructor(chatbots, chatView) {
    this.chatbots = chatbots;
    this.chatView = chatView;
  }

  init() {
    this.chatView.renderChatbot(this.chatbots);

    this.chatView.chatInputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const userInput = this.chatView.chatInput.value.trim();
      if (userInput) {
        const userMessage = new Message(userInput, true, new Date(), null, null);
        this.chatView.renderChatMessage(userMessage, true);
        this.chatView.chatInput.value = '';
        this.chatbots.forEach((chatbot) => {
          const responded = chatbot.sendMessage(userMessage);
          if (responded) {
            const botMessage = chatbot.messages[chatbot.messages.length - 1];
            this.chatView.renderChatMessage(botMessage, false);
          }
        });
      }
    });
  }
}
