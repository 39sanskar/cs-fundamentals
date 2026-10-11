- (Process) A process is an active instance of a computer program that is currently being loaded into memory and executed by the central processing unit (CPU).

### Key Differences: Program vs. Process

-  Program : A passive set of instructions stored on secondary storage (like a hard drive or SSD) that does not use system resources on its own.
-  Process : A dynamic, living entity that uses active memory (RAM), CPU time, input/output devices, and a Process Control Block (PCB) to track its execution state.
-  Lifecycle: A program remains static on disk until launched, whereas a process exists temporarily from the moment it starts until it finishes or terminates.
-  Instances: A single program can spawn multiple independent processes running at the same time with different data.

#### Difference between Program and Process
- In Computer Science, there are two fundamental terms in operating system: Program and Process. Program is a set of instructions written to perform a task, stored in memory. A process is the active execution of a program, using system resources like CPU and memory. In other words, a program is static, a process is dynamic, representing the program in action.In this article, we will see discuss the difference between Program and Process in detail.

#### What is a Program?
- When we execute a program that was just compiled, the Operating System will generate a process to execute the program. Execution of the program starts via GUI mouse clicks, command line entry of its name, etc. A program is a passive entity as it resides in the secondary memory, such as the contents of a file stored on disk. One program can have several processes. 

#### Features of a Program

- Multiple programs can be executed by a single user.
- All program instructions are stored in main memory, which is provided by the operating system.
- It is an inert thing. All it is is a file with some instructions that need to be executed.
- It is devoid of a control block.
- The secondary memory of the system houses it.
- One program may be linked to multiple processes. For example, a browser may have multiple tabs active at once.


#### What is a Process?
- The term process (Job) refers to program code that has been loaded into a computer's memory so that it can be executed by the central processing unit (CPU). A process can be described as an instance of a program running on a computer or as an entity that can be assigned to and executed on a processor. A program becomes a process when loaded into memory and thus is an active entity. 

#### Features of a Process

- Every process has a certain collection of data associated with it. For instance, the name of its parents, the location of the memory space that has been allotted, and security attributes like ownership rights and credentials.
- A process can only exist for the duration that it is being performed.
- System resources are assigned to processes. Two instances are file descriptors and network ports.
- The process is an active entity.
- It has a lot of resources.
- For it to function, it needs resources like memory address, CPU, and I/O.


### Difference Between Program and Process
| Program | 	Process | 
| :--- | :--- | 
| The program contains a set of instructions designed to complete a specific task.|	The process is an instance of an executing program.|
| A program is a passive entity as it resides in the secondary memory.|	The process is an active entity as it is created during execution and loaded into the main memory.|
| Program exists at a single place and continues to exist until it is deleted.|	The process exists for a limited period as it gets terminated after the completion of the task.|
|A program is a static entity.|	The process is a dynamic entity.|
|The program does not have any resource requirement, it only requires memory space for storing the instructions.| The process has a high resource requirement, it needs resources like CPU, memory address, and I/O during its lifetime.|
| The program does not have any control block.|	Process has its control block called Process Control Block.|
|The program has two logical components: code and data.|	In addition to program data, a process also requires additional information required for the management and execution.|
|The program does not change itself.|	Many processes may execute a single program. Their program code may be the same but program data may be different. these are never the same.|
|Program contains instructions.| 	The process is a sequence of instruction execution. |


####  Process and Program in Execution 


![Process and Program](./assets/states_modified.png)

#### Conclusion
- Both Program and Process are closely related to each other. With the help of the Program, one can define the Process. So, understanding the difference between Program and Process is much needed to grab more deeper concepts related to the Operating System and its working process.