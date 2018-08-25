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

import {AccountHttp, Address, NetworkType, PublicAccount, TransactionType, TransferTransaction, XEM} from 'nem2-sdk';
import {filter, map, mergeMap, toArray} from 'rxjs/operators';

const accountHttp = new AccountHttp('http://api.beta.catapult.mijin.io:3000');

const originPublicKey = '27B45BE247FF9A8B7D183AF216CAB1A3AF231C64EF7260F870FFE521C62C73E3';
const originAccount = PublicAccount.createFromPublicKey(originPublicKey, NetworkType.MIJIN_TEST);

const recipientAddress = 'SAEG27-Y7G6NZ-4Y5V64-GZG47F-AI622F-SC4YD7-G5QH';
const address = Address.createFromRawAddress(recipientAddress);

accountHttp
    .outgoingTransactions(originAccount)
    .pipe(
        mergeMap((_) => _), // Transform transaction array to single transactions to process them
        filter((_) => _.type === TransactionType.TRANSFER), // Filter transfer transactions
        map((_) => _ as TransferTransaction), // Map transaction as transfer transaction
        filter((_) => _.recipient.equals(address)), // Filter transactions from to account
        filter((_) => _.mosaics.length === 1 && _.mosaics[0].id.equals(XEM.MOSAIC_ID)), // Filter xem transactions
        map((_) => _.mosaics[0].amount.compact() / Math.pow(10, XEM.DIVISIBILITY)), // Map only amount in xem
        toArray(), // Add all mosaics amounts into one array
        map((_) => _.reduce((a, b) => a + b, 0))
    )
    .subscribe(
        total => console.log('Total xem send to account', address.pretty(), 'is:', total),
        err => console.error(err)
    );