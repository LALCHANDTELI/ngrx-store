import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { retrievedGallery } from '../store/gallery.action';
import { galleryByAlbumId, uniqueAlbumIds } from '../store/gallery.selector';
import { GalleryService } from './gallery.service';
import { GalleryModel } from './gellary.model';

@Component({
  templateUrl: './gallery.component.html',
  selector: 'gallery',
})
export class GalleryComponent implements OnInit {
  albumSelectedId = -1;
  allAlbums$ = this.store.pipe(select(galleryByAlbumId(this.albumSelectedId)));
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  constructor(
    private store: Store<{ gallery: GalleryModel[] }>,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    this.galleryService.loadGallery().subscribe((data) => {
      this.store.dispatch(
        retrievedGallery({ allGallery: data as GalleryModel[] })
      );
    });
  }

  onAlbumChange(value: number) {
    console.log(value);
    this.allAlbums$ = this.store.pipe(select(galleryByAlbumId(value)));
  }
}
