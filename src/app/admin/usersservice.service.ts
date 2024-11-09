import { users } from './../dados/users';
import { Injectable } from '@angular/core';
import { Users } from './../model/users.type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, concatMap, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class usersserviceService {
  private urlAPI = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(() => error.message);
    } else {
      return throwError(() => 'Ocorreu um erro!');
    }
  }

  getAll(): Observable<Users[]> {
    // return this.seriesList;
    return this.http
      .get<Users[]>(this.urlAPI)
      .pipe(catchError(this.errorHandler));
  }

  newUsers(user: Users): Observable<Users | null> {
    return this.getAll().pipe(
      concatMap((users) => {
        const emailExists = users.some(
          (existingUser) => existingUser.email === user.email
        );
        if (emailExists) {
          return throwError(
            () => new Error('Este e-mail já está cadastrado. Use outro e-mail.')
          );
        }
        return this.http.post<Users>(this.urlAPI, user).pipe(
          tap((newUser) => console.log('Usuário cadastrado:', newUser)),
          catchError(this.errorHandler)
        );
      }),
      catchError(this.errorHandler)
    );
  }

  searchSeries(searchValue: string): Observable<Users[]> {
    // return this.seriesList.filter(serie => serie.title.toUpperCase().includes(searchValue.toUpperCase()))
    return this.http
      .get<Users[]>(`${this.urlAPI}?title_like=${searchValue}`)
      .pipe(catchError(this.errorHandler));
  }

  getSerie(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.urlAPI}/${id}`).pipe(
      tap((users) => console.log(users)),
      catchError(this.errorHandler)
    );
  }
  login(email: string, password: string): Observable<Users | null> {
    return this.http
      .get<Users[]>(`${this.urlAPI}?email=${email}&password=${password}`)
      .pipe(
        map((users: Users[]) => (users.length > 0 ? users[0] : null)),
        catchError(this.errorHandler)
      );
  }
}
