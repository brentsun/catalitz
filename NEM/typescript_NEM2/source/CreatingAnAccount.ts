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

import {AccountHttp,
    Account, NetworkType
} from "nem2-sdk";

//const accountHttp = new AccountHttp('http://api.beta.catapult.mijin.io:3000');

const account = Account.generateNewAccount(NetworkType.MIJIN_TEST);

account.

console.log('Your new account address is:', account.address.pretty(), 'and its private key', account.privateKey,' and public key',account.publicKey);
