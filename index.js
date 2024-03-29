"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchGitHubUserInfo(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = `https://api.github.com/users/${username}`;
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw Error("Failed to fetch user data");
        }
        const userData = yield response.json();
        return userData;
    });
}
fetchGitHubUserInfo("octocat")
    .then((userData) => {
    console.log("GitHub User Data:", userData);
})
    .catch((error) => {
    console.error("Erro fetching GitHub user info:", error);
});
