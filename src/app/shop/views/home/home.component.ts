import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FetchStoreService} from '../../services/fetch-store.service';
// import {AppStore} from "../../store";
import {select, Store} from "@ngrx/store";
import {FetchAllProducts} from "../../store/Products/action";
import {SelectAllProducts} from "../../store/Products/selector";
import {ProductsStore} from "../../store";
import {SelectSpinner} from "../../store/Spinner/selectors";
import {Observable} from "rxjs";
import {ProductsInterface} from "../../interfaces/Products";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products?: Observable<ProductsInterface[]>;

  spinner?: Observable<boolean>;

  constructor(
    private fetchStoreService: FetchStoreService,
    private router: Router,
    private store: Store<ProductsStore>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new FetchAllProducts())
    this.spinner = this.store.pipe(select(SelectSpinner));
    this.products =  this.store.pipe(select(SelectAllProducts))


  }

}
