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
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class Analytics {
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
    this.serviceName = 'Analytics';
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
      instance = new Analytics(
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
      //appendnew_flow_Analytics_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Analytics');

    //appendnew_flow_Analytics_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Analytics');

    this.app['get'](
      `${this.serviceBasePath}/analytics/total`,
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
          bh = await this.sd_wgigtSC2kL5yMjCk(bh);
          //appendnew_next_sd_pmlQjCLQZJ3RC8I6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pmlQjCLQZJ3RC8I6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/analytics/day`,
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
          bh = await this.sd_tyfpFp0dyHVBi6ls(bh);
          //appendnew_next_sd_9qZEIag4unuP0vrQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9qZEIag4unuP0vrQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/analytics/range`,
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
          bh = await this.sd_4M2GcU1jVNgLzrtd(bh);
          //appendnew_next_sd_j3o0tB7Fkn0hpZL5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_j3o0tB7Fkn0hpZL5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Analytics_HttpIn
  }
  //   service flows_Analytics

  //appendnew_flow_Analytics_start

  async sd_wgigtSC2kL5yMjCk(bh) {
    try {
      bh.local.mongoquery = {};
      bh = await this.sd_MQrRSsreSd4TMbLR(bh);
      //appendnew_next_sd_wgigtSC2kL5yMjCk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wgigtSC2kL5yMjCk');
    }
  }

  async sd_MQrRSsreSd4TMbLR(bh) {
    try {
      bh.local.DocCountResult =
        await MongoPersistance.getInstance().countDocuments(
          'sd_U4PHMi8wnz0S98uN',
          'IDs',
          bh.local.mongoquery,
          {}
        );
      bh = await this.sd_faxD0Uw4Y2qh6uEi(bh);
      //appendnew_next_sd_MQrRSsreSd4TMbLR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MQrRSsreSd4TMbLR');
    }
  }

  async sd_faxD0Uw4Y2qh6uEi(bh) {
    try {
      bh.web.res.status(200).send(bh.local.DocCountResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_faxD0Uw4Y2qh6uEi');
    }
  }

  async sd_tyfpFp0dyHVBi6ls(bh) {
    try {
      // var nowDate = new Date();
      // bh.input.todate = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate();

      console.log(bh.input.body.date);

      var start = new Date(bh.input.body.date);
      var end = new Date(bh.input.body.date);
      end.setHours(23, 59, 59, 999);

      bh.local.mongoquery = {
        created: {
          $gte: start,
          $lt: end,
        },
      };

      console.log(bh.local.mongoquery);

      bh = await this.sd_asEqqWLwhQxuNUfu(bh);
      //appendnew_next_sd_tyfpFp0dyHVBi6ls
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tyfpFp0dyHVBi6ls');
    }
  }

  async sd_asEqqWLwhQxuNUfu(bh) {
    try {
      bh.local.DocCountResult =
        await MongoPersistance.getInstance().countDocuments(
          'sd_U4PHMi8wnz0S98uN',
          'IDs',
          bh.local.mongoquery,
          {}
        );
      bh = await this.sd_NZYStZUcY2dEBUXq(bh);
      //appendnew_next_sd_asEqqWLwhQxuNUfu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_asEqqWLwhQxuNUfu');
    }
  }

  async sd_NZYStZUcY2dEBUXq(bh) {
    try {
      bh.web.res.status(200).send(bh.local.DocCountResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NZYStZUcY2dEBUXq');
    }
  }

  async sd_4M2GcU1jVNgLzrtd(bh) {
    try {
      const startISO = new Date(bh.input.body.start);
      const endISO = new Date(bh.input.body.end);
      console.log(bh.input.body.start);
      console.log(bh.input.body.end);
      console.log(startISO);
      console.log(endISO);

      bh.local.mongoquery = {
        created: { $gte: startISO, $lte: endISO },
      };
      bh = await this.sd_EBrCyWl2rETsn42z(bh);
      //appendnew_next_sd_4M2GcU1jVNgLzrtd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4M2GcU1jVNgLzrtd');
    }
  }

  async sd_EBrCyWl2rETsn42z(bh) {
    try {
      bh.local.DocCountResult =
        await MongoPersistance.getInstance().countDocuments(
          'sd_U4PHMi8wnz0S98uN',
          'IDs',
          bh.local.mongoquery,
          {}
        );
      bh = await this.sd_jNxVyObAhEPeJprT(bh);
      //appendnew_next_sd_EBrCyWl2rETsn42z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EBrCyWl2rETsn42z');
    }
  }

  async sd_jNxVyObAhEPeJprT(bh) {
    try {
      bh.web.res.status(200).send(bh.local.DocCountResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jNxVyObAhEPeJprT');
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
  //appendnew_flow_Analytics_Catch
}
