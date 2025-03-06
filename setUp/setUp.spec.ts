import {test} from "@playwright/test";
import VpnController from "../VpnController/vpnController";

test.describe('setUp', () => {
    let vpnController = new VpnController()

    test('setUp', async () => {
        const startStatus = await vpnController.vpnCheckStatus();

        if (startStatus!== 'Not connected') {
            await vpnController.vpnDisconnect();
            console.log('Disconnecting...');
        } else {
            console.log('ready to start');
        }
    })
})