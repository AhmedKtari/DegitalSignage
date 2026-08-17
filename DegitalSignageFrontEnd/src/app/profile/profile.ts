import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class profileComponent {
  username: string = '';
  constructor(private route: ActivatedRoute,
        private router: Router
  ) {}
  ngOnInit() {
      this.username = this.route.snapshot.params['username'] ;
  }
  goToPage(page: string) {
    
    this.router.navigate(['/profile/' + this.username + '/' + page]);
  }

}
