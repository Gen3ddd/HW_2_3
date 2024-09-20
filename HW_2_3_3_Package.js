let userBalance = 500;  // Баланс пользователя
let packageCost = 100;  // Стоимость посылки
let smsCode = 'A001DFX0';  // Код из смс

let postMachine = [null, null, null, "1432HGF" , null];  // Почтамат
let dbCode = 'A001DFX0'; // Код в базе данных   

let cellNum = postMachine.indexOf("1432HGF")  // Номер ячейки в почтамате
let packageId = postMachine[cellNum];  // Id посылки (прежде всего, код)

// Проверка совпадения кодов и баланса пользователя
if (smsCode === dbCode && userBalance >= packageCost) {
    
    userBalance -= packageCost;  // Списание средств
    
    console.log(`Заберите посылку ${packageId} из ячейки №${cellNum + 1}. Ваш счет составляет: ${userBalance}ед.`);
} else {
    console.log("Не удалось получить посылку. Проверьте код или баланс.");
}