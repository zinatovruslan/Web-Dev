import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  imports: [],
  template: `
    <div class="about">
      <h1>About</h1>
      <div class="card">
        <h2>Album Browser</h2>
        <p>Angular app for Lab 6 - Routing and HTTP.</p>
        <p><strong>Name:</strong> Zinatov Ruslan</p>
        <p><strong>Course:</strong> Web Development</p>
        <p><strong>Lab:</strong> Lab 6 - Routing and HTTP</p>
        <p><strong>API:</strong> jsonplaceholder.typicode.com</p>
      </div>
    </div>
  `,
  styles: [`.about{max-width:600px;margin:0 auto;} h1{font-size:2rem;margin-bottom:1.5rem;} .card{background:white;border-radius:12px;padding:1.5rem;box-shadow:0 2px 10px rgba(0,0,0,.08);} p{color:#718096;margin-bottom:.5rem;}`]
})
export class AboutComponent {}
