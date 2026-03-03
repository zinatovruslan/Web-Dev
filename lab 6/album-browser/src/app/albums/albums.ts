import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { AlbumService } from "../services/album.service";
import { Album } from "../models/album.model";

@Component({
  selector: "app-albums",
  imports: [],
  template: `
    <h1>All Albums</h1>
    @if (loading) {
      <div class="loading"><div class="spinner"></div><p>Loading...</p></div>
    } @else {
      <p>{{albums.length}} albums</p>
      <div class="grid">
        @for (album of albums; track album.id) {
          <div class="card" (click)="goToAlbum(album.id)">
            <div class="id">#{{album.id}}</div>
            <div class="title">{{album.title}}</div>
            <button class="del" (click)="deleteAlbum($event, album.id)">Delete</button>
          </div>
        }
      </div>
    }
  `,
  styles: [`h1{font-size:2rem;margin-bottom:.5rem;} .loading{text-align:center;padding:3rem;} .spinner{width:40px;height:40px;border:3px solid #e2e8f0;border-top-color:#4299e1;border-radius:50%;animation:spin .8s linear infinite;margin:0 auto 1rem;} @keyframes spin{to{transform:rotate(360deg)}} .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;} .card{background:white;border-radius:12px;padding:1.2rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.08);transition:transform .2s;display:flex;flex-direction:column;gap:.5rem;} .card:hover{transform:translateY(-3px);} .id{font-size:.75rem;color:#a0aec0;} .title{font-size:.9rem;color:#2d3748;flex:1;} .del{align-self:flex-start;background:none;border:1px solid #fed7d7;color:#e53e3e;padding:.3rem .7rem;border-radius:6px;cursor:pointer;font-size:.8rem;margin-top:.5rem;}`]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  constructor(private albumService: AlbumService, private router: Router, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data: Album[]) => { this.albums = data; this.loading = false; this.cdr.detectChanges(); },
      error: () => { this.loading = false; this.cdr.detectChanges(); }
    });
  }
  goToAlbum(id: number) { this.router.navigate(["/albums", id]); }
  deleteAlbum(event: Event, id: number) {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((a: Album) => a.id !== id);
      this.cdr.detectChanges();
    });
  }
}
