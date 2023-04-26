import { Component, OnInit } from '@angular/core';
import {ProductDto} from '../../../dto/product-dto';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  teamPage: any = null;
  selectedFile: any = null;
  files: File[] = [];
  filenames: string[] = [];
  fileStatus = {status: '', requestType: '', percent: 0};
  selectFile: any | undefined;
  fileName: string = '';
  productDtoList: ProductDto [] = [];
  totalPage: number = 0;
  size: number = 0;
  search: string = '';
  p: number = 0;

  formGroup: FormGroup;
  pages: number[] = [];
  role: string = '';


  errCreateDocument: any = {
    documentName: '',
    documentDescribe: ''
  };


  constructor(private productService : ProductService) {
    this.formGroup = new FormGroup({
      search: new FormControl('')
    });
  }


// Hàm để tạo danh sách các trang
  private createPageList() {
    this.pages = [];
    if (this.totalPage > 0 && this.productDtoList.length > 0) { // chỉ hiển thị phân trang nếu có nhiều hơn 1 trang và có kết quả tìm kiếm
      const start = Math.max(this.p - 2, 0);
      const end = Math.min(start + 4, this.totalPage - 1);
      for (let i = start; i <= end; i++) {
        this.pages.push(i);
      }
    } else {
      this.pages.push(0); // nếu không hiển thị phân trang thì chỉ có nút button ở trang 1
    }
  }

  // Hàm để lấy dữ liệu khi chuyển sang trang mới

  private goToPageInternal(page: number) {
    this.p = page;
    this.getAll(this.p);
    this.createPageList();
  }


  ngOnInit(): void {
    this.getAll(this.p);
    this.createPageList();
  }


  getAll(page: number) {
    this.productService.getAllProductDto(this.search.trim(), page).subscribe(data => {
      this.teamPage = data;
      // @ts-ignore
      this.productDtoList = data['content'];
      // @ts-ignore
      this.totalPage = data['totalPages'];
      // @ts-ignore
      this.p = data['number'];
      // @ts-ignore
      this.size = data['size'];
      console.log(this.productDtoList);
    });

    this.createPageList();
  }

  previousPage() {
    if (this.p > 0) {
      this.goToPageInternal(this.p - 1);
    }
  }

  nextPage() {
    if (this.p < this.totalPage - 1) {
      this.goToPageInternal(this.p + 1);
    }
  }

  previousPageTen() {
    if (this.p > 10) {
      this.goToPageInternal(this.p - 10);
    }
  }

  nextPageTen() {
    if (this.p < this.totalPage - 9) {
      this.goToPageInternal(this.p + 10);
    }
  }

  searchNameDocument() {
    // this.p = 0;
    // this.ngOnInit();
    this.productDtoList = [];
    this.productService.getAllProductDto(this.formGroup.value.search.trim(), 0).subscribe(data => {
      // @ts-ignore
      this.productDtoList = data['content'];
      // @ts-ignore
      this.totalPage = data['totalPages'];
      // @ts-ignore
      this.p = data['number'];
      // @ts-ignore
      this.size = data['size'];
      console.log(data);
    });

    this.createPageList();
    console.log('abc' + this.formGroup.value.search);
  }


  goToPage(page: number) {
    this.p = page;
    this.goToPageInternal(page);
    // Do something to load data for the new page
  }

  // deleteArea(id: any) {
  //   if(id != null){
  //     this.areaDtoService.deleteArea(id).subscribe(data => {
  //       alert("Xóa thành công");
  //       this.getAll(this.p);
  //     })
  //   } else {
  //     alert("Xóa không thành công");
  //   }
  // }

}
