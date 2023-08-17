document.getElementById('btn-deposit').addEventListener('click', function(){
   const depositField=document.getElementById('deposit-field');
   const newdepositAmountString=depositField.value;
   const newdepositAmount=parseFloat(newdepositAmountString)
   
   
   const depositTotalElement=document.getElementById('total-deposit')
   const previousdepositTotalString=depositTotalElement.innerText;
    const previousdepositTotal=parseFloat(previousdepositTotalString)
   const currentDepositTotal=previousdepositTotal + newdepositAmount;
   depositTotalElement.innerText=currentDepositTotal;

   const balanceField=document.getElementById('main-balance')
   const totalBalanceString=balanceField.innerText;
   
   const totalBalance=parseFloat(totalBalanceString);
   
   const newTotalBalance=totalBalance+newdepositAmount;
   balanceField.innerText=newTotalBalance;
    



//    clear deposit field
depositField.value='';
})


document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFieldElement=document.getElementById('withdraw-field');
    const newwithdrawAmountString=withdrawFieldElement.value;
    const newwithdrawAmount=parseFloat(newwithdrawAmountString);


    const previousWithdrawElement=document.getElementById('total-withdraw');
    const previousWithdrawElementString=previousWithdrawElement.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawElementString);
    
    const currentwithdrawAmount=previousWithdrawAmount+newwithdrawAmount;
    previousWithdrawElement.innerText=currentwithdrawAmount;

    const balanceTotal=document.getElementById('main-balance')
    const totalBalanceString=balanceTotal.innerText;
    const totalBalance=parseFloat(totalBalanceString);
    const newBalanceTotal=totalBalance-newwithdrawAmount;
    balanceTotal.innerText=newBalanceTotal;





    // clear the withdraw input feild
    withdrawFieldElement.value='';

})