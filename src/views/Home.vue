<script>
import axios from "axios";
import Item from '@/views/Item.vue'

export default {
  name: "home",
  components: {
    'item': Item
  },
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
  <div class="home">
    <h1>Homepage</h1>
    <item v-for="story in stories" :key="story.data.id" :story="story"> 
    </item>
  
  </div>
</template>

<style  scoped>
.home {
  padding: 20px;
}
</style>

