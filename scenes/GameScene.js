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
        this.load.image('zones', 'assets/images/spielszene.png');
        //Ticket Daten laden
        this.load.json('ticketData', 'data/tickets.json'); 
        this.load.json('employees', 'data/employees.json');
        this.load.json('levels', 'data/levels.json');
    }

     create ()
    {        


// Hintergrund auf die Größe des Bildschirms anpassen
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);

/* Email Posteingang Element erstellen */
  this.emails = [];
  this.emailCount = 0;

  // Button als interaktives Phaser-Objekt
  const btnBg = this.add.rectangle(400, 50, 200, 44, 0x4a90d9)
    .setInteractive({ useHandCursor: true });

  const btnText = this.add.text(400, 50, 'E-Mail hinzufügen ', {
    fontSize: '16px', color: '#ffffff'
  }).setOrigin(0.5);

  // Hover-Effekt
  btnBg.on('pointerover', () => btnBg.setFillStyle(0x357abd));
  btnBg.on('pointerout',  () => btnBg.setFillStyle(0x4a90d9));

  btnBg.on('pointerdown', () => this.addEmail());
}

addEmail() {
  const yStart = 120;
  const y = yStart + this.emails.length * 110;

  const container = this.add.container(this.scale.width / 2, y);

  const bg = this.add.rectangle(0, 0, 500, 90, 0xffffff)
    .setStrokeStyle(1, 0xdddddd);

  const sender = this.add.text(-230, -22, `phishing@bank${this.emailCount}.de`, {
    fontSize: '13px', color: '#9a3ce7'  // rot für verdächtige Absender
  });

  const subject = this.add.text(-230, 8, `Anfrage #${this.emailCount} für einen Bürostuhl!`, {
    fontSize: '15px', color: '#222', fontStyle: 'bold'
  });

  container.add([bg, sender, subject]);
  this.emails.push(container);
  this.emailCount++;
}

        
        // Tickets erstellen
  /*  for (let i = 0; i < 4; i++)
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
        }); */
    

     update ()
    {}
}
