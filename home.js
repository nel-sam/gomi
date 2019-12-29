const fs = require('fs');
require('./components/folder-select');
require('./components/results-display');

Vue.component('Home', {
  template:`
    <div>
      <folder-select
        @folder-path="setFolderPath">
      </folder-select>
      <results-display
        v-if="paths.length > 0"
        v-bind:items="paths">
      </results-display>
    </div>
    `,
    data: function() {
      return {
        folderPath: '',
        paths: []
      }
    },
    methods: {
      setFolderPath(path) {
        this.folderPath = path;

        fs.readdir(this.folderPath, (err, data) => {
          this.paths = data;
        });
      }
    }
  }
);

