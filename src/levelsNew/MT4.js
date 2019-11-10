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
        "top": "62%",
        "left": "56%",
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
        "text": "Wait a minute, it's important to stay on the trail.",
        "top": "61%",
        "left": "56%"
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
        "text": "If we go off trail, we can trample delicate plants and can damage the ecosystem.",
        "top": "62%",
        "left": "56%"
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
        "text": "Let's take a picture of the landslide to report back to the ranger!",
        "top": "62%",
        "left": "56%"
      }
    ]
  ],
  "layerSteps": [
    {
      "index": 0
    },
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
          "description": "\"Let's find a different route to get around the landslide to the trail on the other side.\""
        },
        {
          "layer": "6",
          "description": "\"Let's turn around and go back.\""
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
          "description": "\"Let's turn around.\""
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
      ]
    },
    {
      "index": 7,
      "stepType": "Click through",
      "journalEntry": "Changes in the amount of rainfall due to climate change can cause landslides where there haven't been any before. These landslides can impact trails and roads. Should we rebuild trails and roads that get destroyed? Why or why not?",
      "nextScene": "CompassNavigator"
    }
  ]
}
