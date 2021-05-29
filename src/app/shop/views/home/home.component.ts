import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { FetchStoreService } from '../../services/fetch-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any = [];
  constructor(
    private fetchStoreService: FetchStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchStoreService.fetchAllProducts().subscribe((response) => {
      this.products = response;
      console.log(response);
    });
  }

  // goToSingleProduct(id: string) {
  //   this.router.navigate(['/products/', {id}]);
  // }
}
