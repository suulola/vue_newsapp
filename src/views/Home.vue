<script>
import Item from '@/views/Item.vue'

export default {
  name: "home",
  components: {
    'item': Item
  },
  data: function() {
    return {
      err: "",
      stories: this.$store.state.topStories
    };
  },
  methods: {
  },
  created: function() {
      if(this.$store.state.topStories.length === 0) this.$store.dispatch('fetch_top_stories');
  }
}
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

