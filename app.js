var month = prompt('your birthday')
var day = prompt('your birthday')
 if(day >= 21 && day < 31  && month === 'march' || day <= 19 && day > 0  && month === "april" ){
  alert('вы Овен')
 }
 else if(day >= 20 && day < 30  && month === 'april' || day <= 20 && day > 0  && month === "may" ){
  alert('вы Телец')
 }
 else if (day >= 21 && day < 31  && month === 'may' || day <= 20 && day > 0  && month === "june" ){
  alert('вы Близницы')
 }
 else if (day >= 21 && day < 30  && month === 'june' || day <= 22 && day > 0  && month === "july" ){
  alert('вы Рак')
 }
 else if (day >= 23 && day < 31  && month === 'july' || day <= 22 && day > 0  && month === "august" ){
  alert('вы Лев')
 }
 else if (day >= 23 && day < 31  && month === 'august' || day <= 22 && day > 0  && month === "september" ){
  alert('вы Дева ')
 }
 else if (day >= 23 && day < 30  && month === 'september' || day <= 22 && day > 0  && month === "october" ){
  alert('вы Вессы')
 }
 else if (day >= 23 && day < 31  && month === 'october' || day <= 21 && day > 0  && month === "november" ){
  alert('вы Скорпион')
 }
 else if (day >= 22 && day < 30  && month === 'november' || day <= 21 && day > 0  && month === "december" ){
  alert('вы Стрелец')
 }
 else if (day >= 22 && day < 31  && month === 'december' || day <= 19 && day > 0  && month === "january" ){
  alert('вы Козерог')
 }
 else if (day >= 20 && day < 31  && month === 'january' || day <= 18 && day > 0  && month === "february" ){
  alert('вы Водолей')
 }
 else if (day >= 19 && day < 28  && month === 'february' || day <= 20 && day > 0  && month === "march" ){
  alert('вы Рыбы')
 }else {alert('ERROR')}
