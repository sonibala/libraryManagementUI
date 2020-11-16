import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id: number;
  library: Library;
  constructor(private libraryService: LibraryService,private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.library = new Library();
    this.id = this.route.snapshot.params['id'];
    this.libraryService.getBook(this.id).subscribe(
      data => {
        console.log(data);
        this.library = data;
      },error => console.log(error));
  }

  list(){
      this.router.navigate(['books']);
  }

}
