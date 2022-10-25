import {ajax} from 'rxjs/ajax';
import {catchError} from 'rxjs/operators'; 


class HttpService {
    
         baseUrl = 'https://jsonplaceholder.typicode.com';
         AUTH_TOKEN = 'auth_token';
    

    get(url) {        
        return ajax({
            url : this.baseUrl + url, 
            method: 'GET',
            headers: {
                "Authorization" : this.getAuthHeader()
            }
        }).pipe(            
            catchError(error => {
              console.log('error: ', error);
              return (error);
            })
          );
    }

    getAuthHeader() {
        return {
          Authorization: `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`
        };
      }
  
}

export default HttpService  ;
