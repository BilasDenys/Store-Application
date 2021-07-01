import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FetchAllProductsFail, FetchAllProductsSuccess, ProductsActionTypes} from "./action";
import {catchError, delay, map, switchMap, tap} from "rxjs/operators";
import {FetchStoreService} from "../../services/fetch-store.service";
import {of} from "rxjs";
import {ProductsInterface} from "../../interfaces/Products";
import {ProductsStore} from "../index";
import {Store} from "@ngrx/store";
import {FinishSpinner, StartSpinner} from "../Spinner/actions";

@Injectable()

export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private fetchStore: FetchStoreService,
    private store: Store<ProductsStore>
  ) {
  }

  fetchAllProducts = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActionTypes.FETCH_ALL_PRODUCTS),
      switchMap(() => {
        return this.fetchStore.fetchAllProducts().pipe(
          tap(() => this.store.dispatch(new StartSpinner())),
          delay(500),
          map((response: ProductsInterface[]) => {
            this.store.dispatch(new FinishSpinner())
            return new FetchAllProductsSuccess(response)
          }),
          catchError((error: string) => {
            this.store.dispatch(new FinishSpinner())
            return of(new FetchAllProductsFail(error))
          }),
        );
      })
    );
  })
}
