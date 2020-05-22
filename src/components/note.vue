<template>
  <div class="note" v-bind:style="{'backgound-color' : note.bgcolor }">
    <div class="normalView" v-on:click="editNote(note)"
                            v-bind:class="{noDisplay:note.edit}">
        <div class="title">
            <p>{{note.title}}</p>
        </div>
        <div class="content">
            <p>{{note.content}}</p>
        </div>
    </div>
    <div class="editView" :class="{noDisplay:!note.edit}">
        <div class="title">
            <input type="text" v-model="note.title">
        </div>
        <div class="content">
            <textarea type="text" v-model="note.content"/>
        </div>
        <div class="buttons">
            <button class="save" v-on:click="saveNote(note)">
                SAVE
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props : {
        note : Object
    },

    methods : {
        editNote(note) {
            this.$store.commit('toggleEditMode', note)
        },
        saveNote(note) {
            this.$store.commit('editNote', note)
        }
    }
}
</script>

<style scoped>
.note {
    width: 10rem;
    height: 13rem;
    border: 1px solid black;
}
.noDisplay {
    display: none;
}
.normalView, .editView {
    width: 100%;
    height: 90%;
}
.normalView .title, .normalView .content, .editView .title, .eidtView .content {
    width: 100%;
}
.title {
    height: 15%;
}
.title p, .title input {
    word-wrap: break-word;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: none;
}
.content {
    height: 75%;
}
.content p, .content textarea {
    word-wrap: break-word;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    resize: none;
    padding: 0;
}
.button {
    height: 10%;
}
.input, textarea, button {
    outline: none;
}

</style>