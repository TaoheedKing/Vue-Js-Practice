const app = Vue.createApp({
  data() {
    return {
      counter: 15,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Submitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    addition(num) {
      this.counter = this.counter + num;
      // this.counter++;
    },
    subraction(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
