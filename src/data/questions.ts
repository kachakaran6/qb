export interface Question {
  id: string;
  text: string;
  answer: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Explore fundamental concepts in algebra, calculus, geometry, and more.",
    questions: [
      {
        id: "math-1",
        text: "What is the Pythagorean theorem?",
        answer: "The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides. It is expressed as a² + b² = c², where c is the length of the hypotenuse and a and b are the lengths of the other two sides."
      },
      {
        id: "math-2",
        text: "What is calculus?",
        answer: "Calculus is a branch of mathematics that deals with the finding and properties of derivatives and integrals of functions, by methods originally based on the summation of infinitesimal differences. The two main types are differential calculus and integral calculus."
      },
      {
        id: "math-3",
        text: "What is a prime number?",
        answer: "A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number."
      },
      {
        id: "math-4",
        text: "What is the quadratic formula?",
        answer: "The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a, which gives the solutions to the quadratic equation ax² + bx + c = 0, where a, b, and c are coefficients and a ≠ 0."
      },
      {
        id: "math-5",
        text: "What is a logarithm?",
        answer: "A logarithm is the power to which a number must be raised in order to get some other value. For example, the logarithm of 100 to the base 10 is 2, because 10² = 100."
      }
    ]
  },
  {
    id: "science",
    name: "Science",
    description: "Discover principles of physics, chemistry, biology, and other scientific disciplines.",
    questions: [
      {
        id: "science-1",
        text: "What is Newton's First Law of Motion?",
        answer: "Newton's First Law of Motion states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force. This is also known as the law of inertia."
      },
      {
        id: "science-2",
        text: "What is the periodic table?",
        answer: "The periodic table is a tabular arrangement of chemical elements, organized by their atomic number, electron configuration, and recurring chemical properties. Elements are presented in order of increasing atomic number."
      },
      {
        id: "science-3",
        text: "What is photosynthesis?",
        answer: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct."
      },
      {
        id: "science-4",
        text: "What is the theory of relativity?",
        answer: "The theory of relativity, developed by Albert Einstein, consists of two theories: special relativity and general relativity. Special relativity applies to all physical phenomena in the absence of gravity, while general relativity explains the law of gravitation and its relation to other forces of nature."
      },
      {
        id: "science-5",
        text: "What is DNA?",
        answer: "DNA, or deoxyribonucleic acid, is a molecule composed of two chains that coil around each other to form a double helix carrying genetic instructions for the development, functioning, growth, and reproduction of all known organisms and many viruses."
      }
    ]
  },
  {
    id: "history",
    name: "History",
    description: "Learn about significant events, civilizations, and figures throughout human history.",
    questions: [
      {
        id: "history-1",
        text: "When did World War II begin and end?",
        answer: "World War II began on September 1, 1939, when Nazi Germany invaded Poland, and ended on September 2, 1945, with the formal surrender of Japan, which followed the atomic bombings of Hiroshima and Nagasaki."
      },
      {
        id: "history-2",
        text: "Who was the first President of the United States?",
        answer: "George Washington was the first President of the United States, serving from April 30, 1789, to March 4, 1797. He was the commander-in-chief of the Continental Army during the American Revolutionary War and presided over the convention that drafted the U.S. Constitution."
      },
      {
        id: "history-3",
        text: "What was the Renaissance?",
        answer: "The Renaissance was a period in European history marking the transition from the Middle Ages to modernity and covering the 15th and 16th centuries. It was characterized by an emphasis on humanism, art, science, and the revival of classical learning."
      },
      {
        id: "history-4",
        text: "What was the Industrial Revolution?",
        answer: "The Industrial Revolution was the transition to new manufacturing processes in Europe and the United States, in the period from about 1760 to sometime between 1820 and 1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of steam power, and the development of machine tools."
      },
      {
        id: "history-5",
        text: "What was the Cold War?",
        answer: "The Cold War was a period of geopolitical tension between the Soviet Union and the United States and their respective allies, the Eastern Bloc and the Western Bloc, after World War II. The period is generally considered to span from 1947 to 1991, when the Soviet Union collapsed."
      }
    ]
  },
  {
    id: "literature",
    name: "Literature",
    description: "Explore famous works, authors, and literary movements throughout history.",
    questions: [
      {
        id: "literature-1",
        text: "Who wrote 'Romeo and Juliet'?",
        answer: "William Shakespeare wrote 'Romeo and Juliet,' a tragedy believed to have been written between 1591 and 1595. It is one of Shakespeare's most popular and frequently performed plays."
      },
      {
        id: "literature-2",
        text: "What is the 'Great American Novel'?",
        answer: "The 'Great American Novel' is a concept referring to a novel that perfectly represents the spirit, character, and experience of the United States. Many novels have been suggested as contenders, including 'Moby-Dick' by Herman Melville, 'The Great Gatsby' by F. Scott Fitzgerald, and 'Adventures of Huckleberry Finn' by Mark Twain."
      },
      {
        id: "literature-3",
        text: "What is magical realism?",
        answer: "Magical realism is a style of fiction that paints a realistic view of the modern world while also adding magical elements. It is often associated with Latin American literature, particularly the works of Gabriel García Márquez, Isabel Allende, and Jorge Luis Borges."
      },
      {
        id: "literature-4",
        text: "Who is Jane Austen?",
        answer: "Jane Austen (1775-1817) was an English novelist known primarily for her six major novels, which interpret, critique, and comment upon the British landed gentry at the end of the 18th century. Her works, including 'Pride and Prejudice' and 'Sense and Sensibility,' are part of the Western literary canon and continue to be widely read today."
      },
      {
        id: "literature-5",
        text: "What is the Harlem Renaissance?",
        answer: "The Harlem Renaissance was an intellectual and cultural revival of African American music, dance, art, fashion, literature, theater, and politics centered in Harlem, Manhattan, New York City, spanning the 1920s and 1930s. Notable figures include Langston Hughes, Zora Neale Hurston, and Claude McKay."
      }
    ]
  },
  {
    id: "technology",
    name: "Technology",
    description: "Understand computing, programming, artificial intelligence, and technological advancements.",
    questions: [
      {
        id: "tech-1",
        text: "What is artificial intelligence?",
        answer: "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by humans or animals. AI applications include advanced web search engines, recommendation systems, understanding human speech, self-driving cars, automated decision-making, and competing at the highest level in strategic game systems."
      },
      {
        id: "tech-2",
        text: "What is cloud computing?",
        answer: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet."
      },
      {
        id: "tech-3",
        text: "What is blockchain technology?",
        answer: "Blockchain is a distributed ledger technology that enables secure, transparent, and tamper-proof record-keeping. It is the underlying technology behind cryptocurrencies like Bitcoin, but has applications beyond digital currencies, including supply chain management, voting systems, and smart contracts."
      },
      {
        id: "tech-4",
        text: "What is the Internet of Things (IoT)?",
        answer: "The Internet of Things (IoT) refers to the network of physical objects—'things'—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet."
      },
      {
        id: "tech-5",
        text: "What is machine learning?",
        answer: "Machine learning is a subset of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. It focuses on the development of computer programs that can access data and use it to learn for themselves."
      }
    ]
  }
];