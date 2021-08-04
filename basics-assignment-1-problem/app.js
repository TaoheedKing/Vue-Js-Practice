const app = Vue.createApp({
    data() {
        return {
            name: 'Taoheed',
            age: 21,
            image: 'https://cdn.pixabay.com/photo/2018/05/08/21/08/apple-3383931_960_720.png'
        };
    },
    methods: {
        futureAge() {
            return this.age + 5;
        },
        favNumber() {
            const randomNumber = Math.random();
            return randomNumber;
            // can also do "return Math.random();""
        },
        fillName() {
            this.enteredValue = this.name;
            return this.enteredValue;
        }
    }
});

app.mount('#assignment');