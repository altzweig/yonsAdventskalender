// ===== Adventskalender JavaScript =====

// ===== DATUM OVERRIDE FÜR TESTS =====
// Setze hier ein Datum zum Testen, z.B.: new Date(2025, 11, 24) für 24. Dezember
// null = echtes aktuelles Datum verwenden
const overrideDate = null;
// Beispiele:
// const overrideDate = new Date(2025, 11, 1);  // 1. Dezember
// const overrideDate = new Date(2025, 11, 12); // 12. Dezember
// const overrideDate = new Date(2025, 11, 24); // 24. Dezember

// ===== Rätsel Array =====
// Die Rätsel können später ergänzt werden
const riddles = [
    {
        title: "🔢 Zahlenrätsel",
        text: "Welche Zahl kommt als nächstes?\n\n2, 4, 8, 16, ?\n\n(Tipp: Jede Zahl ist das Doppelte der vorherigen)"
    },
    {
        title: "🧮 Rechenaufgabe",
        text: "Ein Weihnachtsbaum hat 3 Reihen mit Kerzen.\nIn der ersten Reihe sind 2 Kerzen,\nin der zweiten 4 und in der dritten 6.\n\nWie viele Kerzen sind es insgesamt?"
    },
    {
        title: "🎄 Logikrätsel",
        text: "Der Weihnachtsmann hat 12 Rentiere.\nDie Hälfte davon sind männlich.\nWie viele Rentiere tragen ein Geweih?\n\n(Tipp: Alle Rentiere tragen ein Geweih!)"
    },
    {
        title: "⭐ Sternenzählen",
        text: "Am Himmel leuchten 100 Sterne.\n20 werden von Wolken verdeckt.\n15 neue Sterne erscheinen.\n\nWie viele Sterne siehst du jetzt?"
    },
    {
        title: "🎁 Geschenke-Rätsel",
        text: "Mama kauft 3 Geschenke für je 15€.\nPapa kauft 2 Geschenke für je 20€.\n\nWie viel haben beide zusammen ausgegeben?"
    },
    {
        title: "🔷 Geometrie",
        text: "Ein Schneeflocken-Kristall hat 6 Spitzen.\nWie viele Spitzen haben 8 Schneeflocken zusammen?"
    },
    {
        title: "🕐 Zeiträtsel",
        text: "Der Weihnachtsmann startet um 22:00 Uhr.\nEr braucht 8 Stunden für alle Geschenke.\n\nUm wie viel Uhr ist er fertig?"
    },
    {
        title: "🔢 Zahlenfolge",
        text: "Welche Zahl fehlt?\n\n1, 1, 2, 3, 5, 8, ?\n\n(Tipp: Fibonacci-Folge)"
    },
    {
        title: "🎅 Rentier-Logik",
        text: "Rudolf steht vor Dasher.\nDasher steht vor Dancer.\nWer steht ganz vorne?"
    },
    {
        title: "🧊 Eiswürfel-Mathe",
        text: "Ein Eiswürfel schmilzt jede Stunde um die Hälfte.\nNach 3 Stunden ist er 1cm groß.\n\nWie groß war er am Anfang?"
    },
    {
        title: "🌟 Lichterkette",
        text: "Eine Lichterkette hat 50 Lämpchen.\nJedes 5. Lämpchen ist rot.\nJedes 10. Lämpchen ist grün.\n\nWie viele rote Lämpchen gibt es?"
    },
    {
        title: "🎶 Weihnachtslieder",
        text: "In '12 Days of Christmas':\nWie viele Geschenke werden am 3. Tag\nINSGESAMT überreicht?\n\n(3 + 2 + 1 = ?)"
    },
    {
        title: "🔺 Pyramiden-Puzzle",
        text: "Baue eine Pyramide aus Geschenken:\n1. Reihe: 1 Geschenk\n2. Reihe: 2 Geschenke\n3. Reihe: 3 Geschenke\n4. Reihe: 4 Geschenke\n\nWie viele Geschenke insgesamt?"
    },
    {
        title: "❄️ Schnee-Mathematik",
        text: "Es fallen 5cm Schnee pro Stunde.\nNach 4 Stunden räumt jemand 10cm weg.\n\nWie hoch ist der Schnee dann?"
    },
    {
        title: "🎄 Baumschmuck",
        text: "Am Baum hängen Kugeln:\n🔴 Rote: doppelt so viele wie blaue\n🔵 Blaue: 5 Stück\n⭐ Goldene: 3 mehr als blaue\n\nWie viele Kugeln insgesamt?"
    },
    {
        title: "🔢 Magisches Quadrat",
        text: "Fülle das Quadrat so, dass\njede Zeile und Spalte 15 ergibt:\n\n8  1  ?\n?  5  7\n4  ?  2\n\nWelche Zahl fehlt in der Mitte oben?"
    },
    {
        title: "🎁 Verteilungs-Rätsel",
        text: "24 Kekse für 6 Kinder.\nJedes Kind soll gleich viele bekommen.\nWie viele Kekse bekommt jedes Kind?"
    },
    {
        title: "⏰ Countdown",
        text: "Heute ist der 18. Dezember.\nWie viele Tage sind es noch bis\nzum 1. Weihnachtstag (25. Dezember)?"
    },
    {
        title: "🧩 Muster-Erkennung",
        text: "Was kommt als nächstes?\n\n🎄🎁🎄🎁🎁🎄🎁🎁🎁🎄?\n\n(Wie viele 🎁 kommen nach dem 🎄?)"
    },
    {
        title: "🔵 Kugel-Tausch",
        text: "Schachtel A: 10 rote Kugeln\nSchachtel B: 10 blaue Kugeln\n\nDu nimmst 3 aus A und legst sie in B.\nDann 3 aus B (gemischt) zurück in A.\n\nGibt es jetzt mehr rote in B oder blaue in A?"
    },
    {
        title: "🎅 Alters-Rätsel",
        text: "Der Weihnachtsmann ist 5x so alt wie sein Elf.\nIn 10 Jahren ist er nur noch 3x so alt.\n\nWie alt ist der Elf heute?"
    },
    {
        title: "⭐ Sternen-Geometrie",
        text: "Ein 5-zackiger Stern hat 5 Spitzen.\nWie viele Linien brauchst du,\num ihn in einem Zug zu zeichnen\n(ohne abzusetzen)?"
    },
    {
        title: "🎄 Fast geschafft!",
        text: "Weihnachtsrätsel:\n\nWenn du 25 Kerzen hast und 5 anzündest,\nwie viele Kerzen bleiben übrig?\n\n(Tipp: Die ungezündeten brennen nicht ab!)"
    },
    {
        title: "🎅 Heiligabend!",
        text: "🎄 FROHE WEIHNACHTEN! 🎄\n\nLetztes Rätsel:\nDer Weihnachtsmann besucht\n24 Häuser in 12 Stunden.\nWie viele Minuten pro Haus hat er?\n\n(12 Stunden = ? Minuten ÷ 24)"
    }
];

// ===== DOM Elemente =====
const calendarGrid = document.getElementById('calendar');
const modal = document.getElementById('modal');
const modalDoorNumber = document.getElementById('modalDoorNumber');
const riddleTitle = document.getElementById('riddleTitle');
const riddleText = document.getElementById('riddleText');
const closeModalBtn = document.getElementById('closeModal');
const closeModalButton = document.getElementById('closeModalBtn');

// ===== Hilfsfunktionen =====
function getCurrentDate() {
    if (overrideDate) {
        return overrideDate;
    }
    return new Date();
}

function getCurrentDay() {
    const date = getCurrentDate();
    // Nur im Dezember die Türchen freischalten
    if (date.getMonth() === 11) { // 11 = Dezember (0-basiert)
        return date.getDate();
    }
    // Vor Dezember: keine Türchen freischalten
    if (date.getMonth() < 11) {
        return 0;
    }
    // Nach Dezember: alle Türchen freischalten
    return 24;
}

function isDoorUnlocked(doorNumber) {
    return doorNumber <= getCurrentDay();
}

// ===== Türchen erstellen =====
function createDoors() {
    // Array mit Zahlen 1-24 erstellen und mischen für zufällige Anordnung
    // Optional: Zahlen in Reihenfolge lassen
    const doorNumbers = Array.from({ length: 24 }, (_, i) => i + 1);
    
    // Türchen in zufälliger Reihenfolge anordnen (optional auskommentieren für Reihenfolge)
    // shuffleArray(doorNumbers);
    
    doorNumbers.forEach(num => {
        const door = document.createElement('div');
        door.className = 'door';
        door.textContent = num;
        door.dataset.day = num;
        
        if (!isDoorUnlocked(num)) {
            door.classList.add('locked');
        }
        
        door.addEventListener('click', () => handleDoorClick(num, door));
        calendarGrid.appendChild(door);
    });
}

// Optional: Array mischen
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===== Türchen Klick Handler =====
function handleDoorClick(dayNumber, doorElement) {
    if (!isDoorUnlocked(dayNumber)) {
        // Leichte Schüttel-Animation für gesperrte Türchen
        doorElement.style.animation = 'none';
        doorElement.offsetHeight; // Reflow triggern
        doorElement.style.animation = 'shake 0.5s ease';
        return;
    }
    
    // Türchen als geöffnet markieren
    doorElement.classList.add('opened');
    doorElement.classList.add('opening');
    
    // Modal öffnen mit leichter Verzögerung für Animation
    setTimeout(() => {
        openModal(dayNumber);
    }, 200);
}

// ===== Modal Funktionen =====
function openModal(dayNumber) {
    const riddle = riddles[dayNumber - 1] || {
        title: "Rätsel",
        text: "Für diesen Tag ist noch kein Rätsel hinterlegt."
    };
    
    modalDoorNumber.textContent = `Türchen ${dayNumber}`;
    riddleTitle.textContent = riddle.title;
    riddleText.textContent = riddle.text;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Event Listeners =====
closeModalBtn.addEventListener('click', closeModal);
closeModalButton.addEventListener('click', closeModal);

// Modal schließen bei Klick außerhalb
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Modal schließen mit Escape-Taste
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== CSS für Schüttel-Animation hinzufügen =====
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// ===== Initialisierung =====
document.addEventListener('DOMContentLoaded', () => {
    createDoors();
    
    // Debug-Info in Konsole
    console.log('🎄 Adventskalender geladen');
    console.log('📅 Aktuelles Datum:', getCurrentDate().toLocaleDateString('de-DE'));
    console.log('🚪 Freigeschaltete Türchen:', getCurrentDay());
    
    if (overrideDate) {
        console.log('⚠️ ACHTUNG: Override-Datum aktiv!');
    }
});
