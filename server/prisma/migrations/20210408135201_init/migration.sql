-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "published" DATETIME,
    "cover" TEXT,
    "author" INTEGER,
    FOREIGN KEY ("author") REFERENCES "Author" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Author" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" DATETIME
);

-- Populate Author Table
INSERT INTO Author (firstName, lastName, birthDate)
VALUES
    ("Philip",  "Dick",      DATETIME("1928-12-16")),
    ("Frank",   "Herbert",   DATETIME("1920-10-08")),
    ("John",    "Tolkien",   DATETIME("1892-01-03")),
    ("Ursula",  "Le Guin",   DATETIME("1929-10-21")),
    ("Mary",    "Shelley",   DATETIME("1797-08-30")),
    ("Izaac",   "Asimov",    DATETIME("1920-01-02")),
    ("Aldous",  "Huxley",    DATETIME("1894-07-26")),
    ("Terry",   "Pratchett", DATETIME("1948-04-28")),
    ("Franz",   "Kafka",     DATETIME("1883-07-03")),
    ("Michaił", "Bułhakow",  DATETIME("1891-05-15"));
    

-- Populate Book Table
INSERT INTO Book (title, description, published, cover, author)
VALUES
    ("Do Androids Dream of Electric Sheep?",  null, "1968", "https://kbimages1-a.akamaihd.net/97553660-9bb3-4737-9e12-60b2d71f6cc2/1200/1200/False/do-androids-dream-of-electric-sheep-omnibus-1.jpg", 1),
    ("Ubik",                                  null, "1969", "https://live.staticflickr.com/2756/4444942953_bfe9ac3e8b_b.jpg", 1),
    ("VALIS",                                 null, "1981", "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/VALIS%281stEd%29.jpg/220px-VALIS%281stEd%29.jpg", 1),
    ("A Scanner Darkly",                      null, "1977", "https://tesinblog.files.wordpress.com/2019/04/philip-k-dick-a-scanner-darkly-cover-1.jpg", 1),
    ("Dune",                                  null, "1965", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg", 2),
    ("The Fall of Gondolin",                  null, "2018", "https://images-na.ssl-images-amazon.com/images/I/81tBGSagaBL.jpg", 3),
    ("The Children of Húrin",                 null, "2007", "https://g.christianbook.com/g/slideshow/9/94645/main/94645_1_ftc_dp.jpg", 3),
    ("The Hobbit",                            null, "1937", "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg", 3),
    ("A Wizard of Earthsea",                  null, "1968", "https://images-na.ssl-images-amazon.com/images/I/91hGlJv7bBL.jpg", 4),
    ("Rocannon's World",                      null, "1966", "https://pics.cdn.librarything.com/picsizes/c1/a8/c1a857708291d7f59386f525451444341514141_v5.jpg", 4),
    ("Planet of Exile",                       null, "1966", "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/PlanetofExile.jpg/220px-PlanetofExile.jpg", 4),
    ("City of Illusions",                     null, "1967", "https://i.pinimg.com/originals/f4/ea/64/f4ea6431457e94b41530959f8252687a.jpg", 4),
    ("Frankenstein",                          null, "1818", "https://i.ebayimg.com/images/g/NAsAAOSw4CRf~4zL/s-l500.jpg", 5),
    ("I, Robot",                              null, "1950", "https://i.pinimg.com/originals/3d/72/70/3d7270025975e8118779c1fcd77e766f.jpg", 6),
    ("Foundation",                            null, "1951", "https://i.pinimg.com/originals/a9/ce/b2/a9ceb2c60c3b8f7077062a481232fd8a.jpg", 6),
    ("Brave New World",                       null, "1932", "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg", 7),
    ("Mort",                                  null, "1987", "https://patrycjawalter.com/wp-content/uploads/2017/03/mort.jpg", 8),
    ("Reaper Man",                            null, "1991", "https://www.lspace.org/ftp/images/bookcovers/uk/reaper-man-2.jpg", 8),
    ("Soul Music",                            null, "1994", "https://i.pinimg.com/originals/2f/ac/b3/2facb33d5d47f37ffdca096ae68db5cc.jpg", 8),
    ("Der Prozeß",                            null, "1925", "https://i.pinimg.com/originals/5b/d2/8d/5bd28dbcce080e8b88a03149a561113c.jpg", 9),
    ("Мастер и Маргарита",                    null, "1966", "https://img4.labirint.ru/rc/29c8d0b98ac4798cee0f91279103c181/220x340/books71/705242/cover.jpg?1564210842", 10);