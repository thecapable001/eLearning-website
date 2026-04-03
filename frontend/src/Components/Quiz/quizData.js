export const quizCatalog = [
  {
    id: "dsa",
    group: "core",
    kicker: "Coding rounds",
    title: "Data Structures and Algorithms",
    description:
      "Revise arrays, trees, graphs, recursion, and complexity basics that repeatedly appear in MNC coding rounds.",
    focusPoints: ["Arrays and trees", "Sorting and searching", "Time complexity"],
    accent: "#18794e",
    soft: "rgba(24, 121, 78, 0.14)",
    relatedPath: "/courses/dsa",
    relatedLabel: "Open DSA Course",
    questions: [
      {
        question: "Which data structure follows the Last In First Out (LIFO) principle?",
        options: ["Queue", "Stack", "Linked list", "Heap"],
        answer: "Stack",
      },
      {
        question: "What is the average time complexity of binary search on a sorted array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: "O(log n)",
      },
      {
        question: "Which traversal visits the root node between the left and right subtrees?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        answer: "Inorder",
      },
      {
        question: "Which graph traversal technique commonly uses a queue?",
        options: ["Depth-first search", "Breadth-first search", "Backtracking", "Dynamic programming"],
        answer: "Breadth-first search",
      },
      {
        question: "What is the worst-case time complexity of quicksort?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
        answer: "O(n^2)",
      },
      {
        question: "Which technique is most associated with solving overlapping subproblems efficiently?",
        options: ["Greedy method", "Dynamic programming", "Binary search", "Hashing"],
        answer: "Dynamic programming",
      },
    ],
  },
  {
    id: "oop",
    group: "core",
    kicker: "Core fundamentals",
    title: "Object-Oriented Programming",
    description:
      "Strengthen the OOP basics interviewers expect in Java, C++, and other object-oriented language discussions.",
    focusPoints: ["Encapsulation", "Inheritance", "Polymorphism"],
    accent: "#0f766e",
    soft: "rgba(15, 118, 110, 0.14)",
    relatedPath: "/courses/java",
    relatedLabel: "Open Java and OOP",
    questions: [
      {
        question: "Which OOP principle bundles data and methods together inside one unit?",
        options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
        answer: "Encapsulation",
      },
      {
        question: "What allows a derived class to reuse members of a base class?",
        options: ["Inheritance", "Aggregation", "Compilation", "Serialization"],
        answer: "Inheritance",
      },
      {
        question: "Method overriding is an example of which concept?",
        options: ["Compile-time polymorphism", "Run-time polymorphism", "Association", "Composition"],
        answer: "Run-time polymorphism",
      },
      {
        question: "Which feature hides internal implementation and shows only essential details?",
        options: ["Abstraction", "Encapsulation", "Inheritance", "Instantiation"],
        answer: "Abstraction",
      },
      {
        question: "Which keyword is commonly used in Java to access the current object?",
        options: ["super", "self", "this", "static"],
        answer: "this",
      },
      {
        question: "If one class contains an object reference of another class, that is commonly called:",
        options: ["Inheritance", "Association", "Recursion", "Compilation"],
        answer: "Association",
      },
    ],
  },
  {
    id: "dbms",
    group: "core",
    kicker: "SQL and theory",
    title: "Database Management Systems",
    description:
      "Refresh normalization, keys, joins, transactions, and indexing for technical interviews and MCQ rounds.",
    focusPoints: ["Normalization", "Transactions", "Joins and keys"],
    accent: "#2563eb",
    soft: "rgba(37, 99, 235, 0.14)",
    relatedPath: "/courses/fullstack/sql",
    relatedLabel: "Open SQL Track",
    questions: [
      {
        question: "Which normal form removes partial dependency from a relation?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: "2NF",
      },
      {
        question: "Which key uniquely identifies each record in a table?",
        options: ["Foreign key", "Candidate key", "Primary key", "Composite key"],
        answer: "Primary key",
      },
      {
        question: "Which SQL join returns only matching rows from both tables?",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
        answer: "INNER JOIN",
      },
      {
        question: "Which ACID property ensures that a transaction is completed entirely or not at all?",
        options: ["Atomicity", "Consistency", "Isolation", "Durability"],
        answer: "Atomicity",
      },
      {
        question: "What is the main purpose of an index in a database?",
        options: ["Store backup data", "Reduce data redundancy", "Speed up query retrieval", "Encrypt records"],
        answer: "Speed up query retrieval",
      },
      {
        question: "A foreign key is used to:",
        options: ["Uniquely identify every row", "Create a relationship between tables", "Sort the table", "Delete duplicate rows"],
        answer: "Create a relationship between tables",
      },
    ],
  },
  {
    id: "os",
    group: "core",
    kicker: "Core theory",
    title: "Operating Systems",
    description:
      "Brush up on processes, scheduling, deadlocks, memory management, and synchronization concepts asked in interviews.",
    focusPoints: ["Processes and threads", "Deadlocks", "Memory management"],
    accent: "#7c3aed",
    soft: "rgba(124, 58, 237, 0.14)",
    relatedPath: "/library",
    relatedLabel: "Open Revision Library",
    questions: [
      {
        question: "Which scheduling algorithm gives the CPU to the process with the smallest execution time first?",
        options: ["FCFS", "Round Robin", "Shortest Job First", "Priority scheduling"],
        answer: "Shortest Job First",
      },
      {
        question: "What is a deadlock?",
        options: [
          "When a process finishes early",
          "When two or more processes wait indefinitely for resources",
          "When memory is allocated dynamically",
          "When a process is interrupted by I/O",
        ],
        answer: "When two or more processes wait indefinitely for resources",
      },
      {
        question: "Which memory management technique divides memory into fixed-size blocks?",
        options: ["Segmentation", "Paging", "Swapping", "Spooling"],
        answer: "Paging",
      },
      {
        question: "A thread is best described as:",
        options: ["A lightweight process", "A type of hard disk", "A CPU register", "A memory page"],
        answer: "A lightweight process",
      },
      {
        question: "Which component translates a virtual address into a physical address?",
        options: ["Compiler", "Loader", "MMU", "Scheduler"],
        answer: "MMU",
      },
      {
        question: "Which synchronization primitive is commonly used to control access to shared resources?",
        options: ["Semaphore", "Cache", "Buffer", "Partition"],
        answer: "Semaphore",
      },
    ],
  },
  {
    id: "cn",
    group: "core",
    kicker: "Networking rounds",
    title: "Computer Networks",
    description:
      "Revise OSI, TCP/IP, routing, addressing, and transport-layer basics that appear in core CS interviews.",
    focusPoints: ["OSI and TCP/IP", "Routing basics", "Transport protocols"],
    accent: "#ea580c",
    soft: "rgba(234, 88, 12, 0.14)",
    relatedPath: "/library",
    relatedLabel: "Open Network Notes",
    questions: [
      {
        question: "Which layer of the OSI model is responsible for routing packets?",
        options: ["Transport layer", "Network layer", "Data link layer", "Session layer"],
        answer: "Network layer",
      },
      {
        question: "Which protocol is connection-oriented?",
        options: ["UDP", "IP", "TCP", "ARP"],
        answer: "TCP",
      },
      {
        question: "What does DNS primarily do?",
        options: [
          "Assign MAC addresses",
          "Translate domain names to IP addresses",
          "Encrypt packets",
          "Manage routing tables",
        ],
        answer: "Translate domain names to IP addresses",
      },
      {
        question: "Which device forwards packets based on IP address?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        answer: "Router",
      },
      {
        question: "What is the default port number for HTTP?",
        options: ["21", "25", "80", "443"],
        answer: "80",
      },
      {
        question: "Which addressing is used at the data link layer?",
        options: ["IP address", "Port address", "MAC address", "Logical address"],
        answer: "MAC address",
      },
    ],
  },
  {
    id: "programming",
    group: "core",
    kicker: "Language basics",
    title: "Programming Languages",
    description:
      "Strengthen the C, C++, Java, and Python basics that often appear in fresher interviews and written tests.",
    focusPoints: ["Syntax and logic", "Memory and types", "Language behavior"],
    accent: "#ca8a04",
    soft: "rgba(202, 138, 4, 0.14)",
    relatedPath: "/courses/programming",
    relatedLabel: "Open Programming Track",
    questions: [
      {
        question: "Which language is most closely associated with the Standard Template Library (STL)?",
        options: ["Java", "Python", "C++", "JavaScript"],
        answer: "C++",
      },
      {
        question: "Which Python keyword is used to define a function?",
        options: ["function", "define", "def", "fun"],
        answer: "def",
      },
      {
        question: "Which of these is a valid primitive type in Java?",
        options: ["string", "Integer", "boolean", "Array"],
        answer: "boolean",
      },
      {
        question: "Which symbol is used to access a member through a pointer in C or C++?",
        options: [".", "::", "->", "=>"],
        answer: "->",
      },
      {
        question: "Which concept lets one function name behave differently based on arguments in C++?",
        options: ["Function overloading", "Garbage collection", "Namespace", "Recursion"],
        answer: "Function overloading",
      },
      {
        question: "Which Python data type is immutable?",
        options: ["list", "set", "dictionary", "tuple"],
        answer: "tuple",
      },
    ],
  },
  {
    id: "java",
    group: "development",
    kicker: "Programming track",
    title: "Java Programming",
    description:
      "Check your Java language basics, collections awareness, and OOP understanding before technical rounds.",
    focusPoints: ["Syntax and types", "Constructors", "Collections and arrays"],
    accent: "#b45309",
    soft: "rgba(180, 83, 9, 0.14)",
    relatedPath: "/courses/java",
    relatedLabel: "Open Java Course",
    questions: [
      {
        question: "How many primitive data types are there in Java?",
        options: ["6", "7", "8", "9"],
        answer: "8",
      },
      {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["implement", "inherits", "extends", "super"],
        answer: "extends",
      },
      {
        question: "Which collection stores unique values only?",
        options: ["List", "Queue", "Set", "Array"],
        answer: "Set",
      },
      {
        question: "Which return type is used by a method that returns no value?",
        options: ["int", "void", "null", "blank"],
        answer: "void",
      },
      {
        question: "Where are local variables generally stored when a method executes?",
        options: ["Heap", "Stack", "ROM", "Register file only"],
        answer: "Stack",
      },
      {
        question: "Which statement correctly creates an integer array in Java?",
        options: ["int[] arr = new int(5);", "int arr[] = new int[5];", "array int arr[5];", "int arr = new int[5];"],
        answer: "int arr[] = new int[5];",
      },
    ],
  },
  {
    id: "fullstack",
    group: "development",
    kicker: "Build systems",
    title: "Full Stack Development",
    description:
      "Review the practical frontend, backend, database, and deployment ideas that support beginner full stack interviews.",
    focusPoints: ["Frontend and backend", "CRUD and APIs", "Git and deployment"],
    accent: "#0f766e",
    soft: "rgba(20, 184, 166, 0.14)",
    relatedPath: "/courses/fullstack",
    relatedLabel: "Open Full Stack Track",
    questions: [
      {
        question: "Full stack development usually includes:",
        options: [
          "Only database work",
          "Frontend and backend development",
          "Only frontend design",
          "Only testing and deployment",
        ],
        answer: "Frontend and backend development",
      },
      {
        question: "Which of the following is not a frontend technology?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "SQL",
      },
      {
        question: "CRUD stands for:",
        options: [
          "Create, Read, Update, Delete",
          "Create, Remove, Upgrade, Deploy",
          "Compile, Run, Upload, Debug",
          "Connect, Read, Use, Design",
        ],
        answer: "Create, Read, Update, Delete",
      },
      {
        question: "Which tool is commonly used for version control?",
        options: ["Node.js", "Git", "MongoDB", "Bootstrap"],
        answer: "Git",
      },
      {
        question: "What is the role of a database in a full stack app?",
        options: [
          "Render pages on the browser",
          "Store and retrieve application data",
          "Replace the frontend",
          "Only handle styling",
        ],
        answer: "Store and retrieve application data",
      },
      {
        question: "Deployment usually means:",
        options: [
          "Deleting old files",
          "Running the project on a server so users can access it",
          "Making the code compile locally",
          "Creating a database table",
        ],
        answer: "Running the project on a server so users can access it",
      },
    ],
  },
  {
    id: "react",
    group: "development",
    kicker: "Frontend rounds",
    title: "React.js",
    description:
      "Test the React concepts most often asked in frontend interviews, from components and props to state and rendering.",
    focusPoints: ["Components", "Props and state", "Rendering model"],
    accent: "#0284c7",
    soft: "rgba(2, 132, 199, 0.14)",
    relatedPath: "/courses/mern/react",
    relatedLabel: "Open React Track",
    questions: [
      {
        question: "What does React primarily help developers build?",
        options: ["Databases", "User interfaces", "Operating systems", "Compilers"],
        answer: "User interfaces",
      },
      {
        question: "Which concept is used to pass data from parent to child components?",
        options: ["State", "Props", "Refs", "Hooks only"],
        answer: "Props",
      },
      {
        question: "What is used in React to store data that can change over time inside a component?",
        options: ["Props", "State", "Router", "Reducer only"],
        answer: "State",
      },
      {
        question: "React improves rendering performance by using the:",
        options: ["Original DOM", "Virtual DOM", "Binary DOM", "Shadow stack"],
        answer: "Virtual DOM",
      },
      {
        question: "How many root elements can a React component return directly?",
        options: ["1", "2", "3", "Unlimited without wrapping"],
        answer: "1",
      },
      {
        question: "Which file type commonly contains JSX syntax?",
        options: [".css", ".sql", ".jsx", ".env"],
        answer: ".jsx",
      },
    ],
  },
  {
    id: "javascript",
    group: "development",
    kicker: "Frontend basics",
    title: "JavaScript",
    description:
      "Check the language fundamentals that power browser logic, frontend interviews, and beginner full stack projects.",
    focusPoints: ["Variables and arrays", "Loops and operators", "Objects and functions"],
    accent: "#f59e0b",
    soft: "rgba(245, 158, 11, 0.14)",
    relatedPath: "/courses/fullstack/javascript",
    relatedLabel: "Open JavaScript Track",
    questions: [
      {
        question: "Which symbol is commonly used as a statement terminator in JavaScript?",
        options: [",", ";", ":", "#"],
        answer: ";",
      },
      {
        question: "Which keyword can be used to declare a variable in JavaScript?",
        options: ["const", "dim", "define", "package"],
        answer: "const",
      },
      {
        question: "Which brackets are used for arrays in JavaScript?",
        options: ["()", "[]", "{}", "<>"],
        answer: "[]",
      },
      {
        question: "Which brackets are used for objects in JavaScript?",
        options: ["()", "[]", "{}", "<>"],
        answer: "{}",
      },
      {
        question: "What does the modulo operator (%) return?",
        options: ["Percentage value", "Remainder", "Quotient", "Absolute value"],
        answer: "Remainder",
      },
      {
        question: "Which method rounds a number down to the nearest integer?",
        options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.min()"],
        answer: "Math.floor()",
      },
    ],
  },
];

export const quizById = quizCatalog.reduce((lookup, quiz) => {
  lookup[quiz.id] = quiz;
  return lookup;
}, {});
