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

import {AccountHttp, NetworkType, PublicAccount, QueryParams} from "nem2-sdk";

const accountHttp = new AccountHttp('http://api.beta.catapult.mijin.io:3000');

const publicKey = '27B45BE247FF9A8B7D183AF216CAB1A3AF231C64EF7260F870FFE521C62C73E3';
const publicAccount =  PublicAccount.createFromPublicKey(publicKey, NetworkType.MIJIN_TEST);

const pageSize = 10; // Page size between 10 and 100, otherwise 10

accountHttp
    .transactions(publicAccount, new QueryParams(pageSize))
    .subscribe(transactions => console.log(transactions), err => console.error(err));