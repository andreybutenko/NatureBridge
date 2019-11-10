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
        "text": "I heard there was a lot of flooding this year because the snowpack melted early this season.",
        "top": "21%",
        "left": "72%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "So changes in the river affect both the wildlife and trail access!",
        "top": "17%",
        "left": "80%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Yeah, the river was so high in the spring that it destroyed the bridge...",
        "top": "23%",
        "left": "71%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Now there's not enough water in the river and that salmon we saw was stranded!",
        "top": "17%",
        "left": "78%"
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
