import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  library: Library = new Library();
  sumbitted = false;
  constructor(private libraryService: LibraryService,private router:Router) { }

  ngOnInit(): void {
  }

  newBook(): void {
    this.sumbitted = false;
    this.library = new Library();
  }

  save(){
    this.libraryService.createBook(this.library).subscribe(
      data => {
        console.log(data);
        this.library = new Library();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit(){
    this.sumbitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/books']);
  }

}
