import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  public title: string;
  public auxClas: string = '';
  public auxLink: string = 'active';
  public auxBody: string = '';

  constructor(titleService: Title, private _router: Router, activatedRoute: ActivatedRoute) {
    // Sets page title
    _router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var title = this.getTitle(_router.routerState, _router.routerState.root).join(' - ');
        titleService.setTitle(title);
        this.title = title;
      }
    });
  }

  // Collect that title data properties from all child routes
  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }

  shrink() {
    if (this.auxClas == "")
      this.auxClas = 'shrinked';
    else
      this.auxClas = '';
    if (this.auxLink == "")
      this.auxLink = 'active';
    else
      this.auxLink = '';
    if (this.auxBody == "")
      this.auxBody = 'active';
    else
      this.auxBody = '';
  }

  ngOnInit() {
  }

}
