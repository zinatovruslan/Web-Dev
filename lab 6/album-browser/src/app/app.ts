import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-brand">Album Browser</div>
      <div class="nav-links">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/albums" routerLinkActive="active">Albums</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </div>
    </nav>
    <main class="container"><router-outlet /></main>
  `,
  styles: [`.navbar{display:flex;align-items:center;justify-content:space-between;padding:0 2rem;height:60px;background:linear-gradient(135deg,#1a1a2e,#16213e);color:white;position:sticky;top:0;z-index:100;} .nav-brand{font-size:1.3rem;font-weight:700;} .nav-links a{color:#a0aec0;text-decoration:none;margin-left:2rem;padding-bottom:4px;border-bottom:2px solid transparent;transition:color .2s;} .nav-links a.active,.nav-links a:hover{color:#63b3ed;border-bottom-color:#63b3ed;} .container{max-width:1200px;margin:0 auto;padding:2rem 1.5rem;}`]
})
export class AppComponent {}
