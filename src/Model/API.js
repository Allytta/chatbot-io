const { Configuration, OpenAIApi } = require('openai');

export default class API {
  constructor(privateKey) {
    this.privateKey = privateKey;
  }

  // Appel au service d'API de OpenWeatherMap
  async getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Pau&appid=${this.privateKey}&units=metric`;
    const response = await fetch(url);
    const {
      main: { temp },
      weather: [{ description }],
      main: { humidity },
      wind: { speed }
    } = await response.json();
    return `The temperature in Pau is currently ${temp} degrees Celsius with ${description}. The humidity is ${humidity}% and the wind speed is ${speed} m/s.`;
  }

  // Appel au service d'API de Chuck Norris Jokes
  async getChuckNorrisJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url);
    const data = await response.json();
    return data.value;
  }

  // Appel au service d'API de Random User
  async getRandomUser() {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const { results } = await response.json();
    const { name, email, location } = results[0];
    const fullName = `${name.first} ${name.last}`;
    const { city, country } = location;
    return `Name: ${fullName}, Email: ${email}, City: ${city}, Country: ${country}`;
  }

  // Appel au service d'API de ChatGPT
  async getChatGPTAnswer() {
    const inputText = document.getElementById('chatInput')?.value;
    const promptText = inputText.toLowerCase().split('chatgpt')[1];

    const configuration = new Configuration({
      apiKey: this.privateKey
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: promptText }]
    });

    return completion.data.choices[0].message;
  }
}
