class TitleScene extends Phaser.Scene {

    constructor ()
    {
        super('TitleScene');
    }
     preload ()
    {
        this.load.image('titlescene', 'assets/images/titlescene.png');
    }

     create ()
    {           
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'titlescene').setDisplaySize(width, height);

    // F11 um das Spiel auf Vollbildschirm zu togglen
        this.input.keyboard.on('keydown-F11', () => {
        //Funktion für den globalen Vollbildschirm toggle über mehrere Szenen hinweg
            event.preventDefault();
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
        this.input.keyboard.on('keydown', (event) => {
        if (event.key === 'F11') {return;}//F11 ausschließen
            this.input.keyboard.off('keydown'); // verhindert dass weitere Tasten gedrückt werden können
            this.cameras.main.fadeOut(500, 0 , 0, 0); //Fade Out nach Schwarz in 500ms
            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.start('MenuScene');
            });
        });
    }

     update ()
    {}
}
