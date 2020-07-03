import axios from 'axios';

export default {
    fetch_top_stories: ({commit}) => {
        axios
        .get(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        )
        .then((result) => {
          let results = result.data.slice(0,25);
          results.forEach(item => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
            .then(output => {
            commit("APPEND_TOP_STORY", output);
            })
          })
        })
        .catch(err => {
          console.log(err);
          this.err = err;
        });
    },
    fetch_new_stories: ({commit}) => {
        axios
        .get(
          "https://hacker-news.firebaseio.com/v0/newstories.json"
        )
        .then((result) => {
          let results = result.data.slice(0,25);
          results.forEach(item => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
            .then(output => {
            //   this.stories.push(output)
            commit("APPEND_NEW_STORY", output);
            })
          })
        })
        .catch(err => {
          console.log("err");
          console.log(err);
          this.err = err;
        });
    }
}