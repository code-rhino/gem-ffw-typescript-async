interface GitHubUser {
    login2: string;
    name: string;
    public_repos: number;
    followers: number;
    following: number;
}

async function fetchGitHubUserInfo(username: string):Promise<GitHubUser> {
    const apiUrl = `https://api.github.com/users/${username}`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw Error ("Failed to fetch user data");
    }
    const userData: GitHubUser = await response.json();
    return userData;
}

fetchGitHubUserInfo("octocat")
    .then((userData)=>{
        console.log("GitHub User Data:", userData);
    })
    .catch((error)=> {
        console.error("Erro fetching GitHub user info:", error);
    })