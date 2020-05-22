<template>
  <div class="home">
    <h3>GOODNOTES</h3>
    <div class="confirmDialogContainer" v-if="renderDeleteConfirmation">
      <div class="confirmDialog">
        <p>Are you sure you want</p>
        <p>to delete all notes?</p>
        <button v-on:click="deleteSelected">YES</button>
        <button v-on:click="cancelConfirmation">NO</button>
      </div>
    </div>
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
        <li v-on:click="askToConfirmDeletion">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7 2c1.695 1.942 2.371 3 4 3h13v17h-24v-20h7zm2.414 8l2.586 2.586 2.586-2.586 1.414 1.414-2.586 2.586 2.586 2.586-1.414 1.414-2.586-2.586-2.586 2.586-1.414-1.414 2.586-2.586-2.586-2.586 1.414-1.414z"/></svg>
        </li>
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
    renderDeleteConfirmation : false
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
    },
    askToConfirmDeletion() {
      this.renderDeleteConfirmation = true
    },
    deleteSelected() {
      this.deleteAll()
      this.renderDeleteConfirmation = false
    },
    deleteAll() {
      this.$store.commit('deleteAll')
    },
    cancelConfirmation() {
      this.renderDeleteConfirmation = false
    }

  }
}
</script>

<style scoped>
h3 {
  font-size: 3rem;
  margin: 1rem;
  text-align: center;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 3rem;
  height: 3rem;
  list-style-type: none;
}
li:hover {
  background-color: lightgrey;
}
.displayAsGrid {
  display: grid;
  gap: 1rem;
}
@media only screen and (min-width : 90rem) {
  .displayAsGrid {
  grid-template-columns: repeat(5, 1fr);
  }
}
@media only screen and (min-width: 72rem) and  (max-width : 89rem) {
  .displayAsGrid {
  grid-template-columns: repeat(4, 1fr);
  }
}
@media only screen and (min-width: 54rem) and  (max-width : 71rem) {
  .displayAsGrid {
  grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 36rem) and  (max-width : 53rem) {
  .displayAsGrid {
  grid-template-columns: repeat(2, 1fr);
  }
}
.displayAslist {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.confirmDialogContainer {
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.confirmDialog {
  border: 2px solid black;
  border-radius: 1rem;
  padding: 2rem;
  background-color: rgb(211, 211, 211);
  position: fixed;
  z-index: 10;
  box-shadow: 0 0 5rem 5rem rgba(255, 255, 255, 1);
}
.confirmDialog p {
  font-weight: 900;
}
.confirmDialog button {
  margin: 1rem;
  width: 5rem;
  height: 2rem;
  border-radius: 0.3rem;
}
</style>
