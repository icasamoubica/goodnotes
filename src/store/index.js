import Vue from 'vue'
import Vuex from 'vuex'

import Colors from '@/assets/json/colors.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes : [],

    protoNote : {
      "id" : Number,
      "title" : "Title",
      "content" : "Content",
      "bgcolor" : "#f0c5c2",
      edit : false
    },
    colors : Colors.colors
  },
  mutations: {

    editNote(state, editedNote) {
      console.log('in editNote in store');
      for (let note of state.notes) {
        if (note.id == editedNote.id) {
          note.title = editedNote.title
          note.content = editedNote.content
          note.edit = false
        }
      }
    },
    toggleEditMode(state, noteToEdit) {
      console.log('in toggleEditMode in store');
      for (let note of state.notes) {
        console.log(note.id)
        console.log(noteToEdit.id);
        
        if (note.id == noteToEdit.id) {
          console.log(note)
          note.edit = true
        }
      }
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(note => note.id != id)
    },
    addNewNote(state) {
      let newNote = Object.assign({}, state.protoNote)
      if (state.notes.length == 0) {
        newNote.id = 1
      } else {
        console.log('so many notes...');
        let ids = state.notes.map(note => note.id)
        newNote.id = Math.max(...ids)+1
      }  
      state.notes.push(newNote)
    }
  },
  actions: {
    
  },
  modules: {
  }
})
