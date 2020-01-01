Vue.component('FolderSelect', {
  template:`
    <div class="folder-select">
      <h1 class="title">Select a folder to scan</h1>
      <input class="folder-input" v-on:change="setFolderPath"></input>
      <div>
        <button
          class="start-button"
          v-on:click="$emit('folder-path', folderPath)">
          Start
        </button>
      </div>
    </div>`,
  methods: {
    setFolderPath: function(event) {
      this.folderPath = event.target.value;
      console.log(this.folderPath);
    }
  },
  data: function() {
    return {
      folderPath: ''
    }
  }
})

