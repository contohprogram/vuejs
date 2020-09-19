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
        form: {
          id: '',
          first_name: '',
          last_name: '',
        },
        show: true,
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        this.items.push({ id: this.form.id, first_name: this.form.first_name, last_name: this.form.last_name })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.id = ''
        this.form.first_name = ''
        this.form.last_name = ''
        this.form_action = 'Insert'
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
 });