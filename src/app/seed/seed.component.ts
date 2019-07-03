import { Component, OnInit } from '@angular/core';
import { emojiRandom } from '../emoji';
import * as faker from 'faker';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.scss']
})
export class SeedComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

  

// people.forEach(function(obj) {
//     this.db.collection("people").add({
//       name: faker.name.findName(),
//       bio: faker.hacker.phrase(),
//       emoji: emojiRandom()
//     }).then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// });

}
