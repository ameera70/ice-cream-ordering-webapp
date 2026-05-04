import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export interface IceCreamItem {
  id?: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  available?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  async getMenuItems(): Promise<IceCreamItem[]> {
    const querySnapshot = await getDocs(collection(db, 'menu'));

    const items: IceCreamItem[] = [];

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...(doc.data() as IceCreamItem)
      });
    });

    return items;
  }
}