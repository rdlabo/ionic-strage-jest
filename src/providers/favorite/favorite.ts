import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  constructor(public storage: Storage) {
    console.log('Hello FavoritesProvider Provider');

    storage.set('items', 'saved!');
  }
}