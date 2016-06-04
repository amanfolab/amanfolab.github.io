/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'home-nav22',
                            type: 'image',
                            rect: ['216px', '141px', '118px', '118px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"home-nav22.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid24",
                            "left",
                            0,
                            2000,
                            "easeInOutElastic",
                            "${home-nav22}",
                            '0px',
                            '216px'
                        ],
                        [
                            "eid25",
                            "left",
                            2000,
                            3000,
                            "easeInOutElastic",
                            "${home-nav22}",
                            '216px',
                            '425px'
                        ],
                        [
                            "eid26",
                            "left",
                            5000,
                            500,
                            "easeInElastic",
                            "${home-nav22}",
                            '425px',
                            '432px'
                        ],
                        [
                            "eid27",
                            "left",
                            5500,
                            2000,
                            "easeOutElastic",
                            "${home-nav22}",
                            '432px',
                            '216px'
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            1500,
                            "easeInOutElastic",
                            "${home-nav22}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("logorun_edgeActions.js");
})("EDGE-20857718");
