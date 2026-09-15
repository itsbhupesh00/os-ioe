const questionBank = [
  {
    "id": 1,
    "question_number": 1,
    "marks": "[4 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "83 Baishakh (scan error may occur)",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>How does an operating system act as an extended machine? Explain with an example.</p><p>What are the design trade-offs between monolithic and microkernel architecture?</p>"
  },
  {
    "id": 2,
    "question_number": 2,
    "marks": "[2 + 8]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "83 Baishakh (scan error may occur)",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain the significance of the Process Control Block (PCB). For the given information of the processes, find average TAT, average WT, CPU utilization, and throughput according to FCFS and SRTN algorithms.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Values reconstructed from a partly illegible scan</caption><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th><th>Priority</th></tr><tr><td>P1</td><td>1</td><td>2</td><td>1</td></tr><tr><td>P2</td><td>0</td><td>10</td><td>3</td></tr><tr><td>P3</td><td>2</td><td>1</td><td>2</td></tr></table>"
  },
  {
    "id": 3,
    "question_number": 3,
    "marks": "[1 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "83 Baishakh (scan error may occur)",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What is race condition? How do you solve the producer-consumer problem using a semaphore? Explain with pseudo-code.</p>"
  },
  {
    "id": 4,
    "question_number": 4,
    "marks": "[3 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "83 Baishakh (scan error may occur)",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Differentiate internal fragmentation and external fragmentation. How many page faults occur for LRU, FIFO and Optimal page replacement algorithms with the following page reference string for three-page frames: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3?</p>"
  },
  {
    "id": 5,
    "question_number": 5,
    "marks": "[4 + 4]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "83 Baishakh (scan error may occur)",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Describe the contiguous and linked list methods for file allocation. Explain the concept of inodes and their role in the UNIX/LINUX file system.</p>"
  },
  {
    "id": 6,
    "question_number": 6,
    "marks": "[4 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "83 Baishakh (scan error may occur)",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What are the four necessary conditions of deadlock? Consider the following snapshot of the system. Is the system safe? If so, show the safe sequence.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Some values partially illegible in original scan</caption><tr><th>Process</th><th>Allocation (A,B,C,D)</th><th>Max Claim (A,B,C,D)</th><th>Available (A,B,C,D)</th></tr><tr><td>P0</td><td>0,0,1,2</td><td>0,0,1,2</td><td>1,5,2,0</td></tr><tr><td>P1</td><td>1,0,0,0</td><td>1,7,5,0</td><td></td></tr><tr><td>P2</td><td>1,3,5,4</td><td>2,3,5,6</td><td></td></tr><tr><td>P3</td><td>0,6,3,2</td><td>0,6,5,2</td><td></td></tr><tr><td>P4</td><td>0,0,1,4</td><td>0,6,5,6</td><td></td></tr></table>"
  },
  {
    "id": 7,
    "question_number": 7,
    "marks": "[3 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "83 Baishakh (scan error may occur)",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain the goals of I/O software. A disk drive has 50 tracks, numbered 0 to 49. The read/write head is currently serving a request at track 15 and it was at track 48 previously, and the queue of pending requests, in FIFO order, is 4, 40, 11, 35, 7, 14. What is the total track movement of the head for the following algorithms: a) FCFS b) SSTF c) C-SCAN?</p>"
  },
  {
    "id": 8,
    "question_number": 1,
    "marks": "[5 + 3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Describe the functions of Operating System (OS) with examples. Differentiate monolithic and microkernel structure of OS.</p>"
  },
  {
    "id": 9,
    "question_number": 2,
    "marks": "[3 + 2 + 5]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain different states of a process. What are the differences between preemptive and non-preemptive scheduling algorithms? Consider the following set of processes. Draw a Gantt chart and calculate average waiting time using (a) Shortest Remaining Time First and (b) HRRN.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>A</td><td>0</td><td>5</td></tr><tr><td>B</td><td>1</td><td>3</td></tr><tr><td>C</td><td>3</td><td>2</td></tr><tr><td>D</td><td>9</td><td>5</td></tr><tr><td>E</td><td>12</td><td>5</td></tr></table>"
  },
  {
    "id": 10,
    "question_number": 3,
    "marks": "[1 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What is counting semaphore? How do you solve the producer-consumer problem using semaphore? Explain with pseudo-code.</p>"
  },
  {
    "id": 11,
    "question_number": 4,
    "marks": "[2 + 2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Define logical and physical address. What is the importance of virtual memory? Consider the following page reference string with 3-page frames: 1,2,3,4,2,1,5,6,2,1,2,3,7,6,3,2,1,2,3,6. How many page faults will occur for FIFO, LRU, and Optimal algorithm?</p>"
  },
  {
    "id": 12,
    "question_number": 5,
    "marks": "[4 + 4]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain file allocation techniques with their advantages and disadvantages. Briefly explain the directory and its hierarchy.</p>"
  },
  {
    "id": 13,
    "question_number": 6,
    "marks": "[2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain the importance of the device driver in the I/O system. Suppose a disk has tracks numbered 0-180. The disk queue has the following request tracks: 87, 170, 40, 150, 36, 72, 66, and 15. The current head is at track 60, and has just finished the request at 54. Find the total head movement for SSTF, SCAN, and C-LOOK algorithms.</p>"
  },
  {
    "id": 14,
    "question_number": 7,
    "marks": "[4 + 2]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Differentiate between Encryption and Decryption and explain their role in enhancing security of the system. What do you mean by Access Control List (ACL)?</p>"
  },
  {
    "id": 15,
    "question_number": 9,
    "marks": "[2 + 2 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What would be the necessary steps to prevent deadlock? Consider a system with five processes P0 through P4 and three resource types A, B, C. Resource type A has 10 instances, B has 5 instances and type C has 7 instances. Consider the following snapshot of the system: a) Calculate the Need matrix. b) Is the state safe to run all the processes? If so, show the safe sequence of process execution.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Available = (3,3,2) (reconstructed)</caption><tr><th>Process</th><th>Allocation (A,B,C)</th><th>Max Need (A,B,C)</th></tr><tr><td>P0</td><td>0,1,0</td><td>7,5,3</td></tr><tr><td>P1</td><td>2,0,0</td><td>3,2,2</td></tr><tr><td>P2</td><td>3,0,2</td><td>9,0,2</td></tr><tr><td>P3</td><td>2,1,1</td><td>2,2,2</td></tr><tr><td>P4</td><td>0,0,2</td><td>4,3,3</td></tr></table>"
  },
  {
    "id": 16,
    "question_number": 10,
    "marks": "[3 + 3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "82 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Write ### short notes on (Any Three):</p><ul><li>Shell Programming (Ch1)</li><li>Critical Section (Ch3)</li><li>TSL Instruction (Ch3)</li><li>Thrashing (Ch4)</li><li>Memory Compaction (Ch4)</li></ul>"
  },
  {
    "id": 17,
    "question_number": 1,
    "marks": "[1 + 3 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>How does the operating system provide a beautiful interface to the user? Why doesn't Exo-Kernel require re-mapping of resources? Is the layered structure of operating system better than the monolithic structure? Explain.</p>"
  },
  {
    "id": 18,
    "question_number": 2,
    "marks": "[2 + 8]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Why are threads called light-weight processes? Consider the following set of processes, with the length of the CPU burst time given in milliseconds. All processes are assumed to have arrived in order, all at time 0. (i) Draw the Gantt chart using FCFS, SJF scheduling algorithm. (ii) Find average turnaround time and waiting time for each scheduling algorithm.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Burst-time values illegible in original scan</caption><tr><th>Process</th><th>Burst Time</th><th>Priority</th></tr><tr><td>P1</td><td></td><td>1</td></tr><tr><td>P2</td><td></td><td>6</td></tr><tr><td>P3</td><td></td><td>4</td></tr><tr><td>P4</td><td></td><td>2</td></tr><tr><td>P5</td><td></td><td>8</td></tr></table>"
  },
  {
    "id": 19,
    "question_number": 3,
    "marks": "[1 + 5]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain the Lock variable technique for achieving mutual exclusion. Explain the types of semaphore along with the major operations of semaphore with a simple pseudocode.</p>"
  },
  {
    "id": 20,
    "question_number": 4,
    "marks": "[4 + 2]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain how a logical address is mapped to a physical address in paging. How is virtual memory management done?</p>"
  },
  {
    "id": 21,
    "question_number": 5,
    "marks": "[7]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>How many page faults occur for the following given reference string for four-page frames: 0,9,0,1,8,1,8,7,8,7,1,2,9,2,7,9,1,2,9,3 for a) LRU b) FIFO c) Optimal page replacement?</p>"
  },
  {
    "id": 22,
    "question_number": 6,
    "marks": "[5]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain the I-node approach of file implementation with its advantages and disadvantages.</p>"
  },
  {
    "id": 23,
    "question_number": 7,
    "marks": "[6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Consider a disk drive having 100 cylinders. The head is currently serving a request at cylinder 43 and the previous request was at 56. The queue of pending requests is 86, 70, 13, 74, 48, 9, 22, 50, 30. Starting from the current head position, what is the total head movement (in cylinders) to service the pending requests for each of a) FCFS b) SSTF c) SCAN d) LOOK?</p>"
  },
  {
    "id": 24,
    "question_number": 8,
    "marks": "[2 + 8]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain the resource allocation graph with an example. Consider a system with 4 concurrent processes (P1, P2, P3, P4) and three resource types A, B, C with total instances 7, 10 and 10. a) What is the total number of available resources? b) What will be the need matrix? c) Is the system safe? If so, show the safe sequence.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Reconstructed from a heavily garbled scan; verify against original</caption><tr><th>Process</th><th>Allocation (A,B,C)</th><th>Max Claim (A,B,C)</th></tr><tr><td>P1</td><td>2,1,1</td><td>3,2,2</td></tr><tr><td>P2</td><td>2,3,5,0</td><td>10,0,5,0</td></tr><tr><td>P3</td><td>2,2,2,5</td><td>5,2,2,5</td></tr><tr><td>P4</td><td>0,4,0,0</td><td>2,0,0,2</td></tr></table>"
  },
  {
    "id": 25,
    "question_number": 9,
    "marks": "[2 + 4]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What do you mean by ACL? How is it different from the capabilities list? How does the Caesar Cipher convert plain text to ciphertext?</p>"
  },
  {
    "id": 26,
    "question_number": 10,
    "marks": "[4 + 2]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What are the roles of a system administrator? How is a special user different from a general user? Explain.</p>"
  },
  {
    "id": 27,
    "question_number": 11,
    "marks": "[3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "81 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Write ### short notes on (Any Two):</p><ul><li>Compaction (Ch4)</li><li>Thrashing (Ch4)</li><li>Belady's Anomaly (Ch4)</li></ul>"
  },
  {
    "id": 28,
    "question_number": 1,
    "marks": "[1 + 1]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Why does an operating system evolve over long periods of time? Justify how OS acts as a resource manager.</p>"
  },
  {
    "id": 29,
    "question_number": 2,
    "marks": "[3 + 5]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain fork() and spawn() system calls in the OS. Schedule the following set of processes according to Round-Robin scheduling algorithm with Quantum time = 4 ms and calculate the average waiting time and average turn-around time, throughput and CPU utilization.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>CPU Time (ms)</th></tr><tr><td>A</td><td>0</td><td>12</td></tr><tr><td>B</td><td>2</td><td>6</td></tr><tr><td>C</td><td>5</td><td>3</td></tr><tr><td>D</td><td>10</td><td>9</td></tr></table>"
  },
  {
    "id": 30,
    "question_number": 3,
    "marks": "[2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Why do we organize disk as RAID? Suppose a disk drive with 150 cylinders numbered 0-149. The drive is currently serving a request at 35 and the previous request is at 55. The queue of pending requests is 98, 103, 38, 122, 10, 128, 65, 75. Starting from the current head position, calculate the total head movement (in cylinders) to satisfy all pending requests for SSTF, SCAN, and LOOK disk arm scheduling algorithms.</p>"
  },
  {
    "id": 31,
    "question_number": 4,
    "marks": "[4 + 4]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>a) Explain First-Fit and Next-Fit memory allocation algorithms with an example. b) How is semaphore used in process synchronization? Explain how semaphore is the best solution for the producer-consumer problem with pseudo-code of both producer and consumer process.</p>"
  },
  {
    "id": 32,
    "question_number": 5,
    "marks": "[1 + 2 + 5]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What is a file attribute? List the file system performance indicators. Explain the file allocation methods with their advantages and disadvantages.</p>"
  },
  {
    "id": 33,
    "question_number": 6,
    "marks": "[3 + 5]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What are the differences between fixed partitioning and variable partitioning systems of memory in multiprogramming? Given the reference string 0,9,0,1,9,1,8,7,9,2,3,2,9,2,7,9,2,3,9,3, how many page faults will occur if the program has 4 frames for the Optimal Page Replacement algorithm?</p>"
  },
  {
    "id": 34,
    "question_number": 7,
    "marks": "[2 + 2 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain necessary conditions for deadlock. Consider the following snapshot of a system (P: Process, R: Resource). Using Banker's algorithm, calculate the need matrix. Is the system safe? If safe, find the safe order of processes.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Heavily garbled in original scan; values approximate</caption><tr><th>Process</th><th>Max Demand (RA,RB,RC,RD)</th><th>Current Allocation (RA,RB,RC,RD)</th></tr><tr><td>P0</td><td>8,5,9,7</td><td>1,0,1,1</td></tr><tr><td>P1</td><td>2,1,2,?</td><td>0,1,2,1</td></tr><tr><td>P2</td><td>5,1,0,5</td><td>4,0,2,3</td></tr><tr><td>P3</td><td>1,?,2,0</td><td>1,2,1,0</td></tr><tr><td>P4</td><td>3,0,1,?</td><td>3,1,?,?</td></tr></table>"
  },
  {
    "id": 35,
    "question_number": 8,
    "marks": "[5]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Describe the role and responsibilities of a system administrator to keep the system updated and efficient. Explain with examples.</p>"
  },
  {
    "id": 36,
    "question_number": 9,
    "marks": "[2 + 2 + 2]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Define ACL. Write the type of security breach in the following attack case, and also suggest a solution to prevent the attack: \"Rajesh found that Nirmal's Facebook was logged in on the Computer Lab. He then changed the personal information and login credentials of Nirmal's account.\"</p>"
  },
  {
    "id": 37,
    "question_number": 10,
    "marks": "[3 + 3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "81 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Write ### short notes on (any three):</p><ul><li>Ostrich Algorithm (Ch3)</li><li>Shell Programming (Ch1)</li><li>Process Control Block (Ch2)</li></ul>"
  },
  {
    "id": 38,
    "question_number": 1,
    "marks": "[3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What is an Operating System? Explain the statement \"operating system acts as a Broker between hardware and application program\".</p>"
  },
  {
    "id": 39,
    "question_number": 2,
    "marks": "[2 + 6]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What is priority of a process? Why do we need it? Make a schedule for the processes mentioned below as per Shortest Remaining Time First (SRTF) algorithm. Also calculate average turnaround time, average waiting time, throughput, and CPU utilization.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Some values illegible in original scan</caption><tr><th>Process</th><th>Burst Time</th><th>Arrival Time</th><th>Priority</th></tr><tr><td>P1</td><td>2</td><td></td><td>3</td></tr><tr><td>P2</td><td>6</td><td></td><td>5</td></tr><tr><td>P3</td><td>1</td><td></td><td>2</td></tr><tr><td>P4</td><td>4</td><td></td><td>1</td></tr><tr><td>P5</td><td>2</td><td>4</td><td>4</td></tr></table>"
  },
  {
    "id": 40,
    "question_number": 3,
    "marks": "[2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What are the principles of I/O software? Suppose a disk drive has 100 cylinders, numbered 0 to 99. The drive is currently serving a request at cylinder 43 and the previous request was at cylinder 25. The queue of pending requests, in FIFO order, is 86, 70, 13, 74, 48, 9, 22, 50, 30. Produce the schedules to satisfy all the pending requests for a) FCFS b) C-SCAN.</p>"
  },
  {
    "id": 41,
    "question_number": 4,
    "marks": "[5 + 8]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>a) Explain Best-Fit and Worst-Fit memory allocation algorithms with an example. b) What is the need for process synchronization? How can semaphore solve the reader-writer problem? Explain with respective pseudo-code of both reader and writer process.</p>"
  },
  {
    "id": 42,
    "question_number": 5,
    "marks": "[4]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What is directory organization in files? Explain its types.</p>"
  },
  {
    "id": 43,
    "question_number": 6,
    "marks": "[1 + 7]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What is Belady's Anomaly in FIFO? Consider the following page reference string: 1,4,2,1,3,5,4,1,1,3,1,4,5,0,1,6,2. Find how many page faults occur according to OPTIMAL, LRU (least recently used), and LFU (least frequently used) page replacement algorithm assuming 3 page frames.</p>"
  },
  {
    "id": 44,
    "question_number": 7,
    "marks": "[2 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Consider a system with 5 concurrent processes (P0, P1, P2, P3, P4) and 4 resource types (R0, R1, R2, R3). The number of instances of each resource type in the system are 6, 4, 4, 2 respectively. a) Calculate the Need matrix as per Banker's algorithm. b) Is the state safe? If so, show the safe execution of the processes.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Allocation (R0,R1,R2,R3)</th><th>Max Claim (R0,R1,R2,R3)</th></tr><tr><td>P0</td><td>2,0,1,1</td><td>3,2,1,1</td></tr><tr><td>P1</td><td>1,1,0,0</td><td>1,2,0,2</td></tr><tr><td>P2</td><td>1,1,0,0</td><td>1,1,2,0</td></tr><tr><td>P3</td><td>1,0,1,0</td><td>3,2,1,0</td></tr><tr><td>P4</td><td>0,1,0,1</td><td>2,1,0,1</td></tr></table>"
  },
  {
    "id": 45,
    "question_number": 8,
    "marks": "[6]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What are the roles and responsibilities of a system administrator?</p>"
  },
  {
    "id": 46,
    "question_number": 9,
    "marks": "[2 + 2 + 2]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain the types of Network Attacks. What is ACL? Why is the 'HASH' function called a Message Digestor?</p>"
  },
  {
    "id": 47,
    "question_number": 10,
    "marks": "[3 + 3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "80 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Write ### short notes on:</p><ul><li>Thrashing (Ch4)</li><li>Virtual Machine (Ch1)</li><li>User-level thread vs Kernel-level thread (Ch2)</li></ul>"
  },
  {
    "id": 48,
    "question_number": 1,
    "marks": "[2 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "80 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>a) Explain OS as an Extended Machine. Differentiate between Monolithic Kernel and Micro-Kernel. b) Explain operating system as a Virtual Machine.</p>"
  },
  {
    "id": 49,
    "question_number": 2,
    "marks": "[2 + 3 + 4]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "80 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>a) Differentiate between Preemptive and Non-Preemptive Scheduling. Apply MLQ scheduling for the following set of processes on two queues Q1 and Q2 where the priority of Q1 is greater than that of Q2; Q1 uses Round Robin (Time Quantum = 2) and Q2 uses FCFS. Construct the Gantt chart and compute the average TAT. b) What is multithreading? Explain the 5-state process model with a figure.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Values partially illegible in original scan</caption><tr><th>Process</th><th>Queue</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>P1</td><td>1</td><td>0</td><td>5</td></tr><tr><td>P2</td><td>2</td><td>2</td><td>12</td></tr><tr><td>P3</td><td>1</td><td>4</td><td></td></tr></table>"
  },
  {
    "id": 50,
    "question_number": 3,
    "marks": "[2 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "80 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>a) Why do processes need to be synchronized? Explain Peterson's Solution for mutual exclusion. b) What is Semaphore? How can the Producer-Consumer problem be solved using Semaphore? Explain.</p>"
  },
  {
    "id": 51,
    "question_number": 4,
    "marks": "[2 + 9]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>a) Why is multilevel paging required? b) Consider the following page reference string: 5,4,2,1,0,3,0,2,4,3,0,3,2,1,3,0,1,5. Calculate page hit percentage. How many page faults would occur for FIFO, Optimal, and LRU replacement algorithms having four frames? Remember all frames are initially empty, so the first unique page will cost one fault each.</p>"
  },
  {
    "id": 52,
    "question_number": 5,
    "marks": "[1 + 7]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "80 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What are the different methods for allocating disk space for files? Explain free space management techniques.</p>"
  },
  {
    "id": 53,
    "question_number": 6,
    "marks": "[2 + 8]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What are the functions of device-independent I/O software? Suppose a disk has 5000 cylinders, numbered 0 to 4999. The drive is currently serving a request at cylinder 143, and the previous request was at cylinder 125. The queue of pending requests in FIFO order is 86, 1470, 913, 1774, 948, 1509, 1022, 1750, 130. Starting from the current head position, what is the total distance (in cylinders) that the disk arm moves to satisfy all the pending requests, for FCFS, SSTF, C-SCAN and C-LOOK algorithms?</p>"
  },
  {
    "id": 54,
    "question_number": 7,
    "marks": "[3 + 7]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "80 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Consider the following process/resource snapshot. Explain the four Coffman conditions for deadlock. Is the state safe? If so, show the safe execution of processes.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Reconstructed from a heavily garbled scan</caption><tr><th>Process</th><th>Allocation (A,B,C)</th><th>Max (A,B,C)</th><th>Available (A,B,C)</th></tr><tr><td>P0</td><td>0,1,0</td><td>5,3,3</td><td></td></tr><tr><td>P1</td><td>1,0,0</td><td>5,0,2</td><td>2,1,0</td></tr><tr><td>P2</td><td>2,0,2</td><td>4,3,3</td><td></td></tr><tr><td>P3</td><td>3,1,1</td><td>4,3,3</td><td></td></tr><tr><td>P4</td><td>0,0,2</td><td>4,3,3</td><td></td></tr></table>"
  },
  {
    "id": 55,
    "question_number": 8,
    "marks": "[4 + 4 + 1.5 + 0.5]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "80 Baishakh",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Write ### short notes on:</p><ul><li>Cryptography (Ch6)</li><li>Access Control List (Ch6)</li><li>Roles of System Admin (Ch6)</li><li>AWK Tool (Ch6)</li></ul>"
  },
  {
    "id": 56,
    "question_number": 1,
    "marks": "[6 + 1 + 1]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Why is the process table needed in a time-sharing system? Is it also needed in personal computer systems running UNIX or Windows with a single user? Distinguish between Shell and Kernel. What are the advantages and disadvantages of implementing threads in user space?</p>"
  },
  {
    "id": 57,
    "question_number": 2,
    "marks": "[6]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Consider five processes with the given arrival time and length of CPU burst given in milliseconds. Calculate the turnaround time and waiting time for all processes applying First Come First Serve, Shortest Job First and Round Robin (time quantum = 3) algorithms.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>CPU Time</th></tr><tr><td>P1</td><td>0</td><td>9</td></tr><tr><td>P2</td><td>1</td><td>5</td></tr><tr><td>P3</td><td>2</td><td>2</td></tr><tr><td>P4</td><td>3</td><td>6</td></tr><tr><td>P5</td><td>4</td><td>8</td></tr></table>"
  },
  {
    "id": 58,
    "question_number": 3,
    "marks": "[3]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Define race condition. What are the requirements of mutual exclusion? How can you achieve mutual exclusion using Peterson's Solution? Explain with pseudo-code.</p>"
  },
  {
    "id": 59,
    "question_number": 4,
    "marks": "[4 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>a) Differentiate between Compaction and Coalescing technique. b) Consider a swapping system in which memory consists of the following hole sizes in memory order: 10 MB, 4 MB, 20 MB, 18 MB, 7 MB, 9 MB, 12 MB and 15 MB. Which hole is taken for successive segment requests of (i) 12 MB (ii) 10 MB (iii) 9 MB for first-fit? Now repeat the question for best-fit and worst-fit.</p>"
  },
  {
    "id": 60,
    "question_number": 5,
    "marks": "[2 + 7 + 6]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>a) Explain various ways of implementing a file system. b) How do you measure file system performance and how can it be improved?</p>"
  },
  {
    "id": 61,
    "question_number": 6,
    "marks": "[2 + 8]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What do you mean by RAID? Suppose a disk with 200 cylinders numbered 0-199. The drive is currently serving a request at 45 and the previous request was at 125. The queue of pending requests is 105, 178, 23, 67, 43, 78, 167, 56 and 98. Starting from the current head position, calculate the total head movement (in cylinders) to satisfy all pending requests for SSTF, SCAN, LOOK and C-SCAN disk scheduling algorithms.</p>"
  },
  {
    "id": 62,
    "question_number": 7,
    "marks": "[3 + 7]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Explain in detail how deadlock can be detected in an operating system. Consider the following system with resources A, B, C, D and processes P0 to P4. Is the state safe? If so, show the safe execution of processes.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Max (A,B,C,D)</th><th>Allocation (A,B,C,D)</th><th>Available (A,B,C,D)</th></tr><tr><td>P0</td><td>6,0,1,2</td><td>4,0,0,1</td><td>2,1,1,1</td></tr><tr><td>P1</td><td>1,7,5,0</td><td>1,1,0,0</td><td></td></tr><tr><td>P2</td><td>2,3,5,6</td><td>1,2,5,4</td><td></td></tr><tr><td>P3</td><td>1,6,5,3</td><td>0,6,3,3</td><td></td></tr><tr><td>P4</td><td>1,6,5,6</td><td>0,1,1,1</td><td></td></tr></table>"
  },
  {
    "id": 63,
    "question_number": 8,
    "marks": "[3 + 3]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>Write ### short notes on Caesar Cipher and Access Control Lists.</p>"
  },
  {
    "id": 64,
    "question_number": 9,
    "marks": "[3 + 4]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "79 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BEI Old Course",
    "topic": "<p>What is the significance of system administration? Describe the roles and responsibilities of a system administrator in an insurance company.</p>"
  },
  {
    "id": 65,
    "question_number": 1,
    "marks": "[4 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Why do we need system calls? Explain. Describe briefly the working principle of a virtual machine.</p>"
  },
  {
    "id": 66,
    "question_number": 2,
    "marks": "[3 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain why exo-kernel doesn't require re-mapping of resources. Is the layered structure of operating system better than the monolithic structure? Explain.</p>"
  },
  {
    "id": 67,
    "question_number": 3,
    "marks": "[4 + 6]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Schedule the following set of processes according to HRRN and Round-Robin scheduling algorithm and calculate the average waiting time and average turnaround time.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time (ms)</th><th>CPU Time (ms)</th></tr><tr><td>A</td><td>0</td><td>12</td></tr><tr><td>B</td><td>2</td><td>6</td></tr><tr><td>C</td><td>5</td><td>3</td></tr><tr><td>D</td><td>10</td><td>9</td></tr></table>"
  },
  {
    "id": 68,
    "question_number": 4,
    "marks": "[3 + 7]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the major differences between race condition and deadlock in the problem of synchronization? Explain the reader-writer problem with its solution using semaphore.</p>"
  },
  {
    "id": 69,
    "question_number": 5,
    "marks": "[3 + 5]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is Virtual Memory? Why do we need it? Consider the following page reference string: 2,3,4,2,1,3,7,5,4,3,1,5. Find how many page faults occur according to OPTIMAL and LRU page replacement algorithm assuming 3-page frames.</p>"
  },
  {
    "id": 70,
    "question_number": 6,
    "marks": "[6]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain all the ways a file system can be implemented, with its advantages and disadvantages.</p>"
  },
  {
    "id": 71,
    "question_number": 7,
    "marks": "[6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Suppose a disk drive with 150 cylinders numbered 0-149. The drive is currently serving a request at 35 and the previous request is at disk 55. The queue of pending requests is 98, 103, 38, 122, 10, 128, 65, 75. Starting from the current head position, calculate the total head movement (in cylinders) that the disk arm moves to satisfy all pending requests for SSTF, SCAN and LOOK disk arm scheduling algorithm.</p>"
  },
  {
    "id": 72,
    "question_number": 8,
    "marks": "[1 + 7]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is indefinite postponement? Assume that there are 5 processes and 4 types of resource at time T0. Check if the system is safe or not.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Available = (1,5,2,0)</caption><tr><th>Process</th><th>Allocation (A,B,C,D)</th><th>Max (A,B,C,D)</th></tr><tr><td>P0</td><td>0,1,1,0</td><td>0,2,1,0</td></tr><tr><td>P1</td><td>1,2,3,1</td><td>1,6,5,2</td></tr><tr><td>P2</td><td>1,3,6,5</td><td>2,3,6,6</td></tr><tr><td>P3</td><td>0,6,3,2</td><td>0,6,5,2</td></tr><tr><td>P4</td><td>0,0,1,4</td><td>0,6,5,6</td></tr></table>"
  },
  {
    "id": 73,
    "question_number": 9,
    "marks": "[1 + 4 + 2 + 2]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the roles and duties of system administration? Explain. What is ACL? Why is the 'HASH' function called a message digestor?</p>"
  },
  {
    "id": 74,
    "question_number": 10,
    "marks": "[3 + 3 + 3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "82 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes on (Any Four):</p><ul><li>Network Attacks (Ch6)</li><li>Principles of I/O Software (Ch4)</li><li>Belady's Anomaly (Ch4)</li><li>Thrashing (Ch4)</li><li>Critical Section (Ch3)</li><li>Ostrich Algorithm (Ch3)</li></ul>"
  },
  {
    "id": 75,
    "question_number": 1,
    "marks": "[1 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is an Operating System? Explain the functions of an Operating System.</p>"
  },
  {
    "id": 76,
    "question_number": 2,
    "marks": "[2 + 3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Why does exo-kernel not require re-mapping of resources? Is the layered structure of an operating system better than the monolithic structure? Explain.</p>"
  },
  {
    "id": 77,
    "question_number": 3,
    "marks": "[7]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Schedule the following processes according to SRTN and Preemptive Priority Algorithm. Calculate average TAT and WT. (The process with the lowest priority value has the highest priority.)</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th><th>Priority</th></tr><tr><td>P0</td><td>0</td><td>1</td><td>2</td></tr><tr><td>P1</td><td>2</td><td>2</td><td>4</td></tr><tr><td>P2</td><td>4</td><td>12</td><td>0</td></tr><tr><td>P3</td><td>1</td><td>4</td><td>3</td></tr><tr><td>P4</td><td>12</td><td>10</td><td>1</td></tr></table>"
  },
  {
    "id": 78,
    "question_number": 4,
    "marks": "[1 + 2 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define mutual exclusion and race condition. Explain the concept of a shared lock. Discuss the role of sleep() and wakeup() calls in managing concurrency control in the context of the Bounded-Buffer Problem.</p>"
  },
  {
    "id": 79,
    "question_number": 5,
    "marks": "[1 + 5]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define File. Describe the implementation of a file system using linked lists and i-nodes.</p>"
  },
  {
    "id": 80,
    "question_number": 6,
    "marks": "[6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Consider the following page reference strings: 1,2,3,4,1,2,5,1,2,3,4,5. Find the number of page hits for FIFO, Optimal and LRU page replacement algorithms. Assume frames = 4.</p>"
  },
  {
    "id": 81,
    "question_number": 7,
    "marks": "[3 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain Direct Memory Access. Suppose a disk drive has 100 cylinders, numbered 0 to 99. The drive is currently serving a request at cylinder 35 and the previous request was at cylinder 20. The queue of pending requests in FIFO order is 86, 70, 18, 74, 9, 22, 50, 30. Produce the schedules to satisfy all pending requests for FCFS, SCAN and C-LOOK.</p>"
  },
  {
    "id": 82,
    "question_number": 8,
    "marks": "[4 + 4]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain Protection Domain and Protection Matrix. What design considerations must be taken into account to ensure security in a computer system?</p>"
  },
  {
    "id": 83,
    "question_number": 9,
    "marks": "[7]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define a system administrator. What are the key technical and soft skills required for someone pursuing a career as a system administrator?</p>"
  },
  {
    "id": 84,
    "question_number": 10,
    "marks": "[2 + 8]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Consider how deadlock can be prevented. Consider a system with 5 concurrent processes (P0-P4) and 4 resource types. a) Create the need matrix. b) Is the system in a safe state? If so, show the safe execution of the processes.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Allocation (R0,R1,R2,R3)</th><th>Max (R0,R1,R2,R3)</th></tr><tr><td>P0</td><td>0,1,1,0</td><td>0,2,1,0</td></tr><tr><td>P1</td><td>1,2,3,1</td><td>1,6,5,2</td></tr><tr><td>P2</td><td>1,3,6,5</td><td>2,3,6,6</td></tr><tr><td>P3</td><td>0,6,3,2</td><td>0,6,5,2</td></tr><tr><td>P4</td><td>0,0,1,4</td><td>0,6,5,6</td></tr></table>"
  },
  {
    "id": 85,
    "question_number": 11,
    "marks": "[3 + 3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "82 Kartik",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes on (Any Three):</p><ul><li>Principles of I/O Software (Ch4)</li><li>Process Control Block (Ch2)</li><li>Belady's Anomaly (Ch4)</li><li>Threads (Ch2)</li></ul>"
  },
  {
    "id": 86,
    "question_number": 1,
    "marks": "[4 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define operating system. Justify the statement \"operating system acts as resource manager as well as virtual machine\".</p>"
  },
  {
    "id": 87,
    "question_number": 2,
    "marks": "[5]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>What do you understand by program and process? Also describe the 7-state model of a process.</p>"
  },
  {
    "id": 88,
    "question_number": 3,
    "marks": "[3 + 5]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is the rationale behind defining the quantum for Round Robin scheduling algorithm? Explain. Make a schedule for the processes below as per Round Robin scheduling algorithm (quantum size = 4 ms). Also calculate average turnaround time, average waiting time, CPU utilization and throughput.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>A</td><td>0</td><td>3</td></tr><tr><td>B</td><td>1</td><td>7</td></tr><tr><td>C</td><td>2</td><td>2</td></tr><tr><td>D</td><td>3</td><td>5</td></tr><tr><td>E</td><td>4</td><td>1</td></tr></table>"
  },
  {
    "id": 89,
    "question_number": 4,
    "marks": "[1 + 2 + 5]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is TSL instruction? Why is it used? Explain the types of semaphore along with the major operations of it with a simple pseudocode.</p>"
  },
  {
    "id": 90,
    "question_number": 5,
    "marks": "[4 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>Differentiate between internal fragmentation and external fragmentation. Consider the following page references: 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1. Calculate the number of page faults according to Optimal and LFU page replacement algorithms assuming 3-page frames.</p>"
  },
  {
    "id": 91,
    "question_number": 6,
    "marks": "[4 + 6]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is File System Layout? Explain with a figure. Explain Linked List Allocation with table file implementation technique, with its advantages and disadvantages.</p>"
  },
  {
    "id": 92,
    "question_number": 7,
    "marks": "[6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>Suppose a disk drive with 150 cylinders numbered 0-149. The drive is currently serving a request at 15 and the previous request is at disk 55. The queue of pending requests is 98, 103, 38, 122, 10, 128, 65, 75. Starting from the current head position, calculate the total head movement (in cylinders) that the disk arm moves to satisfy all pending requests for SSTF, SCAN and LOOK Disk Arm Scheduling Algorithm.</p>"
  },
  {
    "id": 93,
    "question_number": 8,
    "marks": "[2 + 3 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is deadlock and livelock? Explain how deadlock can be recovered. A system has 2 processes and 3 resources. Each process needs a maximum of two resources. Is deadlock possible? Explain.</p>"
  },
  {
    "id": 94,
    "question_number": 9,
    "marks": "[3 + 2 + 2]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain the types of Network Attacks. What is ACL? Why is the 'HASH' function called Message Digestor?</p>"
  },
  {
    "id": 95,
    "question_number": 10,
    "marks": "[4 + 4 + 4]",
    "chapter": "### short notes",
    "asked_year_month_bs": "81 Ashwin",
    "exam_session": "Back",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes on:</p><ul><li>Roles and Duties of System Administration (Ch6)</li><li>Principles of I/O Software (Ch4)</li><li>Linux (Ch1)</li></ul>"
  },
  {
    "id": 96,
    "question_number": 1,
    "marks": "[5]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Without an operating system, a digital machine is so called a \"dead machine\". Why? Briefly describe the different structures of operating systems.</p>"
  },
  {
    "id": 97,
    "question_number": 2,
    "marks": "[1 + 3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>How does multiprogramming help increase the performance of the system? Explain system call with an example.</p>"
  },
  {
    "id": 98,
    "question_number": 3,
    "marks": "[1 + 1 + 3]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define process. Describe the various states of a process. How significant is process hierarchy?</p>"
  },
  {
    "id": 99,
    "question_number": 4,
    "marks": "[10]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Find the average waiting time and average turnaround time using FCFS, SRTN, RR (TQ=2).</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>P1</td><td>0</td><td>3</td></tr><tr><td>P2</td><td>1</td><td>6</td></tr><tr><td>P3</td><td>4</td><td>4</td></tr><tr><td>P4</td><td>6</td><td>2</td></tr></table>"
  },
  {
    "id": 100,
    "question_number": 5,
    "marks": "[10]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define Race Condition. What are the requirements of mutual exclusion? Solve the producer-consumer problem using semaphores.</p>"
  },
  {
    "id": 101,
    "question_number": 6,
    "marks": "[1 + 2]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Why is Associative memory called content addressable memory? Write the difference between Coalescing and Compaction.</p>"
  },
  {
    "id": 102,
    "question_number": 7,
    "marks": "[2 + 5]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>How does the second-chance page replacement algorithm improve FIFO page replacement algorithm? Consider the following page reference string: 2,3,4,2,1,3,7,5,4,3,1,5. Find how many page faults occur according to OPTIMAL, LRU and LFU page replacement algorithm assuming 3 page frames.</p>"
  },
  {
    "id": 103,
    "question_number": 8,
    "marks": "[5]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is Inode? Why is it superior to other file allocation approaches? Consider a 20-GB disk with 8-KB block size. How much memory space will be occupied if contiguous allocation and the File Allocation Table are used, assuming each FAT entry takes 4 bytes?</p>"
  },
  {
    "id": 104,
    "question_number": 9,
    "marks": "[5]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is meant by file attributes? Discuss any one technique of implementing directories in detail.</p>"
  },
  {
    "id": 105,
    "question_number": 10,
    "marks": "[10]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Suppose a disk drive has 2000 cylinders, numbered 0 to 1999. The drive is currently serving a request at cylinder 134 and the previous request was at cylinder 124. The queue of pending requests in FIFO order is 86, 1470, 913, 1774, 948, 1509, 1022, 1750, 130. Starting from the current head position, what is the total distance that the disk arm moves to satisfy all pending requests for (i) FCFS (ii) SSTF (iii) SCAN (iv) C-SCAN (v) LOOK?</p>"
  },
  {
    "id": 106,
    "question_number": 11,
    "marks": "[4 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write the four necessary conditions of deadlock. Consider the following snapshot of a system. List the available resources as (10, 5, 7). Use Banker's algorithm to claim that the system is in a safe state and show the safe sequence.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Allocation (A,B,C)</th><th>Max (A,B,C)</th></tr><tr><td>P1</td><td>0,1,0</td><td>7,5,3</td></tr><tr><td>P2</td><td>2,0,0</td><td>3,2,2</td></tr><tr><td>P3</td><td>3,0,2</td><td>9,0,2</td></tr><tr><td>P4</td><td>2,1,1</td><td>2,2,2</td></tr><tr><td>P5</td><td>0,0,1</td><td>5,3,2</td></tr></table>"
  },
  {
    "id": 107,
    "question_number": 12,
    "marks": "[3 + 5]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Differentiate between authentication and authorization. List and explain the different types of security threats.</p>"
  },
  {
    "id": 108,
    "question_number": 13,
    "marks": "[5]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "80 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the roles of system administration for an organization? Explain.</p>"
  },
  {
    "id": 109,
    "question_number": 1,
    "marks": "[4 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is the purpose of a system call in an operating system? Describe the impact of the underlying hardware architecture on the structure of operating systems from an evolutionary perspective.</p>"
  },
  {
    "id": 110,
    "question_number": 2,
    "marks": "[3 + 5]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is a periodic task? Manage the scheduling of the following real-time tasks as per Earliest Deadline First (EDF).</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Task</th><th>Execution Time</th><th>Period</th></tr><tr><td>T1</td><td>0.9</td><td>2</td></tr><tr><td>T2</td><td>2.3</td><td>5</td></tr></table>"
  },
  {
    "id": 111,
    "question_number": 3,
    "marks": "[2 + 4]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is priority of a process? Make a schedule for the processes mentioned below as per Shortest Remaining Time First (SRTF) algorithm. Also calculate average turnaround time and average waiting time.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Execution Time</th></tr><tr><td>P1</td><td>0</td><td>3</td></tr><tr><td>P2</td><td>1</td><td>6</td></tr><tr><td>P3</td><td>2</td><td>1</td></tr><tr><td>P4</td><td>3</td><td>4</td></tr><tr><td>P5</td><td>4</td><td>2</td></tr></table>"
  },
  {
    "id": 112,
    "question_number": 4,
    "marks": "[2 + 4 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is race condition? Define semaphore and mutex. Solve the Dining Philosophers problem using semaphore.</p>"
  },
  {
    "id": 113,
    "question_number": 5,
    "marks": "[8]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is page fault? Consider the following page reference string: 7,0,1,2,0,3,0,4,2,3,0,3,2 with 4 page frames. Find the number of page faults in LRU, FIFO, and Optimal replacement algorithm.</p>"
  },
  {
    "id": 114,
    "question_number": 6,
    "marks": "[2 + 6]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Describe different file allocation methods. Explain free disk space management with an example.</p>"
  },
  {
    "id": 115,
    "question_number": 7,
    "marks": "[10]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Suppose a disk drive with 150 cylinders numbered 0-149. The drive is currently serving a request at 35 and the previous request was at 120. The queue of pending requests is 98, 103, 38, 122, 10, 128, 65 and 75. Starting from the current head position, calculate the total head movement (in cylinders) to satisfy all pending requests for SSTF, SCAN, C-SCAN, LOOK and FCFS disk arm scheduling algorithms.</p>"
  },
  {
    "id": 116,
    "question_number": 8,
    "marks": "[2 + 2 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is deadlock? Explain the essential conditions for deadlock. How does the OS detect deadlock and what does it do after detection?</p>"
  },
  {
    "id": 117,
    "question_number": 9,
    "marks": "[2 + 4]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is a trap door? Explain firewalls and access control lists.</p>"
  },
  {
    "id": 118,
    "question_number": 10,
    "marks": "[3 + 3 + 3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "79 Ashwin",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes on:</p><ul><li>Duties and responsibilities of System Administrator (Ch6)</li><li>Thrashing (Ch4)</li><li>Operating system attacks and their fixes (Ch6)</li></ul>"
  },
  {
    "id": 119,
    "question_number": 1,
    "marks": "[1 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is an Operating System? Explain the functions of an Operating System.</p>"
  },
  {
    "id": 120,
    "question_number": 2,
    "marks": "[1 + 3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain why exo-kernel does not require re-mapping of resources. Is the layered structure of operating system better than the monolithic structure? Explain.</p>"
  },
  {
    "id": 121,
    "question_number": 3,
    "marks": "[1 + 3]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>a) Differentiate between process and thread. Explain how multi-threading provides a better solution than single-threading solution.</p>"
  },
  {
    "id": 122,
    "question_number": 4,
    "marks": "[6]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Schedule the following set of processes according to HRRN and Round-Robin scheduling algorithm with Quantum time = 4 ms and calculate the average waiting time and average turn-around time.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time (ms)</th><th>CPU Time (ms)</th></tr><tr><td>A</td><td>0</td><td>12</td></tr><tr><td>B</td><td>2</td><td>8</td></tr><tr><td>C</td><td>5</td><td>3</td></tr><tr><td>D</td><td>10</td><td>9</td></tr></table>"
  },
  {
    "id": 123,
    "question_number": 5,
    "marks": "[2 + 3]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is race condition and Mutual Exclusion? Explain how the sleep() and wakeup() solution is better than the busy-waiting solution for the critical-section problem.</p>"
  },
  {
    "id": 124,
    "question_number": 6,
    "marks": "[1 + 1 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is TSL? Why is it used? Explain the types of semaphore along with the major operations of semaphore with a simple pseudocode.</p>"
  },
  {
    "id": 125,
    "question_number": 7,
    "marks": "[1 + 1 + 2]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is Associative memory and Thrashing? Write the difference between Coalescing and Compaction.</p>"
  },
  {
    "id": 126,
    "question_number": 8,
    "marks": "[1 + 5]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is Demand paging? Consider the following page reference string: 2,3,4,2,1,3,7,5,4,3,1,5. Find how many page faults occur according to OPTIMAL, LRU (least recently used) and LFU (least frequently used) page replacement algorithm, assuming 3-page frames.</p>"
  },
  {
    "id": 127,
    "question_number": 9,
    "marks": "[1 + 2 + 6 + 1]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is file attribute? List the File System performance indicators. Explain the file allocation technique(s) and which is most appropriate for \"tape storage\", and why?</p>"
  },
  {
    "id": 128,
    "question_number": 10,
    "marks": "[2 + 4 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Jestha",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain the types of Network Attacks. What is ACL? Why is the 'HASH' function called Message Digestor? (Combined with disk-scheduling / deadlock content from the same section of this paper.)</p><table border='1' cellpadding='4' cellspacing='0'><caption>Available = (10,5,7)</caption><tr><th>Process</th><th>Allocation (A,B,C)</th><th>Max (A,B,C)</th></tr><tr><td>P1</td><td>0,1,0</td><td>5,3,3</td></tr><tr><td>P2</td><td>2,0,0</td><td>3,2,2</td></tr><tr><td>P3</td><td>3,0,9</td><td>0,2,2</td></tr><tr><td>P4</td><td>2,1,1</td><td>4,2,2</td></tr><tr><td>P5</td><td>0,0,1</td><td>5,3,2</td></tr></table>"
  },
  {
    "id": 129,
    "question_number": 1,
    "marks": "[3 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "81 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Why is a scheduler needed as manager for critical resources like CPU, memory and storage in a computer system? Explain.</p>"
  },
  {
    "id": 130,
    "question_number": 2,
    "marks": "[8]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "81 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Schedule the following set of processes according to HRRN and Round-Robin scheduling algorithm with Quantum time = 3 ms and calculate the average waiting time and average turnaround time.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>CPU time (ms)</th></tr><tr><td>A</td><td>12</td></tr><tr><td>B</td><td>8</td></tr><tr><td>C</td><td>9</td></tr></table>"
  },
  {
    "id": 131,
    "question_number": 3,
    "marks": "[2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What do you mean by TLB? Consider the following page references: 0 1 8 7 0 3 1 0 2 8 1 7 3 1 0 1 8 7 0 3. Calculate the number of page faults according to Optimal, FIFO and LRU algorithms. Assume available frames = 3.</p>"
  },
  {
    "id": 132,
    "question_number": 4,
    "marks": "[4 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "81 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Imagine two programs are racing to print something on the screen. What happens if they don't take turns properly? Explain. Solve the dining philosophers problem using any one technique with its pseudocode.</p>"
  },
  {
    "id": 133,
    "question_number": 5,
    "marks": "[3 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "81 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>A program uses 12GB of memory, exceeding the 8GB RAM of the host machine. How does the OS manage its execution? Explain. Suppose a disk drive with 150 cylinders numbered 0-149. The drive is currently serving a request at 35 and the previous request is at disk 55. The queue of pending requests is 98, 103, 38, 122, 10, 128, 65, 75. Starting from the current head position, calculate the total head movement (in cylinders) that the disk arm moves to satisfy all pending requests for SSTF, SCAN and LOOK Disk Arm Scheduling Algorithm.</p>"
  },
  {
    "id": 134,
    "question_number": 6,
    "marks": "[3 + 8]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "81 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the necessary conditions for deadlock and how can deadlock be handled? Explain. Consider a system with 5 concurrent processes (P0-P4) and 4 resource types (R0-R3). The total number of instances of each resource type are 3, 17, 16, 12 respectively. a) Create the need matrix. b) Is the state safe? If so, show the safe execution of the processes.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Allocation (R0,R1,R2,R3)</th><th>Max (R0,R1,R2,R3)</th></tr><tr><td>P0</td><td>0,1,1,0</td><td>0,2,1,0</td></tr><tr><td>P1</td><td>1,2,3,1</td><td>1,6,5,2</td></tr><tr><td>P2</td><td>1,3,6,5</td><td>2,3,6,6</td></tr><tr><td>P3</td><td>0,4,3,2</td><td>0,6,5,2</td></tr><tr><td>P4</td><td>0,0,1,4</td><td>0,6,5,6</td></tr></table>"
  },
  {
    "id": 135,
    "question_number": 7,
    "marks": "[3 + 3 + 3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "81 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write a comparative note on (Any Three):</p><ul><li>Batch OS vs. Real-Time OS (Ch1)</li><li>Process vs. Thread (Ch2)</li><li>Programmed I/O and Interrupt Driven I/O (Ch4)</li><li>Roles and Duties of System Administration (Ch6)</li></ul>"
  },
  {
    "id": 136,
    "question_number": 1,
    "marks": "[1 + 3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define Operating System. What is the purpose of a system call in an operating system? Explain.</p>"
  },
  {
    "id": 137,
    "question_number": 2,
    "marks": "[2 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain why exo-kernel doesn't require re-mapping of resources. Is the layered structure of operating system better than the monolithic structure? Explain.</p>"
  },
  {
    "id": 138,
    "question_number": 3,
    "marks": "[2 + 8]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain Context Switching with an example. Consider the following set of processes with the burst time given in milliseconds. Draw the Gantt Chart and calculate the average waiting time (AWT), average turnaround time (ATAT), CPU Utilization and throughput for (i) Round Robin (quantum = 2) (ii) Highest Response Ratio Next (HRRN).</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>P1</td><td></td><td>4</td></tr><tr><td>P2</td><td></td><td>2</td></tr><tr><td>P3</td><td></td><td>6</td></tr></table>"
  },
  {
    "id": 139,
    "question_number": 4,
    "marks": "[2 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is the Critical Section Problem? Explain. How can you solve the \"Producer-Consumer problem\" using Semaphore? Explain along with pseudocode.</p>"
  },
  {
    "id": 140,
    "question_number": 5,
    "marks": "[1 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is Demand Paging? Consider the following page reference string: 2,3,4,2,1,3,7,5,4,3,1,5. Find how many page faults occur according to OPTIMAL, LRU and LFU page replacement algorithm assuming 3-page frames.</p>"
  },
  {
    "id": 141,
    "question_number": 6,
    "marks": "[4 + 2 + 2]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Describe the File System for an operating system. Why are output files for the printer normally spooled on disk before being printed? Explain how RAID level 1 differs from RAID level 0.</p>"
  },
  {
    "id": 142,
    "question_number": 7,
    "marks": "[2 + 8]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain about Programmed I/O. Consider a disk queue having 200 cylinders from 0 to 199 with requests for I/O to blocks on cylinders 23, 89, 132, 42, and 187. Assume the disk head is initially at 100 and a seek takes 5ms/cylinder. How much seek time is needed for FCFS, SSTF, SCAN, and LOOK disk arm scheduling algorithms?</p>"
  },
  {
    "id": 143,
    "question_number": 8,
    "marks": "[2 + 8]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the necessary conditions for deadlock? Consider a system with five processes P0 through P4 and three resource types A, B and C. Resource A has 5 instances, B has 5 instances, and type C has 4 instances. Suppose at time t = 0 the following snapshot has been taken. Let the available resources be (1,0,1). Is the system in a safe state? If yes, write the safe sequence.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Reconstructed from a heavily garbled scan</caption><tr><th>Process</th><th>Allocation (A,B,C)</th><th>Max Claim (A,B,C)</th></tr><tr><td>P0</td><td>0,3,1</td><td>3,3,1</td></tr><tr><td>P1</td><td>1,4,2</td><td>1,1,1</td></tr><tr><td>P2</td><td>1,0,1</td><td>1,1,1</td></tr><tr><td>P3</td><td>0,0,0</td><td>2,2,0</td></tr><tr><td>P4</td><td>0,0,0</td><td>1,0,0</td></tr></table>"
  },
  {
    "id": 144,
    "question_number": 9,
    "marks": "[3 + 5]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Describe how the Access Control List is used. What are the roles of a System Administrator for change management?</p>"
  },
  {
    "id": 145,
    "question_number": 10,
    "marks": "[3 + 3 + 3]",
    "chapter": "### short notes",
    "asked_year_month_bs": "80 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes on:</p><ul><li>Protection Domain (Ch6)</li><li>Compaction and Coalescing (Ch4)</li><li>Belady's Anomaly (Ch4)</li></ul>"
  },
  {
    "id": 146,
    "question_number": 1,
    "marks": "[1 + 4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is an Operating System? Explain the statement \"operating system acts as a Broker between hardware and application program\".</p>"
  },
  {
    "id": 147,
    "question_number": 2,
    "marks": "[2 + 3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Why doesn't Exo-kernel require re-mapping of resources? Is the layered structure of an operating system better than the monolithic structure? Explain.</p>"
  },
  {
    "id": 148,
    "question_number": 3,
    "marks": "[5]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What information does a Process Control Block contain? Write the difference between thread and process.</p>"
  },
  {
    "id": 149,
    "question_number": 4,
    "marks": "[5]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Consider the following set of processes with given arrival and CPU burst time. Calculate the average waiting time for each process for non-preemptive Shortest Job First (SJF) and Round Robin Scheduling Algorithms with quantum size 4.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Values partially illegible in original scan</caption><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>A</td><td>0</td><td></td></tr><tr><td>B</td><td></td><td>6</td></tr><tr><td>C</td><td>4</td><td></td></tr><tr><td>D</td><td>6</td><td>20</td></tr></table>"
  },
  {
    "id": 150,
    "question_number": 5,
    "marks": "[2 + 3]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is race condition and Mutual Exclusion? Explain how the sleep() and wakeup() solution is better than the busy-waiting solution for the critical-section problem.</p>"
  },
  {
    "id": 151,
    "question_number": 6,
    "marks": "[5]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>How is semaphore used in process synchronization? Do you think semaphore is the best solution for the producer-consumer problem? Explain using it in the producer-consumer problem.</p>"
  },
  {
    "id": 152,
    "question_number": 7,
    "marks": "[5]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Differentiate between internal and external fragmentation. Suppose we have memory of 1000 KB with 5 partitions of size 150 KB, 200 KB, 250 KB, 100 KB, and 300 KB. Where will processes A and B of size 175 KB and 125 KB be loaded, if we use Best-Fit and Worst-Fit strategy?</p>"
  },
  {
    "id": 153,
    "question_number": 8,
    "marks": "[5]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain the types of Network Attacks. What is ACL? Why is the 'HASH' function called Message Digestor?</p>"
  },
  {
    "id": 154,
    "question_number": 9,
    "marks": "[1 + 2 + 6 + 1]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is file attribute? List the File System performance indicator. Explain the file allocation methods with their advantages and disadvantages. Also suggest which file organization technique is most appropriate for \"tape storage\".</p>"
  },
  {
    "id": 155,
    "question_number": 10,
    "marks": "[10]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is DMA? Explain how I/O takes place through DMA. Suppose the head of a moving-head disk with 200 tracks, numbered 0 to 199, is currently serving a request at track 143 and has finished a request at track 125. The queue of requests, kept in FIFO order, is 25, 17, 119, 197, 194, 15, 182, 115, 183. What is the total movement needed to satisfy these requests for the following disk-scheduling algorithms?</p>"
  },
  {
    "id": 156,
    "question_number": 11,
    "marks": "[5]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>How does an unsafe state differ from a deadlock state? Consider the following initial state and identify whether a requested resource is granted or denied for the given cases: a) What will happen if process A requests 1 resource? b) What will happen if process D requests 1 resource?</p><table border='1' cellpadding='4' cellspacing='0'><caption>Free resources = 2</caption><tr><th>Process</th><th>Has</th><th>Max</th></tr><tr><td>A</td><td>2</td><td>6</td></tr><tr><td>B</td><td>1</td><td>5</td></tr><tr><td>C</td><td>2</td><td>3</td></tr><tr><td>D</td><td>3</td><td>3</td></tr></table>"
  },
  {
    "id": 157,
    "question_number": 12,
    "marks": "[4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is deadlock prevention? Explain deadlock prevention techniques.</p>"
  },
  {
    "id": 158,
    "question_number": 13,
    "marks": "[7]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the strategies for memory management? Consider the following page-reference string: 1,2,3,4,1,2,5,6,2,1,2,3,7,6,3,2,1,2,3,6. How many page faults would occur for LRU and FIFO replacement algorithms assuming 4 frames?</p>"
  },
  {
    "id": 159,
    "question_number": 14,
    "marks": "[5]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "79 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is group policy? What can we do with AWK? Explain.</p>"
  },
  {
    "id": 160,
    "question_number": 1,
    "marks": "[2 + 8]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is the role of a system call in an operating system? Write the major differences between the following types of operating system: a) Batch system b) Interactive system c) Real-time system d) Time-sharing system.</p>"
  },
  {
    "id": 161,
    "question_number": 2,
    "marks": "[2 + 8]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>State the 5-state process model. From the given process information, assume the processes arrived in the order P1, P2, P3, P4 and P5 all at time 0, priority 1 as highest and 4 as lowest. a) Draw the Gantt chart. b) Calculate average waiting time and average turnaround time for the following scheduling algorithms: (i) Round Robin (quantum = 1) (ii) Priority Preemptive (iii) Preemptive SJF (iv) FCFS.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Burst Time</th><th>Priority</th></tr><tr><td>P1</td><td>10</td><td>3</td></tr><tr><td>P2</td><td>1</td><td>1</td></tr><tr><td>P3</td><td>2</td><td>3</td></tr><tr><td>P4</td><td>1</td><td>4</td></tr><tr><td>P5</td><td>2</td><td>2</td></tr></table>"
  },
  {
    "id": 162,
    "question_number": 3,
    "marks": "[2 + 2 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is the critical section problem? Why must execution of the critical section be mutually exclusive? Describe how a race condition occurs in the producer-consumer problem and use semaphore to solve it.</p>"
  },
  {
    "id": 163,
    "question_number": 4,
    "marks": "[4 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define page fault and demand paging. Consider logical address space of eight pages of 1024 words each, mapped onto a physical memory of 32 frames. a) How many bits are in the logical address and physical address? b) How will paging be done?</p>"
  },
  {
    "id": 164,
    "question_number": 5,
    "marks": "[2 + 6]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is the role of the file system? How can files be implemented? List any three techniques with advantages and disadvantages of each.</p>"
  },
  {
    "id": 165,
    "question_number": 6,
    "marks": "[2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the principles of I/O software? Suppose a disk drive has 100 cylinders, numbered 0 to 99. The drive is currently serving a request at cylinder 43 and the previous request was at cylinder 25. The queue of pending requests, in FIFO order, is 86, 70, 13, 74, 48, 9, 22, 50, 30. Produce the schedules to satisfy all pending requests for 1. FCFS 2. C-SCAN 3. SSTF.</p>"
  },
  {
    "id": 166,
    "question_number": 7,
    "marks": "[2 + 15]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write the four conditions for deadlock. Consider the following snapshot. Let the available number of resources be given by the available vector as (3,3,2). Use Banker's algorithm to claim that the system is in a safe state and show the safe sequence.</p><table border='1' cellpadding='4' cellspacing='0'><caption>Reconstructed from a heavily garbled scan</caption><tr><th>Process</th><th>Allocation (A,B,C)</th><th>Maximum Claim (A,B,C)</th></tr><tr><td>P0</td><td>0,1,0</td><td>5,3,1</td></tr><tr><td>P1</td><td>2,0,0</td><td>3,2,1</td></tr><tr><td>P2</td><td>3,0,1</td><td>0,2,3</td></tr><tr><td>P3</td><td>0,2,1</td><td>1,1,2</td></tr><tr><td>P4</td><td>0,0,2</td><td>4,3,3</td></tr></table>"
  },
  {
    "id": 167,
    "question_number": 8,
    "marks": "[4 + 4]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Describe how an Access Control List is used. What are the roles of a system administrator for change management?</p>"
  },
  {
    "id": 168,
    "question_number": 9,
    "marks": "[2 + 2 + 4]",
    "chapter": "### short notes",
    "asked_year_month_bs": "78 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes on (Any Two):</p><ul><li>Public key cryptography (Ch6)</li><li>Resource allocation graph (Ch3)</li><li>Process vs Thread (Ch2)</li></ul>"
  },
  {
    "id": 169,
    "question_number": 1,
    "marks": "[4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What do you mean by system call in an Operating System? Justify how the OS functions as a manager.</p>"
  },
  {
    "id": 170,
    "question_number": 2,
    "marks": "[4]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What do you mean by Shell? Discuss Microkernel and Monolithic structuring with their advantages and disadvantages.</p>"
  },
  {
    "id": 171,
    "question_number": 3,
    "marks": "[1 + 3]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Differentiate between process and thread. Explain how multi-threading provides a better solution than single-threading.</p>"
  },
  {
    "id": 172,
    "question_number": 4,
    "marks": "[6]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Consider the following set of processes, with the length of the CPU burst time and arrival time given in milliseconds. Draw a Gantt chart illustrating RR (quantum = 2) and Highest Response Ratio Next (HRRN) scheduling. Also find average waiting time and average turnaround time for each algorithm.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>P0</td><td>0</td><td>5</td></tr><tr><td>P1</td><td>2</td><td>6</td></tr><tr><td>P2</td><td>4</td><td>4</td></tr><tr><td>P3</td><td>6</td><td>5</td></tr><tr><td>P4</td><td>8</td><td>2</td></tr></table>"
  },
  {
    "id": 173,
    "question_number": 5,
    "marks": "[2 + 2 + 6]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>How does a race condition arise in IPC? Explain the 'Sleeping Barber' problem. When does such a problem happen in a system? Write a solution using any type of your own technique with pseudocode example.</p>"
  },
  {
    "id": 174,
    "question_number": 6,
    "marks": "[1 + 1 + 2]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is associative memory and thrashing? Write the difference between coalescing and compaction.</p>"
  },
  {
    "id": 175,
    "question_number": 7,
    "marks": "[1 + 5]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is Demand Paging? Consider the following page reference string: 2,3,4,2,1,3,7,5,4,3,1,5. Find how many page faults occur according to OPTIMAL, LRU (least recently used) and LFU (least frequently used) page replacement algorithm assuming 3 page frames.</p>"
  },
  {
    "id": 176,
    "question_number": 8,
    "marks": "[3 + 3]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define file system and list out some attributes of a file. Differentiate between relative and absolute pathnames.</p>"
  },
  {
    "id": 177,
    "question_number": 9,
    "marks": "[2 + 8]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the disadvantages of Programmed I/O? Suppose a disk has 200 tracks, numbered 0 to 199. The read/write head is currently serving a request at track 143, and has just finished a request at track 125. The queue of pending requests, in FIFO order, is 86, 147, 91, 177, 94, 160, 102, 175, 130. Suppose a seek takes 10ms per cylinder moved. Starting from the current head position, what is the total distance that the disk arm moves to satisfy all pending requests, for FCFS, SSTF, C-SCAN and C-LOOK algorithm? Also calculate seek time needed for each algorithm.</p>"
  },
  {
    "id": 178,
    "question_number": 10,
    "marks": "[3 + 7]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain in detail how you can detect deadlock in an operating system. Consider a system with 5 processes P0 through P4 and three resource types A, B and C. Resources A has 7 instances, B has 2 and C has 6 instances. At time 0 we have the following state. a) Is the state safe? If so, show the safe execution of the processes. b) Suppose P2 makes an additional request of (1,0,1,0), what will be the effect of this request on the system?</p><table border='1' cellpadding='4' cellspacing='0'><caption>Values partially illegible in original scan</caption><tr><th>Process</th><th>Allocation</th><th>Request</th></tr><tr><td>P0</td><td></td><td>0,0,0</td></tr><tr><td>P1</td><td></td><td>2,0,2</td></tr><tr><td>P2</td><td></td><td>0,0,0</td></tr><tr><td>P3</td><td></td><td>1,0,0</td></tr><tr><td>P4</td><td></td><td>0,0,2</td></tr></table>"
  },
  {
    "id": 179,
    "question_number": 11,
    "marks": "[2 + 2 + 2]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain the types of Network Attacks. What is ACL? Why is the 'HASH' function called Message Digestor?</p>"
  },
  {
    "id": 180,
    "question_number": 12,
    "marks": "[5 + 5]",
    "chapter": "### short notes",
    "asked_year_month_bs": "77 Chaitra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes on:</p><ul><li>Semaphores (Ch3)</li><li>UNIX File System (Ch5)</li></ul>"
  },
  {
    "id": 181,
    "question_number": 1,
    "marks": "[1 + 3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>a) Define Operating System. Explain OS as resource manager. b) Discuss the properties of batch system and real-time system.</p>"
  },
  {
    "id": 182,
    "question_number": 2,
    "marks": "[8]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Differentiate between process and thread. Consider the following set of processes, arrival time and length of CPU burst time given in milliseconds. i) Draw a Gantt chart illustrating the execution of these processes using FCFS, SRTN and RR (Quantum = 2) scheduling. ii) What is the waiting time and turnaround time of each process for each scheduling algorithm?</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>A</td><td>0</td><td>3</td></tr><tr><td>B</td><td>1</td><td>5</td></tr><tr><td>C</td><td>4</td><td>4</td></tr><tr><td>D</td><td>6</td><td>2</td></tr></table>"
  },
  {
    "id": 183,
    "question_number": 3,
    "marks": "[2 + 2 + 4]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>List some differences between internal fragmentation and external fragmentation. Define virtual memory and explain how it is achieved by demand paging.</p>"
  },
  {
    "id": 184,
    "question_number": 4,
    "marks": "[2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define page fault. Why do you need page replacement algorithms? How many page faults occur for the following given reference string for three page frames: 7,0,1,2,0,3,0,4,2,3,0,3, for i) LRU ii) FIFO iii) Optimal page replacement algorithm?</p>"
  },
  {
    "id": 185,
    "question_number": 5,
    "marks": "[2 + 6]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define directory and file path. Explain the I-node approach of file implementation with its advantages and disadvantages.</p>"
  },
  {
    "id": 186,
    "question_number": 6,
    "marks": "[2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What do you mean by disk arm scheduling? Explain shortest-seek-first and elevator algorithm with their advantages and limitations.</p>"
  },
  {
    "id": 187,
    "question_number": 7,
    "marks": "[2 + 2 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What do you mean by the critical region problem? What requirements should be met by its solution? Explain Peterson's solution to avoid race condition.</p>"
  },
  {
    "id": 188,
    "question_number": 8,
    "marks": "[1 + 2 + 5]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define deadlock. What are the conditions for resource deadlock? Explain some methods for recovering from deadlocks.</p>"
  },
  {
    "id": 189,
    "question_number": 9,
    "marks": "[2 + 6]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the security problems associated with an OS? Explain ACL with its use in security.</p>"
  },
  {
    "id": 190,
    "question_number": 10,
    "marks": "[2 + 6]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "76 Baisakh",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>List out some system administration tasks in an OS. Describe the roles and responsibilities of a system administrator with an example of each administrative task you listed.</p>"
  },
  {
    "id": 191,
    "question_number": 1,
    "marks": "[1 + 3]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>a) What is an Operating System? Explain the functions of an Operating System.</p>"
  },
  {
    "id": 192,
    "question_number": 2,
    "marks": "[1 + 2 + 1]",
    "chapter": "1. Introduction",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>b) What is System Call? Explain the Monolithic and Layered Architecture of an operating system. Explain which architecture is better among them and why.</p>"
  },
  {
    "id": 193,
    "question_number": 3,
    "marks": "[8]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define Process and Thread. Consider the following set of processes, with arrival time and burst time given in milliseconds. a) Draw a Gantt chart illustrating the execution of these processes using FCFS, SRTN and RR (Quantum = 3) scheduling. b) What is the waiting time and turnaround time of each process for each scheduling algorithm?</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th></tr><tr><td>A</td><td>0</td><td>3</td></tr><tr><td>B</td><td>1</td><td>6</td></tr><tr><td>C</td><td>4</td><td>4</td></tr><tr><td>D</td><td>6</td><td>2</td></tr><tr><td>E</td><td>7</td><td>3</td></tr></table>"
  },
  {
    "id": 194,
    "question_number": 4,
    "marks": "[4 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Compare and contrast monitor and semaphore. Write a solution for the Dining Philosophers' Problem using any one technique at the pseudocode level.</p>"
  },
  {
    "id": 195,
    "question_number": 5,
    "marks": "[2 + 6]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>How does DMA (Direct Memory Access) increase system consistency? Suppose a disk drive with 150 cylinders numbered 0-149. The drive is currently serving a request at 35. The queue of pending requests is 98, 103, 38, 122, 10, 128, 65, 75. Starting from the current head position, calculate the total head movement (in cylinders) that the disk arm moves to satisfy all pending requests for SSTF, SCAN and LOOK Disk Arm Scheduling Algorithm.</p>"
  },
  {
    "id": 196,
    "question_number": 6,
    "marks": "[4 + 4 + 4]",
    "chapter": "### short notes",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Prepare a comparative note on the following:</p><ul><li>Virtual memory management using Paging versus Segmentation (Ch4)</li><li>File implementation using 'Linked list Allocation with Table' versus I-node (Ch5)</li><li>Spooling versus Deadline Scheduling (Ch4)</li></ul>"
  },
  {
    "id": 197,
    "question_number": 7,
    "marks": "[2 + 4 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is Indefinite Postponement? Is it different from deadlock? Write a brief comparison. Consider a system with 5 concurrent processes (P1-P5) and four resource types (R1-R4) with maximum availability (6,4,5,3). Is the system state safe? If so, show the safe execution of the processes.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Allocation (R1,R2,R3,R4)</th><th>Max Claim (R1,R2,R3,R4)</th></tr><tr><td>P1</td><td>2,0,1,1</td><td>3,2,1,1</td></tr><tr><td>P2</td><td>1,1,0,0</td><td>1,2,0,2</td></tr><tr><td>P3</td><td>1,1,1,0</td><td>1,1,3,0</td></tr><tr><td>P4</td><td>1,0,1,0</td><td>3,2,1,0</td></tr><tr><td>P5</td><td>0,1,0,1</td><td>2,1,0,1</td></tr></table>"
  },
  {
    "id": 198,
    "question_number": 8,
    "marks": "[4 + 4]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>a) What are the security issues associated with an OS? Discuss them. b) Describe the roles and responsibilities of a system administrator.</p>"
  },
  {
    "id": 199,
    "question_number": 9,
    "marks": "[2 + 2 + 2]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is a 'File System' in an OS? What are the major operations required for any file? How is it different from a 'Directory'?</p>"
  },
  {
    "id": 200,
    "question_number": 10,
    "marks": "[2 + 2 + 2 + 2]",
    "chapter": "### short notes",
    "asked_year_month_bs": "76 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes on:</p><ul><li>Demand paging (Ch4)</li><li>Virtual machine (Ch1)</li><li>USB Storage (Ch4)</li><li>Protection matrix (Ch6)</li></ul>"
  },
  {
    "id": 201,
    "question_number": 1,
    "marks": "[2 + 3 + 3]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Differentiate between I/O bound process and CPU bound process. What is process scheduling? Why do we need threads?</p>"
  },
  {
    "id": 202,
    "question_number": 2,
    "marks": "[8]",
    "chapter": "2. Process Management",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Define process in OS and explain the possible states. Consider the following set of processes, with the length of the CPU burst time in milliseconds. The processes are assumed to have arrived in the order P1, P2, P3, P4, P5 all at time 0 (lowest number = highest priority). Draw a Gantt chart illustrating priority and RR (quantum = 1) scheduling. Also find average waiting time and average turnaround time for each algorithm.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Burst Time</th><th>Priority</th></tr><tr><td>P1</td><td>10</td><td>3</td></tr><tr><td>P2</td><td>1</td><td>1</td></tr><tr><td>P3</td><td>2</td><td>5</td></tr><tr><td>P4</td><td>1</td><td>4</td></tr><tr><td>P5</td><td>5</td><td>2</td></tr></table>"
  },
  {
    "id": 203,
    "question_number": 3,
    "marks": "[8]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Consider a disk queue with requests for I/O to blocks on cylinders 23, 89, 132, 42, 187. Assume the disk head is initially at 100 and a seek takes 6 ms/cylinder. How much seek time is needed for FCFS, SSTF and SCAN disk arm scheduling algorithms?</p>"
  },
  {
    "id": 204,
    "question_number": 4,
    "marks": "[8]",
    "chapter": "5. File Systems",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain the I-node approach of file system implementation, with its advantages and disadvantages.</p>"
  },
  {
    "id": 205,
    "question_number": 5,
    "marks": "[3 + 5]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What are the differences between fixed partitioning and variable partitioning systems of memory for multiprogramming?</p>"
  },
  {
    "id": 206,
    "question_number": 6,
    "marks": "[8]",
    "chapter": "4. I/O and Memory Management",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Given the following reference to pages by a program: 0,9,0,1,8,1,8,3,8,7,1,2,8,2,7,8,2,2,8,3. How many page faults will occur if the program has 4 frames for the Optimal Page Replacement algorithm?</p>"
  },
  {
    "id": 207,
    "question_number": 7,
    "marks": "[5 + 3]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Explain private and public key used in asymmetric cryptography. What is the use of ACL?</p>"
  },
  {
    "id": 208,
    "question_number": 8,
    "marks": "[2 + 2 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is the critical section problem? Why must execution of the critical section be mutually exclusive? Describe how semaphore can be used to solve the critical section problem.</p>"
  },
  {
    "id": 209,
    "question_number": 9,
    "marks": "[3 + 5]",
    "chapter": "6. Security and System Administration",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>What is the significance of system administration? Describe the role and responsibilities of a system administrator to keep the system updated and efficient. Explain with an example.</p>"
  },
  {
    "id": 210,
    "question_number": 10,
    "marks": "[4 + 4]",
    "chapter": "3. Process Communication and Synchronization",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Consider a system with 5 concurrent processes (P0-P4) and 4 resource types (R0-R3). The number of instances of each resource type in the system are 6, 4, 4, 2 respectively. a) Calculate the Need matrix as per Banker's algorithm. b) Is the state safe? If so, show the safe execution of the processes.</p><table border='1' cellpadding='4' cellspacing='0'><tr><th>Process</th><th>Allocation (R0,R1,R2,R3)</th><th>Max Claim (R0,R1,R2,R3)</th></tr><tr><td>P0</td><td>2,0,1,1</td><td>3,2,1,1</td></tr><tr><td>P1</td><td>1,1,0,0</td><td>1,2,0,2</td></tr><tr><td>P2</td><td>1,1,0,0</td><td>1,1,2,0</td></tr><tr><td>P3</td><td>1,0,1,0</td><td>3,2,1,0</td></tr><tr><td>P4</td><td>0,1,0,1</td><td>2,1,0,1</td></tr></table>"
  },
  {
    "id": 211,
    "question_number": 11,
    "marks": "[4 + 4]",
    "chapter": "### short notes",
    "asked_year_month_bs": "75 Bhadra",
    "exam_session": "Regular",
    "programme_course": "BCT Old Course",
    "topic": "<p>Write ### short notes:</p><ul><li>Thrashing (Ch4)</li><li>Shell programming (Ch1)</li></ul>"
  }
]