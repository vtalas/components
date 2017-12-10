import * as contentful from 'contentful'

const SPACE_ID = 'nomds5rqpcu2';
const ACCESS_TOKEN = '2976eb731b6aedfb9af2645c060dc7a1ba536f119147154ec5d9f973557a3347';

export const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

/*
const s = [{
    "sys": {
        "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
        "id": "2AOl9LW9ggAoamoSwgiC8k",
        "type": "Entry",
        "createdAt": "2017-02-19T20:35:28.959Z",
        "updatedAt": "2017-06-15T06:15:30.045Z",
        "revision": 4,
        "contentType": { "sys": { "type": "Link", "linkType": "ContentType", "id": "reference" } },
        "locale": "cs-CZ"
    },
    "fields": {
        "nadpis": "Uprava podkrovi ",
        "popis": "Dodávka a montáž zámečnických interiérových prvků: lanková zástěna na schodišti, **skryté vedení** pro závěsy - systémové kolejničky zasazené do zámečnického prvku. **Práškový lak**. Soukromý investor v Olomouci - Neředíně",
        "fotky": [{
            "sys": {
                "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
                "id": "50nNF0eHoII0mw8IkQqW2Q",
                "type": "Asset",
                "createdAt": "2017-02-19T20:35:38.805Z",
                "updatedAt": "2017-02-19T20:35:38.805Z",
                "revision": 1,
                "locale": "cs-CZ"
            },
            "fields": {
                "title": "talasovi v 06 03",
                "file": {
                    "url": "//images.contentful.com/nomds5rqpcu2/50nNF0eHoII0mw8IkQqW2Q/0f21c1dd94a43af181c0128cc63dc865/talasovi_v_06_03.jpg",
                    "details": { "size": 683433, "image": { "width": 1400, "height": 875 } },
                    "fileName": "talasovi v 06 03.jpg",
                    "contentType": "image/jpeg"
                }
            }
        }, {
            "sys": {
                "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
                "id": "1yyBwsKLwAyYquS4kkkYGO",
                "type": "Asset",
                "createdAt": "2017-02-19T20:35:38.802Z",
                "updatedAt": "2017-02-19T20:35:38.802Z",
                "revision": 1,
                "locale": "cs-CZ"
            },
            "fields": {
                "title": "aaa1 trouba",
                "file": {
                    "url": "//images.contentful.com/nomds5rqpcu2/1yyBwsKLwAyYquS4kkkYGO/0f21c1dd94a43af181c0128cc63dc865/aaa1_trouba.jpg",
                    "details": { "size": 35561, "image": { "width": 800, "height": 682 } },
                    "fileName": "aaa1 trouba.jpg",
                    "contentType": "image/jpeg"
                }
            }
        }, {
            "sys": {
                "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
                "id": "6sTtNSqVpeyu0omGmGYSkQ",
                "type": "Asset",
                "createdAt": "2017-02-19T20:35:39.061Z",
                "updatedAt": "2017-02-19T20:35:39.061Z",
                "revision": 1,
                "locale": "cs-CZ"
            },
            "fields": {
                "title": "obklady made a mano",
                "file": {
                    "url": "//images.contentful.com/nomds5rqpcu2/6sTtNSqVpeyu0omGmGYSkQ/c2fbe5f40200a96f7eea367afe1e474d/obklady_made_a_mano.jpg",
                    "details": { "size": 135433, "image": { "width": 1844, "height": 985 } },
                    "fileName": "obklady made a mano.jpg",
                    "contentType": "image/jpeg"
                }
            }
        }, {
            "sys": {
                "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
                "id": "3b7HIIm3EcEw00I2msyKqM",
                "type": "Asset",
                "createdAt": "2017-02-19T20:35:39.047Z",
                "updatedAt": "2017-02-19T20:35:39.047Z",
                "revision": 1,
                "locale": "cs-CZ"
            },
            "fields": {
                "title": "bila plus preklizka",
                "file": {
                    "url": "//images.contentful.com/nomds5rqpcu2/3b7HIIm3EcEw00I2msyKqM/58e8ea32c347e0533df79ae160f56be2/bila_plus_preklizka.jpg",
                    "details": { "size": 112154, "image": { "width": 1844, "height": 985 } },
                    "fileName": "bila plus preklizka.jpg",
                    "contentType": "image/jpeg"
                }
            }
        }, {
            "sys": {
                "type": "Link",
                "linkType": "Asset",
                "id": "3a6q6keeJOYkuQEKGoMeWo"
            }
        }, { "sys": { "type": "Link", "linkType": "Asset", "id": "55KEhg8VyUK6c8IakuOSeS" } }],
        "datum": "2017-03-19T00:00+02:00"
    }
}, {
    "sys": {
        "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
        "id": "2C4q6YOw64eASUQ2kOmau8",
        "type": "Entry",
        "createdAt": "2017-03-26T10:25:49.957Z",
        "updatedAt": "2017-03-30T07:05:13.429Z",
        "revision": 7,
        "contentType": { "sys": { "type": "Link", "linkType": "ContentType", "id": "kontakt" } },
        "locale": "cs-CZ"
    },
    "fields": {
        "tel": ["+420 454 556 668", "+420 454 123 455"],
        "email": ["milan@art-eco.com"],
        "details": "ART ECO Group \n779 00 Olomouc, Ceska Republika \nIČO: 48 142 166",
        "sociallinks": ["www.facebook.com"]
    }
}, {
    "sys": {
        "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
        "id": "4zeizI1oAg0oCeOwG2ssaM",
        "type": "Entry",
        "createdAt": "2017-02-21T07:29:22.283Z",
        "updatedAt": "2017-06-15T06:17:47.413Z",
        "revision": 3,
        "contentType": { "sys": { "type": "Link", "linkType": "ContentType", "id": "reference" } },
        "locale": "cs-CZ"
    },
    "fields": {
        "nadpis": "Dalsi uprava",
        "popis": "klsndfkn lsannflk dsalnfl nndsaf nlnds nflnsdlf nlsdaf lsndafl nsldanfl saf;mdsa;lfm ;lsadfkdsa;lfk sadf ",
        "fotky": [{
            "sys": {
                "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
                "id": "50nNF0eHoII0mw8IkQqW2Q",
                "type": "Asset",
                "createdAt": "2017-02-19T20:35:38.805Z",
                "updatedAt": "2017-02-19T20:35:38.805Z",
                "revision": 1,
                "locale": "cs-CZ"
            },
            "fields": {
                "title": "talasovi v 06 03",
                "file": {
                    "url": "//images.contentful.com/nomds5rqpcu2/50nNF0eHoII0mw8IkQqW2Q/0f21c1dd94a43af181c0128cc63dc865/talasovi_v_06_03.jpg",
                    "details": { "size": 683433, "image": { "width": 1400, "height": 875 } },
                    "fileName": "talasovi v 06 03.jpg",
                    "contentType": "image/jpeg"
                }
            }
        }, {
            "sys": {
                "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
                "id": "3b7HIIm3EcEw00I2msyKqM",
                "type": "Asset",
                "createdAt": "2017-02-19T20:35:39.047Z",
                "updatedAt": "2017-02-19T20:35:39.047Z",
                "revision": 1,
                "locale": "cs-CZ"
            },
            "fields": {
                "title": "bila plus preklizka",
                "file": {
                    "url": "//images.contentful.com/nomds5rqpcu2/3b7HIIm3EcEw00I2msyKqM/58e8ea32c347e0533df79ae160f56be2/bila_plus_preklizka.jpg",
                    "details": { "size": 112154, "image": { "width": 1844, "height": 985 } },
                    "fileName": "bila plus preklizka.jpg",
                    "contentType": "image/jpeg"
                }
            }
        }, {
            "sys": {
                "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
                "id": "4wmKvV9HyM0qko8eAYuU0E",
                "type": "Asset",
                "createdAt": "2017-06-15T06:17:26.240Z",
                "updatedAt": "2017-06-15T06:17:26.240Z",
                "revision": 1,
                "locale": "cs-CZ"
            },
            "fields": {
                "title": "1376620540660",
                "file": {
                    "url": "//images.contentful.com/nomds5rqpcu2/4wmKvV9HyM0qko8eAYuU0E/90fbc268b6ae205add1916293e61fb62/1376620540660.jpg",
                    "details": { "size": 48002, "image": { "width": 720, "height": 540 } },
                    "fileName": "1376620540660.jpg",
                    "contentType": "image/jpeg"
                }
            }
        }, {
            "sys": {
                "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
                "id": "4xRX1iJa1iAWEiyE84AKMA",
                "type": "Asset",
                "createdAt": "2017-06-15T06:17:26.247Z",
                "updatedAt": "2017-06-15T06:17:26.247Z",
                "revision": 1,
                "locale": "cs-CZ"
            },
            "fields": {
                "title": "1376620420657",
                "file": {
                    "url": "//images.contentful.com/nomds5rqpcu2/4xRX1iJa1iAWEiyE84AKMA/092298623a02dec85cee354fc8d6f851/1376620420657.jpg",
                    "details": { "size": 41238, "image": { "width": 720, "height": 540 } },
                    "fileName": "1376620420657.jpg",
                    "contentType": "image/jpeg"
                }
            }
        }],
        "datum": "2017-03-27T00:00+02:00"
    }
}, {
    "sys": {
        "space": { "sys": { "type": "Link", "linkType": "Space", "id": "nomds5rqpcu2" } },
        "id": "5y8sxxH4KAuiMw4SCYiWiI",
        "type": "Entry",
        "createdAt": "2017-03-31T04:18:10.864Z",
        "updatedAt": "2017-03-31T04:37:28.294Z",
        "revision": 2,
        "contentType": { "sys": { "type": "Link", "linkType": "ContentType", "id": "oNs" } },
        "locale": "cs-CZ"
    },
    "fields": { "info": "# PLÁNOVÁNÍ\nTěm z svého dělí z hrozba kréta začal, jedny lety ráda svědky tanec nedotčený z práci obří uznale projevují. Neznámý zkoumání nejprestižnějšího myšlenkami leželo dopředu elektromagnetického nebo.\n\nProjektova dokumentace/rozpocty \n\n# DOVEDNOSTI\nKovářství, Podkovářství, Zámečnictví, \nNástrojářství Kovoobráběčství, Galvanizérství,\nSmaltérství, Slévárenství, Modelářství, Zednictví\nTesařství,Pokrývačství, Klempířství,Štukatérství, Podlahářství, Izolatérství, Kominictví, Vodoinstalatérství, topenářství, Montáž suchých staveb,  Kamnářství, Malířství, lakýrnictví a natěračství\n\n# NÁVRH\nPři složitějších realizacích spolupracujeme s architektonickou kanceláří [Masparti](https://masparti.com \"masparti\")\n\n# VYBAVENÍ\nBagr, bruska, vrtačka, míhačka ...... \n\n" }
}]
*/

export const getEntries = function() {

    return client.getEntries()
        .then((response) => {

            let list = response.items
                .filter(item => item.sys.contentType.sys.id === 'reference')
                .reduce((res, item) => {
                    res[item.sys.id] = {
                        title: item.fields.nadpis,
                        text: item.fields.popis,
                        photos: item.fields.fotky.reduce((res, foto) => {

                            if (foto.sys.type === 'Asset') {

                                res.push({
                                    file: ContentfulImage(foto),
                                    title: foto.fields.title
                                })
                            }
                            return res;
                        }, [])
                    };
                    return res;
                }, {});

            return list;
            // list = _.orderBy(list, [
            //     (item) => modelsSettigs[item.type].rank,
            //     (item) => new Date(item.get('fields').datum || 0)
            // ], 'desc', 'desc');
            // list.forEach((item) => {
            //     page.add(item);
            //     console.log(item);
            // });
        });
// .catch((error) => {
//     console.log(error)
// });


};

export const ContentfulImageFits = {
    FIT: 'fit',
    CROP: 'crop',
    PAD: 'pad',
    THUMB: 'thumb',
    FILL: 'fill'
};


export const ContentfulImage = function(imageData) {

    return {

        getUrl(opt) {
            opt = opt || {};

            if (imageData.fields) {
                let parts = [];

                if (opt.fit) {
                    parts.push(`fit=${opt.fit}`);
                }
                if (opt.width) {
                    parts.push(`w=${opt.width}`);
                }
                if (opt.height) {
                    parts.push(`h=${opt.height}`);
                }

                return `http:${imageData.fields.file.url}?${parts.join('&')}`;
            }
        }
    };
};

// mock
/*
let data = {
    aaa: {
        title: 'title aaa',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bbb: {
        title: 'Aadf dkjbfkjdbk',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a kjaskfjbkjas bdkjfbkjdsab kjbdsafkbsadkfbk baskdbfkbdsak jbdsakfjb kasbdfkb ksajbdkfj sadkflakdsnflkjdsaljf klkdsajf lkjdsaf',
    },
    abbxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bxbxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    xbbxssdb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    abbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    wbbbddf: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    ebbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    aSSS: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    SDSS: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    sdsd: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    rrbbxssdb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    tbbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    ybbbddf: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    }
};
*/
