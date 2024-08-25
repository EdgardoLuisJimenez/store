import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CategoryModel } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  constructor() {}

  getAll() {
    return this.http.get<CategoryModel[]>(
      `https://api.escuelajs.co/api/v1/categories`
    );
  }
}
