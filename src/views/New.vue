<template>
  <div class="latest_news">
    <h1>Latest News</h1>
    <item v-for="story in stories" :key="story.data.id" :story="story"></item>
  </div>
</template>

<script>
import Item from "@/views/Item.vue";
export default {
  name: "New",
  components: {
    item: Item
  },
  data: function() {
    return {
      err: "",
      stories: this.$store.state.newStories
    };
  },
  methods: {
  },
  created: function() {
   if(this.$store.state.newStories.length === 0) this.$store.dispatch('fetch_new_stories');
  }
};
</script>

<style scoped>
.latest_news {
  padding: 20px;
}
</style>