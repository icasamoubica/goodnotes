import Vue from 'vue'
import Vuex from 'vuex'

import Colors from '@/assets/json/colors.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes : [],

    newNote : {
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
        if (note.id === editedNote.id) {
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
        
        if (note.id === noteToEdit.id) {
          console.log(note)
          note.edit = true
        }
      }
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(note => note.id != id)
    },
    addNewNote(state) {
      if (state.notes.length == 0) {
        console.log('no notes');
        state.newNote.id = 1
        console.log('giving new note id' + state.newNote.id);
        
      } else {
        console.log('so many notes...');
        let ids = state.notes.map(note => note.id)
        console.log('ids = ' + ids);
        
        state.newNote.id = Math.max(...ids)+1

        console.log('new id = ' + state.newNote.id);
        
      }  
      state.notes.push(state.newNote)
    }
  },
  actions: {
    
  },
  modules: {
  }
})
