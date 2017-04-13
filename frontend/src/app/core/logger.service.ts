import { Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../environments/environment';

/**
 * Represents the Logger service
 * @class
 */
@Injectable()
export class Logger {

  /**
   * Value indicating whether environment is production.
   * @property {boolean}
   */
  isProd = false;

  /** Represents the toastr service. @private @property {ToastrService} */
  private _toastr: ToastrService;

  /** Gets the toastr service @property {ToastrService} */
  get toastr() {
    if (!this._toastr) {
      this._toastr = this.injector.get(ToastrService);
    }

    return this._toastr;
  }

  /**
   * Initializes a new instance of the Logger class.
   * @constructor
   * @param {Injector} injector The angular injector service.
   * @param {TranslateService} translateService The angular translate service.
   */
  constructor(
    private injector: Injector,
    private translateService: TranslateService,
  ) {
    this.isProd = environment.production;
  }

  /**
   * Log a message in console.
   * @param {string} message Message to log.
   * @param {any[]} optionalParams Optional logging parameters.
   */
  log(message: string, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }

  /**
   * Log a message in console as error.
   * @param {string} message Message to log.
   * @param {any[]} optionalParams Optional logging parameters.
   */
  error(message: string, ...optionalParams: any[]) {
    console.group('Application ErrorHandler');
    console.error(message, ...optionalParams);
    console.groupEnd();
  }

  /**
   * Log a message in console as error.
   * @method
   * @param {Error} error The error to manage.
   */
  displayError(error: any) {
    if (!error || !error._body) {
      return;
    }

    let errorBody: any;
    try {
      errorBody = JSON.parse(error._body);
    } catch (e) {
      return;
    }
    if (!errorBody.status || !errorBody.message) {
      return;
    }

    let message = errorBody.message;
    if (errorBody['code']) {
      message = this.translateService.instant(errorBody['code']);
    }

    this.toastr.error(message);
  }

  /**
   * Display a success message to the user.
   * @method
   * @param {string} code The message code to show.
   * @param {Object} interpolateParams The interpolate translation params.
   */
  displaySuccess(code: string, interpolateParams?: Object) {
    this.translateService.get(code, interpolateParams).subscribe(message => {
      this.toastr.success(message);
    });
  }

  /**
   * Log a message in console as warn.
   * @param {string} message Message to log.
   * @param {any[]} optionalParams Optional logging parameters.
   */
  warn(message: string, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams);
  }

  /**
   * Log a message in console as debug depending on environment.
   * @param {string} message Message to log.
   * @param {any[]} optionalParams Optional logging parameters.
   */
  debug(message: string, ...optionalParams: any[]) {
    if (this.isProd) {
      return;
    }

    console.group('Application Debug');
    this.log(message, ...optionalParams);
    console.groupEnd();
  }
}
