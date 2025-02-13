export const D = {

    "data": {
        "mostvaluedaspect": "MI",
        "areyousatisfied": "true",
        "advices": "mamma mia",
        "wordofmouth": "20090",
        "timeofpurchase": "Trezzano",
        "dateofcompletion": "",
        "email": "mail.mail@mail.com",
        "isdateenabled": "cdscd",
        "MARKDOWNTEXTEXAMPLE" :
`
### Questo è un esempio di testo in markdown

Servirà a capire se
- Gli elenchi funzionano
- L'interpolazione funziona: ah .. questa è la tua mail: *{{email}}*
- Esiste supporto a <u>marche</u> html

> La saggezza è la via degli stolti.


---
![Una immagine](/favicon.ico)

Un link a [DVR Italia](https://www.dvritalia.it).

`,
        "ANOTHERMARKDOWN" : 
`
##### A title for this markdown

- A list
	- within a list

---
`
    },

    "dataschema": {
        "mostvaluedaspect": {
            "type": "text",
            "required": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
            "compilationConditions": [],
            "requiredConditions": [],
            "aggregatedRequiredConditiions": []
        },
        "areyousatisfied": {
            "type": "boolean",
            "required": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
            "compilationConditions": [],
            "requiredConditions": [],
            "aggregatedRequiredConditiions": []
        },
        "advices": {
            "type": "text",
            "required": false,
            "constraints": {
                "max": "",
                "min": "",
                "regex": "^[a-zA-Z ]*$"
            },
            "compilationConditions": [
                {
                    "id": "000",
                    "operator": "=",
                    "operands": {
                        "key": "email",
                        "expectedValue": "mail.mail@mail.com",
                        "operandsType": "text"
                    },
                    "computedValue": "mamma mia"
                },
                {
                    "id": "001",
                    "operator": "=",
                    "operands": {
                        "key": "wordofmouth",
                        "expectedValue": "2",
                        "operandsType": "number"
                    },
                    "computedValue": "mamma tua"
                }
            ],
            "requiredConditions": [
                {
                    "id": "000",
                    "operator": "=",
                    "operands": {
                        "key": "wordofmouth",
                        "expectedValue": "2",
                        "operandsType": "number"
                    }
                }
            ],
            "aggregatedRequiredConditiions": []
        },
        "wordofmouth": {
            "type": "number",
            "required": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
            "compilationConditions": [],
            "requiredConditions": [],
            "aggregatedRequiredConditiions": []
        },
        "timeofpurchase": {
            "type": "text",
            "required": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
            "compilationConditions": [],
            "requiredConditions": [],
            "aggregatedRequiredConditiions": []
        },
        "dateofcompletion": {
            "type": "datetime",
            "required": false,
            "constraints": {
                "max": "2023-05-19T16:04:00.135Z",
                "min": "2023-05-09T16:03:56.673Z",
                "regex": ""
            },
            "compilationConditions": [],
            "requiredConditions": [],
            "aggregatedRequiredConditiions": []
        },
        "email": {
            "type": "text",
            "required": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"
            },
            "compilationConditions": [],
            "requiredConditions": [],
            "aggregatedRequiredConditiions": []
        },
        "isdateenabled": {
            "type": "boolean",
            "required": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            }
        },
        "MARKDOWNTEXTEXAMPLE" : {
            "type": "text",
            "required": false,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            }
        },
        "ANOTHERMARKDOWN" : {
            "type": "text",
            "required": false,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            }
        }
    }
}