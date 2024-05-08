import { Component } from '@angular/core';

@Component({
  selector: 'app-promise-demo1',
  templateUrl: './promise-demo1.component.html',
  styles: [
  ]
})
export class PromiseDemo1Component {
  demo1(b: boolean) {
    console.log(b);
    console.log("start:", Date.now());
    const p = new Promise<string>((resolve, reject) => {
      console.log("in promise:", Date.now());
      setTimeout(() => {
        console.log("time out:", Date.now());
        if (b)
          resolve("ok");
        else
          reject(new Error("Error"));
      }, 2000);

    });
    console.log("end:", Date.now());
    p.then(result => console.log("then:", result))
      .catch(err => console.log("error:", err.message))
      .finally(() => console.log("finally"));

  }

}
