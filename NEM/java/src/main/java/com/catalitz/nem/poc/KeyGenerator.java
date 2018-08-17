package com.catalitz.nem.poc;

import org.nem.core.crypto.KeyPair;
import org.nem.core.model.Address;
import org.nem.core.model.NetworkInfos;

public class KeyGenerator {
    public static void main(String[] args) {
        while (true) {
            final KeyPair someKey = new KeyPair();
            final Address anAddress = Address.fromPublicKey(
                    NetworkInfos.getTestNetworkInfo().getVersion(),
                    someKey.getPublicKey());

            if (anAddress.getEncoded().contains("TEST")) {
                printKey(someKey, anAddress);
                break;
            }
        }
    }

    private static void printKey(KeyPair someKey, Address anAddress) {
        System.out.println(String.format("Private key: %s", someKey.getPrivateKey()));
        System.out.println(String.format(" Public key: %s", someKey.getPublicKey()));
        System.out.println(String.format("    Address: %s", anAddress));
    }
}
