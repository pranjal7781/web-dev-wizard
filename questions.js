const allQuestions = [
    {
        numb: 1,
        question: "What does the acronym 'SQL' stand for?",
        answer: "Structured Query Language",
        options: [
            "Standard Query Language",
            "Simple Query Language",
            "Structured Query Language",
            "System Query Language"
        ]
    },
    {
        numb: 2,
        question: "Which property is used to change the background color in CSS?",
        answer: "background-color",
        options: [
            "color",
            "background",
            "bgcolor",
            "background-color"
        ]
    },
    {
        numb: 3,
        question: "Which CSS property controls the text size?",
        answer: "font-size",
        options: [
            "text-style",
            "text-size",
            "font-size",
            "font-style"
        ]
    },
    {
        numb: 4,
        question: "What symbol is used for comments in JavaScript?",
        answer: "//",
        options: [
            "<!-- -->",
            "/* */",
            "//",
            "#"
        ]
    },
    {
        numb: 5,
        question: "Which method is used to round a number to the nearest integer in JavaScript?",
        answer: "Math.round()",
        options: [
            "Math.floor()",
            "Math.ceil()",
            "Math.round()",
            "Math.integer()"
        ]
    },
    {
        numb: 6,
        question: "Which CSS property is used to make text bold?",
        answer: "font-weight",
        options: [
            "font-style",
            "font-weight",
            "text-bold",
            "bold"
        ]
    },
    {
        numb: 7,
        question: "Which JavaScript function is used to output data to the console?",
        answer: "console.log()",
        options: [
            "console.log()",
            "print()",
            "log.console()",
            "output()"
        ]
    },
    {
        numb: 8,
        question: "What is the default value of the position property in CSS?",
        answer: "static",
        options: [
            "absolute",
            "relative",
            "static",
            "fixed"
        ]
    },
    {
        numb: 9,
        question: "What does DOM stand for?",
        answer: "Document Object Model",
        options: [
            "Display Object Management",
            "Digital Ordinance Model",
            "Document Object Model",
            "Desktop Oriented Mode"
        ]
    },
    {
        numb: 10,
        question: "Which keyword is used to declare a JavaScript variable?",
        answer: "var",
        options: [
            "var",
            "int",
            "let",
            "define"
        ]
    },
    {
        numb: 11,
        question: "Which of the following is a JavaScript framework?",
        answer: "React",
        options: [
            "Laravel",
            "React",
            "Django",
            "Flask"
        ]
    },
    {
        numb: 12,
        question: "What is the purpose of the 'alt' attribute in images?",
        answer: "To describe the image",
        options: [
            "To style the image",
            "To link the image",
            "To describe the image",
            "To animate the image"
        ]
    },
    {
        numb: 13,
        question: "How do you call a function named 'myFunction' in JavaScript?",
        answer: "myFunction()",
        options: [
            "call myFunction",
            "call function myFunction",
            "myFunction()",
            "function myFunction()"
        ]
    },
    {
        numb: 14,
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        options: [
            "onmouseover",
            "onchange",
            "onclick",
            "onmouseclick"
        ]
    },
    {
        numb: 15,
        question: "Which operator is used to assign a value to a variable?",
        answer: "=",
        options: [
            "=",
            "==",
            ":",
            "==="
        ]
    },
    {
        numb: 16,
        question: "What is the correct way to write a JavaScript array?",
        answer: "var colors = ['red', 'green', 'blue']",
        options: [
            "var colors = 'red', 'green', 'blue'",
            "var colors = ['red', 'green', 'blue']",
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = {1='red', 2='green', 3='blue'}"
        ]
    },
    {
        numb: 17,
        question: "Which property is used to hide an element in CSS?",
        answer: "display",
        options: [
            "hide",
            "visibility",
            "display",
            "opacity"
        ]
    },
    {
        numb: 18,
        question: "Which method removes the last element from an array in JavaScript?",
        answer: "pop()",
        options: [
            "pop()",
            "shift()",
            "delete()",
            "splice()"
        ]
    },
    {
        numb: 19,
        question: "Which CSS value makes an element invisible but still takes up space?",
        answer: "visibility: hidden",
        options: [
            "display: none",
            "visibility: hidden",
            "opacity: 0",
            "hidden"
        ]
    },
    {
        numb: 20,
        question: "Which method adds new items to the end of an array?",
        answer: "push()",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ]
    },
    {
        numb: 21,
        question: "How do you write an IF statement in JavaScript?",
        answer: "if (condition)",
        options: [
            "if condition",
            "if [condition]",
            "if (condition)",
            "if: condition"
        ]
    },
    {
        numb: 22,
        question: "Which function is used to parse a string to an integer in JavaScript?",
        answer: "parseInt()",
        options: [
            "parseInt()",
            "int()",
            "parseInteger()",
            "toInteger()"
        ]
    },
    {
        numb: 23,
        question: "Which keyword is used to define a constant in JavaScript?",
        answer: "const",
        options: [
            "let",
            "constant",
            "const",
            "define"
        ]
    },
    {
        numb: 24,
        question: "Which attribute is used to provide a unique identifier in HTML?",
        answer: "id",
        options: ["class", "name", "id", "style"]
    },
    {
        numb: 25,
        question: "Which CSS property is used to change text color?",
        answer: "color",
        options: ["font-color", "text-color", "color", "background-color"]
    },
    {
        numb: 26,
        question: "How do you make a list not display bullet points?",
        answer: "list-style: none",
        options: ["text-decoration: none", "list: none", "list-style: none", "display: none"]
    },
    {
        numb: 27,
        question: "Which JavaScript keyword stops the execution of a loop?",
        answer: "break",
        options: ["stop", "exit", "break", "halt"]
    },
    {
        numb: 28,
        question: "Which method is used to join array elements in JavaScript?",
        answer: "join()",
        options: ["merge()", "concat()", "join()", "combine()"]
    },
    {
        numb: 29,
        question: "Which SQL statement is used to extract data from a database?",
        answer: "SELECT",
        options: ["GET", "SELECT", "EXTRACT", "FETCH"]
    },
    {
        numb: 30,
        question: "Which SQL keyword is used to sort the result-set?",
        answer: "ORDER BY",
        options: ["GROUP BY", "SORT BY", "ORDER", "ORDER BY"]
    },
    {
        numb: 31,
        question: "Which SQL clause is used to filter the records?",
        answer: "WHERE",
        options: ["WHEN", "IF", "WHERE", "FILTER"]
    },
    {
        numb: 32,
        question: "In Python, what does the len() function return?",
        answer: "The number of items",
        options: ["Length of characters", "Memory size", "The number of items", "Index value"]
    },
    {
        numb: 33,
        question: "Which keyword is used to define a function in Python?",
        answer: "def",
        options: ["function", "def", "define", "func"]
    },
    {
        numb: 34,
        question: "Which symbol is used to start a comment in Python?",
        answer: "#",
        options: ["//", "#", "<!--", "/*"]
    },
    {
        numb: 35,
        question: "What will be the output of 3 ** 2 in Python?",
        answer: "9",
        options: ["6", "8", "9", "Error"]
    },
    {
        numb: 36,
        question: "Which of the following is a mutable data type in Python?",
        answer: "List",
        options: ["Tuple", "String", "Integer", "List"]
    },
    {
        numb: 37,
        question: "What is the time complexity of binary search?",
        answer: "O(log n)",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"]
    },
    {
        numb: 38,
        question: "Which data structure uses LIFO (Last In First Out)?",
        answer: "Stack",
        options: ["Queue", "Array", "Heap", "Stack"]
    },
    {
        numb: 39,
        question: "Which sorting algorithm has the best average time complexity?",
        answer: "Merge Sort",
        options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"]
    },
    {
        numb: 40,
        question: "Which data structure uses FIFO (First In First Out)?",
        answer: "Queue",
        options: ["Stack", "Queue", "Tree", "Graph"]
    },
    {
        numb: 41,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"]
    },
    {
        numb: 42,
        question: "Which HTML tag is used to display a numbered list?",
        answer: "<ol>",
        options: ["<ul>", "<ol>", "<li>", "<dl>"]
    },
    {
        numb: 43,
        question: "Which method is used to add an element at the beginning of an array in JavaScript?",
        answer: "unshift()",
        options: ["push()", "shift()", "unshift()", "prepend()"]
    },
    {
        numb: 44,
        question: "Which method is used to convert a string to lowercase in JavaScript?",
        answer: "toLowerCase()",
        options: ["lowerCase()", "toLowerCase()", "convertLower()", "strLower()"]
    },
    {
        numb: 45,
        question: "Which SQL command is used to remove a table from the database?",
        answer: "DROP",
        options: ["DELETE", "REMOVE", "DROP", "ERASE"]
    },
    {
        numb: 46,
        question: "Which function returns the largest item in a Python list?",
        answer: "max()",
        options: ["top()", "max()", "maximum()", "greatest()"]
    },
    {
        numb: 47,
        question: "Which data structure is used in BFS (Breadth First Search)?",
        answer: "Queue",
        options: ["Stack", "Queue", "Heap", "Linked List"]
    },
    {
        numb: 48,
        question: "What is the correct syntax for a for loop in Python?",
        answer: "for i in range(5):",
        options: ["for (i=0; i<5; i++)", "for i in range(5):", "foreach i in range(5)", "for i to 5"]
    },
    {
        numb: 49,
        question: "Which function is used to remove whitespaces in Python?",
        answer: "strip()",
        options: ["trim()", "strip()", "remove()", "cut()"]
    },
    {
        numb: 50,
        question: "Which of these is not a valid SQL command?",
        answer: "FETCH ALL",
        options: ["SELECT", "UPDATE", "FETCH ALL", "INSERT"]
    },
    {
        numb: 51,
        question: "What does JSON stand for?",
        answer: "JavaScript Object Notation",
        options: ["Java Standard Output Network", "JavaScript Object Notation", "Java Source Object Notation", "Java String Output Network"]
    },
    {
        numb: 52,
        question: "Which method is used to convert JSON to a JavaScript object?",
        answer: "JSON.parse()",
        options: ["JSON.convert()", "JSON.parse()", "JSON.stringify()", "JSON.objectify()"]
    },
    {
        numb: 53,
        question: "What is the use of the 'continue' statement in Python loops?",
        answer: "Skips the current iteration",
        options: ["Exits the loop", "Skips the loop", "Skips the current iteration", "Breaks the loop"]
    },
    {
        numb: 54,
        question: "Which sorting algorithm is the most efficient in the worst case?",
        answer: "Merge Sort",
        options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"]
    },
    {
        numb: 55,
        question: "Which of the following is a NoSQL database?",
        answer: "MongoDB",
        options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"]
      },
    {
      numb: 56,
      question: "What is the purpose of the 'defer' attribute in a <script> tag?",
      answer: "It delays script execution until HTML is parsed",
      options: [
        "It prevents the script from running",
        "It delays script execution until HTML is parsed",
        "It loads the script after CSS",
        "It only works for external scripts"
      ]
    },
    {
      numb: 5,
      question: "What is the box model in CSS?",
      answer: "It describes the layout of elements using margin, border, padding, and content",
      options: [
        "A CSS feature for flex layout",
        "It describes CSS animations",
        "It describes the layout of elements using margin, border, padding, and content",
        "A JavaScript function to draw boxes"
      ]
    },
    {
      numb: 58,
      question: "Which method is used to add a class in JavaScript?",
      answer: "element.classList.add()",
      options: [
        "element.setClass()",
        "element.className()",
        "element.classList.add()",
        "element.addClass()"
      ]
    },
    {
      numb: 59,
      question: "Which HTTP status code means 'Not Found'?",
      answer: "404",
      options: [
        "403",
        "500",
        "200",
        "404"
      ]
    },
    {
      numb: 60,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheets",
      options: [
        "Creative Style Scripts",
        "Cascading Style Sheets",
        "Coded Style Sheet",
        "Computer Style System"
      ]
    },
    {
      numb: 61,
      question: "What does '===' do in JavaScript?",
      answer: "Checks both value and type",
      options: [
        "Checks value only",
        "Assigns value",
        "Checks both value and type",
        "None of the above"
      ]
    },
    {
      numb: 62,
      question: "Which of the following is a semantic HTML element?",
      answer: "<article>",
      options: [
        "<div>",
        "<article>",
        "<span>",
        "<sectioned>"
      ]
    },
    {
      numb: 63,
      question: "Which CSS unit is relative to the parent element?",
      answer: "em",
      options: [
        "px",
        "em",
        "%",
        "rem"
      ]
    },
    {
      numb: 64,
      question: "What is the use of 'localStorage' in web development?",
      answer: "To store data that persists even after browser is closed",
      options: [
        "To temporarily store session data",
        "To store cookies",
        "To store data that persists even after browser is closed",
        "To manage cache"
      ]
    },
    {
      numb: 65,
      question: "Which function is used to delay code execution in JavaScript?",
      answer: "setTimeout()",
      options: [
        "delay()",
        "wait()",
        "setTimeout()",
        "pause()"
      ]
    },
    {
      numb: 66,
      question: "What is the use of 'z-index' in CSS?",
      answer: "Controls the stack order of overlapping elements",
      options: [
        "Sets zoom level",
        "Defines column order",
        "Controls the stack order of overlapping elements",
        "Specifies line height"
      ]
    },
    {
      numb: 67,
      question: "Which method fetches data from a URL in JavaScript?",
      answer: "fetch()",
      options: [
        "get()",
        "request()",
        "fetch()",
        "retrieve()"
      ]
    },
    {
      numb: 68,
      question: "What is a 'Promise' in JavaScript?",
      answer: "An object representing the eventual completion of an async operation",
      options: [
        "A way to handle events",
        "An object representing the eventual completion of an async operation",
        "A method of declaring variables",
        "A synchronous function"
      ]
    },
    {
      numb: 69,
      question: "What does API stand for?",
      answer: "Application Programming Interface",
      options: [
        "Application Page Interface",
        "Application Programming Interface",
        "Advanced Programming Interface",
        "App Programming Input"
      ]
    },
    {
      numb: 70,
      question: "What does 'alt' attribute in <img> tag provide?",
      answer: "Alternative text if image cannot load",
      options: [
        "Image styling",
        "Tooltip on hover",
        "Alternative text if image cannot load",
        "Source for video"
      ]
    },
    {
      numb: 71,
      question: "Which CSS property controls the transparency of an element?",
      answer: "opacity",
      options: [
        "display",
        "visibility",
        "opacity",
        "alpha"
      ]
    },
    {
      numb: 72,
      question: "Which protocol is safer for web applications?",
      answer: "HTTPS",
      options: [
        "HTTP",
        "FTP",
        "HTTPS",
        "TCP"
      ]
    },
    {
      numb: 73,
      question: "Which JavaScript loop is best for arrays?",
      answer: "forEach()",
      options: [
        "for-in",
        "while",
        "forEach()",
        "do-while"
      ]
    }
];  