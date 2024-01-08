function login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form method="POST">
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default login;