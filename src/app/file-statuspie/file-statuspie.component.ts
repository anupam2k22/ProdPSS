import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { WebapiCallsService } from '../webapi-calls.service';


@Component({
  selector: 'app-file-statuspie',
  templateUrl: './file-statuspie.component.html',
  styleUrls: ['./file-statuspie.component.css']
})
export class FileStatuspieComponent implements OnInit {

  constructor(private _data: WebapiCallsService) { 
    Chart.register(...registerables);
  }
  doughnutChart = {};
  _res:any;
  _response:any;

  ngOnInit(): void {
    this._data.getFileStatusPieGraph().subscribe(
      res => {
        console.log(res);
        if(typeof (res.response === 'string')){
          this._res = res.response;
          this._response = JSON.parse(this._res);
          this.doughnutChart = new Chart('canvas2', {
            type: 'bar',
            data: {
              labels: [this._response[0].Status_descriptions,this._response[3].Status_descriptions,this._response[4].Status_descriptions,this._response[5].Status_descriptions,this._response[7].Status_descriptions,this._response[8].Status_descriptions,this._response[9].Status_descriptions],
              datasets: [
                {
                  label: 'Overall File Status',
                  data: [this._response[0].FileCount,this._response[3].FileCount,this._response[4].FileCount,this._response[5].FileCount,this._response[7].FileCount,this._response[8].FileCount,this._response[9].FileCount],
                  backgroundColor: [
                    'rgba(191, 245, 39, 0.3)',
                    'rgba(39, 54, 245, 0.3)',
                    'rgba(245, 39, 88, 0.3)',
                    'rgba(136, 126, 129, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(201, 203, 207, 0.3)'
                  ],
                  borderColor: [
                    'rgb(191, 245, 39)',
                    'rgb(39, 54, 245)',
                    'rgb(245, 39, 88)',
                    'rgb(136, 126, 129)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                  ],
                  borderWidth: 1
                },
              ]
            }
          });
        }
        (err: any) => console.error(err)
        },
    );
  }

}
