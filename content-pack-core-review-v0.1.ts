export const handoutPack = {
  meta: {
    id: "a2-core-review-v0.1",
    title: "A2+ English Maintenance Map: Core Review",
    subtitle: "Check, remember, practise",
    level: "A2+ foundations",
    version: "0.1",
    audience: "Adult ESL learner with strong communication skills and unstable grammar anchors",
    estimatedUse: "3-5 short sittings"
  },

  startPage: {
    title: "A2+ English Maintenance Map",
    intro: "This handout helps you review English you already know. First, try the mixed check. Then practise the sections where you make mistakes. You do not need to finish everything in one day. Mistakes are useful here because they show what to review.",
    instructions: [
      "Try first. Do not read all theory before you start.",
      "After each task, check the feedback and notice the pattern.",
      "Open theory cards only when you need a reminder.",
      "Use the personal prompts for real English, not perfect textbook English.",
      "At the end, copy the summary and send it to your teacher if you want."
    ]
  },

  diagnostic: [
    {
      id: "diagnostic-sentence-engine",
      title: "Mixed Check 1: sentence engine",
      description: "Questions, negatives, auxiliaries, and basic word order.",
      tasks: [
        {
          id: "d-se-01",
          kind: "choice",
          skillTags: ["questions", "word-order"],
          prompt: "Choose the natural question.",
          options: [
            { id: "a", text: "Why you are tired?" },
            { id: "b", text: "Why are you tired?" },
            { id: "c", text: "Why tired you are?" }
          ],
          correctOptionId: "b",
          explanation: "In questions with be, put be before the subject: Why are you...?",
          theoryCardIds: ["question-word-order"]
        },
        {
          id: "d-se-02",
          kind: "choice",
          skillTags: ["subject-verb-agreement", "present-simple"],
          prompt: "Choose the correct sentence.",
          options: [
            { id: "a", text: "She work from home." },
            { id: "b", text: "She works from home." },
            { id: "c", text: "She working from home." }
          ],
          correctOptionId: "b",
          explanation: "In Present Simple, use -s with he, she, it: she works.",
          theoryCardIds: ["third-person-s"]
        },
        {
          id: "d-se-03",
          kind: "gap",
          skillTags: ["negatives", "auxiliaries"],
          prompt: "I ____ understand this rule. It is still confusing.",
          acceptedAnswers: ["don't", "do not"],
          explanation: "Use do not / don't before the base verb: I don't understand.",
          theoryCardIds: ["negatives-basic", "do-support"]
        },
        {
          id: "d-se-04",
          kind: "choice",
          skillTags: ["questions", "auxiliaries"],
          prompt: "Choose the correct question.",
          options: [
            { id: "a", text: "Do you like coffee?" },
            { id: "b", text: "Are you like coffee?" },
            { id: "c", text: "You like coffee?" }
          ],
          correctOptionId: "a",
          explanation: "With normal verbs in Present Simple questions, use do/does: Do you like...?",
          theoryCardIds: ["do-support"]
        },
        {
          id: "d-se-05",
          kind: "rebuild",
          skillTags: ["questions", "word-order"],
          prompt: "Rebuild the question.",
          chunks: ["does", "she", "where", "live"],
          acceptedAnswers: ["Where does she live?"],
          explanation: "Question word + does + subject + base verb: Where does she live?",
          theoryCardIds: ["question-word-order", "do-support"]
        },
        {
          id: "d-se-06",
          kind: "fix",
          skillTags: ["negatives", "past-simple"],
          prompt: "Fix the sentence: I didn't went to the meeting.",
          acceptedAnswers: ["I didn't go to the meeting.", "I did not go to the meeting."],
          explanation: "After didn't, use the base verb: didn't go, not didn't went.",
          theoryCardIds: ["past-simple-finished", "negatives-basic"]
        },
        {
          id: "d-se-07",
          kind: "choice",
          skillTags: ["word-order"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "I very like this app." },
            { id: "b", text: "I like very this app." },
            { id: "c", text: "I really like this app." }
          ],
          correctOptionId: "c",
          explanation: "Say I really like..., not I very like.... Very usually describes adjectives: very good, very tired.",
          theoryCardIds: ["basic-word-order"]
        },
        {
          id: "d-se-08",
          kind: "gap",
          skillTags: ["questions", "auxiliaries"],
          prompt: "What time ____ your lesson start?",
          acceptedAnswers: ["does"],
          explanation: "Use does with it/he/she or a singular noun in Present Simple questions: What time does your lesson start?",
          theoryCardIds: ["question-word-order", "do-support"]
        }
      ]
    },
    {
      id: "diagnostic-time-basics",
      title: "Mixed Check 2: time basics",
      description: "Present, past, future, and basic experience language.",
      tasks: [
        {
          id: "d-tb-01",
          kind: "choice",
          skillTags: ["present-simple", "present-continuous"],
          prompt: "Choose the best sentence for a routine.",
          options: [
            { id: "a", text: "I usually work in the evening." },
            { id: "b", text: "I am usually working in the evening." },
            { id: "c", text: "I usually am work in the evening." }
          ],
          correctOptionId: "a",
          explanation: "Use Present Simple for routines: I usually work.",
          theoryCardIds: ["present-simple-routines"]
        },
        {
          id: "d-tb-02",
          kind: "choice",
          skillTags: ["present-continuous"],
          prompt: "Choose the best sentence for right now.",
          options: [
            { id: "a", text: "I write an email now." },
            { id: "b", text: "I am writing an email now." },
            { id: "c", text: "I am write an email now." }
          ],
          correctOptionId: "b",
          explanation: "Use am/is/are + -ing for actions happening now: I am writing.",
          theoryCardIds: ["present-continuous-now"]
        },
        {
          id: "d-tb-03",
          kind: "gap",
          skillTags: ["past-simple"],
          prompt: "Yesterday she ____ a long message to her friend.",
          acceptedAnswers: ["wrote"],
          explanation: "Yesterday is finished time, so use Past Simple: wrote.",
          theoryCardIds: ["past-simple-finished"]
        },
        {
          id: "d-tb-04",
          kind: "choice",
          skillTags: ["future-basics"],
          prompt: "Choose the natural sentence for a plan.",
          options: [
            { id: "a", text: "I going to study tonight." },
            { id: "b", text: "I am going to study tonight." },
            { id: "c", text: "I will going study tonight." }
          ],
          correctOptionId: "b",
          explanation: "Use be going to + base verb for plans: I am going to study.",
          theoryCardIds: ["future-going-to"]
        },
        {
          id: "d-tb-05",
          kind: "fix",
          skillTags: ["past-simple"],
          prompt: "Fix the sentence: Last week I have visited my parents.",
          acceptedAnswers: ["Last week I visited my parents.", "I visited my parents last week."],
          explanation: "Last week is finished time, so use Past Simple: visited.",
          theoryCardIds: ["past-simple-finished", "present-perfect-experience"]
        },
        {
          id: "d-tb-06",
          kind: "choice",
          skillTags: ["present-perfect"],
          prompt: "Choose the natural sentence for life experience.",
          options: [
            { id: "a", text: "I have never tried Thai food." },
            { id: "b", text: "I never tried Thai food in my life." },
            { id: "c", text: "I have never try Thai food." }
          ],
          correctOptionId: "a",
          explanation: "Use have/has + past participle for life experience: I have never tried.",
          theoryCardIds: ["present-perfect-experience"]
        },
        {
          id: "d-tb-07",
          kind: "gap",
          skillTags: ["present-simple", "subject-verb-agreement"],
          prompt: "My sister ____ English twice a week.",
          acceptedAnswers: ["studies"],
          explanation: "Use -s/-es with he, she, it in Present Simple: studies.",
          theoryCardIds: ["third-person-s", "present-simple-routines"]
        },
        {
          id: "d-tb-08",
          kind: "choice",
          skillTags: ["past-simple"],
          prompt: "Choose the natural past sentence.",
          options: [
            { id: "a", text: "We didn't watched the film." },
            { id: "b", text: "We didn't watch the film." },
            { id: "c", text: "We weren't watch the film." }
          ],
          correctOptionId: "b",
          explanation: "After didn't, use the base verb: didn't watch.",
          theoryCardIds: ["negatives-basic", "past-simple-finished"]
        }
      ]
    },
    {
      id: "diagnostic-nouns-articles",
      title: "Mixed Check 3: nouns and articles",
      description: "a/an, the, plural nouns, and countability.",
      tasks: [
        {
          id: "d-na-01",
          kind: "gap",
          skillTags: ["articles"],
          prompt: "She is ____ designer.",
          acceptedAnswers: ["a"],
          explanation: "Use a/an when you say someone's job: She is a designer.",
          theoryCardIds: ["articles-jobs"]
        },
        {
          id: "d-na-02",
          kind: "choice",
          skillTags: ["articles"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "I bought new phone." },
            { id: "b", text: "I bought a new phone." },
            { id: "c", text: "I bought an new phone." }
          ],
          correctOptionId: "b",
          explanation: "Use a before a singular countable noun when it is one new thing: a new phone.",
          theoryCardIds: ["a-an-singular"]
        },
        {
          id: "d-na-03",
          kind: "choice",
          skillTags: ["countability"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "I need an advice." },
            { id: "b", text: "I need some advice." },
            { id: "c", text: "I need many advice." }
          ],
          correctOptionId: "b",
          explanation: "Advice is uncountable in English. Say some advice or a piece of advice.",
          theoryCardIds: ["countable-uncountable"]
        },
        {
          id: "d-na-04",
          kind: "gap",
          skillTags: ["articles"],
          prompt: "I saw a dog and a cat. ____ dog was very friendly.",
          acceptedAnswers: ["the"],
          explanation: "Use the when the listener knows which one: the dog already mentioned.",
          theoryCardIds: ["the-known"]
        },
        {
          id: "d-na-05",
          kind: "choice",
          skillTags: ["articles"],
          prompt: "Choose the natural general statement.",
          options: [
            { id: "a", text: "I like music." },
            { id: "b", text: "I like the music." },
            { id: "c", text: "I like a music." }
          ],
          correctOptionId: "a",
          explanation: "For general ideas with uncountable nouns, often use no article: I like music.",
          theoryCardIds: ["zero-general"]
        },
        {
          id: "d-na-06",
          kind: "gap",
          skillTags: ["quantifiers", "countability"],
          prompt: "There isn't ____ milk in the fridge.",
          acceptedAnswers: ["much", "any"],
          explanation: "Milk is uncountable. In negatives, much or any can work here.",
          theoryCardIds: ["some-any", "countable-uncountable"]
        },
        {
          id: "d-na-07",
          kind: "fix",
          skillTags: ["plural-nouns"],
          prompt: "Fix the sentence: I have two childs.",
          acceptedAnswers: ["I have two children."],
          explanation: "The plural of child is irregular: children.",
          theoryCardIds: ["plural-nouns-basic"]
        },
        {
          id: "d-na-08",
          kind: "choice",
          skillTags: ["articles"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "My brother is an artist." },
            { id: "b", text: "My brother is artist." },
            { id: "c", text: "My brother is a artist." }
          ],
          correctOptionId: "a",
          explanation: "Use an before a vowel sound: an artist.",
          theoryCardIds: ["articles-jobs", "a-an-singular"]
        }
      ]
    },
    {
      id: "diagnostic-small-words",
      title: "Mixed Check 4: small words",
      description: "Prepositions, pronouns, linkers, and fixed phrases.",
      tasks: [
        {
          id: "d-sw-01",
          kind: "choice",
          skillTags: ["prepositions", "collocations"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "I went to home after work." },
            { id: "b", text: "I went home after work." },
            { id: "c", text: "I went in home after work." }
          ],
          correctOptionId: "b",
          explanation: "Say go home, not go to home.",
          theoryCardIds: ["go-home"]
        },
        {
          id: "d-sw-02",
          kind: "gap",
          skillTags: ["prepositions", "collocations"],
          prompt: "I listen ____ podcasts when I cook.",
          acceptedAnswers: ["to"],
          explanation: "The phrase is listen to something.",
          theoryCardIds: ["verb-prep-listen-to"]
        },
        {
          id: "d-sw-03",
          kind: "choice",
          skillTags: ["prepositions"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "She is good in English." },
            { id: "b", text: "She is good at English." },
            { id: "c", text: "She is good on English." }
          ],
          correctOptionId: "b",
          explanation: "Use good at for skills: good at English, good at drawing.",
          theoryCardIds: ["adjective-prep-good-at"]
        },
        {
          id: "d-sw-04",
          kind: "gap",
          skillTags: ["prepositions"],
          prompt: "The lesson starts ____ Monday.",
          acceptedAnswers: ["on"],
          explanation: "Use on with days: on Monday.",
          theoryCardIds: ["prepositions-time"]
        },
        {
          id: "d-sw-05",
          kind: "choice",
          skillTags: ["pronouns"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "Can you help I?" },
            { id: "b", text: "Can you help me?" },
            { id: "c", text: "Can you help my?" }
          ],
          correctOptionId: "b",
          explanation: "After help, use the object pronoun: me, him, her, us, them.",
          theoryCardIds: ["object-pronouns"]
        },
        {
          id: "d-sw-06",
          kind: "choice",
          skillTags: ["linkers"],
          prompt: "Choose the best linker.",
          options: [
            { id: "a", text: "I was tired, so I went to bed early." },
            { id: "b", text: "I was tired, because I went to bed early." },
            { id: "c", text: "I was tired, but I went to bed early." }
          ],
          correctOptionId: "a",
          explanation: "Use so for result: I was tired, so I went to bed.",
          theoryCardIds: ["basic-linkers"]
        },
        {
          id: "d-sw-07",
          kind: "fix",
          skillTags: ["prepositions", "collocations"],
          prompt: "Fix the sentence: It depends from the weather.",
          acceptedAnswers: ["It depends on the weather."],
          explanation: "The phrase is depend on something.",
          theoryCardIds: ["common-verb-prepositions"]
        },
        {
          id: "d-sw-08",
          kind: "choice",
          skillTags: ["prepositions"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "I woke up at the morning." },
            { id: "b", text: "I woke up in the morning." },
            { id: "c", text: "I woke up on the morning." }
          ],
          correctOptionId: "b",
          explanation: "Use in the morning, in the afternoon, in the evening.",
          theoryCardIds: ["prepositions-time"]
        }
      ]
    },
    {
      id: "diagnostic-natural-phrases",
      title: "Mixed Check 5: natural phrases",
      description: "Everyday phrases that often go wrong.",
      tasks: [
        {
          id: "d-np-01",
          kind: "choice",
          skillTags: ["collocations"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "Let me explain you the problem." },
            { id: "b", text: "Let me explain the problem to you." },
            { id: "c", text: "Let me explain to you the problem about." }
          ],
          correctOptionId: "b",
          explanation: "Use explain something to someone.",
          theoryCardIds: ["common-verb-prepositions"]
        },
        {
          id: "d-np-02",
          kind: "gap",
          skillTags: ["collocations"],
          prompt: "I am interested ____ psychology.",
          acceptedAnswers: ["in"],
          explanation: "The phrase is interested in something.",
          theoryCardIds: ["common-adjective-prepositions"]
        },
        {
          id: "d-np-03",
          kind: "choice",
          skillTags: ["collocations"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "We discussed about the plan." },
            { id: "b", text: "We discussed the plan." },
            { id: "c", text: "We discussed on the plan." }
          ],
          correctOptionId: "b",
          explanation: "Discuss already means talk about. Do not use about after discuss.",
          theoryCardIds: ["common-verb-prepositions"]
        },
        {
          id: "d-np-04",
          kind: "choice",
          skillTags: ["collocations", "prepositions"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "She is married with a doctor." },
            { id: "b", text: "She is married to a doctor." },
            { id: "c", text: "She is married on a doctor." }
          ],
          correctOptionId: "b",
          explanation: "Use married to someone.",
          theoryCardIds: ["common-adjective-prepositions"]
        },
        {
          id: "d-np-05",
          kind: "fix",
          skillTags: ["collocations"],
          prompt: "Fix the sentence: I have 28 years old.",
          acceptedAnswers: ["I am 28 years old.", "I am 28."],
          explanation: "In English, age uses be: I am 28, not I have 28 years.",
          theoryCardIds: ["age-with-be"]
        },
        {
          id: "d-np-06",
          kind: "choice",
          skillTags: ["collocations"],
          prompt: "Choose the natural phrase.",
          options: [
            { id: "a", text: "make homework" },
            { id: "b", text: "do homework" },
            { id: "c", text: "create homework" }
          ],
          correctOptionId: "b",
          explanation: "The common phrase is do homework.",
          theoryCardIds: ["common-collocations"]
        },
        {
          id: "d-np-07",
          kind: "gap",
          skillTags: ["collocations"],
          prompt: "Can you take ____ photo of us?",
          acceptedAnswers: ["a"],
          explanation: "The phrase is take a photo.",
          theoryCardIds: ["common-collocations", "a-an-singular"]
        },
        {
          id: "d-np-08",
          kind: "choice",
          skillTags: ["collocations"],
          prompt: "Choose the natural sentence.",
          options: [
            { id: "a", text: "I made a mistake." },
            { id: "b", text: "I did a mistake." },
            { id: "c", text: "I created a mistake." }
          ],
          correctOptionId: "a",
          explanation: "The common phrase is make a mistake.",
          theoryCardIds: ["common-collocations"]
        }
      ]
    }
  ],

  clusters: [
    {
      id: "sentence-engine",
      title: "Cluster 1: Sentence engine",
      shortTitle: "Sentence engine",
      purpose: "Build stable basic sentence structure: word order, questions, negatives, and auxiliaries.",
      focus: ["word order", "questions", "negatives", "do/does/did", "third-person -s"],
      typicalMistakes: ["Why you are tired?", "She don't like it.", "I no understand.", "Where you went?"],
      stages: {
        tryFirst: [
          {
            id: "c1-tf-01",
            kind: "choice",
            skillTags: ["questions", "word-order"],
            prompt: "Choose the natural question.",
            options: [
              { id: "a", text: "Where did you go yesterday?" },
              { id: "b", text: "Where you went yesterday?" },
              { id: "c", text: "Where did you went yesterday?" }
            ],
            correctOptionId: "a",
            explanation: "Use did + subject + base verb in Past Simple questions: did you go.",
            theoryCardIds: ["question-word-order", "do-support"]
          },
          {
            id: "c1-tf-02",
            kind: "gap",
            skillTags: ["subject-verb-agreement", "present-simple"],
            prompt: "My friend ____ a lot of messages every day.",
            acceptedAnswers: ["sends"],
            explanation: "My friend is singular, so use -s: sends.",
            theoryCardIds: ["third-person-s"]
          },
          {
            id: "c1-tf-03",
            kind: "fix",
            skillTags: ["questions", "word-order"],
            prompt: "Fix the question: What you want to watch?",
            acceptedAnswers: ["What do you want to watch?"],
            explanation: "With normal verbs in Present Simple questions, use do: What do you want...?",
            theoryCardIds: ["question-word-order", "do-support"]
          },
          {
            id: "c1-tf-04",
            kind: "choice",
            skillTags: ["negatives", "auxiliaries"],
            prompt: "Choose the natural negative sentence.",
            options: [
              { id: "a", text: "I not remember his name." },
              { id: "b", text: "I don't remember his name." },
              { id: "c", text: "I am not remember his name." }
            ],
            correctOptionId: "b",
            explanation: "Use don't + base verb: I don't remember.",
            theoryCardIds: ["negatives-basic", "do-support"]
          },
          {
            id: "c1-tf-05",
            kind: "rebuild",
            skillTags: ["word-order"],
            prompt: "Rebuild the sentence.",
            chunks: ["usually", "I", "drink", "coffee", "in the morning"],
            acceptedAnswers: ["I usually drink coffee in the morning."],
            explanation: "Frequency words like usually often go before the main verb: I usually drink.",
            theoryCardIds: ["basic-word-order"]
          }
        ],
        practise: [
          {
            id: "c1-pr-01",
            kind: "choice",
            skillTags: ["questions", "auxiliaries"],
            prompt: "Choose the correct question.",
            options: [
              { id: "a", text: "Does she work online?" },
              { id: "b", text: "Does she works online?" },
              { id: "c", text: "Do she work online?" }
            ],
            correctOptionId: "a",
            explanation: "Use does with she, then base verb: Does she work?",
            theoryCardIds: ["do-support", "third-person-s"]
          },
          {
            id: "c1-pr-02",
            kind: "gap",
            skillTags: ["questions", "auxiliaries"],
            prompt: "How often ____ you practise English?",
            acceptedAnswers: ["do"],
            explanation: "Use do in Present Simple questions with you: How often do you...?",
            theoryCardIds: ["do-support", "question-word-order"]
          },
          {
            id: "c1-pr-03",
            kind: "gap",
            skillTags: ["questions", "auxiliaries"],
            prompt: "How often ____ your teacher give you homework?",
            acceptedAnswers: ["does"],
            explanation: "Your teacher is singular, so use does in the question.",
            theoryCardIds: ["do-support", "question-word-order"]
          },
          {
            id: "c1-pr-04",
            kind: "choice",
            skillTags: ["negatives"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "She doesn't knows the answer." },
              { id: "b", text: "She doesn't know the answer." },
              { id: "c", text: "She don't know the answer." }
            ],
            correctOptionId: "b",
            explanation: "After doesn't, use the base verb: doesn't know.",
            theoryCardIds: ["negatives-basic", "do-support"]
          },
          {
            id: "c1-pr-05",
            kind: "fix",
            skillTags: ["word-order"],
            prompt: "Fix the sentence: I like very this idea.",
            acceptedAnswers: ["I really like this idea.", "I like this idea very much."],
            explanation: "Use really before like, or very much after the object.",
            theoryCardIds: ["basic-word-order"]
          },
          {
            id: "c1-pr-06",
            kind: "rebuild",
            skillTags: ["questions", "past-simple"],
            prompt: "Rebuild the question.",
            chunks: ["you", "did", "what", "buy"],
            acceptedAnswers: ["What did you buy?"],
            explanation: "Use what + did + subject + base verb: What did you buy?",
            theoryCardIds: ["question-word-order", "do-support"]
          },
          {
            id: "c1-pr-07",
            kind: "choice",
            skillTags: ["questions", "word-order"],
            prompt: "Choose the natural question with be.",
            options: [
              { id: "a", text: "Are you ready?" },
              { id: "b", text: "Do you ready?" },
              { id: "c", text: "You are ready?" }
            ],
            correctOptionId: "a",
            explanation: "With be, put be before the subject in questions: Are you ready?",
            theoryCardIds: ["question-word-order"]
          },
          {
            id: "c1-pr-08",
            kind: "gap",
            skillTags: ["subject-verb-agreement"],
            prompt: "This app ____ well on my laptop.",
            acceptedAnswers: ["works"],
            explanation: "This app is singular, so use works.",
            theoryCardIds: ["third-person-s"]
          },
          {
            id: "c1-pr-09",
            kind: "fix",
            skillTags: ["questions", "word-order"],
            prompt: "Fix the question: Why she doesn't answer?",
            acceptedAnswers: ["Why doesn't she answer?", "Why does she not answer?"],
            explanation: "In questions, put does/doesn't before the subject: Why doesn't she answer?",
            theoryCardIds: ["question-word-order", "do-support"]
          },
          {
            id: "c1-pr-10",
            kind: "choice",
            skillTags: ["auxiliaries"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I am tired." },
              { id: "b", text: "I do tired." },
              { id: "c", text: "I have tired." }
            ],
            correctOptionId: "a",
            explanation: "Tired is an adjective, so use be: I am tired.",
            theoryCardIds: ["be-do-have-basic"]
          }
        ],
        fixCommonMistakes: [
          {
            id: "c1-fx-01",
            kind: "fix",
            skillTags: ["questions"],
            prompt: "Fix: Where you live?",
            acceptedAnswers: ["Where do you live?"],
            explanation: "Use do in Present Simple questions: Where do you live?",
            theoryCardIds: ["question-word-order", "do-support"]
          },
          {
            id: "c1-fx-02",
            kind: "fix",
            skillTags: ["subject-verb-agreement"],
            prompt: "Fix: My mother work in a hospital.",
            acceptedAnswers: ["My mother works in a hospital."],
            explanation: "My mother is she, so use works.",
            theoryCardIds: ["third-person-s"]
          },
          {
            id: "c1-fx-03",
            kind: "fix",
            skillTags: ["negatives"],
            prompt: "Fix: I no have time today.",
            acceptedAnswers: ["I don't have time today.", "I do not have time today."],
            explanation: "Use don't for Present Simple negatives: I don't have.",
            theoryCardIds: ["negatives-basic", "do-support"]
          },
          {
            id: "c1-fx-04",
            kind: "fix",
            skillTags: ["questions", "past-simple"],
            prompt: "Fix: When did you started learning English?",
            acceptedAnswers: ["When did you start learning English?"],
            explanation: "After did, use the base verb: did you start.",
            theoryCardIds: ["question-word-order", "past-simple-finished"]
          }
        ],
        useItPersonally: [
          {
            id: "c1-ui-01",
            kind: "personal",
            skillTags: ["personal-output", "questions"],
            prompt: "Write 3 questions you can ask your teacher next lesson.",
            guidance: "Use clear question order: What do you...? / Why is...? / When did...?"
          },
          {
            id: "c1-ui-02",
            kind: "personal",
            skillTags: ["personal-output", "negatives"],
            prompt: "Write 3 true negative sentences about today.",
            guidance: "Use don't, doesn't, didn't, am not, isn't, or aren't."
          }
        ]
      }
    },
    {
      id: "time-basics",
      title: "Cluster 2: Time basics",
      shortTitle: "Time basics",
      purpose: "Review the basic time system: routines, now, finished past, plans, and simple experience language.",
      focus: ["Present Simple", "Present Continuous", "Past Simple", "future basics", "Present Perfect basics"],
      typicalMistakes: ["Yesterday I go.", "I am usually wake up late.", "Tomorrow I go to doctor.", "I have seen it yesterday."],
      stages: {
        tryFirst: [
          {
            id: "c2-tf-01",
            kind: "choice",
            skillTags: ["present-simple"],
            prompt: "Choose the sentence about a routine.",
            options: [
              { id: "a", text: "I usually have lessons on Wednesday." },
              { id: "b", text: "I am usually having lessons on Wednesday." },
              { id: "c", text: "I usually am have lessons on Wednesday." }
            ],
            correctOptionId: "a",
            explanation: "Use Present Simple for routines and repeated actions.",
            theoryCardIds: ["present-simple-routines"]
          },
          {
            id: "c2-tf-02",
            kind: "gap",
            skillTags: ["present-continuous"],
            prompt: "I can't talk now. I ____ working.",
            acceptedAnswers: ["am", "'m"],
            explanation: "Use am/is/are + -ing for actions happening now: I am working.",
            theoryCardIds: ["present-continuous-now"]
          },
          {
            id: "c2-tf-03",
            kind: "gap",
            skillTags: ["past-simple"],
            prompt: "Last night we ____ a new episode.",
            acceptedAnswers: ["watched"],
            explanation: "Last night is finished time, so use Past Simple: watched.",
            theoryCardIds: ["past-simple-finished"]
          },
          {
            id: "c2-tf-04",
            kind: "choice",
            skillTags: ["future-basics"],
            prompt: "Choose the natural plan.",
            options: [
              { id: "a", text: "I'm going to clean my room later." },
              { id: "b", text: "I going to clean my room later." },
              { id: "c", text: "I going clean my room later." }
            ],
            correctOptionId: "a",
            explanation: "Use be going to + base verb for plans: I am going to clean.",
            theoryCardIds: ["future-going-to"]
          },
          {
            id: "c2-tf-05",
            kind: "choice",
            skillTags: ["present-perfect", "past-simple"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I have visited Bangkok last year." },
              { id: "b", text: "I visited Bangkok last year." },
              { id: "c", text: "I visit Bangkok last year." }
            ],
            correctOptionId: "b",
            explanation: "Last year is finished time, so use Past Simple: visited.",
            theoryCardIds: ["past-simple-finished", "present-perfect-experience"]
          }
        ],
        practise: [
          {
            id: "c2-pr-01",
            kind: "choice",
            skillTags: ["present-simple", "present-continuous"],
            prompt: "Right now, she ____ lunch.",
            options: [
              { id: "a", text: "has" },
              { id: "b", text: "is having" },
              { id: "c", text: "have" }
            ],
            correctOptionId: "b",
            explanation: "Right now points to Present Continuous: is having.",
            theoryCardIds: ["present-continuous-now"]
          },
          {
            id: "c2-pr-02",
            kind: "choice",
            skillTags: ["present-simple"],
            prompt: "Every weekend, he ____ his parents.",
            options: [
              { id: "a", text: "visits" },
              { id: "b", text: "is visiting" },
              { id: "c", text: "visit" }
            ],
            correctOptionId: "a",
            explanation: "Every weekend is a routine, so use Present Simple. He visits.",
            theoryCardIds: ["present-simple-routines", "third-person-s"]
          },
          {
            id: "c2-pr-03",
            kind: "gap",
            skillTags: ["past-simple"],
            prompt: "Two days ago I ____ my keys at home.",
            acceptedAnswers: ["left"],
            explanation: "Two days ago is finished time. The past of leave is left.",
            theoryCardIds: ["past-simple-finished"]
          },
          {
            id: "c2-pr-04",
            kind: "fix",
            skillTags: ["present-continuous"],
            prompt: "Fix: She is work now.",
            acceptedAnswers: ["She is working now.", "She's working now."],
            explanation: "Use be + -ing: is working.",
            theoryCardIds: ["present-continuous-now"]
          },
          {
            id: "c2-pr-05",
            kind: "choice",
            skillTags: ["future-basics"],
            prompt: "Choose the natural quick decision.",
            options: [
              { id: "a", text: "The phone is ringing. I will answer it." },
              { id: "b", text: "The phone is ringing. I am going to answer it yesterday." },
              { id: "c", text: "The phone is ringing. I answer it yesterday." }
            ],
            correctOptionId: "a",
            explanation: "Use will for a decision you make now: I will answer it.",
            theoryCardIds: ["future-will"]
          },
          {
            id: "c2-pr-06",
            kind: "gap",
            skillTags: ["present-perfect"],
            prompt: "Have you ever ____ sushi?",
            acceptedAnswers: ["tried"],
            explanation: "Use have/has + past participle for life experience: have you ever tried?",
            theoryCardIds: ["present-perfect-experience"]
          },
          {
            id: "c2-pr-07",
            kind: "choice",
            skillTags: ["present-perfect"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I have already finished it." },
              { id: "b", text: "I already finished it yesterday." },
              { id: "c", text: "I have already finish it." }
            ],
            correctOptionId: "a",
            explanation: "Already often works with Present Perfect when the exact time is not important: have already finished.",
            theoryCardIds: ["present-perfect-experience"]
          },
          {
            id: "c2-pr-08",
            kind: "fix",
            skillTags: ["past-simple"],
            prompt: "Fix: Yesterday I don't had time.",
            acceptedAnswers: ["Yesterday I didn't have time.", "I didn't have time yesterday.", "Yesterday I did not have time."],
            explanation: "For Past Simple negatives, use didn't + base verb: didn't have.",
            theoryCardIds: ["past-simple-finished", "negatives-basic"]
          },
          {
            id: "c2-pr-09",
            kind: "gap",
            skillTags: ["future-basics"],
            prompt: "I ____ going to call her after the lesson.",
            acceptedAnswers: ["am", "'m"],
            explanation: "Use be going to for plans: I am going to call.",
            theoryCardIds: ["future-going-to"]
          },
          {
            id: "c2-pr-10",
            kind: "choice",
            skillTags: ["past-simple", "present-perfect"],
            prompt: "Choose the best sentence with no finished time.",
            options: [
              { id: "a", text: "I lost my phone yesterday." },
              { id: "b", text: "I have lost my phone." },
              { id: "c", text: "I have lose my phone." }
            ],
            correctOptionId: "b",
            explanation: "If the recent result matters and no finished time is given, Present Perfect is natural: I have lost my phone.",
            theoryCardIds: ["present-perfect-experience"]
          }
        ],
        fixCommonMistakes: [
          {
            id: "c2-fx-01",
            kind: "fix",
            skillTags: ["past-simple"],
            prompt: "Fix: Yesterday I go to the supermarket.",
            acceptedAnswers: ["Yesterday I went to the supermarket.", "I went to the supermarket yesterday."],
            explanation: "Yesterday needs Past Simple: went.",
            theoryCardIds: ["past-simple-finished"]
          },
          {
            id: "c2-fx-02",
            kind: "fix",
            skillTags: ["present-simple", "present-continuous"],
            prompt: "Fix: I am usually wake up late.",
            acceptedAnswers: ["I usually wake up late."],
            explanation: "Usually points to a routine. Use Present Simple: I wake up.",
            theoryCardIds: ["present-simple-routines"]
          },
          {
            id: "c2-fx-03",
            kind: "fix",
            skillTags: ["future-basics", "articles"],
            prompt: "Fix: Tomorrow I go to doctor.",
            acceptedAnswers: ["Tomorrow I am going to the doctor.", "I'm going to the doctor tomorrow.", "I am going to see a doctor tomorrow.", "I'm going to see a doctor tomorrow."],
            explanation: "For a plan, use am going to. Also say the doctor or see a doctor.",
            theoryCardIds: ["future-going-to", "the-known", "a-an-singular"]
          },
          {
            id: "c2-fx-04",
            kind: "fix",
            skillTags: ["present-perfect", "past-simple"],
            prompt: "Fix: I have watched this video yesterday.",
            acceptedAnswers: ["I watched this video yesterday."],
            explanation: "Yesterday is finished time, so use Past Simple.",
            theoryCardIds: ["past-simple-finished", "present-perfect-experience"]
          }
        ],
        useItPersonally: [
          {
            id: "c2-ui-01",
            kind: "personal",
            skillTags: ["personal-output", "past-simple"],
            prompt: "Write 4 true sentences about yesterday.",
            guidance: "Use Past Simple. Example: Yesterday I watched..., I went..., I didn't have...."
          },
          {
            id: "c2-ui-02",
            kind: "personal",
            skillTags: ["personal-output", "future-basics"],
            prompt: "Write 3 plans for this week.",
            guidance: "Use I am going to... or I am meeting...."
          }
        ]
      }
    },
    {
      id: "nouns-articles",
      title: "Cluster 3: Nouns and articles",
      shortTitle: "Nouns and articles",
      purpose: "Review a/an, the, no article, singular/plural nouns, and countable/uncountable nouns.",
      focus: ["a/an", "the", "zero article", "plural nouns", "countability", "quantifiers"],
      typicalMistakes: ["She is teacher.", "I bought new phone.", "I need an advice.", "There are many information."],
      stages: {
        tryFirst: [
          {
            id: "c3-tf-01",
            kind: "gap",
            skillTags: ["articles"],
            prompt: "He works as ____ engineer.",
            acceptedAnswers: ["an"],
            explanation: "Use an before a vowel sound: an engineer.",
            theoryCardIds: ["articles-jobs", "a-an-singular"]
          },
          {
            id: "c3-tf-02",
            kind: "choice",
            skillTags: ["articles"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I like dogs." },
              { id: "b", text: "I like a dogs." },
              { id: "c", text: "I like the dogs." }
            ],
            correctOptionId: "a",
            explanation: "For general plural nouns, often use no article: I like dogs.",
            theoryCardIds: ["zero-general"]
          },
          {
            id: "c3-tf-03",
            kind: "choice",
            skillTags: ["countability"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "There is a lot of information online." },
              { id: "b", text: "There are many informations online." },
              { id: "c", text: "There are much informations online." }
            ],
            correctOptionId: "a",
            explanation: "Information is uncountable in English. Say a lot of information.",
            theoryCardIds: ["countable-uncountable"]
          },
          {
            id: "c3-tf-04",
            kind: "gap",
            skillTags: ["articles"],
            prompt: "I bought a book yesterday. ____ book is about design.",
            acceptedAnswers: ["the"],
            explanation: "Use the when the thing was already introduced: the book.",
            theoryCardIds: ["the-known"]
          },
          {
            id: "c3-tf-05",
            kind: "fix",
            skillTags: ["articles"],
            prompt: "Fix: She is doctor.",
            acceptedAnswers: ["She is a doctor.", "She's a doctor."],
            explanation: "Use a/an with jobs: a doctor.",
            theoryCardIds: ["articles-jobs"]
          }
        ],
        practise: [
          {
            id: "c3-pr-01",
            kind: "gap",
            skillTags: ["articles"],
            prompt: "I saw ____ interesting video today.",
            acceptedAnswers: ["an"],
            explanation: "Use an before a vowel sound: an interesting video.",
            theoryCardIds: ["a-an-singular"]
          },
          {
            id: "c3-pr-02",
            kind: "choice",
            skillTags: ["articles"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "Coffee is expensive here." },
              { id: "b", text: "A coffee is expensive here." },
              { id: "c", text: "The coffee is expensive here." }
            ],
            correctOptionId: "a",
            explanation: "For coffee as a general uncountable thing, no article is natural.",
            theoryCardIds: ["zero-general", "countable-uncountable"]
          },
          {
            id: "c3-pr-03",
            kind: "gap",
            skillTags: ["quantifiers", "countability"],
            prompt: "I don't have ____ free time this week.",
            acceptedAnswers: ["much", "any"],
            explanation: "Time is uncountable here. In negatives, much or any can work.",
            theoryCardIds: ["some-any", "countable-uncountable"]
          },
          {
            id: "c3-pr-04",
            kind: "choice",
            skillTags: ["quantifiers"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I have a few questions." },
              { id: "b", text: "I have a little questions." },
              { id: "c", text: "I have much questions." }
            ],
            correctOptionId: "a",
            explanation: "Use a few with countable plural nouns: a few questions.",
            theoryCardIds: ["quantifiers-basic"]
          },
          {
            id: "c3-pr-05",
            kind: "gap",
            skillTags: ["articles"],
            prompt: "Can you open ____ window? It is hot here.",
            acceptedAnswers: ["the", "a"],
            explanation: "The is natural if both people know which window. A is possible if any window is fine.",
            theoryCardIds: ["the-known", "a-an-singular"]
          },
          {
            id: "c3-pr-06",
            kind: "fix",
            skillTags: ["countability"],
            prompt: "Fix: I need an information about the course.",
            acceptedAnswers: ["I need some information about the course.", "I need information about the course."],
            explanation: "Information is uncountable. Do not use an information.",
            theoryCardIds: ["countable-uncountable"]
          },
          {
            id: "c3-pr-07",
            kind: "choice",
            skillTags: ["articles"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I went to the work at 9." },
              { id: "b", text: "I went to work at 9." },
              { id: "c", text: "I went to a work at 9." }
            ],
            correctOptionId: "b",
            explanation: "Say go to work, not go to the work, when you mean your workplace/activity generally.",
            theoryCardIds: ["zero-common-places"]
          },
          {
            id: "c3-pr-08",
            kind: "gap",
            skillTags: ["plural-nouns"],
            prompt: "One person, two ____.",
            acceptedAnswers: ["people"],
            explanation: "The plural of person is usually people.",
            theoryCardIds: ["plural-nouns-basic"]
          },
          {
            id: "c3-pr-09",
            kind: "choice",
            skillTags: ["articles"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I play guitar." },
              { id: "b", text: "I play the guitar." },
              { id: "c", text: "I play a guitar." }
            ],
            correctOptionId: "b",
            explanation: "With musical instruments, the is common: play the guitar.",
            theoryCardIds: ["the-instruments"]
          },
          {
            id: "c3-pr-10",
            kind: "gap",
            skillTags: ["articles"],
            prompt: "She has ____ old laptop and a new phone.",
            acceptedAnswers: ["an"],
            explanation: "Use an before a vowel sound: an old laptop.",
            theoryCardIds: ["a-an-singular"]
          }
        ],
        fixCommonMistakes: [
          {
            id: "c3-fx-01",
            kind: "fix",
            skillTags: ["articles"],
            prompt: "Fix: I bought new laptop.",
            acceptedAnswers: ["I bought a new laptop."],
            explanation: "Laptop is singular and countable, so use a.",
            theoryCardIds: ["a-an-singular"]
          },
          {
            id: "c3-fx-02",
            kind: "fix",
            skillTags: ["articles"],
            prompt: "Fix: I like the English.",
            acceptedAnswers: ["I like English."],
            explanation: "For languages in general, use no article: English.",
            theoryCardIds: ["zero-general"]
          },
          {
            id: "c3-fx-03",
            kind: "fix",
            skillTags: ["quantifiers", "countability"],
            prompt: "Fix: There are many water in the bottle.",
            acceptedAnswers: ["There is a lot of water in the bottle.", "There is much water in the bottle."],
            explanation: "Water is uncountable, so use is and a lot of/much.",
            theoryCardIds: ["countable-uncountable", "quantifiers-basic"]
          },
          {
            id: "c3-fx-04",
            kind: "fix",
            skillTags: ["articles"],
            prompt: "Fix: My friend is artist.",
            acceptedAnswers: ["My friend is an artist."],
            explanation: "Use an with jobs before a vowel sound: an artist.",
            theoryCardIds: ["articles-jobs", "a-an-singular"]
          }
        ],
        useItPersonally: [
          {
            id: "c3-ui-01",
            kind: "personal",
            skillTags: ["personal-output", "articles"],
            prompt: "Write 5 true sentences using a/an with jobs or objects.",
            guidance: "Examples: My friend is a designer. I bought a notebook. She has an old phone."
          },
          {
            id: "c3-ui-02",
            kind: "personal",
            skillTags: ["personal-output", "countability"],
            prompt: "Write 4 sentences with some/a lot of/much/many.",
            guidance: "Use both countable and uncountable nouns: questions, time, information, people, coffee."
          }
        ]
      }
    },
    {
      id: "small-words",
      title: "Cluster 4: Small words",
      shortTitle: "Small words",
      purpose: "Review the small words that change everything: prepositions, pronouns, linkers, and fixed phrases.",
      focus: ["prepositions", "object pronouns", "linkers", "verb/adjective patterns", "common collocations"],
      typicalMistakes: ["go to home", "listen music", "good in English", "depends from", "explain me this"],
      stages: {
        tryFirst: [
          {
            id: "c4-tf-01",
            kind: "choice",
            skillTags: ["prepositions", "collocations"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I came home late." },
              { id: "b", text: "I came to home late." },
              { id: "c", text: "I came at home late." }
            ],
            correctOptionId: "a",
            explanation: "Say come home, not come to home.",
            theoryCardIds: ["go-home"]
          },
          {
            id: "c4-tf-02",
            kind: "gap",
            skillTags: ["prepositions"],
            prompt: "I am good ____ explaining things simply.",
            acceptedAnswers: ["at"],
            explanation: "Use good at for skills and activities.",
            theoryCardIds: ["adjective-prep-good-at"]
          },
          {
            id: "c4-tf-03",
            kind: "choice",
            skillTags: ["pronouns"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I sent she a message." },
              { id: "b", text: "I sent her a message." },
              { id: "c", text: "I sent hers a message." }
            ],
            correctOptionId: "b",
            explanation: "Use object pronouns after verbs: sent her.",
            theoryCardIds: ["object-pronouns"]
          },
          {
            id: "c4-tf-04",
            kind: "gap",
            skillTags: ["linkers"],
            prompt: "I wanted to go for a walk, ____ it started raining.",
            acceptedAnswers: ["but"],
            explanation: "Use but for contrast: I wanted to go, but it rained.",
            theoryCardIds: ["basic-linkers"]
          },
          {
            id: "c4-tf-05",
            kind: "fix",
            skillTags: ["collocations", "prepositions"],
            prompt: "Fix: I am interested about this topic.",
            acceptedAnswers: ["I am interested in this topic.", "I'm interested in this topic."],
            explanation: "The phrase is interested in something.",
            theoryCardIds: ["common-adjective-prepositions"]
          }
        ],
        practise: [
          {
            id: "c4-pr-01",
            kind: "gap",
            skillTags: ["prepositions"],
            prompt: "I was born ____ July.",
            acceptedAnswers: ["in"],
            explanation: "Use in with months: in July.",
            theoryCardIds: ["prepositions-time"]
          },
          {
            id: "c4-pr-02",
            kind: "gap",
            skillTags: ["prepositions"],
            prompt: "The meeting is ____ 6 p.m.",
            acceptedAnswers: ["at"],
            explanation: "Use at with clock times: at 6 p.m.",
            theoryCardIds: ["prepositions-time"]
          },
          {
            id: "c4-pr-03",
            kind: "choice",
            skillTags: ["prepositions"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I arrived to the airport early." },
              { id: "b", text: "I arrived at the airport early." },
              { id: "c", text: "I arrived in the airport early." }
            ],
            correctOptionId: "b",
            explanation: "Use arrive at for places like airports, stations, and buildings.",
            theoryCardIds: ["common-verb-prepositions"]
          },
          {
            id: "c4-pr-04",
            kind: "choice",
            skillTags: ["collocations"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I asked him a question." },
              { id: "b", text: "I asked to him a question." },
              { id: "c", text: "I asked from him a question." }
            ],
            correctOptionId: "a",
            explanation: "Say ask someone a question, without to.",
            theoryCardIds: ["common-verb-prepositions"]
          },
          {
            id: "c4-pr-05",
            kind: "gap",
            skillTags: ["prepositions", "collocations"],
            prompt: "This song reminds me ____ my childhood.",
            acceptedAnswers: ["of"],
            explanation: "The phrase is remind someone of something.",
            theoryCardIds: ["common-verb-prepositions"]
          },
          {
            id: "c4-pr-06",
            kind: "choice",
            skillTags: ["linkers"],
            prompt: "Choose the best sentence.",
            options: [
              { id: "a", text: "I stayed home because I was sick." },
              { id: "b", text: "I stayed home so I was sick." },
              { id: "c", text: "I stayed home but I was sick." }
            ],
            correctOptionId: "a",
            explanation: "Use because for the reason: I stayed home because I was sick.",
            theoryCardIds: ["basic-linkers"]
          },
          {
            id: "c4-pr-07",
            kind: "gap",
            skillTags: ["pronouns"],
            prompt: "I like this photo. Can you send it to ____?",
            acceptedAnswers: ["me"],
            explanation: "After to, use the object pronoun: to me.",
            theoryCardIds: ["object-pronouns"]
          },
          {
            id: "c4-pr-08",
            kind: "fix",
            skillTags: ["prepositions", "collocations"],
            prompt: "Fix: She is afraid from dogs.",
            acceptedAnswers: ["She is afraid of dogs."],
            explanation: "The phrase is afraid of something.",
            theoryCardIds: ["common-adjective-prepositions"]
          },
          {
            id: "c4-pr-09",
            kind: "choice",
            skillTags: ["prepositions"],
            prompt: "Choose the natural sentence.",
            options: [
              { id: "a", text: "I live at Vietnam." },
              { id: "b", text: "I live in Vietnam." },
              { id: "c", text: "I live on Vietnam." }
            ],
            correctOptionId: "b",
            explanation: "Use in with countries and cities: in Vietnam, in London.",
            theoryCardIds: ["prepositions-place"]
          },
          {
            id: "c4-pr-10",
            kind: "gap",
            skillTags: ["collocations"],
            prompt: "I need to pay ____ the course tomorrow.",
            acceptedAnswers: ["for"],
            explanation: "The phrase is pay for something.",
            theoryCardIds: ["common-verb-prepositions"]
          }
        ],
        fixCommonMistakes: [
          {
            id: "c4-fx-01",
            kind: "fix",
            skillTags: ["prepositions", "collocations"],
            prompt: "Fix: I listen music every day.",
            acceptedAnswers: ["I listen to music every day."],
            explanation: "Use listen to something.",
            theoryCardIds: ["verb-prep-listen-to"]
          },
          {
            id: "c4-fx-02",
            kind: "fix",
            skillTags: ["prepositions", "collocations"],
            prompt: "Fix: It depends from my schedule.",
            acceptedAnswers: ["It depends on my schedule."],
            explanation: "Use depend on something.",
            theoryCardIds: ["common-verb-prepositions"]
          },
          {
            id: "c4-fx-03",
            kind: "fix",
            skillTags: ["collocations"],
            prompt: "Fix: Please explain me this word.",
            acceptedAnswers: ["Please explain this word to me."],
            explanation: "Use explain something to someone.",
            theoryCardIds: ["common-verb-prepositions"]
          },
          {
            id: "c4-fx-04",
            kind: "fix",
            skillTags: ["prepositions"],
            prompt: "Fix: I usually wake up at the morning.",
            acceptedAnswers: ["I usually wake up in the morning."],
            explanation: "Use in the morning.",
            theoryCardIds: ["prepositions-time"]
          },
          {
            id: "c4-fx-05",
            kind: "fix",
            skillTags: ["prepositions", "collocations"],
            prompt: "Fix: She is married with an artist.",
            acceptedAnswers: ["She is married to an artist."],
            explanation: "Use married to someone.",
            theoryCardIds: ["common-adjective-prepositions"]
          }
        ],
        useItPersonally: [
          {
            id: "c4-ui-01",
            kind: "personal",
            skillTags: ["personal-output", "prepositions"],
            prompt: "Write 5 true sentences with prepositions from this cluster.",
            guidance: "Use phrases like good at, interested in, listen to, depends on, in the morning, on Monday."
          },
          {
            id: "c4-ui-02",
            kind: "personal",
            skillTags: ["personal-output", "linkers"],
            prompt: "Write 4 connected sentences about your week.",
            guidance: "Use because, so, but, and when."
          }
        ]
      }
    }
  ],

  theoryCards: [
    {
      id: "basic-word-order",
      title: "Basic word order",
      useWhen: "Use this when a sentence sounds messy or translated from Russian.",
      pattern: "Subject + verb + object/place/time",
      examples: ["I really like this idea.", "She works from home.", "We watched a film yesterday."],
      commonMistake: "I very like this idea.",
      miniCheck: { prompt: "Fix: I like very coffee.", answer: "I really like coffee. / I like coffee very much." }
    },
    {
      id: "question-word-order",
      title: "Question word order",
      useWhen: "Use this when you make a question.",
      pattern: "Question word + auxiliary/be + subject + verb",
      examples: ["Where do you live?", "Why are you tired?", "What did you buy?"],
      commonMistake: "Where you live?",
      miniCheck: { prompt: "Fix: Why she is late?", answer: "Why is she late?" }
    },
    {
      id: "do-support",
      title: "Do / does / did in questions",
      useWhen: "Use this with normal verbs in questions and negatives.",
      pattern: "do/does/did + subject + base verb",
      examples: ["Do you like it?", "Does she work online?", "Did they call you?"],
      commonMistake: "Does she works online?",
      miniCheck: { prompt: "Fix: Did you went home?", answer: "Did you go home?" }
    },
    {
      id: "negatives-basic",
      title: "Basic negatives",
      useWhen: "Use this when you say that something is not true or did not happen.",
      pattern: "don't/doesn't/didn't + base verb",
      examples: ["I don't know.", "She doesn't work here.", "We didn't watch it."],
      commonMistake: "I no understand.",
      miniCheck: { prompt: "Fix: She doesn't likes it.", answer: "She doesn't like it." }
    },
    {
      id: "third-person-s",
      title: "he/she/it + -s",
      useWhen: "Use this in Present Simple with he, she, it, or one singular thing/person.",
      pattern: "he/she/it + verb-s/es",
      examples: ["She works online.", "My friend studies English.", "This app runs well."],
      commonMistake: "She work online.",
      miniCheck: { prompt: "Complete: My brother ____ in a cafe. (work)", answer: "works" }
    },
    {
      id: "be-do-have-basic",
      title: "Be / do / have",
      useWhen: "Use this when you are not sure which small verb you need.",
      pattern: "be + adjective/place; do + normal verb questions/negatives; have + possession or perfect",
      examples: ["I am tired.", "Do you like it?", "I have a question."],
      commonMistake: "I don't tired.",
      miniCheck: { prompt: "Fix: Are you like coffee?", answer: "Do you like coffee?" }
    },
    {
      id: "present-simple-routines",
      title: "Present Simple for routines",
      useWhen: "Use this for habits, routines, facts, and repeated actions.",
      pattern: "subject + base verb / verb-s",
      examples: ["I work online.", "She studies twice a week.", "They live near the sea."],
      commonMistake: "I am usually wake up late.",
      miniCheck: { prompt: "Complete: She usually ____ tea. (drink)", answer: "drinks" }
    },
    {
      id: "present-continuous-now",
      title: "Present Continuous for now",
      useWhen: "Use this for actions happening now or around now.",
      pattern: "am/is/are + verb-ing",
      examples: ["I am working now.", "She is cooking.", "They are studying this week."],
      commonMistake: "She is work now.",
      miniCheck: { prompt: "Fix: I am write a message.", answer: "I am writing a message." }
    },
    {
      id: "past-simple-finished",
      title: "Past Simple for finished time",
      useWhen: "Use this with finished time words like yesterday, last week, two days ago, in 2020.",
      pattern: "subject + past verb; questions/negatives use did/didn't + base verb",
      examples: ["I watched it yesterday.", "She went home early.", "We didn't have time."],
      commonMistake: "I have watched it yesterday.",
      miniCheck: { prompt: "Fix: Last week I have visited my parents.", answer: "Last week I visited my parents." }
    },
    {
      id: "future-going-to",
      title: "Going to for plans",
      useWhen: "Use this for plans and intentions.",
      pattern: "am/is/are going to + base verb",
      examples: ["I am going to study tonight.", "She is going to call later.", "We are going to meet tomorrow."],
      commonMistake: "I going to study.",
      miniCheck: { prompt: "Fix: I going to clean my room.", answer: "I am going to clean my room." }
    },
    {
      id: "future-will",
      title: "Will for quick decisions",
      useWhen: "Use this when you decide now or offer to do something.",
      pattern: "will + base verb",
      examples: ["I will answer it.", "I'll help you.", "We will see."],
      commonMistake: "I will going help.",
      miniCheck: { prompt: "Fix: I will to call you.", answer: "I will call you." }
    },
    {
      id: "present-perfect-experience",
      title: "Present Perfect for experience and recent result",
      useWhen: "Use this for life experience or a recent result when the exact finished time is not important.",
      pattern: "have/has + past participle",
      examples: ["I have never tried sushi.", "She has already finished.", "I have lost my keys."],
      commonMistake: "I have seen it yesterday.",
      miniCheck: { prompt: "Complete: Have you ever ____ to Thailand? (be)", answer: "been" }
    },
    {
      id: "articles-jobs",
      title: "Jobs and roles: a/an",
      useWhen: "Use this when you say someone's job or role.",
      pattern: "be/work as + a/an + job",
      examples: ["She is a teacher.", "He is an engineer.", "I work as a designer."],
      commonMistake: "She is teacher.",
      miniCheck: { prompt: "Complete: My brother is ____ artist.", answer: "an" }
    },
    {
      id: "a-an-singular",
      title: "a/an with one countable thing",
      useWhen: "Use this before one singular countable noun when it is not specific yet.",
      pattern: "a/an + adjective + singular countable noun",
      examples: ["a phone", "an old laptop", "a good idea"],
      commonMistake: "I bought new phone.",
      miniCheck: { prompt: "Complete: I saw ____ interesting video.", answer: "an" }
    },
    {
      id: "the-known",
      title: "the for known/specific things",
      useWhen: "Use this when both people know which thing you mean.",
      pattern: "the + noun",
      examples: ["I bought a book. The book is great.", "Can you close the window?", "The lesson starts at 6."],
      commonMistake: "I saw a dog. A dog was friendly.",
      miniCheck: { prompt: "Complete: I watched a film. ____ film was boring.", answer: "The" }
    },
    {
      id: "zero-general",
      title: "No article for general ideas",
      useWhen: "Use this with general plural nouns, languages, and many uncountable nouns.",
      pattern: "no article + plural/uncountable/general noun",
      examples: ["I like music.", "Dogs are friendly.", "English is useful."],
      commonMistake: "I like the music.",
      miniCheck: { prompt: "Fix: I study the English.", answer: "I study English." }
    },
    {
      id: "countable-uncountable",
      title: "Countable and uncountable nouns",
      useWhen: "Use this when you choose a/an, plural -s, much/many, or some.",
      pattern: "countable: one question, two questions; uncountable: some advice, a lot of information",
      examples: ["a question", "some advice", "a lot of information", "much time"],
      commonMistake: "an advice / many informations",
      miniCheck: { prompt: "Fix: I need an advice.", answer: "I need some advice. / I need a piece of advice." }
    },
    {
      id: "some-any",
      title: "some and any",
      useWhen: "Use this for amounts, especially in negatives and questions.",
      pattern: "some in positive sentences; any often in negatives/questions",
      examples: ["I have some time.", "I don't have any time.", "Do you have any questions?"],
      commonMistake: "I don't have some time.",
      miniCheck: { prompt: "Complete: I don't have ____ money.", answer: "any" }
    },
    {
      id: "quantifiers-basic",
      title: "much, many, a few, a little",
      useWhen: "Use this when you talk about amount.",
      pattern: "many/a few + countable plural; much/a little + uncountable",
      examples: ["many questions", "a few people", "much time", "a little water"],
      commonMistake: "much questions",
      miniCheck: { prompt: "Choose: a few / a little questions", answer: "a few questions" }
    },
    {
      id: "plural-nouns-basic",
      title: "Plural nouns",
      useWhen: "Use this when there is more than one thing/person.",
      pattern: "usually noun + s, but some plurals are irregular",
      examples: ["two books", "three people", "two children", "many women"],
      commonMistake: "two childs",
      miniCheck: { prompt: "Complete: one person, two ____", answer: "people" }
    },
    {
      id: "zero-common-places",
      title: "go to work, school, bed, home",
      useWhen: "Use this with common places/activities that often do not take the.",
      pattern: "go to work/school/bed; go home",
      examples: ["I go to work at 9.", "She went to bed early.", "We went home."],
      commonMistake: "go to the work / go to home",
      miniCheck: { prompt: "Fix: I went to the work early.", answer: "I went to work early." }
    },
    {
      id: "the-instruments",
      title: "play the guitar",
      useWhen: "Use this with musical instruments.",
      pattern: "play the + instrument",
      examples: ["play the guitar", "play the piano", "play the drums"],
      commonMistake: "play guitar",
      miniCheck: { prompt: "Complete: She plays ____ piano.", answer: "the" }
    },
    {
      id: "go-home",
      title: "go home, come home, get home",
      useWhen: "Use this when home is a direction or destination.",
      pattern: "go/come/get + home",
      examples: ["I went home early.", "She came home late.", "What time did you get home?"],
      commonMistake: "go to home",
      miniCheck: { prompt: "Fix: I came to home late.", answer: "I came home late." }
    },
    {
      id: "verb-prep-listen-to",
      title: "listen to",
      useWhen: "Use this when you talk about music, podcasts, people, or sounds.",
      pattern: "listen to + noun/person",
      examples: ["listen to music", "listen to a podcast", "listen to me"],
      commonMistake: "listen music",
      miniCheck: { prompt: "Complete: I listen ____ podcasts.", answer: "to" }
    },
    {
      id: "adjective-prep-good-at",
      title: "good at",
      useWhen: "Use this for skills and activities.",
      pattern: "good at + noun / verb-ing",
      examples: ["good at English", "good at cooking", "good at explaining things"],
      commonMistake: "good in English",
      miniCheck: { prompt: "Complete: She is good ____ drawing.", answer: "at" }
    },
    {
      id: "prepositions-time",
      title: "Prepositions of time",
      useWhen: "Use this with days, months, clock times, and parts of the day.",
      pattern: "on Monday; in July; at 6 p.m.; in the morning",
      examples: ["on Friday", "in 2024", "at night", "in the evening"],
      commonMistake: "in Monday / at the morning",
      miniCheck: { prompt: "Complete: The lesson is ____ Tuesday.", answer: "on" }
    },
    {
      id: "prepositions-place",
      title: "Prepositions of place",
      useWhen: "Use this for countries, cities, rooms, buildings, and exact points.",
      pattern: "in countries/cities/rooms; at exact places/events",
      examples: ["in Vietnam", "in the kitchen", "at the airport", "at home"],
      commonMistake: "live at Vietnam",
      miniCheck: { prompt: "Complete: I live ____ Da Nang.", answer: "in" }
    },
    {
      id: "object-pronouns",
      title: "Object pronouns",
      useWhen: "Use this after verbs and prepositions.",
      pattern: "me, you, him, her, it, us, them",
      examples: ["Help me.", "I called her.", "Send it to us."],
      commonMistake: "Can you help I?",
      miniCheck: { prompt: "Complete: I sent ____ a message. (she)", answer: "her" }
    },
    {
      id: "basic-linkers",
      title: "Basic linkers",
      useWhen: "Use this to connect simple ideas clearly.",
      pattern: "because = reason; so = result; but = contrast; when = time",
      examples: ["I stayed home because I was sick.", "I was tired, so I slept early.", "I wanted to go, but it rained."],
      commonMistake: "I was tired because I went to bed early.",
      miniCheck: { prompt: "Choose: I was hungry, ____ I made dinner. because/so", answer: "so" }
    },
    {
      id: "common-verb-prepositions",
      title: "Common verb patterns",
      useWhen: "Use this for verbs that often need a specific preposition or no preposition.",
      pattern: "depend on; pay for; arrive at; explain something to someone; discuss something",
      examples: ["It depends on the weather.", "I paid for the course.", "We discussed the plan."],
      commonMistake: "depends from / discuss about / explain me",
      miniCheck: { prompt: "Fix: We discussed about the lesson.", answer: "We discussed the lesson." }
    },
    {
      id: "common-adjective-prepositions",
      title: "Common adjective patterns",
      useWhen: "Use this after adjectives that need a specific preposition.",
      pattern: "interested in; afraid of; married to; tired of",
      examples: ["I am interested in design.", "She is afraid of dogs.", "He is married to an artist."],
      commonMistake: "interested about / afraid from / married with",
      miniCheck: { prompt: "Complete: I am interested ____ psychology.", answer: "in" }
    },
    {
      id: "common-collocations",
      title: "Common everyday collocations",
      useWhen: "Use this for fixed phrases where direct translation often fails.",
      pattern: "make a mistake; do homework; take a photo; have a rest",
      examples: ["I made a mistake.", "She did her homework.", "Can you take a photo?"],
      commonMistake: "do a mistake / make homework",
      miniCheck: { prompt: "Choose: make / do a mistake", answer: "make a mistake" }
    },
    {
      id: "age-with-be",
      title: "Age with be",
      useWhen: "Use this when you say someone's age.",
      pattern: "be + number / be + number years old",
      examples: ["I am 28.", "She is 30 years old.", "My brother is 19."],
      commonMistake: "I have 28 years old.",
      miniCheck: { prompt: "Fix: He has 20 years old.", answer: "He is 20 years old. / He is 20." }
    }
  ],

  finalOutput: [
    {
      id: "final-01",
      kind: "personal",
      skillTags: ["personal-output", "past-simple"],
      prompt: "Write 5 sentences about what you did yesterday.",
      guidance: "Use Past Simple. Include one negative sentence and one question you could ask another person."
    },
    {
      id: "final-02",
      kind: "personal",
      skillTags: ["personal-output", "present-simple", "present-continuous"],
      prompt: "Write 4 sentences about your normal week and 2 sentences about what is different this week.",
      guidance: "Use Present Simple for routines and Present Continuous for temporary situations."
    },
    {
      id: "final-03",
      kind: "personal",
      skillTags: ["personal-output", "articles"],
      prompt: "Write 6 sentences with a/an/the/no article. Mark the article choice if you can.",
      guidance: "Example: I bought a book. The book is about art. I like music."
    },
    {
      id: "final-04",
      kind: "personal",
      skillTags: ["personal-output", "prepositions"],
      prompt: "Write a short paragraph about your day using at least 6 small words from the handout.",
      guidance: "Try: in the morning, on Monday, good at, interested in, listen to, depends on, because, so."
    },
    {
      id: "final-05",
      kind: "personal",
      skillTags: ["personal-output", "questions"],
      prompt: "Write 6 questions you can ask in a real conversation.",
      guidance: "Use different question patterns: Do you...? Are you...? Did you...? Have you ever...? What do you...? Why is...?"
    },
    {
      id: "final-06",
      kind: "personal",
      skillTags: ["personal-output", "collocations"],
      prompt: "Write 8 true sentences using phrases from the handout.",
      guidance: "Use phrases like make a mistake, do homework, take a photo, go home, listen to music, pay for, depend on, explain something to someone."
    }
  ]
} as const;
