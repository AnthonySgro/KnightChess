const html = require("html-template-tag");

module.exports = profile = (profile) => {
    const htmlExport = html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Knight Chess</title>
        <link href="<link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../stylesheets/homepage.css">
        <link rel="stylesheet" href="../stylesheets/profilepage.css">
    </head>
    <body>
        <header>
            <nav>
                <a id="main-text" href="index.html">Knight</a>
                <div id="navbar-item-container">
                    <ul id="nav-item-holder">
                        <li class="nav-item">
                            <a class="nav-link" href="/sign-up">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/profile">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/stats">Stats</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="play-game-nav-link" href="/play">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout mr-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                &nbsp;Play Game
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <main>
            <div id="profile-welcome">
                <h1>${profile.username}</h1>
            </div>
            <div id="chunk1">
                <section id="profile-toolbar">
                </section>
                <div id="profile-main">
                </div>
                <aside id="profile-aside">
                </aside>
            </div>

        </main>
    </body>
    </html>
`

return htmlExport;
}