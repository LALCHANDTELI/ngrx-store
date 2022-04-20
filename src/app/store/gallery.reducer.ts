import { createReducer, on } from '@ngrx/store';
import { GalleryModel } from '../gallery/gellary.model';
import { retrievedGallery } from './gallery.action';

export const initialState: GalleryModel[] = [];

const _galleryReducer = createReducer(
  initialState,
  on(retrievedGallery, (state, { allGallery }) => {
    return [...allGallery];
  })
);

export function galleryReducer(state: any, action: any) {
  return _galleryReducer(state, action);
}
