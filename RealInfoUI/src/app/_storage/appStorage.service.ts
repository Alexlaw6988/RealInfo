import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  private items: { [index: string]: any } = {};



  private count: number = 0;



  constructor() { }



  //This method checks, whether the storage contains the given Key. If present returns True else False

  public ContainsKey(key: string): boolean {

    return this.items.hasOwnProperty(key);

  }



  //This method return the count of key value pair that has been stored

  public Count(): number {

    return this.count;

  }



  //Adding a key value pair

  public AddItem(key: string, value: any) {

    if (!this.items.hasOwnProperty(key)) {

      this.count++;

    }

    this.items[key] = value;

  }



  // returns the value of the key and remove the key value pair based on the key

  public RemoveItem(key: string): any {

    var val = this.items[key];

    delete this.items[key];

    this.count--;

    return val;

  }





  //returns the value which is incorporated witht the key

  public GetItem(key: string): any {

    return this.items[key];

  }



  //returns the array of keys that has been stored

  public Keys(): string[] {

    var keySet: string[] = [];



    for (var prop in this.items) {

      if (this.items.hasOwnProperty(prop)) {

        keySet.push(prop);

      }

    }



    return keySet;

  }



  //returns the array of values that has been stroed

  public Values(): any[] {

    var values: any[] = [];



    for (var prop in this.items) {

      if (this.items.hasOwnProperty(prop)) {

        values.push(this.items[prop]);

      }

    }



    return values;

  }

  public ClearAll() {

    this.items ={};

  }
}

