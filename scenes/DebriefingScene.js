class DebriefingScene extends Phaser.Scene {

    constructor ()
    {
        super('DebriefingScene');
    }
     preload ()
    {
        this.load.image('debriefingscene', 'assets/images/zones.png');
    }

     create ()
    {           
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'debriefingscene');
    }

     update ()
    {}
}