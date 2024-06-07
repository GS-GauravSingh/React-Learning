After installing necessary dependendies or libraries for this project. Next setp is to setup some environment variables.

## What are Environment Variables ?
Environment variables are system variables that are accessible to all processes running on the system. They can be thought of as global variables in the sense that they are available to any program or process running on the system, making them a convenient way to store and share configuration settings, system paths, and other information across different components of the system.

## What is the need for Environment Variables in this project ?
In our project, we use environment variables for important reasons. First, they help keep sensitive information safe. Things like passwords and special IDs need to be kept secret. However, some of the crucial information comes from the front-end app like user email and password.

Since our front-end code runs in people's web browsers, we need to be extra careful. If we kept this information in our front-end app, it may be possible that someone can access this information through their browser by inspecting it and looking into our files.

Environment variables let us store this secret stuff outside of our codebase, so nobody can see it just by looking at our files.

### Important Points
1. Location of Environment Variable File: 
    * Environment variables are typically stored in a file named ".env" located in the root directory of your project. This file can be present in the root directory of your project or in your home directory. It's essential to ensure that this file is kept secure and not shared publicly.

2. Creating Environment Variable File: 
    * In React projects (created using Vite), you can create a file named ".env" to store your environment variables. However, the process of creating and managing environment variables may vary depending on the technology stack and tools you're using. 

3. Keeping Environment Variable Files Private: 
    * Environment variable files should not be publicly available, especially if they contain sensitive information like passwords or API keys. Therefore, it's essential not to include these files in your version control system (e.g., Git). Instead, you can use a ".env.sample" file to document the names of the environment variables without including their actual values. This ".env.sample" file can be shared in your repository to provide a template for developers working on the project.

4. In many cases, environment variables are loaded into the application's environment only once, typically during the startup phase of the application. This means that any changes made to the environment variable file will not automatically take effect while the application is running. To apply changes to the environment variables, you usually need to restart your application. This allows the application to re-read the environment variable file and incorporate any updates or modifications.

5. Reading the documentation is essential for understanding how environment variables are created, accessed, and managed in a specific technology or framework. Different technologies may have different conventions, methods, or tools for working with environment variables.