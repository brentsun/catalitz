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

import {Account, NetworkType} from 'nem2-sdk';



// Replace with a private key
//const privateKey = process.env.PRIVATE_KEY as string;

const privateKey = '3B0AF38C564A725D0898CA52854A537F241F2D5AB835CA96C0C474DF073E1F8C';

const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

console.log('Your account address is:', account.address.pretty(), 'and its private key', account.privateKey, ' and public key ',account.publicKey);
