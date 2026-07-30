import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class profileComponent {
  username: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
      this.username = this.route.snapshot.params['username'] ;
  }
}
