import { createAction, props } from '@ngrx/store';
import { GalleryModel } from '../gallery/gellary.model';

export const retrievedGallery = createAction(
  '[Galley API] API Success',
  props<{ allGallery: GalleryModel[] }>()
);
