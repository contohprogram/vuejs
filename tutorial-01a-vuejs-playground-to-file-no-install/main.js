var vue_app = new Vue({
    el: '#app',
    //Letakkan JAVASCRIPT disini
    data() {
      return {
        name: 'BootstrapVue',
        show: true
      }
    },
    watch: {
      show(newVal) {
        console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
      }
    },
    methods: {
      toggle() {
        console.log('Toggle button clicked')
        this.show = !this.show
      },
      dismissed() {
        console.log('Alert dismissed')
      }
    }
 });