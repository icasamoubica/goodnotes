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
        </div>
        <div class="content">
            <textarea type="text" v-model="note.content"/>
        </div>
        <div class="buttons">
            <button class="save" v-on:click="saveNote(note)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"/></svg>
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
    text-align: left;
    width: 17rem;
    height: 18rem;
    border: 2px solid lightgrey;
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
    text-align: left;
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
    text-align: right;
    height: 15%;
}
.input, textarea, button {
    outline: none;
    background-color: inherit;
}
.noDisplay {
    display: none;
}

</style>