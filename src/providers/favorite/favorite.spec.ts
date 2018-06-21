import { FavoriteProvider } from './favorite';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule } from 'ionic-angular/umd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from '../../app/app.component';

describe('FavoritesProvider', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [FavoriteProvider],
      imports: [
        BrowserModule,
        IonicStorageModule.forRoot()
      ]
    }).compileComponents());

  describe('Injection', () => {
    let favorites: FavoriteProvider;
    beforeEach(() => favorites = TestBed.get(FavoriteProvider));

    it('items can seved', () => {
      return favorites.storage.get('items').then(result => expect(result).toEqual('saved!'));
    });
  });
});