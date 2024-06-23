interface Person {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

interface Book {
  id: number;
  title: string;
  authors: Person[];
  translators: Person[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: { [key: string]: string };
  download_count: number;
}

interface BooksData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}

export const books: BooksData = {
  count: 73794,
  next: "https://gutendex.com/books/?page=2",
  previous: null,
  results: [
    {
      id: 1513,
      title: "Romeo and Juliet",
      authors: [
        {
          name: "Shakespeare, William",
          birth_year: 1564,
          death_year: 1616,
        },
      ],
      translators: [],
      subjects: [
        "Conflict of generations -- Drama",
        "Juliet (Fictitious character) -- Drama",
        "Romeo (Fictitious character) -- Drama",
        "Tragedies",
        "Vendetta -- Drama",
        "Verona (Italy) -- Drama",
        "Youth -- Drama",
      ],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/1513.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/1513.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/1513.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/1513.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/1513/pg1513.cover.medium.jpg",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/1513.txt.utf-8",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/1513/pg1513-h.zip",
      },
      download_count: 72633,
    },
    {
      id: 2701,
      title: "Moby Dick; Or, The Whale",
      authors: [
        {
          name: "Melville, Herman",
          birth_year: 1819,
          death_year: 1891,
        },
      ],
      translators: [],
      subjects: [
        "Adventure stories",
        "Ahab, Captain (Fictitious character) -- Fiction",
        "Mentally ill -- Fiction",
        "Psychological fiction",
        "Sea stories",
        "Ship captains -- Fiction",
        "Whales -- Fiction",
        "Whaling -- Fiction",
        "Whaling ships -- Fiction",
      ],
      bookshelves: ["Best Books Ever Listings"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/2701.html.images",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/2701/2701-h/2701-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/2701.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/2701.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/2701/2701-0.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/2701.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/2701/pg2701-h.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/2701.txt.utf-8",
      },
      download_count: 65191,
    },
    {
      id: 84,
      title: "Frankenstein; Or, The Modern Prometheus",
      authors: [
        {
          name: "Shelley, Mary Wollstonecraft",
          birth_year: 1797,
          death_year: 1851,
        },
      ],
      translators: [],
      subjects: [
        "Frankenstein's monster (Fictitious character) -- Fiction",
        "Frankenstein, Victor (Fictitious character) -- Fiction",
        "Gothic fiction",
        "Horror tales",
        "Monsters -- Fiction",
        "Science fiction",
        "Scientists -- Fiction",
      ],
      bookshelves: [
        "Gothic Fiction",
        "Movie Books",
        "Precursors of Science Fiction",
        "Science Fiction by Women",
      ],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/84.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/84.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/84.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/84.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/84.txt.utf-8",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/84/pg84-h.zip",
      },
      download_count: 64482,
    },
    {
      id: 1342,
      title: "Pride and Prejudice",
      authors: [
        {
          name: "Austen, Jane",
          birth_year: 1775,
          death_year: 1817,
        },
      ],
      translators: [],
      subjects: [
        "Courtship -- Fiction",
        "Domestic fiction",
        "England -- Fiction",
        "Love stories",
        "Sisters -- Fiction",
        "Social classes -- Fiction",
        "Young women -- Fiction",
      ],
      bookshelves: ["Best Books Ever Listings", "Harvard Classics"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/1342.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/1342.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/1342.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/1342.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/1342.txt.utf-8",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/1342/pg1342-h.zip",
      },
      download_count: 54059,
    },
    {
      id: 145,
      title: "Middlemarch",
      authors: [
        {
          name: "Eliot, George",
          birth_year: 1819,
          death_year: 1880,
        },
      ],
      translators: [],
      subjects: [
        "Bildungsromans",
        "City and town life -- Fiction",
        "Didactic fiction",
        "Domestic fiction",
        "England -- Fiction",
        "Love stories",
        "Married people -- Fiction",
        "Young women -- Fiction",
      ],
      bookshelves: ["Best Books Ever Listings", "Historical Fiction"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/145.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/145.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/145.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/145.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/145/pg145.cover.medium.jpg",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/145.txt.utf-8",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/145/pg145-h.zip",
      },
      download_count: 51000,
    },
    {
      id: 2641,
      title: "A Room with a View",
      authors: [
        {
          name: "Forster, E. M. (Edward Morgan)",
          birth_year: 1879,
          death_year: 1970,
        },
      ],
      translators: [],
      subjects: [
        "British -- Italy -- Fiction",
        "England -- Fiction",
        "Florence (Italy) -- Fiction",
        "Humorous stories",
        "Young women -- Fiction",
      ],
      bookshelves: ["Italy"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/2641.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/2641.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/2641.kf8.images",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/2641.txt.utf-8",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/2641.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/2641/pg2641.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/2641/pg2641-h.zip",
      },
      download_count: 49392,
    },
    {
      id: 37106,
      title: "Little Women; Or, Meg, Jo, Beth, and Amy",
      authors: [
        {
          name: "Alcott, Louisa May",
          birth_year: 1832,
          death_year: 1888,
        },
      ],
      translators: [],
      subjects: [
        "Autobiographical fiction",
        "Bildungsromans",
        "Domestic fiction",
        "Family life -- New England -- Fiction",
        "March family (Fictitious characters) -- Fiction",
        "Mothers and daughters -- Fiction",
        "New England -- Fiction",
        "Sisters -- Fiction",
        "Young women -- Fiction",
      ],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/37106.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/37106.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/37106.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/37106.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/37106/pg37106.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/37106/37106-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/37106.txt.utf-8",
      },
      download_count: 48385,
    },
    {
      id: 100,
      title: "The Complete Works of William Shakespeare",
      authors: [
        {
          name: "Shakespeare, William",
          birth_year: 1564,
          death_year: 1616,
        },
      ],
      translators: [],
      subjects: ["English drama -- Early modern and Elizabethan, 1500-1600"],
      bookshelves: ["Plays"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/100.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/100.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/100.kf8.images",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/100.txt.utf-8",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/100.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/100/pg100.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/100/pg100-h.zip",
      },
      download_count: 48303,
    },
    {
      id: 29024,
      title:
        "Across Mongolian Plains: A Naturalist's Account of China's 'Great Northwest'",
      authors: [
        {
          name: "Andrews, Roy Chapman",
          birth_year: 1884,
          death_year: 1960,
        },
      ],
      translators: [],
      subjects: [
        "Hunting -- Mongolia",
        "Mongolia -- Description and travel",
        "Zoology -- Mongolia",
      ],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/29024.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/29024.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/29024.kf8.images",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/29024.txt.utf-8",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/29024.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/29024/pg29024.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/29024/29024-0.zip",
      },
      download_count: 44665,
    },
    {
      id: 16389,
      title: "The Enchanted April",
      authors: [
        {
          name: "Von Arnim, Elizabeth",
          birth_year: 1866,
          death_year: 1941,
        },
      ],
      translators: [],
      subjects: [
        "British -- Italy -- Fiction",
        "Domestic fiction",
        "Female friendship -- Fiction",
        "Italy -- Fiction",
        "Love stories",
      ],
      bookshelves: ["Bestsellers, American, 1895-1923"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/16389.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/16389.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/16389.kf8.images",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/16389.txt.utf-8",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/16389.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/16389/pg16389.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/16389/16389-0.zip",
      },
      download_count: 44083,
    },
    {
      id: 67979,
      title: "The Blue Castle: a novel",
      authors: [
        {
          name: "Montgomery, L. M. (Lucy Maud)",
          birth_year: 1874,
          death_year: 1942,
        },
      ],
      translators: [],
      subjects: [
        "Canada -- History -- 1914-1945 -- Fiction",
        "Choice -- Fiction",
        "Love -- Fiction",
        "Romance fiction",
        "Self-actualization (Psychology) -- Fiction",
        "Single women -- Fiction",
        "Young adult fiction",
      ],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/67979.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/67979.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/67979.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/67979.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/67979/pg67979.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/67979/67979-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/67979.txt.utf-8",
      },
      download_count: 44032,
    },
    {
      id: 6761,
      title: "The Adventures of Ferdinand Count Fathom — Complete",
      authors: [
        {
          name: "Smollett, T. (Tobias)",
          birth_year: 1721,
          death_year: 1771,
        },
      ],
      translators: [],
      subjects: ["Adventure stories", "Gothic fiction"],
      bookshelves: ["Best Books Ever Listings"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/6761.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/6761.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/6761.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/6761.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/6761/pg6761.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/6761/6761-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/6761.txt.utf-8",
      },
      download_count: 40809,
    },
    {
      id: 394,
      title: "Cranford",
      authors: [
        {
          name: "Gaskell, Elizabeth Cleghorn",
          birth_year: 1810,
          death_year: 1865,
        },
      ],
      translators: [],
      subjects: [
        "England -- Fiction",
        "Female friendship -- Fiction",
        "Older women -- Fiction",
        "Pastoral fiction",
        "Sisters -- Fiction",
        "Villages -- Fiction",
      ],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/394.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/394.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/394.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/394.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/394/pg394.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/394/394-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/394.txt.utf-8",
      },
      download_count: 40366,
    },
    {
      id: 4085,
      title: "The Adventures of Roderick Random",
      authors: [
        {
          name: "Smollett, T. (Tobias)",
          birth_year: 1721,
          death_year: 1771,
        },
      ],
      translators: [],
      subjects: [
        "England -- Fiction",
        "Impressment -- Fiction",
        "Picaresque literature",
        "Rogues and vagabonds -- Fiction",
        "Sailors -- Fiction",
        "Scots -- England -- Fiction",
        "Sea stories",
        "Warships -- Fiction",
      ],
      bookshelves: ["Best Books Ever Listings", "Historical Fiction"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/4085.html.images",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/4085/4085-h/4085-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/4085.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/4085.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/4085/4085-0.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/4085.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/4085/pg4085.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/4085/pg4085-h.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/4085.txt.utf-8",
      },
      download_count: 39510,
    },
    {
      id: 2160,
      title: "The Expedition of Humphry Clinker",
      authors: [
        {
          name: "Smollett, T. (Tobias)",
          birth_year: 1721,
          death_year: 1771,
        },
      ],
      translators: [],
      subjects: [
        "Epistolary fiction",
        "Great Britain -- Fiction",
        "Travelers -- Fiction",
      ],
      bookshelves: ["Best Books Ever Listings", "Historical Fiction"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/2160.html.images",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/2160/2160-h/2160-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/2160.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/2160.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/2160/2160-0.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/2160.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/2160/pg2160.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/2160/pg2160-h.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/2160.txt.utf-8",
      },
      download_count: 39322,
    },
    {
      id: 6593,
      title: "History of Tom Jones, a Foundling",
      authors: [
        {
          name: "Fielding, Henry",
          birth_year: 1707,
          death_year: 1754,
        },
      ],
      translators: [],
      subjects: [
        "Bildungsromans",
        "England -- Fiction",
        "Foundlings -- Fiction",
        "Humorous stories",
        "Identity (Psychology) -- Fiction",
        "Young men -- Fiction",
      ],
      bookshelves: [
        "Banned Books from Anne Haight's list",
        "Best Books Ever Listings",
        "Harvard Classics",
        "Movie Books",
      ],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/6593.html.images",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/6593/6593-h/6593-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/6593.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/6593.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/6593/6593-0.txt",
        "text/plain; charset=iso-8859-1":
          "https://www.gutenberg.org/files/6593/6593-8.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/6593.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/6593/pg6593.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/6593/pg6593-h.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/6593.txt.utf-8",
      },
      download_count: 38775,
    },
    {
      id: 1259,
      title: "Twenty years after",
      authors: [
        {
          name: "Dumas, Alexandre",
          birth_year: 1802,
          death_year: 1870,
        },
        {
          name: "Maquet, Auguste",
          birth_year: 1813,
          death_year: 1888,
        },
      ],
      translators: [],
      subjects: ["France -- History -- Louis XIV, 1643-1715 -- Fiction"],
      bookshelves: ["Adventure", "Historical Fiction", "Movie Books"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/1259.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/1259.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/1259.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/1259.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/1259/pg1259.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/1259/1259-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/1259.txt.utf-8",
      },
      download_count: 38175,
    },
    {
      id: 5197,
      title: "My Life — Volume 1",
      authors: [
        {
          name: "Wagner, Richard",
          birth_year: 1813,
          death_year: 1883,
        },
      ],
      translators: [],
      subjects: [
        "Composers -- Germany -- Biography",
        "Wagner, Richard, 1813-1883",
      ],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/5197.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/5197.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/5197.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/5197.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/5197/pg5197.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/5197/5197-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/5197.txt.utf-8",
      },
      download_count: 37955,
    },
    {
      id: 11,
      title: "Alice's Adventures in Wonderland",
      authors: [
        {
          name: "Carroll, Lewis",
          birth_year: 1832,
          death_year: 1898,
        },
      ],
      translators: [],
      subjects: [
        "Alice (Fictitious character from Carroll) -- Juvenile fiction",
        "Children's stories",
        "Fantasy fiction",
        "Imaginary places -- Juvenile fiction",
      ],
      bookshelves: ["Children's Literature"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/11.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/11.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/11.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/11.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/11.txt.utf-8",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/11/pg11-h.zip",
      },
      download_count: 37727,
    },
    {
      id: 64317,
      title: "The Great Gatsby",
      authors: [
        {
          name: "Fitzgerald, F. Scott (Francis Scott)",
          birth_year: 1896,
          death_year: 1940,
        },
      ],
      translators: [],
      subjects: [
        "First loves -- Fiction",
        "Long Island (N.Y.) -- Fiction",
        "Married women -- Fiction",
        "Psychological fiction",
        "Rich people -- Fiction",
      ],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/64317.txt.utf-8",
        "text/html": "https://www.gutenberg.org/ebooks/64317.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/64317.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/64317.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/64317.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/64317/pg64317-h.zip",
      },
      download_count: 28162,
    },
    {
      id: 174,
      title: "The Picture of Dorian Gray",
      authors: [
        {
          name: "Wilde, Oscar",
          birth_year: 1854,
          death_year: 1900,
        },
      ],
      translators: [],
      subjects: [
        "Appearance (Philosophy) -- Fiction",
        "Conduct of life -- Fiction",
        "Didactic fiction",
        "Great Britain -- History -- Victoria, 1837-1901 -- Fiction",
        "London (England) -- History -- 1800-1950 -- Fiction",
        "Paranormal fiction",
        "Portraits -- Fiction",
        "Supernatural -- Fiction",
      ],
      bookshelves: ["Gothic Fiction", "Movie Books"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/174.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/174.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/174.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/174.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/174/174-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/174.txt.utf-8",
      },
      download_count: 23428,
    },
    {
      id: 844,
      title:
        "The Importance of Being Earnest: A Trivial Comedy for Serious People",
      authors: [
        {
          name: "Wilde, Oscar",
          birth_year: 1854,
          death_year: 1900,
        },
      ],
      translators: [],
      subjects: [
        "Comedies",
        "England -- Drama",
        "Foundlings -- Drama",
        "Identity (Psychology) -- Drama",
      ],
      bookshelves: ["Plays"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/844.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/844.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/844.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/844/844-0.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/844.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/844/pg844.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/844/pg844-h.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/844.txt.utf-8",
      },
      download_count: 22887,
    },
    {
      id: 98,
      title: "A Tale of Two Cities",
      authors: [
        {
          name: "Dickens, Charles",
          birth_year: 1812,
          death_year: 1870,
        },
      ],
      translators: [],
      subjects: [
        "British -- France -- Paris -- Fiction",
        "Executions and executioners -- Fiction",
        "France -- History -- Revolution, 1789-1799 -- Fiction",
        "French -- England -- London -- Fiction",
        "Historical fiction",
        "London (England) -- History -- 18th century -- Fiction",
        "Lookalikes -- Fiction",
        "Paris (France) -- History -- 1789-1799 -- Fiction",
        "War stories",
      ],
      bookshelves: ["Historical Fiction"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/98.html.images",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/98/98-h/98-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/98.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/98.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/98/98-0.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/98.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/98/pg98.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/98/pg98-h.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/98.txt.utf-8",
      },
      download_count: 22885,
    },
    {
      id: 2542,
      title: "A Doll's House : a play",
      authors: [
        {
          name: "Ibsen, Henrik",
          birth_year: 1828,
          death_year: 1906,
        },
      ],
      translators: [],
      subjects: [
        "Man-woman relationships -- Drama",
        "Marriage -- Drama",
        "Norwegian drama -- Translations into English",
        "Wives -- Drama",
      ],
      bookshelves: ["Best Books Ever Listings"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/2542.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/2542.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/2542.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/2542.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/2542/pg2542.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/2542/2542-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/2542.txt.utf-8",
      },
      download_count: 22358,
    },
    {
      id: 5200,
      title: "Metamorphosis",
      authors: [
        {
          name: "Kafka, Franz",
          birth_year: 1883,
          death_year: 1924,
        },
      ],
      translators: [
        {
          name: "Wyllie, David (Translator)",
          birth_year: null,
          death_year: null,
        },
      ],
      subjects: ["Metamorphosis -- Fiction", "Psychological fiction"],
      bookshelves: ["Horror"],
      languages: ["en"],
      copyright: true,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/5200.html.images",
        "text/html; charset=iso-8859-1":
          "https://www.gutenberg.org/files/5200/5200-h/5200-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/5200.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/5200.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/5200/5200-0.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/5200.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/5200/pg5200-h.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/5200.txt.utf-8",
      },
      download_count: 21894,
    },
    {
      id: 2554,
      title: "Crime and Punishment",
      authors: [
        {
          name: "Dostoyevsky, Fyodor",
          birth_year: 1821,
          death_year: 1881,
        },
      ],
      translators: [
        {
          name: "Garnett, Constance",
          birth_year: 1861,
          death_year: 1946,
        },
      ],
      subjects: [
        "Crime -- Psychological aspects -- Fiction",
        "Detective and mystery stories",
        "Murder -- Fiction",
        "Psychological fiction",
        "Saint Petersburg (Russia) -- Fiction",
      ],
      bookshelves: [
        "Best Books Ever Listings",
        "Crime Fiction",
        "Harvard Classics",
      ],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/2554.html.images",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/2554/2554-h/2554-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/2554.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/2554.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/2554/2554-0.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/2554.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/2554/pg2554.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/2554/pg2554-h.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/2554.txt.utf-8",
      },
      download_count: 21411,
    },
    {
      id: 345,
      title: "Dracula",
      authors: [
        {
          name: "Stoker, Bram",
          birth_year: 1847,
          death_year: 1912,
        },
      ],
      translators: [],
      subjects: [
        "Dracula, Count (Fictitious character) -- Fiction",
        "Epistolary fiction",
        "Gothic fiction",
        "Horror tales",
        "Transylvania (Romania) -- Fiction",
        "Vampires -- Fiction",
        "Whitby (England) -- Fiction",
      ],
      bookshelves: [
        "Gothic Fiction",
        "Horror",
        "Movie Books",
        "Mystery Fiction",
      ],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/345.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/345.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/345.kf8.images",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/345.txt.utf-8",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/345.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/345/pg345-h.zip",
      },
      download_count: 21410,
    },
    {
      id: 62636,
      title: "To the Person Sitting in Darkness",
      authors: [
        {
          name: "Twain, Mark",
          birth_year: 1835,
          death_year: 1910,
        },
      ],
      translators: [],
      subjects: [
        "China -- History -- Boxer Rebellion, 1899-1901",
        "Imperialism",
        "Philippines -- History -- Philippine American War, 1899-1902",
        "South African War, 1899-1902",
      ],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/62636.txt.utf-8",
        "text/html": "https://www.gutenberg.org/ebooks/62636.html.images",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/62636/62636-h/62636-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/62636.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/62636.kf8.images",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/62636/62636-0.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/62636.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/62636/pg62636.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/62636/pg62636-h.zip",
      },
      download_count: 17034,
    },
    {
      id: 43,
      title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
      authors: [
        {
          name: "Stevenson, Robert Louis",
          birth_year: 1850,
          death_year: 1894,
        },
      ],
      translators: [],
      subjects: [
        "Horror tales",
        "London (England) -- Fiction",
        "Multiple personality -- Fiction",
        "Physicians -- Fiction",
        "Psychological fiction",
        "Science fiction",
        "Self-experimentation in medicine -- Fiction",
      ],
      bookshelves: ["Horror", "Movie Books", "Precursors of Science Fiction"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/43.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/43.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/43.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/43.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/43/pg43.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/43/43-0.zip",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/43.txt.utf-8",
      },
      download_count: 16857,
    },
    {
      id: 1400,
      title: "Great Expectations",
      authors: [
        {
          name: "Dickens, Charles",
          birth_year: 1812,
          death_year: 1870,
        },
      ],
      translators: [],
      subjects: [
        "Benefactors -- Fiction",
        "Bildungsromans",
        "England -- Fiction",
        "Ex-convicts -- Fiction",
        "Man-woman relationships -- Fiction",
        "Orphans -- Fiction",
        "Revenge -- Fiction",
        "Young men -- Fiction",
      ],
      bookshelves: ["Best Books Ever Listings"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/1400.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/1400.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/1400.kf8.images",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/1400.txt.utf-8",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/1400.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/1400/pg1400-h.zip",
      },
      download_count: 16169,
    },
    {
      id: 52106,
      title: "The Origin and Development of the Moral Ideas",
      authors: [
        {
          name: "Westermarck, Edward",
          birth_year: 1862,
          death_year: 1939,
        },
      ],
      translators: [],
      subjects: ["Ethics", "Ethics -- History", "Primitive societies"],
      bookshelves: [],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/52106.txt.utf-8",
        "text/html": "https://www.gutenberg.org/ebooks/52106.html.images",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/52106/52106-h/52106-h.htm",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/52106.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/52106.kf8.images",
        "text/plain; charset=iso-8859-1":
          "https://www.gutenberg.org/files/52106/52106-8.txt",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/52106.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/52106/pg52106.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/cache/epub/52106/pg52106-h.zip",
      },
      download_count: 15835,
    },
    {
      id: 28054,
      title: "The Brothers Karamazov",
      authors: [
        {
          name: "Dostoyevsky, Fyodor",
          birth_year: 1821,
          death_year: 1881,
        },
      ],
      translators: [
        {
          name: "Garnett, Constance",
          birth_year: 1861,
          death_year: 1946,
        },
      ],
      subjects: [
        "Brothers -- Fiction",
        "Didactic fiction",
        "Fathers and sons -- Fiction",
        "Russia -- Social life and customs -- 1533-1917 -- Fiction",
      ],
      bookshelves: ["Best Books Ever Listings"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html": "https://www.gutenberg.org/ebooks/28054.html.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/28054.epub3.images",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/28054.kf8.images",
        "text/plain; charset=us-ascii":
          "https://www.gutenberg.org/ebooks/28054.txt.utf-8",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/28054.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/28054/pg28054.cover.medium.jpg",
        "application/octet-stream":
          "https://www.gutenberg.org/files/28054/28054-0.zip",
      },
      download_count: 15315,
    },
  ],
};
