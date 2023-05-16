import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./views/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  standalone: true,
  imports: [ RouterModule,NavbarComponent,HomeComponent,FooterComponent],
  selector: "ducem-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "fe-ducem";
}
