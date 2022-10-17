let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { dateUtils } from '../utils/neutrinos-date/6bf7e803-907f-9550-90ed-3620ebd2b04e/dateUtils'; //_splitter_
//append_imports_end
export class IDserv {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'IDserv';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new IDserv(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_IDserv_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: IDserv');

    //appendnew_flow_IDserv_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: IDserv');

    this.app['post'](
      `${this.serviceBasePath}/id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_YvyDotsrSCXqTGjb(bh);
          //appendnew_next_sd_Hj2XvgfQsiOMPFUO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Hj2XvgfQsiOMPFUO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_IDserv_HttpIn
  }
  //   service flows_IDserv

  //appendnew_flow_IDserv_start

  async sd_YvyDotsrSCXqTGjb(bh) {
    try {
      // console.log(bh.input.body['pattern'])
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }

      bh.splitarr = bh.input.body['pattern'].split(/({.*?})/g);

      for (let i = 0; i < bh.splitarr.length; i++) {
        if (bh.splitarr[i].includes('alphanumeric')) {
          var len = bh.splitarr[i].split(':')[1];
          bh.splitarr[i] = generateString(parseInt(len));
        } else if (bh.splitarr[i].includes('timestamp')) {
          bh.input.InputDateformat = bh.splitarr[i]
            .split(':')[1]
            .replace('}', '');
        } else {
          console.log('.');
        }
      }

      bh.test = new Date();

      bh = await this.sd_Cq6Rc2526nin3lV5(bh);
      //appendnew_next_sd_YvyDotsrSCXqTGjb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YvyDotsrSCXqTGjb');
    }
  }

  async sd_Cq6Rc2526nin3lV5(bh) {
    try {
      let dateUtil = new dateUtils();
      bh.res = await dateUtil.parseAction(
        'ParseDate',
        bh,
        bh,
        bh,
        bh,
        bh.test,
        bh,
        null
      );

      bh = await this.sd_iRNGn0aSLEIaG9mn(bh);
      //appendnew_next_sd_Cq6Rc2526nin3lV5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Cq6Rc2526nin3lV5');
    }
  }

  async sd_iRNGn0aSLEIaG9mn(bh) {
    try {
      let dateUtil = new dateUtils();
      bh.input.InputDateformat = await dateUtil.formatAction(
        'format',
        'years',
        bh.input.InputDateformat,
        bh,
        bh,
        bh.res
      );

      bh = await this.sd_nRpBzUfovwqQ5a2e(bh);
      //appendnew_next_sd_iRNGn0aSLEIaG9mn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iRNGn0aSLEIaG9mn');
    }
  }

  async sd_nRpBzUfovwqQ5a2e(bh) {
    try {
      for (let i = 0; i < bh.splitarr.length; i++) {
        if (bh.splitarr[i].includes('timestamp')) {
          bh.splitarr[i] = bh.input.InputDateformat;
        }
      }

      bh.input.patternid = bh.splitarr.join('');
      bh = await this.sd_2mFYr8GgQ6hqISDS(bh);
      //appendnew_next_sd_nRpBzUfovwqQ5a2e
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nRpBzUfovwqQ5a2e');
    }
  }

  async sd_2mFYr8GgQ6hqISDS(bh) {
    try {
      bh.web.res.status(200).send(bh.input.patternid);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2mFYr8GgQ6hqISDS');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_IDserv_Catch
}
