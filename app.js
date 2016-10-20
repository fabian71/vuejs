var app = new Vue({
    el: "#app",
    data: {
        title: "Contas a pagar",
        bills: [
            {date_due: "20/08/2016", name: 'Conta do Fabiano', value: 70.9, done: 1},
            {date_due: "21/08/2016", name: 'Conta do água', value: 55.9, done: 0},
            {date_due: "22/08/2016", name: 'Conta do telefone', value: 55.9, done: 0},
            {date_due: "23/08/2016", name: 'Supermercado', value: 625.9, done: 0},
            {date_due: "24/08/2016", name: 'Cartao de crédito', value: 1500.9, done: 0},
            {date_due: "25/08/2016", name: 'Empréstimo', value: 2000.9, done: 0},
            {date_due: "26/08/2016", name: 'Gasolina', value: 200, done: 0},
        ]
    },
    computed: {
        status: function(){
            var count = 0;
            for(var i in this.bills){
                if(!this.bills[i].done){
                    count++;
                }
            }

            return !count?"Nenhuma conta a pagar":"Existem "+ count + " contas a serem pagas";
        }
    }
});