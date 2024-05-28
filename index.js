/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  static count = 0;

  #name;
  #instrument;

  constructor(name, instrument) {
    this.#name = name;
    this.#instrument = instrument;
    Musician.count++;
  }

  get name() {
    return this.#name;
  }

  get instrument() {
    return this.#instrument;
  }

  set name(newName) {
    this.#name = newName;
  }

  set instrument(newInstrument) {
    this.#instrument = newInstrument;
  }

  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`);
  }
}

// Створюємо нового музиканта
const musician1 = new Musician('John', 'гітарі');
console.log(musician1.name); // Виведе: John
console.log(musician1.instrument); // Виведе: гітарі
musician1.play(); // Виведе: John грає на гітарі

// Зміна імені музиканта за допомогою сетера
musician1.name = 'Alice';
console.log(musician1.name); // Виведе: Alice
musician1.play(); // Виведе: Alice грає на гітарі


/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  #band;

  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  joinBand(newBand) {
    this.#band = newBand;
  }

  play() {
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`);
  }
}


/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  #band;

  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  joinBand(newBand) {
    this.#band = newBand;
  }

  play() {
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`);
  }
}


// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.
// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,
// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this.band = newBand

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  #name;
  #members;

  constructor(name, members = []) {
    this.#name = name;
    this.#members = members;
  }

  get name() {
    return this.#name;
  }

  get members() {
    return this.#members;
  }

  set name(newName) {
    this.#name = newName;
  }

  addMember(newMember) {
    if (newMember instanceof Musician) {
      // Використовуємо сетер band класу Musician
      newMember.band = this.#name;
      this.#members.push(newMember);
    } else {
      console.log('Новий учасник повинен бути екземпляром класу Musician');
    }
  }

  playMusic() {
    this.#members.forEach(member => {
      member.play();
    });
  }
}


/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  #band;
  #location;
  #date;

  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }

  get band() {
    return this.#band;
  }

  get location() {
    return this.#location;
  }

  get date() {
    return this.#date;
  }

  info() {
    console.log(`Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`);
  }
}


/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  #ticketPrice;

  constructor(band, location, date, ticketPrice) {
    super(band, location, date);
    this.#ticketPrice = ticketPrice;
  }

  get ticketPrice() {
    return this.#ticketPrice;
  }

  set ticketPrice(newTicketPrice) {
    this.#ticketPrice = newTicketPrice;
  }

  info() {
    console.log(`Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`);
  }
}


/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  #name;
  #band;

  constructor(name, band) {
    this.#name = name;
    this.#band = band;
  }

  get name() {
    return this.#name;
  }

  get band() {
    return this.#band;
  }

  set name(newName) {
    this.#name = newName;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  info() {
    console.log(`Вокаліст ${this.#name} є членом гурту ${this.#band}`);
  }
}


/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  #songs;

  constructor(songs = []) {
    this.#songs = songs;
  }

  get songs() {
    return this.#songs;
  }

  addSong(newSong) {
    this.#songs.push(newSong);
  }

  info() {
    console.log(`Написав ${this.#songs.length} пісень`);
  }
}


/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
  constructor(name, band) {
    super(name, band);
    this.songs = []; // Додаткова властивість для зберігання пісень лідера гурту
  }

  // Додавання пісні до списку пісень лідера гурту
  addSong(newSong) {
    this.songs.push(newSong);
  }

  // Метод для отримання інформації про лідера гурту
  info() {
    console.log(`Лідер гурту ${this.name} є членом гурту ${this.band}. Написав ${this.songs.length} пісень.`);
  }
}


const musician = new Musician("John", "Guitarist");
const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");
const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");

const band = new Band("The Beatles", [bassist]); // Передаємо bassist як член гурту

const vocalist = new Vocalist("Freddie Mercury", "Queen");

const songwriter = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);

const performance = new Performance(band, "Liverpool", new Date('2023-08-01'));

const concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);

const leadsinger = new LeadSinger("Mick Jagger", "The Rolling Stones");
leadsinger.songs = ["Yesterday", "Hey Jude", "Let It Be"]; // Додаємо пісні лідера гурту

// Додаткові дії:
// band.addMember(guitarist); // Додавання guitarist до band
// leadsinger.addSong("New Song Title"); // Додавання нової пісні лідеру гурту

