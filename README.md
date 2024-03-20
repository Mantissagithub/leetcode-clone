# LeetCode Clone

This project is a clone of the popular coding challenge platform LeetCode, designed to provide a platform for coding practice and assessment. It features a modern stack including Next.js for the frontend, Golang for the backend, PostgreSQL as the database, and several other technologies to create a robust and scalable application.

## Features

- **User Authentication:** Secure login and registration functionality using Firebase Auth.
- **Problem Solving Interface:** Users can solve problems using a rich text editor that supports syntax highlighting.
- **Online Compiler:** Leverages Judge0 API for executing code in various programming languages.
- **Real-Time Updates:** Utilizes WebSockets for real-time updates and notifications.
- **Responsive Design:** Crafted with Next.js, ensuring a seamless experience across all devices.

## Technologies Used

- **Frontend:** Next.js
- **Backend:** Golang
- **Database:** PostgreSQL
- **Reverse Proxy:** NGINX
- **Authentication:** Firebase Auth
- **Online Compiler:** Judge0
- **Containerization:** Docker
- **Real-Time Communication:** WebSocket

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker and Docker Compose
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Mantissagithub/leetcode-clone.git
cd leetcode-clone
```

2. Build and run the containers:

```bash
docker-compose up --build
```

This command will build the Docker images for the frontend, backend, and database, and start the services as defined in the `docker-compose.yml` file.

3. The application should now be running and accessible via `http://localhost:3000`.

## Usage

After installation, you can start using the application by registering a new user or logging in with an existing account via the user interface. Once authenticated, you can access the problem-solving interface, submit solutions, and receive real-time feedback.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Golang](https://golang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [NGINX](https://www.nginx.com/)
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Judge0 API](https://judge0.com/)
- [Docker](https://www.docker.com/)
