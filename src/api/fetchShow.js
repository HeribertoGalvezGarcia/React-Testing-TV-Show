import axios from "axios";


function fetchShow() {
  return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(({data}) => data);
}

export default fetchShow;
