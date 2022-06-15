import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClientComponent } from '../client/client.component';

export interface ITableHeader {
  key : string ;
  index : number ; 
  isSelected : boolean ;
}
export interface IdynamicTable {
  headers : ITableHeader[] ; 
  data : any[] ; 
}



@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})


export class DynamicTableComponent implements OnInit {



  public constructor(private changeDetectorRef : ChangeDetectorRef) { }

  tableData!: IdynamicTable;
  allHeaders!: ITableHeader[];
  dragTrace!: { src: number ,  dest: number }; 
  opened: any ;
  page: number = 1;
  count: number = 0;
  tableSize: number = 15;
  tableSizes: any = [3, 6, 9, 12];


  ngOnInit(): void {
    this.tableData = { headers: [], data: []} ;
  }
  render(headers : ITableHeader[] , data: any[]){
    this.tableData = {
      headers: headers.filter(x => x.isSelected),
      data : data 
    };
    this.allHeaders = headers ;
    this.resetDragTracer()
    this.changeDetectorRef.detectChanges() ; 
  }
   resetDragTracer() {
    this.dragTrace = { src: -1 , dest: -1 } ; 
  }
  toggleHeader(index : number) {
    const isSelected =this.allHeaders[index].isSelected ;
    this.allHeaders[index].isSelected = !isSelected ;
    this.tableData.headers = this.allHeaders.filter(x => x.isSelected)
    this.tableData.headers.forEach((x, i )=>x.index = i)
  }
  onDragstart(i : number) {
  this.dragTrace.src = i ;
  }
  onDragover(i : number) {
  this.dragTrace.dest ; 
  }

  onDragend(i : number) {
  const abort = 
   this.dragTrace.src == -1 ||
   this.dragTrace.dest == -1 ;
   if(abort) {
     this.resetDragTracer( ); 
     return ; 
   }
   this.tableData.headers[this.dragTrace.src].index = this.dragTrace.dest ;
   this.tableData.headers[this.dragTrace.dest].index = this.dragTrace.src ;
   
   this.allHeaders[this.dragTrace.src].index = this.dragTrace.dest ;
   this.allHeaders[this.dragTrace.dest].index = this.dragTrace.src ;

   const ascending = (a: { index: number; }, b: { index: number; }) => a.index >b.index ? 1 : -1 ;

   this.tableData.headers.sort(ascending) ;
   this.allHeaders.sort(ascending) ;
   this.tableData.headers.forEach((x , i)=> x.index = 1) ;
   this.allHeaders.forEach((x , i)=> x.index = 1) ;

   this.resetDragTracer();

  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  


}
