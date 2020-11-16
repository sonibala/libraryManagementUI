import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  libraries: Observable<Library[]>;
  constructor(private libraryService:LibraryService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.libraries = this.libraryService.getBookList();
  }

  deleteBook(id: number){
    this.libraryService.deleteBook(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }

   
    bookDetails(id: number){
      this.router.navigate(['details', id]);
    }
}
