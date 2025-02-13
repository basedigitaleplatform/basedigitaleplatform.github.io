export const T = {
    "config": {
        "isPreviewEnabled": false,
        "start": {
          "withConditions": false,
          "conditions": [],
          "defaultStartingPoint": ""
        }, 
        "globalSettings" : {
            "dateFormat" : "dd/MM/yy",
            "dateTimeFormat" : "HH:mm:ss"
        }
      },
    "template": [
        {
            "id": "000",
            "pageName": "Raccolta dati",
            "elements": [
                {
                    "id": "000",
                    "formType": 0,
                    "visibilityConditions": [],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "areyousatisfied",
                            "label": "Vuoi vedere la sezione?",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 5,
                                "apiConfig": {
                                    "url": "http://localhost:51239/api/v1/numbers",
                                    "method": "get"
                                },
                                "previewConfig": {
                                    "isVisible": false,
                                    "previewLabel": ""
                                },
                                "options": [
                                    {
                                        "label": "Primo",
                                        "value": "Primo"
                                    },
                                    {
                                        "label": "Secondo",
                                        "value": "Secondo"
                                    },
                                    {
                                        "label": "Terzo",
                                        "value": "Terzo"
                                    },
                                    {
                                        "label": "Quarto",
                                        "value": "Quarto"
                                    },
                                    {
                                        "label": "Quinto",
                                        "value": "Quinto"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "009",
                    "formType": 4,
                    "visibilityConditions": [
                        {
                            "id": "000",
                            "operator": "=",
                            "operands": {
                                "key": "areyousatisfied",
                                "expectedValue": "true",
                                "operandsType": "boolean"
                            }
                        }
                    ],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "advices",
                            "label": "advices",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 1,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Consigli dentro sezione"
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "dateofcompletion",
                            "label": "dateofcompletion",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 4,
                                "apiConfig": {
                                    "url": "http://localhost:51239/api/v1/animals",
                                    "method": "get"
                                },
                                "previewConfig": {
                                    "isVisible": false,
                                    "previewLabel": ""
                                },
                                "options": [
                                    {
                                        "label": "Tigre",
                                        "value": "Tigre"
                                    },
                                    {
                                        "label": "Gatto",
                                        "value": "Gatto"
                                    },
                                    {
                                        "label": "Topo",
                                        "value": "Topo"
                                    },
                                    {
                                        "label": "Tartaruga",
                                        "value": "Tartaruga"
                                    },
                                    {
                                        "label": "Elefante",
                                        "value": "Elefante"
                                    }
                                ]
                            }
                        },
                        {
                            "key": "email",
                            "label": "email",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 1,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Email principale"
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "wordofmouth",
                            "label": "wordofmouth",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 3,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Passaparola"
                                },
                                "options": [
                                    {
                                        "label": "1",
                                        "value": "1"
                                    },
                                    {
                                        "label": "2",
                                        "value": "2"
                                    }
                                ]
                            }
                        },
                        {
                            "key": "mostvaluedaspect",
                            "label": "mostvaluedaspect",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 2,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Aspetto più importante"
                                },
                                "options": [
                                    {
                                        "label": "1",
                                        "value": "1"
                                    },
                                    {
                                        "label": "2",
                                        "value": "2"
                                    },
                                    {
                                        "label": "3",
                                        "value": "3"
                                    },
                                    {
                                        "label": "4",
                                        "value": "4"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "001",
                    "formType": 0,
                    "visibilityConditions": [],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "isdateenabled",
                            "label": "isdateenabled",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 1,
                                "apiConfig": {
                                    "url": "http://localhost:51239/api/v1/animals",
                                    "method": "get"
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Mettiamo qualcosa per etichetta"
                                },
                                "options": [
                                    {
                                        "label": "Tigre",
                                        "value": "Tigre"
                                    },
                                    {
                                        "label": "Gatto",
                                        "value": "Gatto"
                                    },
                                    {
                                        "label": "Topo",
                                        "value": "Topo"
                                    },
                                    {
                                        "label": "Tartaruga",
                                        "value": "Tartaruga"
                                    },
                                    {
                                        "label": "Elefante",
                                        "value": "Elefante"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "002",
                    "formType": 5,
                    "visibilityConditions": [],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "timeofpurchase",
                            "label": "",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": false,
                                    "previewLabel": ""
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "isdateenabled",
                            "label": "",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Comune di residenza"
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "dateofcompletion",
                            "label": "",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Codice di avviamento postale (CAP)"
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "003",
                    "formType": 0,
                    "visibilityConditions": [],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "email",
                            "label": "Nuova domanda",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 1,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Nuovo campo per inserimento mail"
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "004",
                    "formType": 3,
                    "visibilityConditions": [],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "ANOTHERMARKDOWN",
                            "label": "",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "001",
            "pageName": "MarkDown",
            "elements": [
                {
                    "id": "001",
                    "formType": 3,
                    "visibilityConditions": [],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "MARKDOWNTEXTEXAMPLE",
                            "label": "",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "000",
                    "formType": 3,
                    "visibilityConditions": [],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "ANOTHERMARKDOWN",
                            "label": "",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "002",
            "pageName": "Consigli",
            "elements": [
                {
                    "id": "000",
                    "formType": 0,
                    "visibilityConditions": [],
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "advices",
                            "label": "Nuova domanda",
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "responseType": 1,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Questi sono i miei consigli"
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "flow": [
        {
            "condition": {
                "flowOption": 0,
                "conditions": [],
                "aggregatedConditions": []
            },
            "start": "000",
            "stop": "001"
        },
        {
            "condition": {
                "flowOption": 0,
                "conditions": [],
                "aggregatedConditions": []
            },
            "start": "001",
            "stop": "002"
        },
        {
            "condition": {
                "flowOption": 2,
                "conditions": [],
                "aggregatedConditions": []
            },
            "start": "002",
            "stop": "send"
        }
    ]
}