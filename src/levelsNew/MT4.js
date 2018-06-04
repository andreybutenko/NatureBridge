export default {
  "background": "backgrounds/landslide_hr.jpeg",
  "layers": [
    [],
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "57%",
        "left": "43%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "63%",
        "left": "52%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "squirrel.png",
        "top": "67%",
        "left": "85%",
        "size": "8%",
        "dancing": true
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "57%",
        "left": "43%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "63%",
        "left": "52%",
        "size": "35%",
        "flip": true
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "57%",
        "left": "43%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "63%",
        "left": "52%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "chat",
        "text": "Uh oh! What do we do?",
        "top": "56%",
        "left": "58%",
        "flip": false
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "57%",
        "left": "43%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "63%",
        "left": "52%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "chat",
        "text": "Wait a minute, it's\nimportant to stay on the\ntrail.",
        "top": "47%",
        "left": "57%",
        "flip": false
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "57%",
        "left": "43%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "63%",
        "left": "52%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "chat",
        "text": "If we go off trail, \nwe can trample delicate\nplants and can damage\nthe ecosystem.",
        "top": "46%",
        "left": "59%",
        "flip": false
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "57%",
        "left": "43%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "63%",
        "left": "52%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "chat",
        "text": "Let's take a picture\nof the landslide to\nreport back to the\nranger!",
        "top": "46%",
        "left": "59%",
        "flip": false
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "index": 1,
      "stepType": "Decision",
      "prompt": "Farther up the mountain, you run into a landslide that has fallen across the trail in front of you. ",
      "options": [
        {
          "layer": "2",
          "description": "Next"
        }
      ]
    },
    {
      "index": 2,
      "stepType": "Decision",
      "prompt": "You can see the trail continue on the other side, but it's not clear how to get there.",
      "options": [
        {
          "layer": "3",
          "description": "Next"
        }
      ]
    },
    {
      "index": 3,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": "4",
          "description": "\"Let's find a different route to get around the landslide to the trail on the other side\""
        },
        {
          "layer": "6",
          "description": "\"Let's turn around and go back\""
        }
      ]
    },
    {
      "index": 4,
      "stepType": "Click through"
    },
    {
      "index": 5,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": "6",
          "description": "\"Let's turn around\""
        }
      ]
    },
    {
      "index": 6,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": 7,
          "description": "Take a picture and head back."
        }
      ],
      "journalEntry": "With increased future temperatures, more precipitation will fall as rain rather than snow and the winter snowpack will start melting earlier in the year. These changes will result in more water running through rivers, which will carry more rocks (sediment) and other debris like wood. Likely, we will see more flooding as well as more river erosion, causing landslides next to existing rivers. Should we work to repair and maintain trails and roads that are damaged due to changes in rivers, should we start building new trails and roads from scratch in new places, or should we no longer have access to these areas?",
      "nextScene": "CompassNavigator"
    }
  ]
}
