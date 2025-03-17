import {test, expect} from "@playwright/test";
import VpnController from "../VpnController/vpnController";


const expectedResult = [
    "kings_world_welcome_pack",
    "kings_world_welcome_pack_mindep20",
    "boosta",
    "casinosanalyzer_50",
    "casinosanalyzer_50",
    "casinosanalyzer_10",
    "casinosanalyzer_20",
    "casinosanalyzer_100",
    "casinosanalyzer_150",
    "casinosanalyzer_200",
    "kings_welcome_pack",
    "kings_welcome_pack_mindep20",
    "kings_welcome_pack_mindep30",
    "kings_welcome_pack_bonus_code",
    "aviator_welcome_pack",
    "aviator_welcome_pack_mindep20",
    "wolfy_welcome_pack",
    "wolfy_welcome_pack_mindep30",
    "wheel_of_fortune",
    "kings_land",
    "kings_no_dep",
    "kings_one_dollar_dep",
    "plinko_welcome_pack",
    "askgamblers_50_free_spins",
    "kings_gun",
    "book_of_king_billy",
    "las_vegas_lights",
    "casinoguru",
    "kraken",
    "kraken_guru",
    "ndb",
    "ndb_code",
    "ndbKing",
    "ndbKing_code",
    "christmas_welcome",
    "JS Welcome",
    "push_app"
]

const parametrizedData = {
    eu: {
        location: 'Italy - Milan',

        proxy: {
            server: 'proxy.geonode.io:9000',
            username: 'geonode_Zr3aVjywHC-type-residential-country-ie-state-leinster',
            password: 'bebe29a2-c13b-4aa5-8c20-eb3dd10a8afd'
        },
        links: [
            // 'https://www.kingbillycasino1.com/land/enkings_world_welcome_pack/et/kings_world_welcome_pack',
              'https://www.kingbillycasino1.com/land/en',
              'https://www.kingbillycasino.com/land/en',
              'https://www.kingbillycasino2.com/land/en',
              'https://www.kingbillycasino3.com/land/en',
              'https://www.kingbillycasino4.com/land/en',
              'https://www.kingbillycasino5.com/land/en',
              'https://www.kingbillycasino6.com/land/en',
              'https://www.kingbillycasino7.com/land/en',
              'https://www.kingbillycasino8.com/land/en',
              'https://www.kingbillycasino9.com/land/en',
              'https://www.kingbillycasino10.com/land/en',
              'https://www.kingbillycasino11.com/land/en',
              'https://www.kingbillycasino12.com/land/en',
              'https://www.kingbillycasino13.com/land/en',
              'https://www.kingbillycasino14.com/land/en',
              'https://www.kingbillycasino15.com/land/en',
              'https://www.kingbillycasino16.com/land/en',
              'https://www.kingbillycasino17.com/land/en',
              'https://www.kingbillycasino20.com/land/en',
              'https://www.kingbillycasino21.com/land/en',
              'https://www.kingbillycasino22.com/land/en'
        ]
    },

    bet: {
        location: 'Germany - Frankfurt - 1',

        proxy: {
            server: 'proxy.geonode.io:9000',
            username: 'geonode_Zr3aVjywHC-type-residential-country-ie-state-leinster',
            password: 'bebe29a2-c13b-4aa5-8c20-eb3dd10a8afd'
        },
        links: [
              'https://www.kingbillybet1.com/land/en',
              'https://www.kingbillybet2.com/land/en',
              'https://www.kingbillybet3.com/land/en',
              'https://www.kingbillybet4.com/land/en',
              'https://www.kingbillybet5.com/land/en'
        ]
    },


    au: {
        location: 'Australia - Melbourne',

       proxy: {
            server: 'us.proxy.geonode.io:9000',
            username: 'geonode_Zr3aVjywHC-type-residential-country-au-city-adelaide',
            password: 'bebe29a2-c13b-4aa5-8c20-eb3dd10a8afd'
        },
        links: [
          'https://www.kingbillywin1.com/land/en',
          'https://www.kingbillywin2.com/land/en',
          'https://www.kingbillywin3.com/land/en',
          'https://www.kingbillywin4.com/land/en',
          'https://www.kingbillywin5.com/land/en',
          'https://www.kingbillywin6.com/land/en',
          'https://www.kingbillywin7.com/land/en',
          'https://www.kingbillywin8.com/land/en',
          'https://www.kingbillywin9.com/land/en',
          'https://www.kingbillywin10.com/land/en',
          'https://www.kingbillywin11.com/land/en',
          'https://www.kingbillywin12.com/land/en',
          'https://www.kingbillywin13.com/land/en',
          'https://www.kingbillywin14.com/land/en',
          'https://www.kingbillywin15.com/land/en',
          'https://www.kingbillywin16.com/land/en',
          'https://www.kingbillywin17.com/land/en',
          'https://www.kingbillywin18.com/land/en',
          'https://www.kingbillywin19.com/land/en',
          'https://www.kingbillywin20.com/land/en',
          'https://www.kingbillywin21.com/land/en',
          'https://www.kingbillywin22.com/land/en',
          'https://www.kingbillywin23.com/land/en',
          'https://www.kingbillywin24.com/land/en',
          'https://www.kingbillywin25.com/land/en'
        ]
    },

}

for (let type of Object.keys(parametrizedData)) {
    test.describe(`Validate 200 status of the page ${type}`, () => {
        let vpnController = new VpnController()
        const {location, proxy, links} = parametrizedData[type]
        let status;
        const timeout = 30000;
        const interval = 1000;
        const startTime = Date.now();


        test.beforeEach(async () => {
            // const currentStatus = await vpnController.vpnCheckStatus();
            // if (currentStatus === `Connected to ${location}`) {
            //     console.log('Correct location, proceeding to the test');
            // } else if (currentStatus === `Not connected`) {
            //     console.log('Connecting...');
            //     await vpnController.vpnConnnect(location);
            // } else {
            //     console.log('Changing location...')
            //     await vpnController.vpnDisconnect();
            //     await vpnController.sleepVPN(5000)
            //     await vpnController.vpnConnnect(location);
            // }
            //
            // do {
            //     status = await vpnController.vpnCheckStatus();
            //     console.log(`Current status: ${status}`);
            //     if (status === `Connected to ${location}`) {
            //         console.log(`Successfully connected to ${location}`);
            //         break;
            //     }
            //     await new Promise(resolve => setTimeout(resolve, interval));
            // } while (Date.now() - startTime < timeout);
        });

        test.use(
            {
                proxy: {
                    server: proxy.server,
                    username: proxy.username,
                    password: proxy.password
                },

                userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        )

        for (let link of links) {
           test(`Validate response status for ${link}`, async ({ page }) => {


               await page.goto(link)

               if(type === 'au'){
                   await page.waitForTimeout(15000)
                   await page.waitForSelector('div.landings > ul[data-sveltekit-preload-data=\'off\'] > .svelte-ou2wjv:nth-of-type(1)')
               }

               const namesOfLinksOnThePage = await page.evaluate(() => {
                    const elements = document.querySelectorAll(`div.landings > ul[data-sveltekit-preload-data='off'] > .svelte-ou2wjv`)
                    const arrayOfElements = Array.from(elements)
                    const array = []

                    for (let b of arrayOfElements) {
                        let text = (b as HTMLElement).innerText

                        array.push(text)
                    }

                    return array
               })
            //    console.log(namesOfLinksOnThePage)

            //    console.log('----------------------------------------------------------------')

            //    console.log(expectedResult)
               expect(namesOfLinksOnThePage).toEqual(expectedResult)
            })
        }
    })
}