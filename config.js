
/* Phaser Spielkonfiguration */
var config = {
    type: Phaser.AUTO,
    dom: {createContainer: true},
    input: {
        keyboard: true,
    },
    /* Einstellen von Scale Mode für eine automatische Spielauflösung*/
    scale: {
        //parent: divId,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        transparent: true,
    /* Full HD Hauptauflösung*/
            width: 1920,
            height: 1080,
            //zoom: 1,
    /* Kleinste Größe 420p*/
        min: {
            width: 640,
            height: 480,
        },

    /* Größte Größe 2k*/
        max: {
            width: 2560,
            height: 1440
        },
    // zoom: 1, // Größe des Canvas = Spielgröße * Zoom
    },
    autoRound: false,
    scene: [ TitleScene, MenuScene, GameScene, DebriefingScene]
};

var game = new Phaser.Game(config);
