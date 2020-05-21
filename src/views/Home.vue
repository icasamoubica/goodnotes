<template>
  <div class="home">
    <div class="nav">
      <ul>
        <li v-on:click="addNewNote">Add Note</li>
        <li v-on:click="showAsGrid">Show as Grid</li>
        <li v-on:click="showAsList">Show as List</li>
        <li></li>
      </ul>
    </div>
    <div class="noteContainer" v-bind:class=" showGrid ? 'displayAsGrid' : 'displayAslist'">
      <note v-for='singleNote of getNotes'
            v-bind:key='singleNote.id'
            v-bind:note='singleNote'
      />
    </div>
  </div>
</template>

<script>

import Note from '@/components/note.vue'

export default {

  data() { return {
    showGrid : true,
  }},

  components : {
    Note
  },

  computed : {
    getNotes() {
      return this.$store.state.notes
    }
  },

  methods : {
    addNewNote() {
      this.$store.commit('addNewNote')
    },
    showAsGrid() { 
      this.showGrid = true
    },
    showAsList() {
      this.showGrid = false
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
.noteContainer {
  display: grid;
  gap: 1rem;
}
.displayAsGrid {
  grid-template-columns: repeat(4, 1fr);
}
.displayAslist {
  grid-template-columns: 1fr;
}
</style>
