import {test, expect} from "@playwright/test";
import VpnController from "../VpnController/vpnController";


const expectedResult = [
    "kings_world_welcome_pack",
    "kings_world_welcome_pack_mindep20",
    "boosta",
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
    "ndb_100",
    "ndb_code",
    "ndbKing",
    "ndbKing_code",
    "WelcomeCrypto",
    "retargeting_20fs",
    "welcome_250fs_elvis",
    "kings_welcome_pack_151",
    "christmas_welcome",
    "kings_no_dep_100",
    "kings_no_dep_151",
    "kings_no_dep_151_open",
    "welcome_chicken_road",
    "push_app"
]

const parametrizedData = {
    eu: {
        location: 'Germany - Frankfurt - 1',

        proxy: {
            server: 'proxy.geonode.io:9000',
            username: 'geonode_Zr3aVjywHC-type-residential-country-de',
            password: 'bebe29a2-c13b-4aa5-8c20-eb3dd10a8afd'
        },
        links: [
              'https://www.kingbillycasino.com/land/en',
        ]
    },

    eu_master: {
       location: 'Italy - Milan',

        proxy: {
            server: 'proxy.geonode.io:9000',
            username: 'geonode_Zr3aVjywHC-type-residential-country-ie-state-munster',
            password: 'bebe29a2-c13b-4aa5-8c20-eb3dd10a8afd'
        },
        links: [
              'https://www.kingbillycasino16.com/land/en'
        ]
    },

    bet: {
        location: 'Ireland',

        proxy: {
            server: 'proxy.geonode.io:9000',
            username: 'geonode_Zr3aVjywHC-type-residential-country-ie-state-munster',
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
            server: 'proxy.geonode.io:9000',
            username: 'geonode_Zr3aVjywHC-type-residential-country-au-state-queensland',
            password: 'bebe29a2-c13b-4aa5-8c20-eb3dd10a8afd'
        },
        links: [
          'https://www.kingbillywin24.com/land/en',
        ]
    },

}

for (let type of Object.keys(parametrizedData)) {
    test.describe(`Validate 200 status of the page ${type}`, () => {
        const {proxy, links} = parametrizedData[type];

        test.use({
            proxy: {
                server: proxy.server,
                username: proxy.username,
                password: proxy.password
            },
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        });

        for (let link of links) {
            test(`Validate response status for ${link}`, async ({ page, request}) => {


                const location = async () => {
                    if (type === 'au') {
                        return (await request.get('https://www.kingbillywin24.com/api/current_ip')).json()
                    } else if (type === 'eu') {
                        return (await request.get('https://www.kingbillycasino16.com/api/current_ip')).json()
                    } else if (type === 'bet') {
                        return (await request.get('https://www.kingbillybet1.com/api/current_ip')).json()
                    }
                }
            console.log(await location())



                await page.goto(link, {timeout: 60000});
            

                if(type === 'au'){
                    await page.waitForSelector('body > div > div.wrapper.svelte-s5jonu > div.columns.svelte-s5jonu > div.pages.svelte-s5jonu > div:nth-child(5) > ul')
                }

                const namesOfLinksOnThePage = await page.evaluate(() => {
                    const elements = document.querySelectorAll(`div.landings > ul[data-sveltekit-preload-data='off']`);
                    const arrayOfElements = Array.from(elements);
                    const array: string[][] = [];

                    for (let b of arrayOfElements) {
                        let text = (b as HTMLElement).innerText;
                        array.push(text.split('\n'));
                    }

                    return array;
                });
                const flatReceived = namesOfLinksOnThePage.flat();
                try {
                    expect(flatReceived).toEqual(expectedResult)
                } catch (e) {
                    const errorMsg = `Link: ${link}\nError: ${e instanceof Error ? e.stack || e.message : e}\n\n`;
                    console.error(errorMsg);
                    throw e;
                }
            });
        }
    });
}