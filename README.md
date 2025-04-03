# Technical Challenge - Trackforce valiant
Live site: https://wearmatch-assessment.vercel.app/

- If you want to visit above url directly , you need to request for api proxy server
- Go to this page: https://cors-anywhere.herokuapp.com/corsdemo
- Then click "Request temporary access to the demo server"
- After grant the permission, you get visit : https://wearmatch-assessment.vercel.app/listing
## Getting Started

### Prerequisites

- Node.js (version >= 18.17.0)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone [repository-url]
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

Before start you need to create a `.env.local` file in the root directory and add the following environment variables:

NEXT_PUBLIC_AUTH_TOKEN=`your_auth_token_here`

Change api end point

const API_URL_PROXY = 

Start the development server:
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Main Folder Structure

root/
        app -> Next.js application directory
        components -> Reusable UI components
        config -> Configuration files and constants
        helper -> Utility functions and helpers
        hooks -> Custom React hooks
        lib -> Libraries and third-party integrations
        store -> Zustand store for state management
        constant -> Constants and types
        public -> Static assets (images, fonts, etc.)


### Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Axios](https://axios-http.com/docs/intro)
- [ShadCn UI](https://ui.shadcn.com/)
- [Three.js](https://threejs.org/)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)


### Technical decision

- Next.js: Popular and mature framework, maintainable , easy to use.
- React: Modular component-based architecture with efficient rendering via virtual DOM.
- TypeScript: Ensures code reliability and maintainability with static typing.
- Tailwind CSS: Used for rapid UI development with minimal custom CSS.
- Axios: Simplifies API requests with better error handling.
- ShadCn UI: Provides ready-made components, speeding up UI development.
- Zustand: Lightweight state management with minimal boilerplate.

### Challenges Faced

- Challenge: Ensuring type safety for complex API responses, especially when dealing with nested objects like Listing or optional fields.
    - Solution: Utilized TypeScript interfaces and types to define the structure of API responses, ensuring that all components consuming the data are type-safe.


- Challenge: Handling inconsistent or missing data from the API, such as missing fields in the Listing object.
    - Solution: Implemented default values and fallback mechanisms to ensure the application remains functional even with incomplete data.
 
### Screenshots

### Desktop
![Medium-Screen-300x400](https://github.com/user-attachments/assets/7f470382-19f5-4726-9a0b-18d6f63f0c17)

### Mobile
<img src="https://github.com/user-attachments/assets/b691919d-fb99-44b3-af91-aed16770d421" width="300" height="500" /> 


