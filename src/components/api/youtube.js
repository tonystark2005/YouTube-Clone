import axios from "axios";
const API_KEY = "AIzaSyCw93QMRp0exJUTSXql_1rB6EFajvSuIdU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "video",
    key: API_KEY,
  }
});
