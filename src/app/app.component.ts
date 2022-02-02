
import { DataSource } from '@angular/cdk/collections';
import { ThisReceiver } from '@angular/compiler';
import { Component,AfterViewInit, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SharedServiceService} from 'src/app/shared-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements AfterViewInit {
  dataSource:any;
  data:any;
  displayedColumns: string[] = ['zip_code', 'latitude', 'longitude', 'city','state','county'];
  @ViewChild(MatPaginator)
  paginator!:MatPaginator;
 
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private dataService:SharedServiceService ) {
    //this.dataSource = new MatTableDataSource(this.getZipData());
    //this.dataSource = new MatTableDataSource(this.getdata());
    this.getZipData(MatTableDataSource);
   
  }
 
  ngAfterViewInit() {
   
  }
  ngOnInit() {
    console.log("checkingg on init");
   // console.log(this. getZipData());
   
  
  }
 
  check:any;
getZipData(matTableDatasource:any){
  this.dataService.getData().subscribe(data=>{
    //console.log(data);
   // console.log("checkingg");
    this.dataSource=new matTableDatasource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   // console.log(data);
    this.check=data;
    //console.log("checkingg datafromapi");
    //console.log(this.dataFromApi);
    
  });
  
}
// getdata(){
//  this.data=this.dataService.getFewData();
//    return this.data;
// }

}
