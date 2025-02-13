export const T =
{
  "dataSchema": {
    "Titolare": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "2",
        "min": "2",
        "regex": ""
      }
    },
    "InteressatoProposta": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "50",
        "min": "",
        "regex": ""
      }
    },
    "InteresseAppuntamento": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "50",
        "min": "",
        "regex": ""
      }
    },
    "PossessoDocumentoReddito": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "50",
        "min": "",
        "regex": ""
      }
    },
    "RispostaSituazione5": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "50",
        "min": "",
        "regex": ""
      }
    },
    "RimozioneListePrivacy": {
      "type": "boolean",
      "nullable": true,
      "constraints": {
        "max": "",
        "min": "",
        "regex": ""
      }
    },
    "MotivoNegativo": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "150",
        "min": "",
        "regex": ""
      }
    },
    "Esito": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "50",
        "min": "",
        "regex": ""
      }
    },
    "NoteOP": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "1000",
        "min": "",
        "regex": ""
      }
    },
    "OraAppuntamento": {
      "type": "text",
      "nullable": true,
      "constraints": {
        "max": "50",
        "min": "",
        "regex": ""
      }
    },
    "DataAppuntamento": {
      "type": "date",
      "nullable": true,
      "constraints": {
        "max": "2024-08-21T08:04:33.565Z",
        "min": "2023-08-21T08:04:33.565Z",
        "regex": ""
      }
    },
    "NOMEOP": {
      "type": "text",
      "nullable": false,
      "constraints": {
        "max": "",
        "min": "",
        "regex": ""
      }
    },
    "COGNOMEOP": {
      "type": "text",
      "nullable": false,
      "constraints": {
        "max": "",
        "min": "",
        "regex": ""
      }
    },
    "TITOLO": {
      "type": "text",
      "nullable": false,
      "constraints": {
        "max": "",
        "min": "",
        "regex": ""
      }
    },
    "DATAFINECAMPAGNA": {
      "type": "text",
      "nullable": false,
      "constraints": {
        "max": "",
        "min": "",
        "regex": ""
      }
    },
    "INIZIOINTERVISTA": {
      "type": "text",
      "nullable": false,
      "constraints": {
        "max": "",
        "min": "",
        "regex": ""
      }
    },
    "FINEINTERVISTA": {
      "type": "text",
      "nullable": false,
      "constraints": {
        "max": "",
        "min": "",
        "regex": ""
      }
    }
  },
  "config": {
    "isPreviewEnabled": true,
    "start": {
      "withConditions": false,
      "conditions": [],
      "defaultStartingPoint": "007"
    },
    "globalSettings" : {
      "dateFormat" : "dd/MM/yy",
      "dateTimeFormat" : "HH:mm:ss"
  }
  },
  "template": [
    {
      "id": "000",
      "pageName": "Titolare",
      "elements": [
        {
          "id": "000",
          "formType": 0,
          "aggregatedVisibilityConditions": [],
          "queries": [
            {
              "key": "Titolare",
              "label": "E' il titolare?",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 3,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": true,
                  "previewLabel": "E' il titolare?"
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": [
                  {
                    "label": "Si",
                    "value": "Si"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "001",
          "formType": 3,
          "aggregatedVisibilityConditions": [
            {
              "condition": [
                {
                  "label": "Titolare",
                  "value": "Titolare",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "Si",
                  "value": "Si",
                  "type": 1
                }
              ],
              "expression": "and(000)"
            }
          ],
          "queries": [
            {
              "key": "",
              "label": "Buongiorno/sera, sono {{NOMEOP}} {{COGNOMEOP}}, \nchiamo per conto di *Poste Italiane*, stiamo contattando i nostri clienti che hanno manifestato il consenso al trattamento dei dati personali per finalita' promozionali. \nLa informo che, fino al {{DATAFINECAMPAGNA}}, ha la possibilita' di rinnovare la sua *Cessione del Quinto* ai sensi dell’art. <b> 39 del DPR180/50 </b> ad un tasso promozionale.\n",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
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
          "id": "003",
          "formType": 2,
          "aggregatedVisibilityConditions": [
            {
              "condition": [
                {
                  "label": "Titolare",
                  "value": "Titolare",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "No",
                  "value": "No",
                  "type": 1
                }
              ],
              "expression": "and(000)"
            }
          ],
          "queries": [
            {
              "key": "Esito",
              "label": "",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 0,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": true,
                  "previewLabel": "Esito"
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
      "id": "001",
      "pageName": "Proposta",
      "elements": [
        {
          "id": "000",
          "formType": 0,
          "aggregatedVisibilityConditions": [],
          "queries": [
            {
              "key": "InteressatoProposta",
              "label": "E' interessato alla proposta? Le posso proporre un esempio? ",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 3,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": false,
                  "previewLabel": ""
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": [
                  {
                    "label": "Si",
                    "value": "Si"
                  },
                  {
                    "label": "Non so / cliente indeciso / non interessato",
                    "value": "Non so / cliente indeciso / non interessato"
                  },
                  {
                    "label": "Rifiuta di parlare / riaggancia",
                    "value": "Rifiuta di parlare / riaggancia"
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "004",
          "formType": 0,
          "aggregatedVisibilityConditions": [
            {
              "condition": [
                {
                  "label": "InteressatoProposta",
                  "value": "InteressatoProposta",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "Si",
                  "value": "Si",
                  "type": 1
                }
              ],
              "expression": "and(000)"
            }
          ],
          "queries": [
            {
              "key": "InteresseAppuntamento",
              "label": "Dopo la spiegazione del prodotto e' interessato a fissare un appuntamento presso l’ufficio postale? ",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 3,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": false,
                  "previewLabel": ""
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": [
                  {
                    "label": "Si",
                    "value": "Si"
                  },
                  {
                    "label": "Mi rechero' all'ufficio postale",
                    "value": "Mi rechero' all'ufficio postale"
                  },
                  {
                    "label": "Non so / cliente indeciso / non interessato",
                    "value": "Non so / cliente indeciso / non interessato"
                  },
                  {
                    "label": "No sono interessato",
                    "value": "Non sono interessato"
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "001",
          "formType": 0,
          "aggregatedVisibilityConditions": [
            {
              "condition": [
                {
                  "label": "InteressatoProposta",
                  "value": "InteressatoProposta",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "Non so / cliente indeciso / non interessato",
                  "value": "Non so / cliente indeciso / non interessato",
                  "type": 1
                }
              ],
              "expression": "and(000)"
            }
          ],
          "queries": [
            {
              "key": "MotivoNegativo",
              "label": " Quali altri informazioni possono esserle utili? ",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 3,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": true,
                  "previewLabel": "Motivazione rifiuto"
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": [
                  {
                    "label": "Rifiuto A : Non mi serve, ho gia' un prodotto di finanziamento BP in corso",
                    "value": "A"
                  },
                  {
                    "label": "Rifiuto B : Non mi serve rinnovare la cessione del quinto",
                    "value": "B"
                  },
                  {
                    "label": "Rifiuto C : Costa troppo",
                    "value": "C"
                  },
                  {
                    "label": "Rifiuto D : Non ho tempo, ci pensero' piu' avanti",
                    "value": "D"
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
                  "label": "MotivoNegativo",
                  "value": "MotivoNegativo",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "Rifiuto C : Costa troppo",
                  "value": "C",
                  "type": 1
                }
              ],
              "expression": "and(000)"
            }
          ],
          "queries": [
            {
              "key": "InteresseAppuntamento",
              "label": "...inoltre, presso il suo Ufficio Postale potra' avere tutti i dettagli direttamente da un consulente, se vuole le fisso un appuntamento quando le e' piu' comodo... ",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 3,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": false,
                  "previewLabel": ""
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": [
                  {
                    "label": "Si",
                    "value": "Si"
                  },
                  {
                    "label": "Mi rechero' all'ufficio postale",
                    "value": "Mi rechero' all'ufficio postale"
                  },
                  {
                    "label": "No sono interessato",
                    "value": "Non sono interessato"
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
                  "label": "MotivoNegativo",
                  "value": "MotivoNegativo",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "Rifiuto C : Costa troppo",
                  "value": "C",
                  "type": 1
                },
                {
                  "label": "E",
                  "value": "and",
                  "type": 3
                },
                {
                  "label": "InteresseAppuntamento",
                  "value": "InteresseAppuntamento",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "Mi rechero' all'ufficio postale",
                  "value": "Mi rechero' all'ufficio postale",
                  "type": 1
                }
              ],
              "expression": "and(001,000)"
            }
          ],
          "queries": [
            {
              "key": "PossessoDocumentoReddito",
              "label": "o Grazie, in questo periodo di emergenza sanitaria sarebbe piu' opportuno fissare un appuntamento. Le ricordo che per la richiesta di finanziamento dovra' avere con sé i seguenti documenti: Sei in possesso del documento di reddito ",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 3,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": true,
                  "previewLabel": "Documento di reddito"
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": [
                  {
                    "label": "Con requisiti",
                    "value": "Con requisiti"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "id": "002",
      "pageName": "Appuntamento",
      "elements": [
        {
          "id": "000",
          "formType": 0,
          "aggregatedVisibilityConditions": [],
          "queries": [
            {
              "key": "PossessoDocumentoReddito",
              "label": "Sei in possesso del documento di reddito?",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 3,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": true,
                  "previewLabel": "Documento di reddito"
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": [
                  {
                    "label": "Con requisiti",
                    "value": "Con requisiti"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "001",
          "formType": 0,
          "aggregatedVisibilityConditions": [
            {
              "condition": [
                {
                  "label": "PossessoDocumentoReddito",
                  "value": "PossessoDocumentoReddito",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "Con requisiti",
                  "value": "Con requisiti",
                  "type": 1
                }
              ],
              "expression": "and(000)"
            }
          ],
          "queries": [
            {
              "key": "NoteOP",
              "label": "Note OP:",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": true,
                "responseType": 1,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": false,
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
          "id": "002",
          "formType": 4,
          "aggregatedVisibilityConditions": [
            {
              "condition": [
                {
                  "label": "PossessoDocumentoReddito",
                  "value": "PossessoDocumentoReddito",
                  "type": 0
                },
                {
                  "label": "uguale a",
                  "value": "=",
                  "type": 2
                },
                {
                  "label": "Con requisiti",
                  "value": "Con requisiti",
                  "type": 1
                }
              ],
              "expression": "and(000)"
            }
          ],
          "queries": [
            {
              "key": "DataAppuntamento",
              "label": "DataAppuntamento",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 4,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": true,
                  "previewLabel": "Data appuntamento"
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": []
              }
            },
            {
              "key": "OraAppuntamento",
              "label": "OraAppuntamento",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 3,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": true,
                  "previewLabel": "Ora appuntamento"
                },
                "additionalInformation": {
                  "prefix": "",
                  "suffix": ""
                },
                "options": [
                  {
                    "label": "10:00",
                    "value": "10:00"
                  },
                  {
                    "label": "10:30",
                    "value": "10:30"
                  },
                  {
                    "label": "11:00",
                    "value": "11:00"
                  },
                  {
                    "label": "11:30",
                    "value": "11:30"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "id": "003",
      "pageName": "Fine intervista",
      "elements": [
        {
          "id": "001",
          "formType": 2,
          "aggregatedVisibilityConditions": [],
          "queries": [
            {
              "key": "Esito",
              "label": "",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 0,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": true,
                  "previewLabel": "Esito"
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
          "formType": 3,
          "aggregatedVisibilityConditions": [],
          "queries": [
            {
              "key": "",
              "label": "Ringraziandola per il tempo che ci ha dedicato, \nle ricordiamo che la telefonata e' stata a contenuto promozionale e la informiamo che per esercitare i diritti riconosciuti dall'art. <b>7 del D.lgs. n. 196/2003 </b> (Codice in materia di protezione dei dati personali), \ncome ad esempio: \n- il diritto di accesso ai Suoi dati personali \n- l’aggiornamento, la cancellazione o la trasformazione in forma anonima \n- il diritto di opporsi al trattamento per finalita' promozionali\n\ne' possibile rivolgersi al Centro Servizi Privacy di *Poste Italiane S.p.A.*  – societa' con socio unico, con sede in <b> Via August von Platen n. 9 - 87100 - Cosenza </b> . \n\nIn alternativa, puo' inviare una comunicazione a mezzo e.mail all’indirizzo di posta elettronica centroserviziprivacy@posteitaliane.it oppure via fax al numero 0698685343. \n\n<b>Buona serata/giornata</b>\n\n---",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
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
          "id": "003",
          "formType": 0,
          "aggregatedVisibilityConditions": [],
          "queries": [
            {
              "key": "RimozioneListePrivacy",
              "label": "Vuole essere rimosso dalle liste?",
              "fieldAutoFillConditions": [],
              "fieldObligatoryConditions": [],
              "parameters": {
                "isDateTimeEnabled": false,
                "isFreeInputEnabled": false,
                "isTextBox": false,
                "responseType": 5,
                "apiConfig": {
                  "url": "",
                  "method": ""
                },
                "previewConfig": {
                  "isVisible": false,
                  "previewLabel": ""
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
    }
  ],
  "flow": [
    {
      "condition": {
        "flowOption": 1,
        "aggregatedConditions": [
          {
            "condition": [
              {
                "label": "Titolare",
                "value": "Titolare",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "No",
                "value": "No",
                "type": 1
              }
            ],
            "expression": "and(000)",
            "effect": "003"
          }
        ]
      },
      "start": "000",
      "stop": "001"
    },
    {
      "condition": {
        "flowOption": 1,
        "aggregatedConditions": [
          {
            "condition": [
              {
                "label": "MotivoNegativo",
                "value": "MotivoNegativo",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "Rifiuto A : Non mi serve, ho gia' un prodotto di finanziamento BP in corso",
                "value": "A",
                "type": 1
              },
              {
                "label": "O",
                "value": "or",
                "type": 3
              },
              {
                "label": "MotivoNegativo",
                "value": "MotivoNegativo",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "Rifiuto B : Non mi serve rinnovare la cessione del quinto",
                "value": "B",
                "type": 1
              },
              {
                "label": "O",
                "value": "or",
                "type": 3
              },
              {
                "label": "MotivoNegativo",
                "value": "MotivoNegativo",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "Rifiuto D : Non ho tempo, ci pensero' piu' avanti",
                "value": "D",
                "type": 1
              }
            ],
            "expression": "or(004,003,002)",
            "effect": "003"
          },
          {
            "condition": [
              {
                "label": "MotivoNegativo",
                "value": "MotivoNegativo",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "Rifiuto C : Costa troppo",
                "value": "C",
                "type": 1
              },
              {
                "label": "E",
                "value": "and",
                "type": 3
              },
              {
                "label": "InteresseAppuntamento",
                "value": "InteresseAppuntamento",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "No sono interessato",
                "value": "Non sono interessato",
                "type": 1
              }
            ],
            "expression": "and(006,005)",
            "effect": "003"
          },
          {
            "condition": [
              {
                "label": "MotivoNegativo",
                "value": "MotivoNegativo",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "Rifiuto C : Costa troppo",
                "value": "C",
                "type": 1
              },
              {
                "label": "E",
                "value": "and",
                "type": 3
              },
              {
                "label": "InteresseAppuntamento",
                "value": "InteresseAppuntamento",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "Si",
                "value": "Si",
                "type": 1
              }
            ],
            "expression": "and(006,007)",
            "effect": "002"
          },
          {
            "condition": [
              {
                "label": "InteressatoProposta",
                "value": "InteressatoProposta",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "Si",
                "value": "Si",
                "type": 1
              },
              {
                "label": "E",
                "value": "and",
                "type": 3
              },
              {
                "label": "InteresseAppuntamento",
                "value": "InteresseAppuntamento",
                "type": 0
              },
              {
                "label": "uguale a",
                "value": "=",
                "type": 2
              },
              {
                "label": "Si",
                "value": "Si",
                "type": 1
              }
            ],
            "expression": "",
            "effect": "002"
          }
        ]
      },
      "start": "001",
      "stop": "003"
    },
    {
      "condition": {
        "flowOption": 0,
        "aggregatedConditions": []
      },
      "start": "002",
      "stop": "003"
    },
    {
      "condition": {
        "flowOption": 2,
        "aggregatedConditions": []
      },
      "start": "003",
      "stop": "send"
    }
  ]
}