<template>
  <div class="latest_news">
    <h1>Latest News</h1>
    <item v-for="story in stories" :key="story.data.id" :story="story"></item>
  </div>
</template>

<script>
import axios from "axios";
import Item from "@/views/Item.vue";
export default {
  name: "New",
  components: {
    item: Item
  },
  data: function() {
    return {
      err: "",
      stories: []
    };
  },
  methods: {
    fetchLatestNews() {
      axios
        .get("https://hacker-news.firebaseio.com/v0/newstories.json")
        .then(result => {
          this.results = result.data.slice(0, 10);
          this.results.forEach(item => {
            axios
              .get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
              .then(output => {
                this.stories.push(output);
              });
          });
        })
        .catch(err => {
          console.log("err");
          console.log(err);
          this.err = err;
        });
    }
  },
  created: function() {
    this.fetchLatestNews();
  }
};
</script>

<style scoped>
.latest_news {
  padding: 20px;
}
</style>