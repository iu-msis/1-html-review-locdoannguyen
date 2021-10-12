DROP TABLE IF EXISTS book;
CREATE TABLE book (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(48) NOT NULL,
    author varchar(48) NOT NULL,
    yearPublished int NOT NULL,
    publisher varchar(48) NOT NULL,
    pageCount int NOT NULL,
    msrp float(53) NOT NULL
);

INSERT INTO book(id, title, author, yearPublished, publisher, pageCount, msrp) VALUES
(1, 'Harry Potter', 'J.K Rowling', 1997, 'Bloomsbury Publishing', 3407, 64.99),
(2, 'To Kill a Mocking Bird', 'Harper Lee', 1960, 'J. B. Lippincott & Co', 281, 11.50),
(3, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Charles Scribners Sons', 240, 5.99),
(4, 'Percy Jackson & the Olympians', 'Rick Riordan', 2009, 'Disney Hyperion', 377, 5.97);