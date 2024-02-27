# gem-ffw-typescript-async
[Video](https://vimeo.com/917131526/56cae3b226?share=copy)


1. **Introduction to TypeScript and Asynchronous Functions**: The session starts with an introduction to the use of TypeScript in handling asynchronous functions, focusing on fetching user data from the GitHub API.

2. **GitHub API Overview**: The presenter introduces the GitHub API, explaining how it can be used to fetch public information about users, using "octocat" (GitHub's mascot) as an example.

3. **Creating an Interface for GitHub User**: The first step in the code demonstration involves creating a TypeScript interface to represent a GitHub user. The interface includes fields such as `login`, `name`, `public_repos`, and `followers`, all of which correspond to data points available from the GitHub API.

    ```typescript
    interface GitHubUser {
      login: string;
      name: string;
      public_repos: number;
      followers: number;
      // additional fields as needed
    }
    ```

4. **Creating an Asynchronous Function**: The presenter explains the importance of making asynchronous API requests to avoid blocking the execution of the program. An asynchronous function, `fetchGitHubUserInfo`, is defined to fetch data from the GitHub API. This function takes a username as input and returns a promise that resolves to a `GitHubUser` object.

    ```typescript
    async function fetchGitHubUserInfo(username: string): Promise<GitHubUser> {
      // Implementation details
    }
    ```

5. **Fetching Data from the API**: Inside the `fetchGitHubUserInfo` function, the presenter constructs the API URL dynamically using the provided username. The `fetch` API is then used to make an asynchronous request to the GitHub API.

    ```typescript
    const apiUrl = `https://api.github.com/users/${username}`;
    const response = await fetch(apiUrl);
    ```

6. **Handling the Response**: The function checks if the response is successful (i.e., if `response.ok` is true). If not, it handles the error appropriately. If the response is successful, it parses the JSON data and potentially filters or maps it to match the `GitHubUser` interface.

    ```typescript
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const userData: GitHubUser = await response.json();
    return userData;
    ```

7. **Demonstrating Function Usage**: The presenter might conclude by demonstrating how to call `fetchGitHubUserInfo` with a specific username (e.g., "octocat") and how to handle the promise returned by the function, typically using `.then()` for success and `.catch()` for error handling.

    ```typescript
    fetchGitHubUserInfo('octocat')
      .then(user => console.log(user))
      .catch(error => console.error(error));
    ```

