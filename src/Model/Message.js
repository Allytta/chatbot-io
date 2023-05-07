export default class Message {
  constructor(text, isUserMessage, timestamp, avatar, username, chatbot) {
    this.text = text;
    this.isUserMessage = isUserMessage;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.username = username;
    this.chatbot = chatbot;
  }
}
