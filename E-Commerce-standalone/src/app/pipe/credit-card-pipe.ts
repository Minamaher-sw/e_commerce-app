import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(cardValue:string){
    let result :string ;
    let credit:string[]=[];
    for(let i=0 ; i<15 ;(i=i+3)){
      result = cardValue.slice(i , i+4)
      credit.push(result);
    }
    result =credit.join("-")
    return result ;
  }

}
