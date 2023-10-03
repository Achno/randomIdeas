import axios from 'axios';

class IdeasApi {
  constructor() {
    this.apiURL = 'http://localhost:5000/api/ideas';
  }

  getIdeas() {
    return axios.get(this.apiURL);
  }

  createIdea(data) {
    return axios.post(this.apiURL, data);
  }
}

export default new IdeasApi();
