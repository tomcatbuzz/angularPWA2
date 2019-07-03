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

  addPeople() {
    return this.db.collection('people').add({
      name: faker.name.findName(),
      bio: faker.hacker.phrase(),
      emoji: emojiRandom()
    });
  }
}
