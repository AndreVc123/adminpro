import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { filter, map, retry, take} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {


  constructor() {

    

    // const obs$ = new Observable( observer => {

    //   let i = 0;

    //   const intervalo = setInterval(()=> {
    //     i++;
    //     observer.next(i);

    //     if( i === 4 ){
    //       clearInterval(intervalo)
    //       observer.complete();
    //     }

    //     if( i === 2 ){
    //       i = 0;
    //       observer.error('i llego al valor de 2')
    //     }
        

    //   }, 1000)
    // });

    // obs$.pipe(
    //   retry(2)
    // ).subscribe( valor => {
    //   console.log('subs:',valor),
    //   (error) => console.warn('Error:', error),
    //   () => console.info('Completado')
    // });

    this.retornaObs().subscribe(console.log)

  }

  ngOnInit() {
  }

  retornaObs(){

    const intervalo$ = interval(1000)
    .pipe(
      take(4),
      map( valor => {
        return valor + 1;
      }),
      filter( valor => (valor % 2 === 0) ? true:false)
    )

    return intervalo$;
  }

}
