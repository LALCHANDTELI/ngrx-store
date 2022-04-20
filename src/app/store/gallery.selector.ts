import { createSelector } from '@ngrx/store';
import { GalleryModel } from '../gallery/gellary.model';
import { AppState } from './app.state';

export const galleryRootSelector = (state: AppState) => state.gallery;

export const uniqueAlbumIds = createSelector(
  galleryRootSelector,
  (gallery: GalleryModel[]) => {
    return [...new Set(gallery.map((_) => _.albumId))];
  }
);

export const galleryByAlbumId = (albumId: number) =>
  createSelector(galleryRootSelector, (gallery: GalleryModel[]) => {
    if (albumId === -1) {
      return gallery;
    } else {
      console.log('gallery filtter called');
      let data = gallery.filter((_) => _.albumId == albumId);
      console.log(data);
      return gallery.filter((_) => _.albumId == albumId);
    }
  });
