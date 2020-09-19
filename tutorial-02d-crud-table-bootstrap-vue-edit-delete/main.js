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
          { key: 'actions', label: 'Actions' }
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
        form_action : 'Insert',
        form_index : 0,
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    methods: {
      info(item, index, button) {
        alert(JSON.stringify(item, null, 2))
        //this.infoModal.title = `Row index: ${index}`
        //this.infoModal.content = JSON.stringify(item, null, 2)
        //this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      edit(item, index, button) {
        alert(JSON.stringify(item, null, 2))
        this.form.id = item.id
        this.form.first_name = item.first_name
        this.form.last_name = item.last_name
        this.form_action = 'Update'
        this.form_index = index + ((this.currentPage - 1) * this.perPage)
        //this.infoModal.title = `Row index: ${index}`
        //this.infoModal.content = JSON.stringify(item, null, 2)
        //this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      del(item, index, button) {
        this.items.splice(index + ((this.currentPage - 1) * this.perPage), 1)
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        if (this.form_action == 'Update'){
          this.items[this.form_index].id = this.form.id
          this.items[this.form_index].first_name = this.form.first_name
          this.items[this.form_index].last_name = this.form.last_name
        } else { //Insert
          this.items.push({ id: this.form.id, first_name: this.form.first_name, last_name: this.form.last_name })
        }
        this.form.id = ''
        this.form.first_name = ''
        this.form.last_name = ''
        this.form_action = 'Insert'
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