import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  imports: [RouterLink],
  template: `
    <div class="hero">
      <h1>Welcome to Album Browser</h1>
      <p>Explore 100 albums with photos.</p>
      <a routerLink="/albums" class="btn">Browse Albums</a>
      <div class="stats">
        <div class="stat"><span>100</span>Albums</div>
        <div class="stat"><span>5000</span>Photos</div>
      </div>
    </div>
  `,
  styles: [`.hero{text-align:center;padding:5rem 2rem;} h1{font-size:2.5rem;margin-bottom:1rem;} p{color:#718096;margin-bottom:2rem;} .btn{display:inline-block;background:#4299e1;color:white;padding:.8rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;transition:transform .2s;} .btn:hover{transform:translateY(-2px);} .stats{display:flex;justify-content:center;gap:3rem;margin-top:4rem;} .stat{color:#718096;} .stat span{display:block;font-size:2rem;font-weight:700;color:#4299e1;}`]
})
export class HomeComponent {}
