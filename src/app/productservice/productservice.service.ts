import { produtos } from '../dados/produtos';
import { Injectable } from '@angular/core';
import { Products } from '../model/product.type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, concatMap, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class productService {
  private urlAPI = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(() => error.message);
    } else {
      return throwError(() => 'Ocorreu um erro!');
    }
  }

  getAll(): Observable<Products[]> {
    // return this.seriesList;
    return this.http
      .get<Products[]>(this.urlAPI)
      .pipe(catchError(this.errorHandler));
  }

  insertProduto(produtos: Products) {
    // this.seriesList.push(serie);
    return this.http.post<Products>(this.urlAPI, produtos).pipe(
      tap((produtos) => console.log(produtos)),
      concatMap((newproduto) => this.http.get<Products[]>(this.urlAPI)),
      catchError(this.errorHandler)
    );
  }

  searchProduto(searchValue: string): Observable<Products[]> {
    // return this.seriesList.filter(serie => serie.title.toUpperCase().includes(searchValue.toUpperCase()))
    return this.http
      .get<Products[]>(`${this.urlAPI}?title_like=${searchValue}`)
      .pipe(catchError(this.errorHandler));
  }

  deleteProduto(id: number): Observable<Products[]> {
    return this.http.delete(`${this.urlAPI}/${id}`).pipe(
      // esta API retorna um objecto vazio ({})
      tap((produtos) => console.log(produtos)),
      concatMap((result) => this.http.get<Products[]>(this.urlAPI)),
      catchError(this.errorHandler)
    );
  }
  deleteProduto1(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlAPI}/${id}`).pipe(
      tap(() => console.log(`Produto ${id} deletado`)),
      catchError(this.errorHandler)
    );
  }

  getProduto(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.urlAPI}/${id}`).pipe(
      tap((produtos) => console.log(produtos)),
      catchError(this.errorHandler)
    );
  }
}
