import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ListComponent } from "./components/list/list.component";

import { CourseService } from "./course.service";
import { CourseComponent } from "./components/course/course.component";

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "", redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, ListComponent, CourseComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
