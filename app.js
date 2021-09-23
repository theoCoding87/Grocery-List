const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      items: [
        {isDropped: true, name:'Kartoffeln'},
        {isDropped: false, name:'Porree'},
        {isDropped: true, name:'Gurke'},
        {isDropped: true, name:'Nudeln'},
        {isDropped: false, name:'Brot'},
        {isDropped: true, name:'Katzenfutter'},
        {isDropped: false, name:'Taschentücher'}
      ]
      }},
  methods: {
    addItem() {
      strProof = this.enteredGoalValue;
      if (strProof.length != 0 && strProof.charAt(0) != ' ')
      {
        object2Push = {isActive: true, name: this.enteredGoalValue}
        this.items.unshift(object2Push);
      }
      this.enteredGoalValue = '';
    },
    removeItem(idx) {
      //strConfirm = this.items[idx].name;
      //console.log(strConfirm);
      if(confirm('Artikel ' + this.items[idx].name + ' aus der Liste löschen?') == true) {
        this.items.splice(idx, 1);
      }
      else  {console.log('Function Aborted.')};
      
    },
    changePosPlus(idx) {
      if (idx < this.items.length -1 ) {
      arrTemp = this.items.slice();
      this.items[idx + 1] = this.items[idx];
      this.items[idx] = arrTemp[idx + 1];}
    },
    changePosMinus(idx) {
      if (idx > 0) {
      arrTemp = this.items.slice();
      this.items[idx - 1] = this.items[idx];
      this.items[idx] = arrTemp[idx - 1];}
    },
    toggleDropped(idx) {
      /* console.log('-----> old bool is ' + this.items[idx].isDropped); */
      this.items[idx].isDropped = !this.items[idx].isDropped;
      /* console.log('-----> new bool is ' + this.items[idx].isDropped); */
    }
  }
});

app.mount('#groceryList');


// ToDo: detect Darkmode https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
