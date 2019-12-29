Vue.component('FolderSelect', {
  template:`
    <div>
      <input v-model="folderPath"></input>
      <div>
        <button
          v-on:click="$emit('folder-path', folderPath)">
          Start
        </button>
      </div>
    </div>`,
  data: function() {
    return {
      folderPath: ''
    }
  }
})

