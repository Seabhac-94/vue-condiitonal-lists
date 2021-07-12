const app = Vue.createApp({
  data() {
    return { 
      enterGoal: '',
      goals: []
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoalValue)
    }
  }
});

app.mount('#user-goals');
