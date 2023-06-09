import Chatbot from './Model/Chatbot';
import ChatbotController from './Controllers/ChatbotController';
import ChatbotView from './View/ChatbotView';
import API from './Model/API';
import imgMercy from './Ressources/img/Mercy.png';
import imgDva from './Ressources/img/Dva.png';
import imgGengi from './Ressources/img/Genji.png';
import './index.scss';

const apiChuckNorris = new API();
const apiWeather = new API('CLE_WEATHER_HERE');
const apiRandomUser = new API();
const apiChatGPT = new API('CLE_GPT_HERE');

async function createChatbots() {
  const chatbots = [
    new Chatbot('Mercy', imgMercy, 'Heroes Never Die', [
      { keyword: 'hello', response: () => 'Hello, I am Mercy.' },
      { keyword: 'bye', response: () => 'Goodbye!' },
      { keyword: 'overwatch', response: () => 'It permit me to heal on the battlefield.' },
      { keyword: 'help', response: () => 'My keywords are : hello, bye, overwatch, weather' },
      { keyword: 'weather', response: () => apiWeather.getWeather() },
      { keyword: 'chatGPT', response: () => apiChatGPT.getChatGPTAnswer() }
    ]),
    new Chatbot('D.va', imgDva, 'Nerf this', [
      { keyword: 'how are you', response: () => 'I am doing well, thank you for asking.' },
      { keyword: 'favorite game', response: () => 'My favorite game is Starcraft II.' },
      { keyword: 'overwatch', response: () => 'Overwatch helped me against the Gwishins.' },
      { keyword: 'help', response: () => 'My keywords are : how are you, favorite game, overwatch, chuck norris' },
      { keyword: 'chuck norris', response: () => apiChuckNorris.getChuckNorrisJoke() }
    ]),
    new Chatbot('Genji', imgGengi, 'A steady blade', [
      { keyword: 'who are you', response: () => 'I am Genji, the cyborg ninja.' },
      { keyword: 'favorite food', response: () => 'I do not have a favorite food. But if I really have to choose : ramen !' },
      { keyword: 'overwatch', response: () => 'It was a second chance for me.' },
      { keyword: 'help', response: () => 'My keywords are : who are you, favorite food, overwatch, user' },
      { keyword: 'user', response: () => apiRandomUser.getRandomUser() }
    ])
  ];

  const chatView = new ChatbotView();
  const chatController = new ChatbotController(chatbots, chatView);
  chatController.init();
}

createChatbots();
