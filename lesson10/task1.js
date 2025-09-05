import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Мистецтво війни", "Сунь-Цзи", -500);
const book2 = new Book("Енеї́да", "І. Котляревський", 1842);
const book3 = new Book("Кобзар", "Т. Шевченко", 1840);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook("Clean Code", "Robert C. Martin", 2008, "PDF");
ebook1.printInfo();

ebook1.fileFormat = "EPUB";
ebook1.printInfo();

const oldest = Book.getOldestBook([book1, book2, book3, ebook1]);
console.log("📖 Найдавніша книга:");
oldest.printInfo();

const ebookFromBook = EBook.createFromBook(book2, "MOBI");
ebookFromBook.printInfo();