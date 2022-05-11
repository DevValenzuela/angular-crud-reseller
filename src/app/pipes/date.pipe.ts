import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
@Pipe({
  name: 'customDate'
})
export class DatePipe implements PipeTransform {

  transform(date: Date): any {
    const d = new Date(date);
    return moment(d).format('YYYY');
  }
}


