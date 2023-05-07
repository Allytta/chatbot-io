import Message from './Message';

export default class Chatbot {
  constructor(name, image, slogan, keywordsAndResponses) {
    this.name = name;
    this.image = image;
    this.slogan = slogan;
    this.messages = [];
    this.keywordsAndResponses = keywordsAndResponses;
  }

  sendMessage(message) {
    this.messages.push(message);
    const response = this.checkKeywords(message.text);
    if (response) {
      this.messages.push(new Message(response, false, new Date(), this.image, this.name, this));
      return true;
    }
    return false;
  }

  checkKeywords(text) {
    for (let i = 0; i < this.keywordsAndResponses.length; i += 1) {
      const { keyword, response } = this.keywordsAndResponses[i];
      if (text.toLowerCase().includes(keyword.toLowerCase())) {
        return response;
      }
    }
    return null;
  }
}
