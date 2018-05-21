export default {
  "background": "backgrounds/old_mill_river.png",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "50%",
        "left": "25%",
        "size": "35%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "60%",
        "left": "15%",
        "size": "35%",
        "flip": false
      }
    ],
    [
      {
        "type": "sprite",
        "source": "squirrel.png",
        "top": "60%",
        "left": "58%",
        "size": "8%",
        "dancing": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Wow, this must\nbe some old\nmining equipment.",
        "top": "44%",
        "left": "1%",
        "flip": true
      }
    ],
    [],
    [
      {
        "type": "chat",
        "text": "Hmm, that sign\nsays the \nequipment is \nquite fragile.",
        "top": "40%",
        "left": "1%",
        "flip": true
      }
    ],
    [],
    [
      {
        "type": "chat",
        "text": "I guess the river will\nkeep eroding until\nthis old site is washed away.",
        "top": "35%",
        "left": "32%",
        "flip": false
      }
    ],
    [
      {
        "type": "label",
        "text": "This looks like\nthe end of the\nHistorical Trail.",
        "top": "41%",
        "left": "40%"
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
      "prompt": "You come up to a large piece of equipment next to the trail.",
      "options": [
        {
          "layer": "2",
          "description": "Next"
        }
      ]
    },
    {
      "index": 2,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 3,
      "stepType": "Decision",
      "prompt": "The equipment is covered in rust and you see that the river is lapping up against it.",
      "options": [
        {
          "layer": "4",
          "description": "\"Let's take a closer look!\""
        },
        {
          "layer": "4",
          "description": "\"We better keep our distance...\""
        }
      ]
    },
    {
      "index": 4,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": "5",
          "description": "Read the sign"
        }
      ]
    },
    {
      "index": 5,
      "stepType": "Decision",
      "prompt": "This mining site has been out of use for over 100 years and the equipment remains quite fragile. The National Park Service has restored the equipment in the past so visitors can experience what it was like to work here. However, now the adjacent river has eroded closer to the equipment and continued restoration of the site has ended in order to preserve the natural erosion of the river.",
      "options": [
        {
          "layer": 6,
          "description": "Next"
        }
      ]
    },
    {
      "stepType": "Click through",
      "journalEntry": "In some situations, the National Park Service must choose between protecting the natural landscape and protecting historical sites. If you were the land manager in this situation, would you choose to protect the historic mill or would you protect the river and allow it to erode naturally?"
    },
    {
      "index": 6,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": 1,
          "description": "Turn around and head back to the trail head"
        }
      ],
      "nextScene": "CompassNavigator"
    }
  ]
}
