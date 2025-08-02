import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact'; 

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  formSubmitted = false;
  isLoading = false;
  isSent = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService 
  ) { }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
      // console.log('Submit button clicked!'); 

    this.formSubmitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.isSent = false;
    this.errorMessage = '';

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.isSent = true;
        this.contactForm.reset(); 
        this.formSubmitted = false;
        
        setTimeout(() => { this.isSent = false; }, 5000);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to send the message. Please try again later.';
        console.error('Error from backend:', err);
      }
    });
  }
}