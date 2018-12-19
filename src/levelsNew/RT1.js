export default {
  "background": "backgrounds/salmon_hr.jpg",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "34%",
        "left": "32%",
        "size": "35%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "45%",
        "left": "20%",
        "size": "35%",
        "flip": false
      }
    ],
    [],
    [
      {
        "type": "chat",
        "text": "Woah, is that a\nsalmon in the\nwater?",
        "top": "43%",
        "left": "26%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Yeah, it looks like it's\nstranded and cut off from\nthe rest of the river.",
        "top": "33%",
        "left": "40%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "I've heard it's been\ngetting warmer and\ndrier the past\nseveral years...",
        "top": "44%",
        "left": "27%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "... and that's been\nchanging how much\nwater is in\nthe river.",
        "top": "45%",
        "left": "28%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "How does that affect\nthe salmon?",
        "top": "34%",
        "left": "40%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "The snow is melting\nearlier and so less\nwater flows through\nthe river during\nsummer.",
        "top": "45%",
        "left": "27%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Each year, salmon\ncome back to the\nsame place to lay\ntheir eggs,\nbut if the water is\nlower it can impact\nthe fish.",
        "top": "45%",
        "left": "27%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "I wish we could help\nthe salmon...",
        "top": "33%",
        "left": "40%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Wait! We can't\ndisturb the\nwildlife!",
        "top": "43%",
        "left": "26%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "We have to leave\nit as it is,\neven if it's\nstranded!",
        "top": "44%",
        "left": "27%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Oh, I see...\nGood luck, salmon!",
        "top": "34%",
        "left": "39%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "It's too bad\nwe can't do\nanything to \nhelp it...",
        "top": "34%",
        "left": "40%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "But even if we\ncan't help the salmon\ndirectly, we can\nsupport the Park’s\nrestoration efforts!",
        "top": "33%",
        "left": "39%",
        "flip": false
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
      "prompt": "You start walking along the river. Just off the trail, you see something moving in the water.",
      "options": [
        {
          "layer": "2",
          "description": "Next"
        }
      ]
    },
    {
      "index": 2,
      "stepType": "Click through"
    },
    {
      "index": 3,
      "stepType": "Click through"
    },
    {
      "index": 4,
      "stepType": "Click through"
    },
    {
      "index": 5,
      "stepType": "Click through"
    },
    {
      "index": 6,
      "stepType": "Click through"
    },
    {
      "index": 7,
      "stepType": "Click through"
    },
    {
      "index": 8,
      "stepType": "Click through"
    },
    {
      "index": 9,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": "10",
          "description": "Pick up the salmon and throw it back into the river."
        },
        {
          "layer": "10",
          "description": "Dig a trench to help the salmon get back to the river on its own."
        },
        {
          "layer": "13",
          "description": "Walk away and leave the salmon stranded."
        }
      ]
    },
    {
      "index": 10,
      "stepType": "Click through"
    },
    {
      "index": 11,
      "stepType": "Click through",
      "prompt": "",
      "options": [
        {
          "layer": 1,
          "description": "Walk away and leave the salmon stranded."
        }
      ]
    },
    {
      "index": 12,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": "13",
          "description": "Walk away and leave the salmon stranded."
        }
      ]
    },
    {
      "index": 13,
      "stepType": "Click through"
    },
    {
      "index": 14,
      "stepType": "Click through",
      "journalEntry": "Salmon have adapted to slow climate changes in the past, but it is not known if they will be able to adapt fast enough to the current rate of climate changes. How much do you think the Park should intervene to help the ecosystem, including fish and other animals, to adjust? How much should we let the ecosystem naturally come to a new balance?",
      "nextScene": "RT2"
    }
  ]
}