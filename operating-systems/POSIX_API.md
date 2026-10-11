## POSIX APIs 
- POSIX APIs (Portable Operating System Interface) are a family of standardized function definitions established by the IEEE and The Open Group. They ensure that software written for one operating system can easily be compiled and run on another. Originally modeled after core Unix behaviors, they act as a universal contract for application-to-OS communication across systems like Linux, macOS, BSD, and several real-time embedded systems


## Primary POSIX API Categories

- The Open Group System Interfaces specification defines hundreds of standard C library functions. These are typically divided into five foundational categories

--- 

##  Primary POSIX API Categories

| Category | Description | Primary API Examples |
| :--- | :--- | :--- |
| **File Operations & I/O** | Managing files, directories, device pathways, and generalized data streams. | `open()`, `read()`, `write()`, `close()`, `mkdir()`, `lseek()` |
| **Process Management** | Creating, modifying, managing, and destroying active system processes. | `fork()`, `exec()`, `wait()`, `posix_spawn()`, `kill()` |
| **POSIX Threads (Pthreads)** | Creating and synchronizing concurrent sub-execution units inside a single process. | `pthread_create()`, `pthread_join()`, `pthread_mutex_init()` |
| **Inter-Process Comm (IPC)** | Facilitating data exchange and state signaling between isolated processes. | `pipe()`, `shm_open()`, `mmap()`, `mq_open()`, `sem_init()` |
| **Networking & Sockets** | Managing network streams and network hardware communication protocol endpoints. | `socket()`, `bind()`, `listen()`, `accept()`, `connect()`, `send()`, `recv()` |

---

##  1. Network & Socket Operations

| Function | Description | Example Usage (C) |
| :--- | :--- | :--- |
| `accept` | Accepts a connection on a listening socket, returning a new connected file descriptor. | `int client_fd = accept(server_fd, (struct sockaddr *)&addr, &addrlen);` |
| `bind` | Binds a unique local protocol address (IP and port) to a socket. | `bind(sockfd, (struct sockaddr *)&addr, sizeof(addr));` |
| `connect` | Initiates a connection on a socket to a specified foreign address. | `connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));` |
| `getpeername` | Retrieves the address of the peer connected to the specified socket. | `getpeername(sockfd, (struct sockaddr *)&peer_addr, &len);` |

---

##  2. File & File Descriptor Operations

| Function | Description | Example Usage (C) |
| :--- | :--- | :--- |
| `dup2` | Duplicates `old_fd` to a specified descriptor `new_fd`, closing `new_fd` first if necessary. | `dup2(old_fd, STDOUT_FILENO); // Redirect stdout` |
| `fcntl` | Performs various control operations on an open file descriptor (e.g., set non-blocking). | `fcntl(fd, F_SETFL, O_NONBLOCK);` |
| `flock` | Applies or removes an advisory lock on an open file. | `flock(fd, LOCK_EX); // Exclusive lock` |
| `fstat` | Obtains detailed metadata/status about the file referenced by descriptor `fd`. | `struct stat st; fstat(fd, &st);` |
| `fstatfs` | Returns information and statistics about a mounted file system using a descriptor. | `struct statfs buf; fstatfs(fd, &buf);` |
| `dup` | Duplicates an open file descriptor, returning the lowest unused descriptor number. | `int new_fd = dup(old_fd);` |
| `fsync` | Flushes all modified data and metadata of a file descriptor to permanent storage. | `fsync(fd);` |
| `ftruncate` | Truncates or extends a file referenced by a descriptor to a specified length. | `ftruncate(fd, 1024); // Set length to 1024 bytes` |
| `close` | Closes a file descriptor so that it no longer refers to any file. | `close(fd);` |
---

##  3. Directory & File System Operations

| Function | Description | Example Usage (C) |
| :--- | :--- | :--- |
| `access` | Checks whether the calling process can access a file path (e.g., read, write, execute permissions). | `access("/path/to/file", R_OK \| W_OK);` |
| `chdir` | Changes the current working directory of the calling process. | `chdir("/var/log");` |
| `fchdir` | Changes the working directory using an open directory file descriptor. | `fchdir(dir_fd);` |
| `chflags` | Sets file flags for a named file path (BSD/macOS specific). | `chflags("file.txt", UF_IMMUTABLE);` |
| `fchflags` | Sets file flags using an open file descriptor (BSD/macOS specific). | `fchflags(fd, UF_IMMUTABLE);` |
| `chmod` | Changes access permissions of a named file path. | `chmod("script.sh", 0755);` |
| `fchmod` | Changes access permissions of a file via its file descriptor. | `fchmod(fd, 0644);` |
| `chown` | Changes the owner user ID and group ID of a file path. | `chown("file.txt", owner_uid, group_gid);` |
| `fchown` | Changes the owner and group of an open file via its descriptor. | `fchown(fd, owner_uid, group_gid);` |
| `chroot` | Changes the root directory of the calling process (chroot jail). | `chroot("/var/jail");` |
| `fpathconf` | Gets configurable system limit options associated with an open file descriptor. | `long name_max = fpathconf(fd,_PC_NAME_MAX);` |
| `getdirentries` | Reads directory entries into a buffer in a filesystem-independent format. | `getdirentries(fd, buf, sizeof(buf), &basep);` |
| `getfh` | Retrieves a unique file handle for a given file path (NFS operations). | `getfh("file.txt", &fhp);` |
| `getfsstat` | Returns status information for all mounted filesystems. | `getfsstat(buf, bufsize, MNT_NOWAIT);` |

---

##  4. System & User Information

| Function | Description | Example Usage (C) |
| :--- | :--- | :--- |
| `adjtime` | Corrects the system time by small increments to synchronize the system clock. | `adjtime(&delta, &olddelta);` |
| `getdomainname` | Returns the NIS/YP domain name of the host machine. | `getdomainname(domain, sizeof(domain));` |
| `gethostname` | Retrieves the standard host name of the current processor. | `gethostname(hostname, sizeof(hostname));` |
| `getegid` | Returns the effective group ID of the calling process. | `gid_t egid = getegid();` |
| `geteuid` | Returns the effective user ID of the calling process. | `uid_t euid = geteuid();` |
| `getgid` | Returns the real group ID of the calling process. | `gid_t gid = getgid();` |

---

##  Practical Examples

### 1. Duplicating File Descriptors (`dup2`)
Redirecting standard output (`stdout`) to a log file:

```c
#include <fcntl.h>
#include <unistd.h>

int main() {
    int file_fd = open("output.log", O_WRONLY | O_CREAT | O_TRUNC, 0644);
    
    // Redirect stdout (fd 1) to output.log
    dup2(file_fd, STDOUT_FILENO);
    close(file_fd);

    // This print statement now writes into output.log instead of the terminal
    printf("This text goes directly to output.log\n");
    return 0;
}
```

