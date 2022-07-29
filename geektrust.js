const fs = require("fs")
const filename = process.argv[2]
const moment = require("moment")

 input = fs.readFileSync(process.argv[2]).toString();

const subscriptionPlans = {
    MUSIC: {
        FREE: {
            amount: 0,
            months: 1
        },
        PERSONAL: {
            amount: 100,
            months: 1
        },
        PREMIUM: {
            amount: 250,
            months: 3
        }
    },
    VIDEO: {
        FREE: {
            amount: 0,
            months: 1
        },
        PERSONAL: {
            amount: 200,
            months: 1
        },
        PREMIUM: {
            amount: 500,
            months: 3
        }
    },
    PODCAST: {
        FREE: {
            amount: 0,
            months: 1
        },
        PERSONAL: {
            amount: 100,
            months: 1
        },
        PREMIUM: {
            amount: 300,
            months: 3
        }
    },
    TOPUP: {
        FOUR_DEVICE: {
            amount: 50,
            months: 1
        },
        TEN_DEVICE: {
            amount: 100,
            months: 1
        }
    }
}

let subPlan = {};
let planList = {};

const inputData = (input) => {

    let details = input.toString().split("\n");
    for (let i = 0; i < details.length; i++) {
        let getData = details[i].split(" ");
        if (getData[0] == "START_SUBSCRIPTION") {
            subPlan.date = getData[1];
        } else if(getData[0] == "ADD_SUBSCRIPTION"){
            addSub(getData[1],getData[2])
        }
    }
    console.log(date)
};

const addSub = (type,subscription)=>{
    console.log(type,subscription)
    let lastIndex = subscription.lastIndexOf(subscription);

    newSub = subscription.substring(0, lastIndex);

    let planDetails =  subscriptionPlans[type]
    let month = planDetails[newSub].months
    
    
    let enDate = moment(subPlan.date, "DD-MM-YYYY").add(month, 'M').format('DD-MM-YYYY');
    let obj = {
        type,
        plan,
        startDate:subPlan.date,
        enDate: moment(enDate, "DD-MM-YYYY").subtract(10, 'days').format('DD-MM-YYYY')
    }
    // let checkSub = planList.find(item=>item.type.trim()==type.trim())
    // if(checkSub){
    //     console.log('ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY');
    //     return;
    // } 
    // if(!checkSub){
        planList.push(obj);
      totalPrice = totalPrice  + planDetails[plan.trim()].amount
    // }
    console.log(planList)
};




inputData(input);


module.exports.inputData = inputData;