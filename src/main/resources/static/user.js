const userTable= document.getElementById("userTable");
const urlUser = 'http://localhost:8080/user/showUser';
const userHeader = document.getElementById("userHeader");

function userAuthInfo() {
    fetch(urlUser)
        .then(res => res.json())
        .then((user) => {

            let temp = '';

            temp += `<tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.roles.map(role => " " + role.roleName.substring(5))}</td>
            </tr>`;
            userTable.innerHTML = temp;
            userHeader.innerHTML =
                `<h4>${user.email} with roles: ${user.roles.map(role => " " + role.roleName.substring(5))}</h4>`
        });
}

userAuthInfo()