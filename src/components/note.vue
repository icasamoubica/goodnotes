<template>
  <div class="note" v-bind:style="{'background-color' : note.bgcolor }">
    <div class="normalView" v-on:click="editNote(note)"
                            v-bind:class="{noDisplay:note.edit}">
        <div class="title">
            <p>{{note.title}}</p>
        </div>
        <div class="content">
            <p>{{note.content}}</p>
        </div>
    </div>
    <div class="editView"   v-bind:style="{'background-color' : note.bgcolor }"
                            :class="{noDisplay:!note.edit}">
        <div class="title">
            <input type="text" v-model="note.title">
            <div class="delete" v-on:click="deleteNote(note.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
            </div>
        </div>
        <div class="content">
            <textarea type="text" v-model="note.content"/>
        </div>
        <div class="buttons">
            <div class="color"  v-for='singleColor of colors'
                                v-bind:key='singleColor.color'
                                v-bind:style="{'background-color' : singleColor }"
                                v-on:click="setColor(note, singleColor)">
            </div>
            <button class="save" v-on:click="saveNote(note)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"/></svg>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import Colors from '@/assets/json/colors.json'

export default {
    data() {return {
        colors : Colors.colors
    }},

    props : {
        note : Object
    },

    methods : {
        editNote(note) {
            this.$store.commit('toggleEditMode', note)
        },
        saveNote(note) {
            this.$store.commit('editNote', note)
        },
        setColor(note, color) {
            this.$store.commit('setColor', {note, color})
        },
        deleteNote(id) {
            this.$store.commit('deleteNote', id)
        }
    }
}
</script>

<style scoped>
.note {
    text-align: left;
    width: 17rem;
    height: 18rem;
    border: 2px solid lightgrey;
}
.delete {
    position: relative;
    bottom: 2rem;
    left: 15rem;
}
.normalView, .editView {
    width: 100%;
    height: 90%;
}
.normalView .title, .normalView .content, .editView .title, .eidtView .content {
    width: 100%;
}
.title {
    background-color: rgba(255, 255, 255, 0.3);
    height: 15%;
    margin: 0;
    padding: 0;
}
.title p, .title input {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    padding: 1px;
    word-wrap: break-word;
    overflow: hidden;
    text-align: start;
    width: 100%;
    height: 100%;
    border: none;
    background-color: inherit;
    margin: 0;
    font-size: 20px;
}
.content {
    height: 80%;
}
.content p, .content textarea {
    font-family: Georgia, 'Times New Roman', Times, serif;
    word-wrap: break-word;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    resize: none;
    padding: 1px;
    font-size: 20px;
    font-weight: normal;
}
.buttons {
    padding-left: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 15%;
}
.input, textarea, button {
    outline: none;
    background-color: inherit;
}
.color {
    margin: 0;
    height: 1.4rem;
    width: 1.4rem;
    border: 2px solid grey;
    border-radius: 0.3rem;
    margin-left: 0.3rem;
    margin-bottom: 0.1rem;
}
button.save {
    border: none;
    margin-right: 0.3rem;
    margin-bottom: 0.5rem;
}
.noDisplay {
    display: none;
}

</style>