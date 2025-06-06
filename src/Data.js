const questionsData = [
  {
    category: 'Indian History',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who was the founder of the Maurya Empire?',
    correct_answer: 'Chandragupta Maurya',
    incorrect_answers: ['Ashoka', 'Bindusara', 'Bimbisara'],
  },
  {
    category: 'Indian Geography',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which river originates from the Amarkantak Plateau?',
    correct_answer: 'Narmada',
    incorrect_answers: ['Godavari', 'Mahanadi', 'Krishna'],
  },
  {
    category: 'Indian Constitution',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which part of the Indian Constitution deals with Fundamental Rights?',
    correct_answer: 'Part III',
    incorrect_answers: ['Part II', 'Part IV', 'Part V'],
  },
  {
    category: 'Indian Economy',
    type: 'multiple',
    difficulty: 'hard',
    question: "Which organization is known as the 'central bank of India'?",
    correct_answer: 'RBI',
    incorrect_answers: ['SBI', 'NABARD', 'SEBI'],
  },
  {
    category: 'Indian Politics',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who was the first female Governor of an Indian state?',
    correct_answer: 'Sarojini Naidu',
    incorrect_answers: [
      'Indira Gandhi',
      'Sucheta Kriplani',
      'Vijaya Lakshmi Pandit',
    ],
  },
  {
    category: 'Indian Sports',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who is the first Indian woman to win an Olympic medal?',
    correct_answer: 'Karnam Malleswari',
    incorrect_answers: ['Mary Kom', 'P.V. Sindhu', 'Saina Nehwal'],
  },
  {
    category: 'Indian Cinema',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which was the first Indian film submitted for the Oscars?',
    correct_answer: 'Mother India',
    incorrect_answers: ['Pather Panchali', 'Lagaan', 'Mughal-e-Azam'],
  },
  {
    category: 'Indian Festivals',
    type: 'multiple',
    difficulty: 'hard',
    question: 'In which state is the Hornbill Festival celebrated?',
    correct_answer: 'Nagaland',
    incorrect_answers: ['Assam', 'Manipur', 'Meghalaya'],
  },
  {
    category: 'Indian Science',
    type: 'multiple',
    difficulty: 'hard',
    question: "Who is known as the 'Missile Man of India'?",
    correct_answer: 'Dr. A.P.J. Abdul Kalam',
    incorrect_answers: ['Homi Bhabha', 'C.V. Raman', 'Vikram Sarabhai'],
  },
  {
    category: 'Indian Awards',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who was the first recipient of the Bharat Ratna?',
    correct_answer: 'C. Rajagopalachari',
    incorrect_answers: [
      'Dr. Radhakrishnan',
      'Jawaharlal Nehru',
      'Lal Bahadur Shastri',
    ],
  },
  {
    category: 'Indian Culture',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Kuchipudi is a classical dance form from which Indian state?',
    correct_answer: 'Andhra Pradesh',
    incorrect_answers: ['Karnataka', 'Odisha', 'Kerala'],
  },
  {
    category: 'Indian Religion',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Where did Buddha deliver his first sermon?',
    correct_answer: 'Sarnath',
    incorrect_answers: ['Lumbini', 'Bodh Gaya', 'Kushinagar'],
  },
  {
    category: 'Indian Freedom Struggle',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who led the Bardoli Satyagraha?',
    correct_answer: 'Sardar Vallabhbhai Patel',
    incorrect_answers: ['Jawaharlal Nehru', 'Subhash Chandra Bose', 'Gandhiji'],
  },
  {
    category: 'Indian Science & Tech',
    type: 'multiple',
    difficulty: 'hard',
    question: "What is the name of India's first satellite?",
    correct_answer: 'Aryabhata',
    incorrect_answers: ['Bhaskara', 'INSAT', 'Rohini'],
  },
  {
    category: 'Indian Environment',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Silent Valley National Park is located in which state?',
    correct_answer: 'Kerala',
    incorrect_answers: ['Tamil Nadu', 'Karnataka', 'Andhra Pradesh'],
  },
  {
    category: 'Indian Literature',
    type: 'multiple',
    difficulty: 'hard',
    question: "Who wrote 'Godan'?",
    correct_answer: 'Munshi Premchand',
    incorrect_answers: ['Harivansh Rai Bachchan', 'Dinkar', 'Tulsidas'],
  },
  {
    category: 'Indian Inventions',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who is the inventor of the zero (0)?',
    correct_answer: 'Aryabhata',
    incorrect_answers: ['Bhaskara I', 'Brahmagupta', 'Panini'],
  },
  {
    category: 'Indian Government',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which article of the Indian Constitution deals with emergency provisions?',
    correct_answer: 'Article 352',
    incorrect_answers: ['Article 370', 'Article 365', 'Article 356'],
  },
  {
    category: 'Indian Science',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which Indian scientist developed the first nuclear reactor?',
    correct_answer: 'Homi Bhabha',
    incorrect_answers: ['Vikram Sarabhai', 'Satish Dhawan', 'C.V. Raman'],
  },
  {
    category: 'Indian Judiciary',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who was the first Chief Justice of India?',
    correct_answer: 'H. J. Kania',
    incorrect_answers: [
      'M. Patanjali Sastri',
      'B. K. Mukherjea',
      'P. B. Gajendragadkar',
    ],
  },
  {
    category: 'Indian Science & Space',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which Indian satellite was launched as part of Chandrayaan-1?',
    correct_answer: 'Moon Impact Probe',
    incorrect_answers: ['Mars Orbiter', 'GSLV Mk III', 'INSAT-4A'],
  },
  {
    category: 'Indian Technology',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which is the first Indian supercomputer?',
    correct_answer: 'PARAM 8000',
    incorrect_answers: ['SHAKTI', 'Vikram-100', 'TIFRAC'],
  },
  {
    category: 'Indian Languages',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which is the oldest known language of India?',
    correct_answer: 'Sanskrit',
    incorrect_answers: ['Tamil', 'Pali', 'Brahmi'],
  },
  {
    category: 'Indian Mythology',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who wrote the Mahabharata?',
    correct_answer: 'Vyasa',
    incorrect_answers: ['Valmiki', 'Kalidasa', 'Tulsidas'],
  },
  {
    category: 'Indian Music',
    type: 'multiple',
    difficulty: 'hard',
    question: "Who is known as the 'Nightingale of India'?",
    correct_answer: 'Lata Mangeshkar',
    incorrect_answers: ['Asha Bhosle', 'M.S. Subbulakshmi', 'Kishore Kumar'],
  },
  {
    category: 'Indian Infrastructure',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which is the longest railway platform in India?',
    correct_answer: 'Hubli Junction',
    incorrect_answers: ['Gorakhpur', 'Kharagpur', 'Bhubaneswar'],
  },
  {
    category: 'Indian Defense',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which missile is part of India’s nuclear triad?',
    correct_answer: 'Agni-V',
    incorrect_answers: ['Prithvi-II', 'Akash', 'Nag'],
  },
  {
    category: 'Indian Agriculture',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which state is the largest producer of wheat in India?',
    correct_answer: 'Uttar Pradesh',
    incorrect_answers: ['Punjab', 'Haryana', 'Madhya Pradesh'],
  },
  {
    category: 'Indian Demographics',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which city has the highest population in India as per 2011 census?',
    correct_answer: 'Mumbai',
    incorrect_answers: ['Delhi', 'Kolkata', 'Bangalore'],
  },
  {
    category: 'Indian Banking',
    type: 'multiple',
    difficulty: 'hard',
    question: 'When was the Reserve Bank of India established?',
    correct_answer: '1935',
    incorrect_answers: ['1947', '1950', '1925'],
  },

  {
    category: 'Indian History',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Ashoka was the last ruler of the Maurya dynasty.',
    correct_answer: 'False',
  },
  {
    category: 'Indian Science',
    type: 'boolean',
    difficulty: 'hard',
    question: 'India’s first nuclear test was conducted in 1974 at Pokhran.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Geography',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Ganga river originates from the Yamunotri glacier.',
    correct_answer: 'False', // It originates from Gangotri glacier
  },
  {
    category: 'Indian Politics',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The President of India is elected by direct public vote.',
    correct_answer: 'False',
  },
  {
    category: 'Indian Constitution',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'Fundamental Duties are included in Part IV-A of the Indian Constitution.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Culture',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Bharatanatyam originated in Maharashtra.',
    correct_answer: 'False', // It originated in Tamil Nadu
  },
  {
    category: 'Indian Freedom Struggle',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Quit India Movement was launched in 1942.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Science & Technology',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Aryabhata was India’s first satellite.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Environment',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Sundarbans is the largest delta in the world.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Defense',
    type: 'boolean',
    difficulty: 'hard',
    question: 'INS Arihant is India’s first nuclear-powered submarine.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Infrastructure',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Konkan Railway runs along the western coast of India.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Space',
    type: 'boolean',
    difficulty: 'hard',
    question: "ISRO was established before India's independence.",
    correct_answer: 'False',
  },
  {
    category: 'Indian Literature',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Rabindranath Tagore wrote the national anthem of India.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Awards',
    type: 'boolean',
    difficulty: 'hard',
    question: "The Bharat Ratna is India's highest civilian award.",
    correct_answer: 'True',
  },
  {
    category: 'Indian Judiciary',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Supreme Court of India was established in 1950.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Agriculture',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Rice is a rabi crop in India.',
    correct_answer: 'False', // Rice is a kharif crop
  },
  {
    category: 'Indian Mythology',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Ramayana was originally written in Tamil.',
    correct_answer: 'False',
  },
  {
    category: 'Indian States',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Sikkim shares its border with China.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Culture',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Pushkar Fair is held in Rajasthan.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Economy',
    type: 'boolean',
    difficulty: 'hard',
    question: 'NITI Aayog replaced the Planning Commission in 2015.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Demographics',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Tamil is the oldest surviving language in India.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Rivers',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Godavari is the longest river in India.',
    correct_answer: 'False', // Ganga is the longest
  },
  {
    category: 'Indian Government',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Lok Sabha is a permanent body that is never dissolved.',
    correct_answer: 'False',
  },
  {
    category: 'Indian Tribes',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Jarawa tribe lives in the Andaman and Nicobar Islands.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Sports',
    type: 'boolean',
    difficulty: 'hard',
    question: 'India has hosted the Olympics once.',
    correct_answer: 'False',
  },
  {
    category: 'Indian Heritage',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Qutub Minar is located in Lucknow.',
    correct_answer: 'False',
  },
  {
    category: 'Indian Monuments',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The Iron Pillar in Delhi has not rusted for over 1600 years.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Symbols',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The national bird of India is the peacock.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Banking',
    type: 'boolean',
    difficulty: 'hard',
    question: 'RBI was nationalized in 1949.',
    correct_answer: 'True',
  },
  {
    category: 'Indian Railways',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'Indian Railways is the fourth-largest railway network in the world.',
    correct_answer: 'True',
  },
];

export default questionsData;
