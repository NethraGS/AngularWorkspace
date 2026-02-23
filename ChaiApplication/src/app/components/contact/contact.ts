import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactMessage: string = '';
  senderEmail: string = '';
  senderName: string = '';
  senderPhone: string = '';
  messageSubmitted: boolean = false;

  sendMessage() {
    if (!this.senderName || !this.senderEmail || !this.contactMessage) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert(`Thank you ${this.senderName}! Your message has been sent. We'll get back to you at ${this.senderEmail}`);
    
    // Reset form
    this.senderName = '';
    this.senderEmail = '';
    this.senderPhone = '';
    this.contactMessage = '';
    this.messageSubmitted = true;
    
    setTimeout(() => {
      this.messageSubmitted = false;
    }, 3000);
  }
}
