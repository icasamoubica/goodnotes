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
      "edit" : false
    },
    colors : Colors.colors
  },
  mutations: {

    editNote(state, editedNote) {
      for (let note of state.notes) {
        if (note.id == editedNote.id) {
          note.title = editedNote.title
          note.content = editedNote.content
          note.edit = false
        }
      }
    },
    toggleEditMode(state, noteToEdit) {
      for (let note of state.notes) {
        if (note.id == noteToEdit.id) {
          note.edit = true
        } else if (note.id != noteToEdit.id) {
          note.edit = false
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
        let ids = state.notes.map(note => note.id)
        newNote.id = Math.max(...ids)+1
      }  
      state.notes.push(newNote)
    },
    setColor(state, payload) {
      console.log('in setColor in store');
      console.log(payload);
      console.log('looking for note with id: ' + payload.note.id);
      for (let note of state.notes) {
        if (note.id == payload.note.id) {
          console.log('found it!');
          console.log('color before - ' + note.bgcolor);
          note.bgcolor = payload.color
          console.log('color after - ' + note.bgcolor);
        }
      }
    },
    deleteAll(state) {
      state.notes = []
    }
  },
  actions: {
    
  },
  modules: {
  }
})
