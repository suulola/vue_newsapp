<script>
import axios from "axios";
export default {
  name: "home",
  data: function() {
    return {
      err: "",
      stories: []
    };
  },
  methods: {
    fetchNews() {
      axios
        .get(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        )
        .then(result => {
          this.results = result.data.slice(0,10);
          this.results.forEach(item => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
            .then(output => {
              this.stories.push(output)
            })
          })
        })
        .catch(err => {
          console.log("err");
          console.log(err);
          this.err = err;
        });
    }
  },
  created: function() {
    this.fetchNews();
  }
};
</script>

<template>
  <div>
    <p>Homepage</p>
    <div v-for="story in stories" :key="story.id">
      <h2>{{ story.data.title }}</h2>
      <p>Type: {{ story.data.type }}</p>
      <p>Link: {{ story.data.url }}</p>
      <p>Score: {{ story.data.score }}</p>
    </div>
  
  </div>
</template>


