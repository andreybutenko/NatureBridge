export default {
  "background": "backgrounds/washed_out_bridge_hr.jpeg",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "18%",
        "left": "76%",
        "size": "22%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "23%",
        "left": "70%",
        "size": "24%",
        "flip": true
      }
    ],
    [],
    [],
    [
      {
        "type": "chat",
        "text": "I heard there was a lot of\nflooding this year because\nthe snowpack melted earlier\nthis season.",
        "top": "9%",
        "left": "32%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "So changes in the river\naffect both the wildlife and\ntrail access!",
        "top": "2%",
        "left": "77%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Yeah, there was too\nmuch flow earlier and it\ndestroyed the bridge...",
        "top": "10%",
        "left": "42%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Now there's not enough\nflow and it stranded the\nsalmon we saw!",
        "top": "8%",
        "left": "42%",
        "flip": true
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "index": 1,
      "stepType": "Decision",
      "prompt": "The trail turns to cross the river, but there is no bridge and the river is not passable.",
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
      "prompt": "A small sign has been posted: \"Due to recent flooding, the trail beyond this point is no longer accessible.\"",
      "options": [
        {
          "layer": "3",
          "description": "Next"
        }
      ]
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
