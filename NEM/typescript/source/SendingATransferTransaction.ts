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

import {
    Account,
    Address,
    Deadline,
    NetworkType,
    PlainMessage,
    TransactionHttp,
    TransferTransaction,
    XEM,
} from 'nem2-sdk';

// 01 - Create Transfer Transaction
const recipientAddress = Address.createFromRawAddress('SAEG27-Y7G6NZ-4Y5V64-GZG47F-AI622F-SC4YD7-G5QH');

const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    [XEM.createRelative(10)],
    PlainMessage.create('from junxu'),
    NetworkType.MIJIN_TEST);

// 02 - Signing the transaction
//const privateKey = process.env.PRIVATE_KEY as string;
const privateKey = '3B0AF38C564A725D0898CA52854A537F241F2D5AB835CA96C0C474DF073E1F8C';

const account = Account.createFromPrivateKey(privateKey,NetworkType.MIJIN_TEST);

const signedTransaction = account.sign(transferTransaction);

// 03 - Announcing the transaction
const transactionHttp = new TransactionHttp('http://api.beta.catapult.mijin.io:3000');

transactionHttp
    .announce(signedTransaction)
    .subscribe(x => console.log(x), err => console.error(err));