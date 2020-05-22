<template>
  <div class="home">
    <div class="nav">
      <ul>
        <li v-on:click="addNewNote">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        </li>
        <li v-on:click="showAsGrid">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/></svg>
        </li>
        <li v-on:click="showAsList">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg>
        </li>
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
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li {
  margin-left: 1rem;
  margin-right: 1rem;
  list-style-type: none;
}
li:hover {
  background-color: lightgrey;
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
