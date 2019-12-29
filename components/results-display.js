

Vue.component('ResultsDisplay', {
  props: ['items'],
  template: `
  <ul>
    <li v-for="item in items">
    {{ item }}
    </li>
  </ul>`
});