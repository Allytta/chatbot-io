import imgUser from '../Ressources/img/User.png';

export default class ChatbotView {
  constructor() {
    // create chatbots container
    this.chatbotsContainer = document.createElement('div');
    this.chatbotsContainer.classList.add('chatbots-container');

    // create chatbots row
    this.chatbotsRow = document.createElement('div');
    this.chatbotsRow.classList.add('chatbots-row');
    this.chatbotsContainer.appendChild(this.chatbotsRow);

    // create chat container
    this.chatContainer = document.createElement('div');
    this.chatContainer.classList.add('chat-container');

    // create chat input container
    this.chatInputContainer = document.createElement('div');
    this.chatInputContainer.classList.add('chat-input-container');
    this.chatContainer.appendChild(this.chatInputContainer);

    // create chat input form
    this.chatInputForm = document.createElement('form');
    this.chatInputContainer.appendChild(this.chatInputForm);

    // create chat input group
    this.chatInputGroup = document.createElement('div');
    this.chatInputGroup.classList.add('input-group');
    this.chatInputForm.appendChild(this.chatInputGroup);

    // create chat input field
    this.chatInput = document.createElement('input');
    this.chatInput.id = 'chatInput';
    this.chatInput.type = 'text';
    this.chatInput.placeholder = 'Type your message...';
    this.chatInput.classList.add('form-control');
    this.chatInputGroup.appendChild(this.chatInput);

    // create send button
    this.sendButton = document.createElement('button');
    this.sendButton.textContent = 'Send';
    this.sendButton.type = 'submit';
    this.sendButton.classList.add('btn', 'btn-primary', 'send-button');
    this.chatInputGroup.appendChild(this.sendButton);

    // create chat messages container
    this.chatMessagesContainer = document.createElement('div');
    this.chatMessagesContainer.classList.add('chat-messages-container');
    this.chatContainer.appendChild(this.chatMessagesContainer);

    // append chatbots and chat containers to the body
    document.body.appendChild(this.chatbotsContainer);
    document.body.appendChild(this.chatContainer);
  }

  renderChatbot(chatbots) {
    chatbots.forEach((chatbot) => {
      const chatbotDiv = document.createElement('div');
      chatbotDiv.classList.add('chatbot');

      const chatbotImg = document.createElement('img');
      chatbotImg.src = chatbot.image;
      chatbotImg.alt = chatbot.name;
      chatbotImg.classList.add('chatbot-image');

      const chatbotName = document.createElement('h3');
      chatbotName.textContent = chatbot.name;

      const chatbotSlogan = document.createElement('p');
      chatbotSlogan.textContent = chatbot.slogan;

      chatbotDiv.appendChild(chatbotImg);
      chatbotDiv.appendChild(chatbotName);
      chatbotDiv.appendChild(chatbotSlogan);
      this.chatbotsRow.appendChild(chatbotDiv);
    });
  }

  renderChatMessage(message, isUserMessage) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    // Add the message author's avatar
    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = isUserMessage ? imgUser : message.chatbot.image;
    messageContainer.appendChild(avatar);

    // Add the message author's name
    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = isUserMessage ? 'You' : message.chatbot.name;
    messageContainer.appendChild(name);

    // Add the message text
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = message.text;
    messageContainer.appendChild(text);

    // Add the message timestamp
    const timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    timestamp.textContent = message.timestamp.toLocaleTimeString();
    messageContainer.appendChild(timestamp);

    // Add appropriate class depending on message author
    if (isUserMessage) {
      messageContainer.classList.add('user-message');
    } else {
      messageContainer.classList.add('bot-message');
    }

    // Append the message container to the chat messages container
    this.chatMessagesContainer.appendChild(messageContainer);

    // Scroll to bottom of chat messages container
    this.chatMessagesContainer.scrollTop = this.chatMessagesContainer.scrollHeight;
  }
}
