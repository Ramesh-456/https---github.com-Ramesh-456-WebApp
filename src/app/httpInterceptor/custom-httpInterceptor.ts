import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       let sessionToken = localStorage.getItem("accessToken") as string;
       let cloneHeaders;
      if(req.url.includes("login")){
        return next.handle(req);
      }
        if (req.body instanceof FormData) {
            // Set Content-Type header to multipart/form-data
            cloneHeaders = req.clone({
              setHeaders: {
                // 'Content-Type': 'multipart/form-data'
                'Authorization':sessionToken
              }
            });
          } else {
            // Set Content-Type header to application/json for other requests
            cloneHeaders = req.clone({
              setHeaders: {
                "Content-Type": "application/json",
                'Authorization':sessionToken ?? ""
              }
            });
          }
          if (req.method === 'OPTIONS') {
            cloneHeaders = cloneHeaders.clone({ withCredentials: true });
          }
        return next.handle(cloneHeaders);
    }

}