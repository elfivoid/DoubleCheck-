class GameScene extends Phaser.Scene {

   
    constructor ()
    {
        super('GameScene');
        this.ticketIndex = 0;
        this.scoreSecurity = 100;
        this.scoreSatisfaction = 50;
    }
     preload ()
    {   //Bilder und Assets laden
        this.load.image('zones', 'assets/images/zones.png');
        //Ticket Daten laden
        this.load.json('ticketData', 'data/tickets.json'); 
        this.load.json('employees', 'data/employees.json');
        this.load.json('levels', 'levels.json');
    }

     create ()
    {        


// Hintergrund auf die Größe des Bildschirms anpassen
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);
//Platzhalter
        // Schreibtisch
        let officedesk = this.add.rectangle(width / 2, height, width, height * 0.4, 0x808080);
        
        //Bildschirm
        this.monitor = this.add.rectangle(width / 2, height / 2 - 50, 800, 500, 0xffffff);
        this.monitor.setStrokeStyle(10, 0x333333);

        
        
        // Tickets erstellen
   for (let i = 0; i < 4; i++)
        {
            const ticket = this.add.rectangle(width / 4, height / 4 - 50, 800, 500, 0xfff234ff);
            ticket.setStrokeStyle(10, 0x333333);

            ticket.setInteractive({ draggable: true });
        }

        this.input.on('dragstart', function (pointer, gameObject) {

            // das gewählte GameObj wird nach oben geschoben
            this.children.bringToTop(gameObject);

        }, this);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // erstellt eine versteckte Zone für die Tickets
        this.add.zone(width / 4, height / 4 - 50, 800, 500, 0xfff234ff);

        //lädt die Tickets aus der JSON Datei
        this.tickets = this.cache.json.get('ticketData');
        this.ticketIndex = 0;
        //Overfläche die bei Mausklick Rechtecke spawnt
        let ticketSpawner = this.add.rectangle(960, 900, 200, 60,0x4488ff);
        ticketSpawner.setInteractive();
        ticketSpawner.on('pointerdown', () =>{
            this.showTicket(this.ticketIndex);
            this.ticketIndex++;
        });
    }

     update ()
    {}
}
