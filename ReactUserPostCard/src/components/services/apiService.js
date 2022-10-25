import HttpService from './httpService';
import {map} from 'rxjs/operators';


class ApiService {
    
    getAllPost() {
        return new HttpService().get('/users').pipe(
          map(userResponse => userResponse.response))
      }    
  
}

export default ApiService  ;
