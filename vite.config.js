// Vite, a build tool for modern web development.
//this configuration file sets up Vite to start its development server on port 3000.
import { defineConfig } from 'vite';
// import specific exports from a module.{}
export default defineConfig({
    // export default defineConfig({...}) exports the configuration 
    // object as the default export. This allows Vite to use this 
    // configuration when running or building your project.
    server: {
        port: 3000, // Set your desired port
    },
    // The configuration object passed to defineConfig contains
    //  settings for Vite. In this case, it includes the server
    //  property, which is used to configure the development server.
});
//  specifies that the development server should run on port 3000. 
