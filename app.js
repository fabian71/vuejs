var app = new Vue({
    el: "#app",
    data: {
        statusColor: 0,
        title: "Contas a pagar",
        menus:[
            {id: 0, name:"Listar conta"},
            {id: 1, name:"Criar conta"},
        ],
        bill: {
            date_due: '',
            name: '',
            value: 0,
            done: 0
        },
        names: [
            'Conta de luz',
            'Conta de água',
            'Conta de telefone',
            'Supermercado',
            'Cartao de crédito',
            'Empréstimo',
            'Gasolina'
        ],
        activedView: 1,
        formType: 'insert',
        bills: [
            {date_due: "20/08/2016", name: 'Conta do Fabiano', value: 70.9, done: 0},
            {date_due: "21/08/2016", name: 'Conta de água', value: 55.9, done: 1},
            {date_due: "22/08/2016", name: 'Conta de telefone', value: 55.9, done: 1},
            {date_due: "23/08/2016", name: 'Supermercado', value: 625.9, done: 1},
            {date_due: "24/08/2016", name: 'Cartao de crédito', value: 1500.9, done: 1},
            {date_due: "25/08/2016", name: 'Empréstimo', value: 2000.9, done: 1},
            {date_due: "26/08/2016", name: 'Gasolina', value: 200, done: 1},
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
            if(this.bills.length <= 0){
                this.statusColor = 0;
                return "Nenhuma conta cadastrada.";
            }else{
                if(count == 0){
                    this.statusColor = 1;
                }else{
                    this.statusColor = 2;
                }
            }


            return !count?"Nenhuma conta a pagar":"Existem "+ count + " conta(s) pendente(s)";
        }
    },
    methods:{
        showView: function(id){
            this.activedView = id;
            if(id == 1){
                this.formType = 'insert';
            }
        },
        submit: function()
        {
            if(this.formType == 'insert'){
                this.bills.push(this.bill);
                this.activedView = 0;
            }
            this.bill =  {
                date_due: '',
                name: '',
                value: 0,
                done: 0
            }
            this.activedView = 0;
        },
        loadBill: function(bill){
            this.bill = bill;
            this.activedView = 1;
            this.formType = 'uptade'
        },
        removeBill: function(bill){
            if (window.confirm("Você realmente quer apagar?")) {
                this.bills.$remove(bill)
                this.activedView = 0;
            }
        }
    },
    watch: {

    },
    ready: function(){


    }
});

Vue.filter('doneLabel', function(value){

    if(value){
        if(value == 0){
            return 'Não Paga'
        }else{
            return 'Paga'
        }
    }else{
        return 'Não Paga'
    }

});

