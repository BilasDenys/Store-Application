import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FetchStoreService } from '../../services/fetch-store.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productDetail :any;
  constructor(private route: ActivatedRoute, private fetchStoreService: FetchStoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchStoreService.fetchSingleProduct(params.productId).subscribe(response => {
        console.log(response);
        this.productDetail = response;
      })
     
    })
  }



}
