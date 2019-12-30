const fs = require('fs');
const crypto = require('crypto');
require('./components/folder-select');
require('./components/results-display');

Vue.component('Home', {
  template: `
    <div>
      <folder-select
        @folder-path="analyzeFolder">
      </folder-select>
      <div v-if="showSpinner">Processing...</div>
      <results-display
        v-if="results.length > 0"
        v-bind:items="results">
      </results-display>
    </div>
    `,
  data: function () {
    return {
      results: [],
      showSpinner: false
    }
  },
  methods: {
    analyzeFolder(path) {
      this.showSpinner = true;
      this.results = [];

      fs.readdir(path, (err, data) => {
        if (err) {
          alert(err);
          return;
        }

        let hashes = [];

        for (let path of data) {
          if (!fs.lstatSync(path).isFile()) {
            continue;
          }

          const content = fs.readFileSync(path);
          const hash = crypto
            .createHash('md5')
            .update(content)
            .digest('hex');

          const duplicate = hashes.filter(item => item.hash === hash)[0];

          if (duplicate) {
            this.results.push(`${path}, ${duplicate.path}`);
          }

          hashes.push({ path, hash });
        }

        this.showSpinner = false;
      });
    }
  }
}
);

