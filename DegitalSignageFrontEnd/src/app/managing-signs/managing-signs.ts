import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Authservice } from '../Services/authservice';

@Component({
  selector: 'app-managing-signs',
  imports: [RouterLink],
  templateUrl: './managing-signs.html',
  styleUrl: './managing-signs.css',
})
export class ManagingSignsComponent {
  username: string = '';
  ShowCreateSignageContent: boolean = false;
  ShowBrowseSignageContent: boolean = false;
  ShowMedia: boolean = false;
  constructor(private route: ActivatedRoute,
        private router: Router,
        private authService: Authservice
  ) {}
  ngOnInit() {
      this.username = this.route.snapshot.params['username'] ;
      

  }
 async uploadMedia() {
  alert("Upload Media button clicked");
  const fileInput = document.getElementById('signageImage') as HTMLInputElement;
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    return;
  }
  alert("File selected: " + fileInput.files[0].name);

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);
  formData.append('emailRequest', this.authService.getAuthenticatedEmail() || '');

  const response = await fetch('http://localhost:8080/api/media/MediaUpload', {
    method: 'POST',
    body: formData
  });
  alert("Response status: " + response.status);
  if (!response.ok) {
    alert("Failed to upload media");
    return;
  }

  const result = await response.json();
  alert("reponse arrived");
  alert(result.message);
  alert(result.url);
  // You can now use the result.url to display the uploaded media or perform other actions
}
}
