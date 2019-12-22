const fs = require('fs');

Vue.component('FolderSelect', {
  template:`
    <div>
      <input v-model="folderPath"></input>
      <div>
        <button v-on:click="start()">Start</button>
      </div>
      <ul>
        <li v-for="item in results">
        {{ item }}
        </li>
      </ul>
    </div>`,
  data: function() {
    return {
      folderPath: '',
      results: []
    }
  },
  methods: {
    start() {
      fs.readdir(this.folderPath, (err, data) => {
        this.results = data;
      });
    }
  }
})

