import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';
import {Images} from '../../../model/images';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('imgShowcase', {static: true})
  imgShowcase!: ElementRef<HTMLDivElement>;
  infoProduct: Product;

  imgId = 1;
  productImgList: Images[] = [];
  productImgListDisplay: Images[] = [];
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe(data => {
      console.log(data);
      this.id = +data.get('id');
    });
  }

  ngOnInit(): void {
    this.getDetailById(this.id);
    this.slideImage();
  }

  selectImage(id: number): void {
    this.imgId = id;
    this.slideImage();
  }

  slideImage(): void {
    const displayWidth = this.imgShowcase.nativeElement.querySelector('img')?.clientWidth;
    this.imgShowcase.nativeElement.style.transform = `translateX(${-(this.imgId - 1) * 0}px)`;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.slideImage();
  }

  getDetailById(id: number) {
    this.productService.findProductById(id).subscribe(data => {
      console.log('detail', data);
      this.infoProduct = data;
      this.productService.getProductImage(id).subscribe(data => {
        console.log('list ảnh', data);
        this.productImgList = data;
        this.productImgListDisplay = data;
      });
    });
  }

  // private getAccompanyingImage(id: number) {
  //   this.productService.getProductImage(id).subscribe(data => {
  //     console.log('list ảnh', data);
  //     this.productImgList = data;
  //     this.productImgListDisplay = data;
  //   });
  // }

  preventDefault(event: Event) {
    event.preventDefault();
  }
}
