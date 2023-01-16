import { Component } from '@angular/core';
import { AnalyzerService } from './analyzer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textToAnalyze: any;
  result!: Object[];
  rdbn: any;

  constructor(private analyzerService: AnalyzerService) { }

  submitButtonClicked() {
    if(this.textToAnalyze == undefined){
      this.textToAnalyze = '';
    }

    console.log(this.rdbn);

    if(this.rdbn == 1){
      this.doAnalyzeVovels();
    } else if (this.rdbn == 2){
      this.doAnalyzeConsonants();
    }
  }

  doAnalyzeVovels(){
    console.log(this.textToAnalyze);
    this.analyzerService.analyzeVovels(this.textToAnalyze).subscribe(value => {
      this.result = value;
    })
  }

  doAnalyzeConsonants(){
    console.log(this.textToAnalyze);
    this.analyzerService.analyzeConsonants(this.textToAnalyze).subscribe(value => {
      this.result = value;
    })
  }
}
