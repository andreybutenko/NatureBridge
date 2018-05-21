export default {
  "background": "backgrounds/weeders_px-01.png",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/weeders.png",
        "top": "57%",
        "left": "51%",
        "size": "36%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "55%",
        "left": "31%",
        "size": "34%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "60%",
        "left": "22%",
        "size": "35%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Thanks for your help!",
        "top": "49%",
        "left": "56%",
        "flip": true
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "stepType": "Click through",
      "journalEntry": "Growth of an invasive species combined with changes in overall climate can have an extremely damaging impact on native species. What are some ways that people can prevent and eliminate the spread of invasive species?",
      "nextScene": "MT2"
    }
  ]
}
