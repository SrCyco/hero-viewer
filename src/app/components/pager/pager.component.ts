import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() data: Array<object> = [];
  @Input() initialPage: number;
  @Input() itemsPerPage: number;
  pages: Array<object> = [];
  totalPages: number;
  totalItems: number;
  current: number;

  @Output() newItems = new EventEmitter<any>();
  @Output() currentPage = new EventEmitter<number> ();

  constructor() { }

  ngOnInit() {
    if (this.data && this.data.length) {
      this.createPager();
    }
  }

  private createPager() {
    this.totalItems = this.data.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.current = this.initialPage;
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push({
        index: i,
        limit: (i - 1) * this.itemsPerPage
      });
    }
    this.returnItems(this.initialPage);

  }

  private setPage(page: number) {
    this.current = page;
    this.returnItems(page);
  }

  private returnItems(page: number) {
    const limitPage: number = this.pages[page - 1]['limit'];
    if (page > 0) {
      const itemsPage: Array<object> = this.data.slice(limitPage, limitPage + this.itemsPerPage);
      this.newItems.emit(itemsPage);
      this.currentPage.emit(page);
    }
  }

  private nextPage() {
    this.returnItems(this.current = this.current + 1);
  }

  private prevPage() {
    this.returnItems(this.current = this.current - 1);
  }

}
