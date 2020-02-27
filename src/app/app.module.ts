import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import {DatePickerRangeComponent} from "./date-picker-range"

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MaterialModule, FormsModule],
  declarations: [AppComponent,DatePickerRangeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
