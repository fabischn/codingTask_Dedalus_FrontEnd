import { Component } from '@angular/core';
import { AnalyzerService } from './analyzer.service';
import { Data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Text analyzer';
  textToAnalyze: any;
  result!: Data[];
  vov: any;
  cons: any;

  constructor(private analyzerService: AnalyzerService) { }

  submitButtonClicked() {
    if(this.vov == true){
      this.doAnalyzeVovels();
    } else if (this.cons == true){
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
