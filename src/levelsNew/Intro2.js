export default {
  "background": "backgrounds/basecamp_final_hr.jpg",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/ranger.png",
        "top": "49%",
        "left": "37%",
        "size": "38%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "50%",
        "left": "70%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "55%",
        "left": "81%",
        "size": "35%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Remember, national parks are \nhere for your enjoyment, \nbut it’s important to \nbe safe and follow \nLeave No Trace Principles.",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Have a great visit!",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Thanks!",
        "top": "55%",
        "left": "85%"
      },
      {
        "type": "chat",
        "text": "Thanks!",
        "top": "51%",
        "left": "74%"
      }
    ]
  ],
  "layerSteps": [
    {
      "index": 0
    },
    {
      "index": 1,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 2,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "stepType": "Decision",
      "nextScene": "CompassNavigator",
      "options": [
        {
          "description": "Continue to Trailhead"
        }
      ]
    }
  ]
}
