import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, empty, map, Observable } from 'rxjs';
import { getCookie } from '../util/cookie';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) { }

    get(url: string, params?: any): Observable<any> {
        return this.http
            .get<any>(this.setUrl(url), this.setOptions(params))
            .pipe(map(this.extractResponse), catchError(this.handleError));
    }

    post(url: string, body: any, params?: any): Observable<any> {
        return this.http
            .post<any>(this.setUrl(url), body, this.setOptions(params))
            .pipe(map(this.extractResponse), catchError(this.handleError));
    }

    put(url: string, params?: any): Observable<any> {
        return this.http
            .put<any>(this.setUrl(url), this.setOptions(params))
            .pipe(map(this.extractResponse), catchError(this.handleError));
    }

    delete(url: string, params?: any): Observable<any> {
        return this.http
            .delete<any>(this.setUrl(url), this.setOptions(params))
            .pipe(map(this.extractResponse), catchError(this.handleError));
    }


    /**
     * 
     * @param body : accept form-data only format
     * @returns 
     */
    upload(url: string, body: any, params?: any): Observable<any> {

        const formData = new FormData();

        if (Object.keys(body).length) {

            for (const [key, value] of Object.entries(body)) {
                formData.set(key, value as any)
            }

            const httpOptions = {
                headers: new HttpHeaders()
                    .set('Authorization', `Bearer ${getCookie('access_token')}`),
                //   .set('Content-Type', `multipart/form-data`),
                params: params
            }

            return this.http
                .post<any>(this.setUrl(url), formData, httpOptions)
                .pipe(map(this.extractResponse), catchError(this.handleError));
        }

        return new Observable();

    }


    private setUrl(url: string): string {
        return String('https://localhost:7047/api/').concat(url);
    }

    private setOptions(params: any) {
        const httpOptions = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${getCookie('access_token')}`),
            params: params,
        };
        //console.log(httpOptions);
        return httpOptions;
    }

    private extractResponse(res: any) {
        if (typeof res === 'object') return res || {};

        return res || '';
    }

    private handleError(error: HttpErrorResponse): any {
        if (error.status == 500) {
            console.error('An error occurred:', error.error);
        } else if (error.status == 401) {
            console.error('Unauthroized error:', error.error);
        } else if (error.status == 415) {
            console.error('Unsported media:', error.error);
        } else {
            console.error(error);
        }

        return error;
    }
}
