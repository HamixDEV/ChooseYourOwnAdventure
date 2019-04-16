// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {
        start: {
            message: "You come across a dark cave",
            choices: [
                {
                    text: "Enter the cave",
                    nextLevel: "cave",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
                {
                    text: "Slap Cave?",
                    nextLevel: "slapcave",
                }
            ]
        },
         slapcave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "'pls stop'",
            choices: [
                {
                    text: "Stop?",
                    nextLevel: "start",
                },
                {
                    text: "Start Punching",
                    nextLevel: "CaveMan",
                },
            ]
        },

        cave: {
            background_image: "orge.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a big orge",
            choices: [
                {
                    text: "Fight",
                    nextLevel: "End",
                },
                  {
                    text: "Run away!",
                    nextLevel: "field",
                },
            ]
        },
         CaveMan: {
            background_image: "punch.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a 'caveman' and get punched back",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },


        field: {
             background_image: "burger.gif",
            message: "You find a cheeseburger",
            choices: [
                {
                    text: "Eat it",
                    nextLevel: "Victoryll",
                },
                    {
                    text: "Take it with you",
                    nextLevel: "Cavept2",
                },
            ]
        },
        Cavept2: {
            background_image: "orge.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a big orge",
            choices: [
                {
                    text: "Fight",
                    nextLevel: "End11",
                },
                  {
                    text: "Give cheeseburger",
                    nextLevel: "Victory",
                },
            ]
        },
          Victory: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "He takes you our of the cave and shows you the way home",
            choices: [
                {
                    text: "Yahh!! you win, play again pls",
                    nextLevel: "start",
                }
            ]
        },
         Victoryll: {
            background_image: "Eating.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You're Famsihed now",
            choices: [
                {
                    text: "Yahh!! you win, play again pls",
                    nextLevel: "start",
                }
            ]
        },
         End: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You're Defeated",
            choices: [
                {
                    text: "You lose",
                    nextLevel: "start",
                }
            ]
        },
        End11: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You're Defeated and lose you're burger",
            choices: [
                {
                    text: "You lose, play again",
                    nextLevel: "start",
                }
            ]
        },

    }
};
