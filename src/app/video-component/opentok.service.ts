import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { EntityManager, Entity, FilterQueryOp } from 'breeze-client';
import { BizStream } from './services/dataService/bizStream';
import { BizFilter } from './services/dataService/bizFilter';
import { BizSorter, SortDirection } from './services/dataService/bizSorter';

import * as OT from '@opentok/client';
import config from '../../config';

@Injectable()
export class OpentokService {

  session: OT.Session;
  token: string;

  constructor(private dataService: DataService) { }

  getOT() {
    return OT;
  }

  initSession() {
    if (config.API_KEY && config.TOKEN && config.SESSION_ID) {
      this.session = this.getOT().initSession(config.API_KEY, config.SESSION_ID);
      this.token = config.TOKEN;
      return Promise.resolve(this.session);
    } else {

      return fetch(config.SAMPLE_SERVER_BASE_URL + '/session')
        .then((data) => data.json())
        .then((json) => {
          this.session = this.getOT().initSession(json.apiKey, json.sessionId);
          this.token = json.token;
          return this.session;
        });
    }
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.session.connect(this.token, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this.session);
        }
      });
    });
  }
}
