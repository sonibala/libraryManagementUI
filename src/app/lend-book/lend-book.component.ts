import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.component.html',
  styleUrls: ['./lend-book.component.css']
})
export class LendBookComponent implements OnInit {

  id: number;
  library: Library;
  constructor(private libraryService: LibraryService,private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.library = new Library();
    this.id = this.route.snapshot.params['id'];
    this.libraryService.getLibrary(this.id)
      .subscribe(data => {
        console.log(data)
        this.library = data;
      }, error => console.log(error));
  }

  LendBook() {
    this.libraryService.lendBook(this.id, this.library)
      .subscribe(data => {
        console.log(data);
        this.library = new Library();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.lendBook();    
  }

  gotoList() {
    this.router.navigate(['/books']);
  }

}
