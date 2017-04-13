import { Component, OnInit, HostListener } from '@angular/core';

import { AuthorizationService } from '../../authentication/authorization.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  /**
   * The window height.
   */
  windowHeight = 480;

  public disabled = false;
  public status: { isopen: boolean } = { isopen: false };

  /**
   * Gets the current username.
   * @readonly
   * @property {string}
   */
  public get username() {
    return this.authorizationService.authInfo && this.authorizationService.authInfo.username || '';
  }

  /**
   * Initializes a new instance of the AdminLayoutComponent class
   * @constructor
   * @param {AuthorizationService} authorizationService The application authorization service.
   */
  constructor(
    private authorizationService: AuthorizationService
  ) { }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit() {
    this.setWindowSize();
  }

  /**
   * Set the window height
   * @method
   */
  @HostListener('window:resize')
  private setWindowSize() {
    this.windowHeight = window.innerHeight;
  }

  /**
   * Gets the application min height.
   * @readonly
   * @property {string}
   */
  public get appMinHeight() {
    return this.windowHeight + 'px';
  }

  /**
   * Gets the content min height.
   * @readonly
   * @property {string}
   */
  public get contentMinHeight() {
    const margins = 55 /* header */ + 51 /* footer */;
    return (this.windowHeight - margins) + 'px';
  }

}
