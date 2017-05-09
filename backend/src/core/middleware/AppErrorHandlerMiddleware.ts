import { Request, Response, NextFunction } from 'express';
import { ExpressErrorMiddlewareInterface, Middleware, HttpError } from 'routing-controllers';

import { ApiErrorBase } from '../../errors';

/**
 * Represents the global app error handler middleware.
 * @class
 */
@Middleware({ type: 'after' })
export class AppErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {

  /**
   * Called when an error occurred.
   * @method
   * @param {Error} error The current error occured.
   * @param {Request} request The current request.
   * @param  {Response} response The current response.
   * @param {NextFunction} next The next middleware function.
   */
  error(error: Error, request: Request, response: Response, next: NextFunction) {
    if (!(error instanceof HttpError)) {
      next();
      return;
    }

    response.status(error.httpCode).json({
      status: error.httpCode,
      name: error.name,
      message: error.message,
      details: error['details']
    });
  }

}