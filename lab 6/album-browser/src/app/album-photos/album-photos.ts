import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AlbumService } from "../services/album.service";
import { Photo } from "../models/album.model";

@Component({
  selector: "app-album-photos",
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/albums', albumId]" class="back">Back to Album</a>
    <h1>Album #{{albumId}} Photos</h1>
    @if (loading) {
      <div class="loading"><div class="spinner"></div></div>
    } @else {
      <p>{{photos.length}} photos</p>
      <div class="grid">
        @for (photo of photos; track photo.id) {
          <div class="photo">
            <img [src]="photo.thumbnailUrl" [alt]="photo.title" loading="lazy" />
            <div class="title">{{photo.title}}</div>
          </div>
        }
      </div>
    }
  `,
  styles: [`.back{color:#4299e1;text-decoration:none;display:inline-block;margin-bottom:.8rem;} h1{font-size:1.8rem;margin-bottom:.3rem;} .loading{text-align:center;padding:3rem;} .spinner{width:40px;height:40px;border:3px solid #e2e8f0;border-top-color:#9f7aea;border-radius:50%;animation:spin .8s linear infinite;margin:0 auto;} @keyframes spin{to{transform:rotate(360deg)}} .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:1rem;} .photo{background:white;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);} .photo img{width:100%;height:150px;object-fit:cover;display:block;} .title{padding:.5rem;font-size:.72rem;color:#718096;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}`]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true; albumId = 0;
  constructor(private route: ActivatedRoute, private albumService: AlbumService, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get("id"));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data: Photo[]) => { this.photos = data; this.loading = false; this.cdr.detectChanges(); },
      error: () => { this.loading = false; this.cdr.detectChanges(); }
    });
  }
}
