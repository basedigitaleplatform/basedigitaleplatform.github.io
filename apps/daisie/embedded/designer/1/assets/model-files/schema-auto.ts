export const D = {
    data : {
        "Nome" : "",
        "Cognome" : "",
        "Targa" : "",
        "PossiedeAutomobile" : ""
    },
    dataschema : 
        {
            "Nome": {
              "type": "text",
              "required": true,
              "constraints": {
                "max": "",
                "min": "",
                "regex": ""
              },
              "compilationConditions":[],
              "requiredConditions":[]

            },
            "Cognome": {
              "type": "text",
              "required": true,
              "constraints": {
                "max": "",
                "min": "",
                "regex": ""
              },
              "compilationConditions":[],
              "requiredConditions":[]
            },
            "Targa": {
              "type": "text",
              "required": true,
              "constraints": {
                "max": "",
                "min": "",
                "regex": "\\w{2}\\d{3}\\w{2}"
              },
              "compilationConditions":[],
              "requiredConditions":[]
            },
            "PossiedeAutomobile": {
              "type": "boolean",
              "required": false,
              "constraints": {
                "max": "",
                "min": "",
                "regex": ""
              },
              "compilationConditions":[],
              "requiredConditions":[]
            }
          }
} 


