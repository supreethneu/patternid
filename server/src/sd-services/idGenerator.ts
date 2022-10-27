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
import { NIL, parse, stringify, v1, v3, v4, v5, validate, version } from 'uuid'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
import { dateUtils } from '../utils/neutrinos-date/6bf7e803-907f-9550-90ed-3620ebd2b04e/dateUtils'; //_splitter_
//append_imports_end
export class idGenerator {
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
    this.serviceName = 'idGenerator';
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
      instance = new idGenerator(
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
      //appendnew_flow_idGenerator_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idGenerator');

    //appendnew_flow_idGenerator_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idGenerator');

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
    //appendnew_flow_idGenerator_HttpIn
  }
  //   service flows_idGenerator

  //appendnew_flow_idGenerator_start

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
      // if(bh.input.body['pattern']=""){
      //     generateString(20);
      // }
      // else{
      bh.splitarr = bh.input.body['pattern'].split(/({.*?})/g);

      for (let i = 0; i < bh.splitarr.length; i++) {
        if (bh.splitarr[i].includes('alphanumeric')) {
          var len = bh.splitarr[i].split(':')[1];
          bh.splitarr[i] = generateString(parseInt(len));
        } else if (bh.splitarr[i].includes('timestamp')) {
          bh.input.InputDateformat = bh.splitarr[i]
            .split(':')[1]
            .replace('}', '');
        } else if (bh.splitarr[i].includes('uuid')) {
          bh.input.generateuuid = bh.splitarr[i];
        }
      }
      // }
      bh.test = new Date();

      bh = await this.sd_O82qTh7HJ7JGwr3E(bh);
      //appendnew_next_sd_YvyDotsrSCXqTGjb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YvyDotsrSCXqTGjb');
    }
  }

  async sd_O82qTh7HJ7JGwr3E(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nnull'](
          bh.input.generateuuid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_o8BhQTnHFc10wVoH(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Cq6Rc2526nin3lV5(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O82qTh7HJ7JGwr3E');
    }
  }

  async sd_o8BhQTnHFc10wVoH(bh) {
    try {
      let op = 'V4';
      let _offset = null;
      if (!(bh == bh || bh == bh.input || bh == bh.local)) {
        _offset = bh;
      }
      let _options = null;
      if (!(bh == bh || bh == bh.input || bh == bh.local)) {
        _options = bh;
      }
      let _buffer = null;
      if (!(bh == bh || bh == bh.input || bh == bh.local)) {
        _buffer = bh;
      }
      if (op == 'Nil') {
        bh.input.uuidresult = NIL;
      } else if (op == 'Parse') {
        bh.input.uuidresult = parse(bh);
      } else if (op == 'Stringify') {
        bh.input.uuidresult = stringify(bh, _offset);
      } else if (op == 'V1') {
        bh.input.uuidresult = v1(_options, _buffer, _offset);
      } else if (op == 'V3') {
        bh.input.uuidresult = v3(bh, bh, _buffer, _offset);
      } else if (op == 'V4') {
        bh.input.uuidresult = v4(_options, _buffer, _offset);
      } else if (op == 'V5') {
        bh.input.uuidresult = v5(bh, bh, _buffer, _offset);
      } else if (op == 'Validate') {
        bh.input.uuidresult = validate(bh);
      } else if (op == 'Version') {
        bh.input.uuidresult = {
          version: version(bh),
        };
      }

      bh = await this.sd_9cUxCNdSZOPZg3Z9(bh);
      //appendnew_next_sd_o8BhQTnHFc10wVoH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o8BhQTnHFc10wVoH');
    }
  }

  async sd_9cUxCNdSZOPZg3Z9(bh) {
    try {
      console.log(bh.test);
      console.log(bh.res);

      bh = await this.sd_Ewt0ZGCx855UUPOr(bh);
      //appendnew_next_sd_9cUxCNdSZOPZg3Z9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9cUxCNdSZOPZg3Z9');
    }
  }

  async sd_Ewt0ZGCx855UUPOr(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          bh.res,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Cq6Rc2526nin3lV5(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_nRpBzUfovwqQ5a2e(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ewt0ZGCx855UUPOr');
    }
  }

  async sd_nRpBzUfovwqQ5a2e(bh) {
    try {
      for (let i = 0; i < bh.splitarr.length; i++) {
        if (bh.splitarr[i].includes('timestamp')) {
          bh.splitarr[i] = bh.input.OutputDateformat;
        } else if (bh.splitarr[i].includes('uuid')) {
          bh.splitarr[i] = bh.input.uuidresult;
        }
      }

      bh.input.patternid = bh.splitarr.join('');
      bh = await this.sd_yKOohlXQFPFDnjte(bh);
      //appendnew_next_sd_nRpBzUfovwqQ5a2e
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nRpBzUfovwqQ5a2e');
    }
  }

  async sd_yKOohlXQFPFDnjte(bh) {
    try {
      bh.input.data = {};

      bh.input.data.generated_id = bh.input.patternid;

      // var nowDate=new Date();
      // bh.input.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
      // bh.input.data.date_added=bh.input.date;

      bh.input.data.created = new Date();

      // bh.input.data.generated_id="18102022-ABC-ND4os5gPGm";
      bh = await this.addtoMongo(bh);
      //appendnew_next_sd_yKOohlXQFPFDnjte
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yKOohlXQFPFDnjte');
    }
  }

  async addtoMongo(bh) {
    try {
      bh.insertresult = await MongoPersistance.getInstance().insertOne(
        'sd_U4PHMi8wnz0S98uN',
        'IDs',
        bh.input.data,
        bh.input.opts
      );
      bh = await this.sd_9lsxrUWc184YxMcr(bh);
      //appendnew_next_addtoMongo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yo1vwDqD7b1DJuvW');
    }
  }

  async sd_9lsxrUWc184YxMcr(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.insertresult.result.ok,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_YvyDotsrSCXqTGjb(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.insertresult.result.ok,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_J2aPCtkOXWkpdLQ9(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9lsxrUWc184YxMcr');
    }
  }

  async sd_J2aPCtkOXWkpdLQ9(bh) {
    try {
      console.log('success');
      bh = await this.sd_klUXaWRvo8ImahqW(bh);
      //appendnew_next_sd_J2aPCtkOXWkpdLQ9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J2aPCtkOXWkpdLQ9');
    }
  }

  async sd_klUXaWRvo8ImahqW(bh) {
    try {
      bh.web.res.status(200).send(bh.input.patternid);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_klUXaWRvo8ImahqW');
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
      bh.input.OutputDateformat = await dateUtil.formatAction(
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
  //appendnew_flow_idGenerator_Catch
}
