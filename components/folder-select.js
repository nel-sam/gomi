Vue.component('FolderSelect', {
  template:
    `<div class="box red">
      <button v-on:click=\"toggleMe()\">Toggle Now</button>
      <br>
      <button v-on:click=\"clicks++\">Clickety Click</button>
      <br>
      {{ clicks }}
    </div>`,
  data: function() {
    return {
      clicks: 0
    }
  },
  methods: {
    toggleMe() {
      this.$root.toggleBox()
    }
  }
})

