/*
 *
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {AccountHttp, Address, MosaicHttp, MosaicService, NamespaceHttp} from 'nem2-sdk';
import {mergeMap} from 'rxjs/operators';

const url = 'http://api.beta.catapult.mijin.io:3000';
const accountHttp = new AccountHttp(url);
const mosaicHttp = new MosaicHttp(url);
const namespaceHttp = new NamespaceHttp(url);
const mosaicService = new MosaicService(accountHttp, mosaicHttp, namespaceHttp);

const address = Address.createFromRawAddress("SDZHGL-3ZZBE7-TK4ANF-HIJWOM-IPVIKM-SKE3Q2-FILY");

mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(
        mergeMap((_) => _)
    )
    .subscribe(mosaic => console.log('You have', mosaic.relativeAmount(), mosaic.fullName()),
        err => console.error(err));