import {test, expect} from "@playwright/test";

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
        proxy: {
            host: 'proxy.geonode.io',
            port: 9000,
            username: 'geonode_Zr3aVjywHC-type-residential-country-ie-state-leinster',
            password: 'bebe29a2-c13b-4aa5-8c20-eb3dd10a8afd'
        },
        links: [
            'http://kingbillycasidno.com/',
            'https://www.kingbillycasino1.com/land/enkings_world_welcome_pack/et/kings_world_welcome_pack',
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

    au: {
        proxy: 'b',
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

    bet: {
        proxy: {
            host: 'proxy.geonode.io',
            port: 9000,
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
    }
}

for (let type of Object.keys(parametrizedData)) {
    test.describe(`Validate 200 status of the page ${type}`, () => {
        const {proxy, links} = parametrizedData[type]

        for (let link of links) {
           test(`Validate response status for ${link}`, async ({ page }) => {

               await page.goto(link)

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
               console.log(namesOfLinksOnThePage)

               console.log('----------------------------------------------------------------')

               console.log(expectedResult)
               expect(namesOfLinksOnThePage).toEqual(expectedResult)
            })
        }
    })
}