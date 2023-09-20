import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(data: any[], searchTerm:string): any[] {
    return data.filter(item=>item.first_name.includes(searchTerm))
  }

}
