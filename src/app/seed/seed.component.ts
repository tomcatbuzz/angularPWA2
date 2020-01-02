import { Component } from '@angular/core';
import { emojiRandom } from '../emoji';
import * as faker from 'faker';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.scss']
})
export class SeedComponent {
  people$;
  docData;
  constructor(private db: AngularFirestore) {
    this.people$ =  this.collection$('people');
    this.docData = {
      name: faker.name.findName(),
      bio: faker.hacker.phrase(),
      emoji: emojiRandom()
    };
  }

  holdHandler(e) {
    console.log(e);
  }

  addPeople() {
    this.db.collection('people').add(this.docData)
      .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }
  // Array(20).fill(0).forEach(docData);

  // Helper to map collection doc IDs to Observable
  collection$(path, query?) {
    return this.db
      .collection(path, query)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data: any = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  // cloud function code
//   const admin = require('firebase-admin');
// admin.initializeApp();

// const faker = require('faker');

// const db = admin.firestore();

// const fakeIt = () => {
//     return db.collection('customers').add({
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         avatar: faker.internet.avatar(),
//         bio: faker.hacker.phrase(),
//         color: faker.commerce.color()
//     });
// }

// Array(20).fill(0).forEach(fakeIt);
}
