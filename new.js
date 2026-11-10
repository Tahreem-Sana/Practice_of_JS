let dailybudget = 5000;
let expenses =[1200,800,1500,400];

function totalExpense(){
    let total=0;
    for(let i=0; i < expenses.length ;i++){
        total =total+ expenses[i];
    }
    return total;
}

function checkbudget(){
    let total=totalExpense()
    console.log("Total"+total);
    if(total> dailybudget){
        console.log("Budget End")
    }else{
    }
}

chextbuget();