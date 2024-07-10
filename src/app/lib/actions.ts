import { promises as fs } from "fs";
import { IBook } from "./types";
import path from "path";

const booksFilePath = path.join(process.cwd(), "books.json");

export async function getAllBooks(): Promise<IBook[]> {
  const data = await fs.readFile(booksFilePath, "utf-8");
  return JSON.parse(data);
}

export async function getBookById(id: number): Promise<IBook | null> {
  const books = await getAllBooks();
  const book = books.find((book) => book.id === id);
  return book || null;
}
