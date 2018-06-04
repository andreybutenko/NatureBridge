export default {
  "background": "backgrounds/basecamp_final.png",
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
        "text": "Welcome to the National Park!",
        "top": "41%",
        "left": "53%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Through your visit, \nyou’ll learn about the Park\nand how we interact with \nthe environment. ",
        "top": "32%",
        "left": "53%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "If you explore the entire Park,\nyou’ll become a Deputy Ranger!\nYou can earn badges by completing \nchallenges along the way.\nKeep an eye out for \nsquirrels, which will add to your collection of badges.",
        "top": "32%",
        "left": "51%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "As you hike, you’ll see examples of how \nhuman-caused climate change impacts the Park.",
        "top": "32%",
        "left": "51%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Ok!",
        "top": "44%",
        "left": "68%",
        "flip": true
      },
      {
        "type": "chat",
        "text": "Sounds good!",
        "top": "47%",
        "left": "85%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Here’s a map you can use to explore all the trails. It’s important to practice navigation before heading out. Can you use your map and compass to find the trail to the mountain pass?",
        "top": "31%",
        "left": "52%",
        "flip": false
      }
    ]
  ],
  "layerSteps": [
    null,
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
      "index": 3,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 4,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 5,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 6,
      "stepType": "Decision",
      "prompt": "",
      "nextScene": "CompassTutorial",
      "highlightMap": true,
      "options": [
        {
          "description": "Find the trail!"
        }
      ]
    }
  ]
}
