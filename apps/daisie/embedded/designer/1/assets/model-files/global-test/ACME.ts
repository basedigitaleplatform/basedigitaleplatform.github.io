export const T =
    {
        "dataSchema": {
            "CognomeFatturazione": {
                "type": "text",
                "nullable": false,
                "constraints": {
                    "min": "",
                    "max": "100",
                    "regex": ""
                }
            },
            "NomeFatturazione": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "50",
                    "min": "",
                    "regex": ""
                }
            },
            "IndirizzoFatturazione": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "100",
                    "min": "",
                    "regex": ""
                }
            },
            "LocalitaFatturazione": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "100",
                    "min": "",
                    "regex": ""
                }
            },
            "CapFatturazione": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "5",
                    "min": "",
                    "regex": ""
                }
            },
            "ProvinciaFatturazione": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "2",
                    "min": "",
                    "regex": ""
                }
            },
            "TelefonoFatturazione": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "15",
                    "min": "",
                    "regex": ""
                }
            },
            "CellulareFatturazione": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "15",
                    "min": "",
                    "regex": "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
                }
            },
            "Regalo": {
                "type": "boolean",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "CapBeneficiario": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "5",
                    "min": "",
                    "regex": ""
                }
            },
            "CellulareBeneficiario": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "15",
                    "min": "",
                    "regex": "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
                }
            },
            "CognomeBeneficiario": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "100",
                    "min": "",
                    "regex": ""
                }
            },
            "IndirizzoBeneficiario": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "100",
                    "min": "",
                    "regex": ""
                }
            },
            "LocalitaBeneficiario": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "100",
                    "min": "",
                    "regex": ""
                }
            },
            "NomeBeneficiario": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "50",
                    "min": "",
                    "regex": ""
                }
            },
            "ProvinciaBeneficiario": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "2",
                    "min": "",
                    "regex": ""
                }
            },
            "TelefonoBeneficiario": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "15",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU1": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "10",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU2": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "10",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU3": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "10",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU1_QTA": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "1",
                    "regex": ""
                }
            },
            "SKU1_PU": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU2_PU": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU2_QTA": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "1",
                    "regex": ""
                }
            },
            "SKU3_PU": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU3_QTA": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "1",
                    "regex": ""
                }
            },
            "SKU1_SUB": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU2_SUB": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "SKU3_SUB": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "TotaleOrdine": {
                "type": "number",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "Interessato": {
                "type": "boolean",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "ConosceGiaAzienda": {
                "type": "boolean",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "UsaGiaProdotti": {
                "type": "boolean",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "ProdottiNoti": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "ConfermaAccettaCondizioni": {
                "type": "boolean",
                "nullable": true,
                "constraints": {
                    "max": "",
                    "min": "",
                    "regex": ""
                }
            },
            "CodiceFiscaleFatturazione": {
                "type": "text",
                "nullable": true,
                "constraints": {
                    "max": "20",
                    "min": "",
                    "regex": "^[A-Za-z]{6}[0-9]{2}[A-Za-z][0-9]{2}[A-Za-z][0-9]{3}[A-Za-z]$"
                }
            }
        },
        "config": {
            "isPreviewEnabled": true,
            "start": {
                "conditions": [],
                "defaultStartingPoint": "",
                "withConditions": false
            },
            "globalSettings" : {
                "dateFormat" : "dd/MM/yy",
                "dateTimeFormat" : "dd/MM/yy HH:mm:ss"
            }
        },
        "template": [
            {
                "id": "001",
                "pageName": "Introduzione",
                "elements": [
                    {
                        "id": "001",
                        "formType": 3,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "",
                                "label": "Gentile Sig./Sig.ra {{CognomeFatturazione}}, la contattiamo da ACME Shop per proporle un affare che non potrà rifiutare!",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 0,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": ""
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "000",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "ConosceGiaAzienda",
                                "label": "Ha già sentito parlare di ACME Shop?",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "ConosceGiaAzienda",
                                                "value": "ConosceGiaAzienda",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            },
                                            {
                                                "label": "E",
                                                "value": "and",
                                                "type": 3
                                            },
                                            {
                                                "label": "ConosceGiaAzienda",
                                                "value": "ConosceGiaAzienda",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "NO",
                                                "value": "false",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 5,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Conosce già azienda"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "SI",
                                            "value": "true"
                                        },
                                        {
                                            "label": "NO",
                                            "value": "false"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "002",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [
                            {
                                "condition": [
                                    {
                                        "label": "ConosceGiaAzienda",
                                        "value": "ConosceGiaAzienda",
                                        "type": 0
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "SI",
                                        "value": "true",
                                        "type": 1
                                    }
                                ]
                            }
                        ],
                        "queries": [
                            {
                                "key": "UsaGiaProdotti",
                                "label": "Utilizza già qualche nostro prodotto?",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "ConosceGiaAzienda",
                                                "value": "ConosceGiaAzienda",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 5,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Usa già prodotti"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "SI",
                                            "value": "true"
                                        },
                                        {
                                            "label": "NO",
                                            "value": "false"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "003",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [
                            {
                                "condition": [
                                    {
                                        "label": "UsaGiaProdotti",
                                        "value": "UsaGiaProdotti",
                                        "type": 0
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "SI",
                                        "value": "true",
                                        "type": 1
                                    },
                                    {
                                        "label": "E",
                                        "value": "and",
                                        "type": 3
                                    },
                                    {
                                        "label": "ConosceGiaAzienda",
                                        "value": "ConosceGiaAzienda",
                                        "type": 0
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "SI",
                                        "value": "true",
                                        "type": 1
                                    }
                                ]
                            }
                        ],
                        "queries": [
                            {
                                "key": "ProdottiNoti",
                                "label": "Quale tra i seguenti?",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "UsaGiaProdotti",
                                                "value": "UsaGiaProdotti",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": true,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 2,
                                    "apiConfig": {
                                        "method": "",
                                        "url": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Prodotti conosciuti"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "Linea creme \"Derma Scare\"",
                                            "value": "Creme Derma Scare"
                                        },
                                        {
                                            "label": "Linea gelati \"I Scream\"",
                                            "value": "Gelati I Scream"
                                        },
                                        {
                                            "label": "Collezione figurine \"Happy Tree Friends\"",
                                            "value": "Happy Tree Friends"
                                        },
                                        {
                                            "label": "Collezione peluches \"Mogwai\"",
                                            "value": "Mogwai"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "000",
                "pageName": "Proposta Commerciale",
                "elements": [
                    {
                        "id": "001",
                        "formType": 3,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "",
                                "label": "Cosa ne direbbe Sig./Sig.ra {{CognomeFatturazione}} se io le proponessi un prodotto gratis a sua scelta con l'acquisto minimo di altri 3 prodotti?",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 0,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": ""
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "000",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "Interessato",
                                "label": "Le interessa?",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            },
                                            {
                                                "label": "E",
                                                "value": "and",
                                                "type": 3
                                            },
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "NO",
                                                "value": "false",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 5,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Interessato"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "SI",
                                            "value": "true"
                                        },
                                        {
                                            "label": "NO",
                                            "value": "false"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "005",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [
                            {
                                "condition": [
                                    {
                                        "label": "Interessato",
                                        "value": "Interessato",
                                        "type": 0
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "SI",
                                        "value": "true",
                                        "type": 1
                                    }
                                ]
                            }
                        ],
                        "queries": [
                            {
                                "key": "Regalo",
                                "label": "Vuole fare un regalo a qualcuno?",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 5,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Regalo"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "SI",
                                            "value": "true"
                                        },
                                        {
                                            "label": "NO",
                                            "value": "false"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "002",
                        "formType": 4,
                        "aggregatedVisibilityConditions": [
                            {
                                "condition": [
                                    {
                                        "label": "Interessato",
                                        "value": "Interessato",
                                        "type": 0
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "SI",
                                        "value": "true",
                                        "type": 1
                                    }
                                ]
                            }
                        ],
                        "queries": [
                            {
                                "key": "SKU1",
                                "label": "Prodotto 1",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 3,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "SKU1"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "Prodotto A",
                                            "value": "A"
                                        },
                                        {
                                            "label": "Prodotto B",
                                            "value": "B"
                                        },
                                        {
                                            "label": "Prodotto C",
                                            "value": "C"
                                        },
                                        {
                                            "label": "Prodotto D",
                                            "value": "D"
                                        },
                                        {
                                            "label": "Prodotto E",
                                            "value": "E"
                                        },
                                        {
                                            "label": "",
                                            "value": ""
                                        }
                                    ]
                                }
                            },
                            {
                                "key": "SKU1_QTA",
                                "label": "Quantità",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU1",
                                                "value": "SKU1",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Campo vuoto",
                                                "value": "",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "SKU1_QTA"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            },
                            {
                                "key": "SKU1_PU",
                                "label": "Prezzo Unitario",
                                "fieldAutoFillConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU1",
                                                "value": "SKU1",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto A",
                                                "value": "A",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "23.50",
                                        "effectIsField": false
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU1",
                                                "value": "SKU1",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto B",
                                                "value": "B",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "15.00"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU1",
                                                "value": "SKU1",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto C",
                                                "value": "C",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "52.00"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU1",
                                                "value": "SKU1",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto D",
                                                "value": "D",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "36.50"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU1",
                                                "value": "SKU1",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto E",
                                                "value": "E",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "60.00"
                                    }
                                ],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "SKU1_PU"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": "€"
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "003",
                        "formType": 4,
                        "aggregatedVisibilityConditions": [
                            {
                                "condition": [
                                    {
                                        "label": "Interessato",
                                        "value": "Interessato",
                                        "type": 0
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "SI",
                                        "value": "true",
                                        "type": 1
                                    },
                                    {
                                        "label": "E",
                                        "value": "and",
                                        "type": 3
                                    },
                                    {
                                        "label": "SKU1",
                                        "value": "SKU1",
                                        "type": 0
                                    },
                                    {
                                        "label": "NON",
                                        "value": "!",
                                        "type": 4
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "Campo vuoto",
                                        "value": "",
                                        "type": 1
                                    }
                                ]
                            }
                        ],
                        "queries": [
                            {
                                "key": "SKU2",
                                "label": "Prodotto 2",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 3,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "SKU2"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "Prodotto A",
                                            "value": "A"
                                        },
                                        {
                                            "label": "Prodotto B",
                                            "value": "B"
                                        },
                                        {
                                            "label": "Prodotto C",
                                            "value": "C"
                                        },
                                        {
                                            "label": "Prodotto D",
                                            "value": "D"
                                        },
                                        {
                                            "label": "Prodotto E",
                                            "value": "E"
                                        },
                                        {
                                            "label": "",
                                            "value": ""
                                        }
                                    ]
                                }
                            },
                            {
                                "key": "SKU2_QTA",
                                "label": "Quantità",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU2",
                                                "value": "SKU2",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Campo vuoto",
                                                "value": "",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Quantità"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            },
                            {
                                "key": "SKU2_PU",
                                "label": "Prezzo Unitario",
                                "fieldAutoFillConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU2",
                                                "value": "SKU2",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto A",
                                                "value": "A",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "23.50",
                                        "effectIsField": false
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU2",
                                                "value": "SKU2",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto B",
                                                "value": "B",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "15.00"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU2",
                                                "value": "SKU2",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto C",
                                                "value": "C",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "52.00"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU2",
                                                "value": "SKU2",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto D",
                                                "value": "D",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "36.50"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU2",
                                                "value": "SKU2",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto E",
                                                "value": "E",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "60.00"
                                    }
                                ],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Prezzo Unitario"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": "€"
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "004",
                        "formType": 4,
                        "aggregatedVisibilityConditions": [
                            {
                                "condition": [
                                    {
                                        "label": "Interessato",
                                        "value": "Interessato",
                                        "type": 0
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "SI",
                                        "value": "true",
                                        "type": 1
                                    },
                                    {
                                        "label": "E",
                                        "value": "and",
                                        "type": 3
                                    },
                                    {
                                        "label": "SKU1",
                                        "value": "SKU1",
                                        "type": 0
                                    },
                                    {
                                        "label": "NON",
                                        "value": "!",
                                        "type": 4
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "Campo vuoto",
                                        "value": "",
                                        "type": 1
                                    },
                                    {
                                        "label": "E",
                                        "value": "and",
                                        "type": 3
                                    },
                                    {
                                        "label": "SKU2",
                                        "value": "SKU2",
                                        "type": 0
                                    },
                                    {
                                        "label": "NON",
                                        "value": "!",
                                        "type": 4
                                    },
                                    {
                                        "label": "uguale a",
                                        "value": "=",
                                        "type": 2
                                    },
                                    {
                                        "label": "Campo vuoto",
                                        "value": "",
                                        "type": 1
                                    }
                                ]
                            }
                        ],
                        "queries": [
                            {
                                "key": "SKU3",
                                "label": "Prodotto 3",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 3,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "SKU3"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "Prodotto A",
                                            "value": "A"
                                        },
                                        {
                                            "label": "Prodotto B",
                                            "value": "B"
                                        },
                                        {
                                            "label": "Prodotto C",
                                            "value": "C"
                                        },
                                        {
                                            "label": "Prodotto D",
                                            "value": "D"
                                        },
                                        {
                                            "label": "Prodotto E",
                                            "value": "E"
                                        },
                                        {
                                            "label": "",
                                            "value": ""
                                        }
                                    ]
                                }
                            },
                            {
                                "key": "SKU3_QTA",
                                "label": "Quantità",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU3",
                                                "value": "SKU3",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Campo vuoto",
                                                "value": "",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Quantità"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            },
                            {
                                "key": "SKU3_PU",
                                "label": "Prezzo Unitario",
                                "fieldAutoFillConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU3",
                                                "value": "SKU3",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto A",
                                                "value": "A",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "23.50",
                                        "effectIsField": false
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU3",
                                                "value": "SKU3",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto B",
                                                "value": "B",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "15.00"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU3",
                                                "value": "SKU3",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto C",
                                                "value": "C",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "52.00"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU3",
                                                "value": "SKU3",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto D",
                                                "value": "D",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "36.50"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "SKU3",
                                                "value": "SKU3",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Prodotto E",
                                                "value": "E",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "60.00"
                                    }
                                ],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Prezzo Unitario"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": "€"
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
                "pageName": "Conferma Dati Fatturazione",
                "elements": [
                    {
                        "id": "001",
                        "formType": 3,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "",
                                "label": "Le chiedo gentilmente di confermarmi i dati per la fatturazione.",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 0,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": ""
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "000",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "NomeFatturazione",
                                "label": "Nome",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Nome"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "002",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "CognomeFatturazione",
                                "label": "Cognome",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Cognome"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "003",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "IndirizzoFatturazione",
                                "label": "Indirizzo",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Indirizzo"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "004",
                        "formType": 4,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "CapFatturazione",
                                "label": "Cap",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Cap"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            },
                            {
                                "key": "LocalitaFatturazione",
                                "label": "Localita",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Localita"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            },
                            {
                                "key": "ProvinciaFatturazione",
                                "label": "Provincia",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Provincia"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "007",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "CodiceFiscaleFatturazione",
                                "label": "Codice Fiscale",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Codice Fiscale"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "005",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "CellulareFatturazione",
                                "label": "Cellulare",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            },
                                            {
                                                "label": "E",
                                                "value": "and",
                                                "type": 3
                                            },
                                            {
                                                "label": "TelefonoFatturazione",
                                                "value": "TelefonoFatturazione",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Campo vuoto",
                                                "value": "",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Cellulare"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "006",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "TelefonoFatturazione",
                                "label": "Telefono",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Interessato",
                                                "value": "Interessato",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            },
                                            {
                                                "label": "E",
                                                "value": "and",
                                                "type": 3
                                            },
                                            {
                                                "label": "CellulareFatturazione",
                                                "value": "CellulareFatturazione",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Campo vuoto",
                                                "value": "",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Telefono"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "003",
                "pageName": "Dati Beneficiario",
                "elements": [
                    {
                        "id": "001",
                        "formType": 3,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "",
                                "label": "Le chiedo adesso i dati del beneficiario in quanto ha scelto di fare un regalo.\n",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 0,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": ""
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "000",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "NomeBeneficiario",
                                "label": "Nome",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Nome"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "002",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "CognomeBeneficiario",
                                "label": "Cognome",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Regalo",
                                                "value": "Regalo",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Cognome"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "003",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "IndirizzoBeneficiario",
                                "label": "Indirizzo",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Regalo",
                                                "value": "Regalo",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Indirizzo"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "004",
                        "formType": 4,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "CapBeneficiario",
                                "label": "Cap",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Regalo",
                                                "value": "Regalo",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Cap"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            },
                            {
                                "key": "LocalitaBeneficiario",
                                "label": "Localita",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Regalo",
                                                "value": "Regalo",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Localita"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            },
                            {
                                "key": "ProvinciaBeneficiario",
                                "label": "Provincia",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "Regalo",
                                                "value": "Regalo",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Provincia"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "005",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "CellulareBeneficiario",
                                "label": "Cellulare",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Cellulare"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    },
                    {
                        "id": "006",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "TelefonoBeneficiario",
                                "label": "Telefono",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 1,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Telefono"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "004",
                "pageName": "Conferma Condizioni",
                "elements": [
                    {
                        "id": "000",
                        "formType": 0,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "ConfermaAccettaCondizioni",
                                "label": "Accetta le nostre condizioni e conferma l'ordine?",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [
                                    {
                                        "condition": [
                                            {
                                                "label": "ConfermaAccettaCondizioni",
                                                "value": "ConfermaAccettaCondizioni",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "SI",
                                                "value": "true",
                                                "type": 1
                                            },
                                            {
                                                "label": "E",
                                                "value": "and",
                                                "type": 3
                                            },
                                            {
                                                "label": "ConfermaAccettaCondizioni",
                                                "value": "ConfermaAccettaCondizioni",
                                                "type": 0
                                            },
                                            {
                                                "label": "NON",
                                                "value": "!",
                                                "type": 4
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "NO",
                                                "value": "false",
                                                "type": 1
                                            }
                                        ]
                                    }
                                ],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 5,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": "Accetta"
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": [
                                        {
                                            "label": "SI",
                                            "value": "true"
                                        },
                                        {
                                            "label": "NO",
                                            "value": "false"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "005",
                "pageName": "Offerta Declinata",
                "elements": [
                    {
                        "id": "001",
                        "formType": 3,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "",
                                "label": "La ringrazio comunque e le auguro buona giornata.",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 0,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": ""
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
                                    },
                                    "options": []
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "006",
                "pageName": "Offerta Confermata",
                "elements": [
                    {
                        "id": "001",
                        "formType": 3,
                        "aggregatedVisibilityConditions": [],
                        "queries": [
                            {
                                "key": "",
                                "label": "La ringrazio per la fiducia accordataci e le auguro buona giornata!",
                                "fieldAutoFillConditions": [],
                                "fieldObligatoryConditions": [],
                                "parameters": {
                                    "isDateTimeEnabled": false,
                                    "isFreeInputEnabled": false,
                                    "isFieldRequired": 2,
                                    "isTextBox": false,
                                    "responseType": 0,
                                    "apiConfig": {
                                        "url": "",
                                        "method": ""
                                    },
                                    "previewConfig": {
                                        "isVisible": true,
                                        "previewLabel": ""
                                    },
                                    "additionalInformation": {
                                        "prefix": "",
                                        "suffix": ""
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
                "start": "001",
                "stop": "000",
                "condition": {
                    "flowOption": 0,
                    "aggregatedConditions": []
                }
            },
            {
                "start": "000",
                "stop": "005",
                "condition": {
                    "flowOption": 1,
                    "aggregatedConditions": [
                        {
                            "condition": [
                                {
                                    "label": "Interessato",
                                    "value": "Interessato",
                                    "type": 0
                                },
                                {
                                    "label": "uguale a",
                                    "value": "=",
                                    "type": 2
                                },
                                {
                                    "label": "SI",
                                    "value": "true",
                                    "type": 1
                                }
                            ],
                            "effect": "002"
                        }
                    ]
                }
            },
            {
                "start": "002",
                "stop": "004",
                "condition": {
                    "flowOption": 1,
                    "aggregatedConditions": [
                        {
                            "condition": [
                                {
                                    "label": "Regalo",
                                    "value": "Regalo",
                                    "type": 0
                                },
                                {
                                    "label": "uguale a",
                                    "value": "=",
                                    "type": 2
                                },
                                {
                                    "label": "SI",
                                    "value": "true",
                                    "type": 1
                                }
                            ],
                            "effect": "003"
                        }
                    ]
                }
            },
            {
                "start": "003",
                "stop": "004",
                "condition": {
                    "flowOption": 0,
                    "aggregatedConditions": []
                }
            },
            {
                "start": "004",
                "stop": "005",
                "condition": {
                    "flowOption": 1,
                    "aggregatedConditions": [
                        {
                            "condition": [
                                {
                                    "label": "ConfermaAccettaCondizioni",
                                    "value": "ConfermaAccettaCondizioni",
                                    "type": 0
                                },
                                {
                                    "label": "uguale a",
                                    "value": "=",
                                    "type": 2
                                },
                                {
                                    "label": "SI",
                                    "value": "true",
                                    "type": 1
                                }
                            ],
                            "effect": "006"
                        }
                    ]
                }
            },
            {
                "start": "005",
                "stop": "send",
                "condition": {
                    "flowOption": 2,
                    "aggregatedConditions": []
                }
            },
            {
                "start": "006",
                "stop": "send",
                "condition": {
                    "flowOption": 2,
                    "aggregatedConditions": []
                }
            }
        ]
    };
