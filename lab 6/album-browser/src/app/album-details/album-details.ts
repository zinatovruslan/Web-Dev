import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AlbumService } from "../services/album.service";
import { Album } from "../models/album.model";

@Component({
  selector: "app-album-details",
  imports: [FormsModule, RouterLink],
  template: `
    @if (loading) {
      <div class="loading"><div class="spinner"></div></div>
    } @else if (album) {
      <a routerLink="/albums" class="back">Back to Albums</a>
      <div class="card">
        <div class="meta">Album #{{album.id}} - User {{album.userId}}</div>
        <h1>{{album.title}}</h1>
        <label>Edit Title</label>
        <input [(ngModel)]="editTitle" class="input" />
        <button class="save" (click)="saveAlbum()" [disabled]="saving">{{saving ? "Saving..." : "Save"}}</button>
        @if (saved) { <span class="ok">Saved!</span> }
        <br><br>
        <a [routerLink]="['/albums', album.id, 'photos']" class="photos">View Photos</a>
      </div>
    }
  `,
  styles: [`.back{color:#4299e1;text-decoration:none;display:inline-block;margin-bottom:1.5rem;} .card{background:white;border-radius:16px;padding:2rem;box-shadow:0 2px 10px rgba(0,0,0,.08);max-width:600px;} .meta{font-size:.8rem;color:#a0aec0;margin-bottom:.5rem;} h1{font-size:1.5rem;margin-bottom:1.5rem;} label{display:block;font-size:.85rem;font-weight:600;margin-bottom:.5rem;} .input{width:100%;padding:.7rem 1rem;border:2px solid #e2e8f0;border-radius:8px;font-size:.95rem;outline:none;margin-bottom:.8rem;} .save{background:#4299e1;color:white;border:none;padding:.7rem 1.5rem;border-radius:8px;cursor:pointer;font-weight:600;} .ok{margin-left:1rem;color:#38a169;} .photos{display:inline-block;background:#9f7aea;color:white;padding:.7rem 1.5rem;border-radius:8px;text-decoration:none;font-weight:600;} .loading{text-align:center;padding:3rem;} .spinner{width:40px;height:40px;border:3px solid #e2e8f0;border-top-color:#4299e1;border-radius:50%;animation:spin .8s linear infinite;margin:0 auto;} @keyframes spin{to{transform:rotate(360deg)}}`]
})
export class AlbumDetailsComponent implements OnInit {
  album: Album | null = null;
  editTitle = "";
  loading = true; saving = false; saved = false;
  constructor(private route: ActivatedRoute, private albumService: AlbumService, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.albumService.getAlbum(id).subscribe({
      next: (data: Album) => { this.album = data; this.editTitle = data.title; this.loading = false; this.cdr.detectChanges(); },
      error: () => { this.loading = false; this.cdr.detectChanges(); }
    });
  }
  saveAlbum() {
    if (!this.album) return;
    this.saving = true;
    this.albumService.updateAlbum({ ...this.album, title: this.editTitle }).subscribe(() => {
      this.album!.title = this.editTitle;
      this.saving = false; this.saved = true;
      this.cdr.detectChanges();
      setTimeout(() => { this.saved = false; this.cdr.detectChanges(); }, 2000);
    });
  }
}
