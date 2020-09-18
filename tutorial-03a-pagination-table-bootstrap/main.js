var vue_app = new Vue({
    el: '#app',
    //Letakkan JAVASCRIPT disini
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        fields: [
          'id', 
          'first_name', 
          'last_name',
        ],
        items: [
          { id: 1, first_name: 'Dickerson', last_name: 'Macdonald' },
          { id: 2, first_name: 'Larsen', last_name: 'Shaw' },
          { id: 3, first_name: 'Geneva', last_name: 'Wilson' },
          { id: 4, first_name: 'Jami', last_name: 'Carney' }
        ],
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
 });