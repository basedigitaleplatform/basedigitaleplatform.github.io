export const T = {
    "template": [
      {
        "id": "001",
        "pageName": "Conferma Dati Anagrafici",
        "elements": [
          {
            "id": "000",
            "formType": 0,
            "visibilityConditions": [],
            "aggregatedVisibilityConditions": [],
            "queries": [
              {
                "key": "Nome",
                "label": "Nome",
                "parameters": {
                  "isDateTimeEnabled": false,
                  "isFreeInputEnabled": false,
                  "responseType": 1,
                  "options": []
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
                "key": "Cognome",
                "label": "Cognome",
                "parameters": {
                  "isDateTimeEnabled": false,
                  "isFreeInputEnabled": false,
                  "responseType": 1,
                  "options": []
                }
              }
            ]
          }
        ]
      },
      {
        "id": "000",
        "pageName": "Acquisizione Dati",
        "elements": [
          {
            "id": "000",
            "formType": 0,
            "visibilityConditions": [],
            "aggregatedVisibilityConditions": [],
            "queries": [
              {
                "key": "PossiedeAutomobile",
                "label": "Possiede un'automobile?",
                "parameters": {
                  "isDateTimeEnabled": false,
                  "isFreeInputEnabled": false,
                  "responseType": 5,
                  "options": [
                    {
                      "label": "Si",
                      "value": "true"
                    },
                    {
                      "label": "No",
                      "value": "false"
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
                "key": "Targa",
                "label": "Può dirmi la targa della sua automobile?",
                "parameters": {
                  "isDateTimeEnabled": false,
                  "isFreeInputEnabled": false,
                  "responseType": 1,
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
        "start": "001",
        "stop": "000"
      },
      {
        "condition": {
          "flowOption": 2,
          "conditions": [],
          "aggregatedConditions": []
        },
        "start": "000",
        "stop": "send"
      }
    ]
  }
  