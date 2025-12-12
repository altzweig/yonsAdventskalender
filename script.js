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
// Logikrätsel von Otto Janko - https://www.janko.at/Raetsel/
// Lizenz: CC-BY-NC-SA (Creative Commons 3.0)
const riddles = [
    {
        title: "🚪 Drei Brüder",
        text: "Du kommst an eine Weggabelung und weißt nicht, ob der linke oder der rechte Weg zu Deinem Ziel führt. Glücklicherweise ist gleich in der Nähe ein Haus, deren Bewohner Du fragen kannst.\n\nIn dem Haus wohnen drei Brüder. Einer sagt immer die Wahrheit, einer lügt immer, und der dritte lügt manchmal und manchmal nicht. Du weißt aber nicht, wer der drei Brüder wer ist.\n\nDu darfst zwei beliebige Fragen stellen, um herauszufinden, wohin du gehen musst. Eine Frage darfst Du nur an jeweils einen der drei Brüder richten.\n\nWas musst du wen fragen?",
        prevSolution: null
    },
    {
        title: "🔢 Selbstbezügliche Logik I",
        text: "Wähle bei jeder Frage die richtige Antwort aus:\n\n1. Die erste Aufgabe, deren Lösung B ist, ist Aufgabe (A) 1 (B) 2 (C) 3 (D) 4 (E) 5\n\n2. Die einzigen zwei aufeinander folgenden Aufgaben mit gleicher Lösung sind (A) 6 und 7 (B) 7 und 8 (C) 8 und 9 (D) 9 und 10 (E) 10 und 11\n\n3. Die Anzahl der Aufgaben, deren Lösung E ist, ist (A) 0 (B) 1 (C) 2 (D) 3 (E) 4\n\n... (20 Aufgaben insgesamt)\n\nFinde die konsistente Lösung für alle 20 Aufgaben!",
        prevSolution: "Frage einen beliebigen Bruder: »Würde einer deiner Brüder sagen, dass der linke Weg richtig ist?« Wenn JA, geh RECHTS. Wenn NEIN, geh LINKS. Dann frage denselben Bruder dieselbe Frage nochmal zur Bestätigung."
    },
    {
        title: "🔮 Pprills, Squirde und Glopps",
        text: "Alle gebildeten Leute wissen, dass Pprills, Squirde und Glopps einfach nur Formen von Nahfen sind. Es ist bewiesen, dass Squirde sowohl Glopps als auch Nahfen sind.\n\nAllerdings gibt es Glopps, die weder Squirde, Pprills noch Gdynxe sind. Zusätzlich gibt es Squirde, die weder Gdynxe noch Pprills sind.\n\nManche Pprills und manche Gdynxe sind Glopps. Manche Gdynxe sind Squirde, manche Glopps und manche sowohl Pprills als auch Squirde.\n\na) Gibt es unter den Gdynxen, die keine Nahfen sind, Glopps?\nb) Wenn ein Pprill ein Squird ist, ist es dann auf jeden Fall ein Glopp?\nc) Gibt es eine Kreatur, die Pprill, Nahf, Squird, Glopp UND Gdynx ist?",
        prevSolution: "Die Lösung ist: 1D, 2E, 3E, 4B, 5E, 6D, 7D, 8E, 9D, 10A, 11B, 12A, 13D, 14B, 15A, 16D, 17B, 18A, 19D, 20E"
    },
    {
        title: "🖖 Rikers Rasierapparat",
        text: "Data und Geordi müssen Rikers Rasierapparat reparieren. Auf der Rasto-Platine gibt es folgende Bauteile: Antimaterieeinheit (A), Führungsknoten (F), Gozalkalibratoren (G), Lateralsensorenphalanx (L), Kreisspule (K), Energietransmitter (E), Zwischenkonverter (Z), Brachionenkammer (B), Dorsalklappen (D), Helireflex (H), Induktionsphasenumkehrer (I), Materieemitter (M).\n\nDie Jefferson-Schaltung: A-F-G-L-K-E-Z-A (Ring)\nDer Letura-Ring: A-G-K-E-B-D-A (Ring)\nDie Kreuzmetaxe: A-Z-B-H-I-D-M-A (Ring)\n\nOrdne die Bauteile einem 4×3 Gitter zu, sodass alle drei Schaltungen möglich sind!",
        prevSolution: "a) Nein, unter den Gdynxen, die keine Nahfen sind, gibt es keine Glopps.\nb) Ja, wenn ein Pprill ein Squird ist, ist es auf jeden Fall ein Glopp.\nc) Ja, solche Kreaturen können existieren."
    },
    {
        title: "❓ Unbeantwortbare Frage",
        text: "Ein Mann sagt zu einem anderen:\n\n»Ich werde Dir eine Frage stellen, auf die es eine eindeutig richtige Antwort gibt - entweder ja oder nein -, aber es wird Dir unmöglich sein, meine Frage zu beantworten.\n\nMöglicherweise wirst du die richtige Antwort kennen, aber du wirst sie mir nicht geben können. Jeder andere wäre vielleicht in der Lage, die Antwort zu liefern, du aber nicht.«\n\nWelche Frage wird er ihm stellen?",
        prevSolution: "Die Lösung ergibt sich aus dem Schaltplan - die Bauteile müssen so angeordnet werden, dass alle drei Ringschaltungen gleichzeitig möglich sind."
    },
    {
        title: "🔟 10 Aussagen über X",
        text: "Es folgen 10 Aussagen zu X, einer ganzen Zahl zwischen 1 und 10. Nicht alle Aussagen sind wahr, aber auch nicht alle falsch. Welche Zahl ist X?\n\n1. X ist gleich der Summe der Aussagen-Nummern der Falsch-Aussagen.\n2. X ist kleiner als die Anzahl der Falsch-Aussagen, und Aussage 10 ist wahr.\n3. Entweder gibt es genau drei wahre Aussagen oder Aussage 1 ist falsch (aber nicht beides).\n4. Die vorigen drei Aussagen sind alle falsch, oder Aussage 9 ist wahr.\n5. Entweder ist X ungerade, oder Aussage 7 ist wahr (aber nicht beides).\n6. Genau zwei der Aussagen mit ungerader Nummer sind falsch.\n7. X ist die Nummer einer wahren Aussage.\n8. Die Aussagen mit geraden Nummern sind entweder alle wahr oder alle falsch.\n9. X ist das Dreifache der ersten wahren Aussage, oder Aussage 4 ist falsch.\n10. X ist gerade, oder Aussage 6 ist wahr.",
        prevSolution: "»Wirst du auf diese Frage mit NEIN antworten?« - Der Befragte kann weder JA noch NEIN sagen, ohne sich zu widersprechen."
    },
    {
        title: "🚨 Das Problem des Gefangenen",
        text: "Der Gefangene wird in einen Raum mit zwei Türen geführt. Eine der Türen führt in die Freiheit, die andere führt in den Tod.\n\nVor den Türen stehen einige Wächter. Jeder von ihnen lügt immer oder sagt immer die Wahrheit; es ist aber unbekannt, welche von ihnen lügen und welche die Wahrheit sagen.\n\nWie kann man mit einer einzigen Frage an einen beliebigen der Wächter herausfinden, welche Türe in die Freiheit führt?",
        prevSolution: "X = 4. Die wahren Aussagen sind: 4, 5, 6, 7, 9, 10. Die falschen Aussagen sind: 1, 2, 3, 8."
    },
    {
        title: "✅ Welche Aussagen sind wahr?",
        text: "Welche der folgenden 20 Aussagen sind wahr und welche sind falsch?\n\n1. Die Antworten auf #6 und #7 sind gleich\n2. #1 ist falsch\n3. Die Antworten auf #4 und #20 sind verschieden\n4. Die Antworten auf #3 und #20 sind verschieden\n5. Die Antwort auf #5 ist verschieden von #19\n6. #2 ist wahr\n7. #15 ist wahr\n8. Die Antworten auf #11 und #19 sind gleich\n9. #10 ist wahr\n10. #13 ist falsch\n...\n\nFinde die konsistente Lösung!",
        prevSolution: "Frage einen beliebigen Wächter: »Würde ein anderer Wächter sagen, dass diese Tür in die Freiheit führt?« Wenn JA, nimm die ANDERE Tür. Wenn NEIN, nimm DIESE Tür."
    },
    {
        title: "🔐 Der Gefangene und die Türen",
        text: "Du bist in einer Zelle mit zwei Türen eingesperrt, die von außen durch vier Riegel (R1-R4) versperrt sind. Die Riegel werden durch drei Knöpfe A, B, C kontrolliert:\n\nKnopf A aktiviert zufällig R1 oder R2 oder R3 oder R4\nKnopf B aktiviert zufällig (R1+R2) oder (R2+R3) oder (R3+R4) oder (R4+R1)\nKnopf C aktiviert zufällig (R1+R3) oder (R2+R4)\n\nWird ein Riegel aktiviert, gleitet er zur anderen Tür.\n\nFinde eine möglichst kurze Folge von Knopf-Aktivierungen, die Dich auf jeden Fall befreit (alle Riegel auf einer Seite)!",
        prevSolution: "Die Lösung erfordert systematisches Durchprobieren aller Wahrheitswert-Kombinationen, bis eine widerspruchsfreie Zuordnung gefunden wird."
    },
    {
        title: "🪑 Am runden Tisch",
        text: "Um einen runden Tisch sitzen einige Leute. Einige sagen immer die Wahrheit, andere lügen immer.\n\nJeder behauptet über seinen Sitznachbar, er sei ein Lügner.\n\nEine Frau behauptet, dass 47 Leute an diesem Tisch säßen.\n\nDarauf meint ein Mann verärgert: »Das stimmt nicht, sie ist eine Lügnerin. Es sitzen 50 Leute am Tisch.«\n\nWie viele Leute saßen denn nun am Tisch?",
        prevSolution: "Die kürzeste Lösung ist: C-B-C-B-C (5 Aktivierungen). Es gibt auch alternative Lösungen wie A-B-A-C-A-B-A."
    },
    {
        title: "🧠 Perfekte Logiker",
        text: "Die Spieler A und B haben beide die Zahl 12 auf ihre Stirn geschrieben bekommen. Jeder sieht die Zahl des anderen, aber nicht die eigene.\n\nDer Spielleiter teilt mit, dass die Summe ihrer beiden Zahlen entweder 24 oder 27 ist und dass es sich um positive ganze Zahlen handelt.\n\nDann fragt der Spielleiter immer wieder A und B abwechselnd, ob sie die Zahl auf ihrer Stirn bestimmen können.\n\nA: Nein. B: Nein. A: Nein. B: Nein. A: Nein. ...\n\nNach wie vielen »Nein«s terminiert das Spiel, wenn überhaupt?",
        prevSolution: "50 Leute. Da jeder seinen Nachbarn für einen Lügner hält, müssen sich Wahrheitssager und Lügner abwechseln - also eine gerade Anzahl. Der Mann lügt (er sagt, die Frau lügt), also sagt die Frau die Wahrheit? Nein - 47 ist ungerade, also lügt sie. Der Mann sagt 50, aber er ist auch ein Lügner... Die Lösung ist 50."
    },
    {
        title: "💣 Die Bombe",
        text: "Das Komitee zur Ausrottung von Unlogik hat eine Bombe mit 7 Kippschaltern gelegt:\n\n1. Wenn Schalter 3 oben sowie 2 und 4 unten → BOOM\n2. Wenn 1 und 4 unten sowie 7 oben → BOOM\n3. Wenn 1, 3 und 4 unten → BOOM\n4. Wenn 6 unten sowie 2 und 3 oben → BOOM\n5. Wenn 4 und 3 oben → BOOM\n...(15 Regeln insgesamt)\n15. Wenn 6 und 7 beide unten → BOOM\n\nBringe die Schalter in die richtige Stellung, um die Bombe zu entschärfen!",
        prevSolution: "Nach 22 »Nein«s antwortet B mit »Ja, ich habe 12«. Die Logik basiert auf schrittweiser Elimination: Nach jedem »Nein« können beide Spieler bestimmte Zahlen ausschließen."
    },
    {
        title: "🏝️ Der Forscher und die Inselbewohner",
        text: "Auf einer Insel leben genau 100 Personen, von denen ein Teil immer die Wahrheit sagt und der andere Teil immer lügt. Ein Forscher fragt jeden Einwohner nach der Anzahl der Lügner.\n\na) Der erste sagt: »Es gibt mindestens einen Lügner«, der zweite: »mindestens zwei«, usw., bis zum letzten: »mindestens 100 Lügner«.\n\nb) Der erste sagt: »Es gibt genau einen Lügner«, der zweite: »genau zwei«, usw.\n\nWie viele Lügner leben auf der Insel (für a und b)?",
        prevSolution: "Die Lösung ist: Schalter 2, 3, 5 und 6 OBEN, Schalter 1, 4 und 7 UNTEN. (Oder eine äquivalente Konfiguration, die alle 15 Regeln erfüllt.)"
    },
    {
        title: "♟️ Ein kleines Schachturnier",
        text: "Am Ende eines Jeder-gegen-Jeden-Schachturniers ergab sich die Siegerliste:\n1. Alfred\n2. Bert\n3. Charlie\n4. Detlef\n5. Emil\n\nBert ist der einzige ohne Verlustpartie; Emil der einzige, der nie gewonnen hat.\n\nWer spielte wie gegen wen, wenn alle Spieler unterschiedlich viele Punkte erreicht haben?\n(Sieg = 1 Punkt, Unentschieden = 0,5 Punkte, Niederlage = 0 Punkte)",
        prevSolution: "a) 50 Lügner. Die Personen 1-50 sagen die Wahrheit, die Personen 51-100 lügen.\nb) Genau 50 Lügner. Nur Person 50 sagt die Wahrheit."
    },
    {
        title: "🔍 Zahl gesucht!",
        text: "Auf einem Blatt stehen 10 Behauptungen über eine »gesuchte Zahl«:\n\n1. Zumindest eine der Behauptungen 9 und 10 ist richtig.\n2. Dies ist entweder die erste richtige oder die erste falsche Behauptung.\n3. Es gibt drei aufeinander folgende falsche Behauptungen.\n4. Die Zahl ist teilbar durch die Differenz der Nummern der letzten und ersten richtigen Behauptung.\n5. Die Summe der Nummern der richtigen Behauptungen ist die gesuchte Zahl.\n6. Dies ist nicht die letzte richtige Behauptung.\n7. Die Zahl ist durch die Nummer jeder richtigen Behauptung teilbar.\n8. Die Zahl ist der Prozentanteil der richtigen Behauptungen.\n9. Die Anzahl der Teiler der Zahl ist größer als die Summe der richtigen Nummern.\n10. Es gibt keine drei aufeinander folgenden richtigen Behauptungen.\n\nWas ist die kleinste gesuchte Zahl?",
        prevSolution: "Alfred: 3,5 Punkte, Bert: 3 Punkte (4 Remis), Charlie: 2 Punkte, Detlef: 1 Punkt, Emil: 0,5 Punkte (1 Remis, 4 Niederlagen)."
    },
    {
        title: "🫛 Erbsenzähler",
        text: "Auf einem Fest soll erraten werden, wie viele Erbsen in einem Glas sind! 12 Teilnehmer tippen:\n\n• 1.: 36.162 Erbsen, Summe durch 2 teilbar\n• 2.: 30.759 Erbsen, Summe durch 3 teilbar\n• 3.: 19.160 Erbsen, Summe durch 4 teilbar\n...\n• 12.: 20.722 Erbsen, Summe durch 13 teilbar\n\nNiemand hatte mit beiden Behauptungen Recht. Zwei lagen sogar mit beiden Aussagen falsch (direkt nacheinander). Die Anzahl wurde mehrfach überschätzt.\n\nWie viele Erbsen sind im Glas? Welche beiden hatten zweimal daneben gelegen?",
        prevSolution: "Die kleinste gesuchte Zahl ist 12. Die richtigen Behauptungen sind: 1, 2, 4, 5, 6, 10."
    },
    {
        title: "🍷 Wer trinkt gerne Brandy?",
        text: "Leo, Mark und Nick essen oft zusammen, aber wir wissen nicht, wer nach dem Essen gern einen Brandy trinkt. Allerdings wissen wir:\n\n1. Wenn Leo einen Brandy bestellt, bestellt auch Mark einen\n2. Es kann vorkommen, dass Mark oder Nick einen Brandy bestellen, aber nie beide zusammen\n3. Hingegen geschieht es, dass Leo und Nick einzeln oder gleichzeitig einen Brandy bestellen\n4. Wenn Nick einen Brandy bestellt, will Leo auch einen.\n\nWer von den dreien trinkt also gerne einen Brandy?",
        prevSolution: "Es sind 14.917 Erbsen im Glas. Der 7. und 8. Teilnehmer lagen beide mit beiden Aussagen falsch. Der 11. Teilnehmer lag am dichtesten dran."
    },
    {
        title: "📅 Welcher Wochentag ist heute?",
        text: "Sieben Personen A, B, C, D, E, F und G diskutieren darüber, welcher Wochentag heute sei:\n\nA: Übermorgen ist Mittwoch.\nB: Nein, heute ist Mittwoch.\nC: Ihr liegt beide falsch, Mittwoch ist morgen.\nD: Quatsch. Heute ist weder Montag, Dienstag noch Mittwoch.\nE: Ich bin ziemlich sicher, dass gestern Donnerstag war.\nF: Nein, gestern war Dienstag.\nG: Alles, was ich weiß, ist, dass gestern nicht Sonnabend war.\n\nWenn nur eine Aussage richtig ist, an welchem Wochentag fand das Gespräch statt?",
        prevSolution: "Nur Mark trinkt gerne Brandy. Aus den Bedingungen folgt: Nick bestellt nie (sonst müsste Leo, dann Mark - aber Nick und Mark nie zusammen). Also bestellt nur Mark."
    },
    {
        title: "🚴 Tour de France",
        text: "Pedro Pedalo fährt erstmals die Tour de France...\n\n1. Woche: Prolog im mittleren Drittel (nicht zweistellig), dann -20 Plätze, +12 Plätze, +5 Plätze...\n2. Woche: Gewinnt Etappe 11, halbiert Platzierung, Massensturz mit 27 Ausscheidern...\n3. Woche: Team zieht 9 Fahrer zurück, +3 Plätze bei L'Alpe d'Huez, weitere Ausscheider...\n\nFragen:\n1. Wie viele Teilnehmer gingen an den Start?\n2. Wie viele konnten das Rennen beenden?\n3. Welchen Platz belegte Pedro nach dem Prolog?\n4. Welchen Platz belegte Pedro im Gesamtklassement?",
        prevSolution: "Das Gespräch fand am Sonntag statt. Nur die Aussage von G ist wahr (gestern war nicht Sonnabend, sondern Samstag... nein, gestern war Sonnabend = Samstag). Die Lösung ist: SONNTAG - nur G's Aussage stimmt."
    },
    {
        title: "👗 Drei Damen",
        text: "Drei Damen treffen sich zu einer Sitzung: Frau Rot, Frau Weiß und Frau Grün.\n\nEine der Damen stellt fest: »Das ist aber merkwürdig, eine von uns trägt eine rote, eine andere eine weiße und die dritte eine grüne Bluse.«\n\n»Das ist wirklich erstaunlich«, meint die Dame mit der roten Bluse, »denn keine trägt die Bluse, welche ihrem Namen entspricht.«\n\n»Das stimmt«, ergänzt Frau Weiß.\n\nWelche Dame trägt welche Bluse?",
        prevSolution: "1. 189 Teilnehmer am Start\n2. 125 Fahrer beendeten das Rennen\n3. Pedro belegte Platz 7 nach dem Prolog\n4. Pedro belegte Platz 32 im Gesamtklassement"
    },
    {
        title: "👱 Die Haarfarbe des Mädchens",
        text: "Ein Knabe und ein Mädchen unterhalten sich.\n\n»Ich bin ein Knabe«, sagt das blonde Kind.\n\n»Ich bin ein Mädchen«, sagt das schwarzhaarige Kind.\n\nMindestens eines der Kinder lügt.\n\nWelche Haarfarbe hat das Mädchen?",
        prevSolution: "Frau Rot trägt die grüne Bluse, Frau Weiß trägt die rote Bluse, Frau Grün trägt die weiße Bluse."
    },
    {
        title: "🗽 Die Einwohner von New York",
        text: "Vorausgesetzt, dass New York City mehr Einwohner hat als Haare auf dem Kopf eines beliebigen Einwohners sind, und dass kein Einwohner völlig kahl ist...\n\n...folgt daraus zwingend, dass mindestens zwei Einwohner genau die gleiche Anzahl von Haaren haben müssen?",
        prevSolution: "Das Mädchen hat blonde Haare. Wenn mindestens eines lügt: Das blonde Kind sagt »Ich bin ein Knabe« - wenn es lügt, ist es ein Mädchen. Das schwarzhaarige Kind sagt »Ich bin ein Mädchen« - wenn es lügt, ist es ein Knabe. Also: blondes Kind = Mädchen (lügt), schwarzhaariges Kind = Knabe (lügt auch)."
    },
    {
        title: "🏘️ Die Einwohner von Podunk",
        text: "Folgende Aussagen über die Stadt Podunk entsprechen der Wahrheit:\n\n1. Keine zwei Einwohner haben die gleiche Anzahl von Haaren.\n2. Kein Einwohner hat genau 518 Haare.\n3. Es gibt mehr Einwohner, als Haare auf dem Kopf eines jeden einzelnen Einwohners sind.\n\nWelches ist die größtmögliche Anzahl von Einwohnern in Podunk?",
        prevSolution: "Ja, das folgt zwingend (Schubfachprinzip). Wenn es mehr Einwohner als mögliche Haaranzahlen gibt, müssen mindestens zwei die gleiche Anzahl haben."
    },
    {
        title: "😔 100 Pessimisten",
        text: "100 Pessimisten haben einen Nachmittag lang ein Blatt Papier beschrieben.\n\nAuf dem Blatt stehen nun 100 Sätze, nummeriert von 1 bis 100.\n\nDer erste Satz heißt »Genau ein Satz auf diesem Blatt ist falsch«.\nDer zweite heißt »Genau zwei Sätze auf diesem Blatt sind falsch«.\n...\nDer hundertste heißt »Genau 100 Sätze auf diesem Blatt sind falsch«.\n\nWelche Sätze sind falsch, welche richtig?",
        prevSolution: "518 Einwohner. Die Einwohner haben 0, 1, 2, ..., 517 Haare (518 verschiedene Werte, aber keiner hat genau 518)."
    }
];

// ===== DOM Elemente =====
const calendarGrid = document.getElementById('calendar');
const modal = document.getElementById('modal');
const modalDoorNumber = document.getElementById('modalDoorNumber');
const riddleTitle = document.getElementById('riddleTitle');
const riddleText = document.getElementById('riddleText');
const prevSolutionDiv = document.getElementById('prevSolution');
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
        text: "Für diesen Tag ist noch kein Rätsel hinterlegt.",
        prevSolution: null
    };
    
    modalDoorNumber.textContent = `Türchen ${dayNumber}`;
    riddleTitle.textContent = riddle.title;
    riddleText.textContent = riddle.text;
    
    // Lösung des vorherigen Rätsels anzeigen
    if (riddle.prevSolution) {
        prevSolutionDiv.innerHTML = `
            <span class="prev-solution-label">📝 Lösung von Türchen ${dayNumber - 1}:</span>
            <span class="prev-solution-text">${riddle.prevSolution}</span>
        `;
        prevSolutionDiv.style.display = 'block';
    } else {
        prevSolutionDiv.innerHTML = '';
        prevSolutionDiv.style.display = 'none';
    }
    
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
    console.log('📚 Rätsel von Otto Janko - https://www.janko.at/Raetsel/');
    
    if (overrideDate) {
        console.log('⚠️ ACHTUNG: Override-Datum aktiv!');
    }
});
