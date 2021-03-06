<?php

$to = 'arthur@strzewiczek.pl';
$name = $_POST["name"];
$phone = $_POST["phone"];
$email =  $_POST["email"];
$subject = 'New message from ' . $name . ' (' . $email . ', tel.' . $phone . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . '(' . $email . ')';
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);

if (isset($_POST['submit'])) {
  $secret = '6LdcC7AZAAAAAOltIqaSHYOE486I1TOQ0Gz9wJRP';
  $response = $_POST['g-recaptcha-response'];
  $remoteip = $_SERVER['REMOTE_ADDR'];

  $url = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip");
  $result = json_decode($url, TRUE);
  if ($result['success'] == 1) {
    echo 'Thank you human!';
  }else{
    echo 'Most likely, you are a robot!';
  }
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <title>Strzewiczek - Front-End Developer</title>
    <meta name="author" content="Arthur Strzewiczek" />
    <meta name="description" content="Front-End design and coding. Clean code, excelent UX, no excuses. Check out my portfolio." />
    <meta
      name="keywords"
      content="javascript, html, css, scss, web deweloper, bootstrap, sketch, adobe xd, ux, ui, frontend, vanilla, react, node.js, node, php, chrome tools, Front-End, front, end"
    />

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="js/jquery-ui-1.12.1/jquery-ui.min.css"
      type="text/css"
    />
    <link rel="stylesheet" href="main.css" type="text/css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@300;400&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
      async
      defer
    ></script>
    <script
      src="https://kit.fontawesome.com/bdf3eade00.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
    <!-- <div class="cursor">as</div> -->

    <header>
      <nav>
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <h1 class="ml-3 mt-1">
          <a href="index.html"><span class="logo-text">strzewiczek</span></a>
        </h1>
        <ul class="nav-links">
          <li>
            <a id="link1" class="list-item" data-page="home" href="#headline1"
              >about me</a
            >
          </li>
          <li>
            <a
              id="link2"
              class="list-item"
              data-page="project"
              href="#github-corner"
              >projects</a
            >
          </li>
          <li>
            <a
              id="link3"
              class="list-item"
              data-page="contact"
              href="#contact-box"
              >contact</a
            >
          </li>
          <li>
            <a class="list-item" data-page="quiz" href="quiz.html"
              ><i class="fas fa-question-circle"></i
            ></a>
          </li>
          <li>
            <a class="list-item" data-page="weather" href="weather.html"
              ><i class="fas fa-cloud-sun-rain"></i
            ></a>
          </li>
          <div class="bubble"></div>
        </ul>
      </nav>
    </header>

    <main>
      <section data-index="0" class="home">
        <img
          id="avatar"
          src="img/IMG_20200114_184556.jpg"
          alt="visit me on LinkedIn"
        />

        <h2 id="headline1">sent</h2>
        <div class="typing">

        <h4>Great</h4>
        <h4 class="type-header">
        You just sent a
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ "message."]'
          ></span>
        </h4>


          <h5>
            My name is Arthur, as an engineer I've always been interested in
            things, especially how they work. <br />
            What has been the most fascinating for me was how complex mechanism
            occur in seemingly such simple objects.
            <br /><br />
            As an architect, the functionality and aesthetics of the projects
            are most important to me. <br />
            The pure code and excellent result is an ideal to which I strive.
          </h5>
        </div>
      </section>

      <section data-index="1" class="project">
        <h2 id="headline2">projects</h2>

        <!-- github  -->
        <a
          href="https://github.com/Strevitz"
          target="_blank"
          title="check out my github profile"
          class="github-corner"
          id="github-corner"
          aria-label="View source on GitHub"
        >
          <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style="transform-origin: 130px 106px;"
              class="octo-arm"
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              class="octo-body"
            ></path>
          </svg>
        </a>

        <carousel id="carousel">
          <input
            type="radio"
            id="page1cb"
            checked
            name="pages"
            style="display: none;"
          />
          <input
            type="radio"
            id="page2cb"
            name="pages"
            style="display: none;"
          />
          <input
            type="radio"
            id="page3cb"
            name="pages"
            style="display: none;"
          />
          <input
            type="radio"
            id="page4cb"
            name="pages"
            style="display: none;"
          />
          <input
            type="radio"
            id="page5cb"
            name="pages"
            style="display: none;"
          />
          <input
            type="radio"
            id="page6cb"
            name="pages"
            style="display: none;"
          />
          <input
            type="radio"
            id="page7cb"
            name="pages"
            style="display: none;"
          />
          <!-- page 1 -->
          <page id="page1">
            <div class="portfolio-img">
              <a href="img/coronavirus.png" target="_blank"
                ><img src="img/coronavirus.png" alt=""
              /></a>
            </div>
            <div class="portfolio-description">
              <h4 class="portfolio-header">Coronavirus Stats React App</h4>
              <p class="portfolio-text">
                The coronavirus statistics app created in
                <strong>React</strong> with current global or from each country
                data of infected, recovered people and deaths from covid-19 API
                <em>(https://covid19.mathdro.id/api)</em> and using
                <strong>Axios</strong>.<br />
                UI like data counting up and animated chart in coronavirus app
                designed with <strong>Material UI</strong> and
                <strong>Chart.js</strong>.
              </p>
              <a
                href="https://github.com/Strevitz/coronavirus-stats-app"
                target="_blank"
                ><p>see code</p></a
              >
              <label for="page2cb" title="Start"><b>next project</b></label>
            </div>
          </page>
          <!-- page 2 -->
          <page id="page2">
            <div class="portfolio-img">
              <a href="img/barber.png" target="_blank"
                ><img src="img/barber.png" alt=""
              /></a>
            </div>
            <div class="portfolio-description">
              <h4 class="portfolio-header">Barbershop Website</h4>
              <p class="portfolio-text">
                A website designed in HTML/SCSS/JS for new barbershop in
                town.<br />
                <strong>Bootstrap</strong>, <strong>jQuery</strong> and a little
                bit of <strong>Vanilla JS</strong> were used in the application.
                <br />
                I also implemented modal dialogs with bookings and voucher
                purchase system. <br />
                The website contains a game created in
                <strong>JavaScript</strong>.
              </p>
              <a href="https://github.com/Strevitz/barber-shop" target="_blank"
                ><p>see code</p></a
              >
              <a href="https://strzewic.vot.pl" target="_blank"
                ><p>see website</p></a
              >
              <label for="page3cb" title="Start"><b>next project</b></label>
            </div>
          </page>
          <!-- page 3 -->
          <page id="page3">
            <div class="portfolio-img">
              <a href="img/architecture.png" target="_blank"
                ><img src="img/architecture.png" alt=""
              /></a>
            </div>
            <div class="portfolio-description">
              <h4 class="portfolio-header">Architecture Studio Website</h4>
              <p class="portfolio-text">
                Simple website for my architectural studio. <br />
                Clean white and navy blue colors are associated with
                professionalism and robustness. <br />
                Mostly done to show my architectural designs and technical
                drawings portfolio. <br />
                App created with <strong>HTML/CSS/JS</strong> (mostly
                <strong>jQuery</strong>). I used <strong>jQuery UI</strong> to
                create tabs, and pure <strong>jQuery</strong> to implement
                movement into app.
              </p>
              <a
                href="https://github.com/Strevitz/aos-architecture"
                target="_blank"
                ><p>see code</p></a
              >
              <label for="page4cb" title="Start"><b>next project</b></label>
            </div>
          </page>
          <!-- page 4 -->
          <page id="page4">
            <div class="portfolio-img">
              <a href="img/california.png" target="_blank"
                ><img src="img/california.png" alt=""
              /></a>
            </div>
            <div class="portfolio-description">
              <h4 class="portfolio-header">Blog Website</h4>
              <p class="portfolio-text">
                A classic blog website with subpages dedicated for highlights of
                the best spots in California and my one and a half year stay in
                <strong>Golden State</strong>.<br />
                App created with <strong>HTML/CSS/JS</strong> and
                <strong>jQuery</strong> as cherry on the top the website.
              </p>
              <a
                href="https://github.com/Strevitz/moja-kalifornia"
                target="_blank"
                ><p>see code</p></a
              >
              <label for="page5cb" title="Start"><b>next project</b></label>
            </div>
          </page>
          <!-- page 5 -->
          <page id="page5">
            <div class="portfolio-img">
              <a href="img/blackjack.png" target="_blank"
                ><img src="img/blackjack.png" alt=""
              /></a>
            </div>
            <div class="portfolio-description">
              <h4 class="portfolio-header">Blackjack JS Game</h4>
              <p class="portfolio-text">
                Great game completely made in
                <strong>Vanilla JavaScript</strong>.<br />
                Blackjack contains a designed <strong>interactive bot</strong>,
                which itself makes a strategic decisions in the game.<br />
                I also implemented a table with current results.
              </p>
              <a href="https://github.com/Strevitz/blackjack" target="_blank"
                ><p>see code</p></a
              >
              <label for="page6cb" title="Start"><b>next project</b></label>
            </div>
          </page>
          <!-- page 6 -->
          <page id="page6">
            <div class="portfolio-img">
              <a href="img/todo.png" target="_blank"
                ><img src="img/todo.png" alt=""
              /></a>
            </div>
            <div class="portfolio-description">
              <h4 class="portfolio-header">Todo List JS App</h4>
              <p class="portfolio-text">
                Simple and elegant application to create To do lists.<br />
                Designed in <strong>HTML/CSS</strong> and mostly in
                <strong>JS</strong> with the ability to filter the list among
                completed, uncompleted and all tasks. <br />
                The app has also applied adding and removing tasks from
                <strong>local Storage</strong>.
              </p>
              <a
                href="https://github.com/Strevitz/todo-list-maker"
                target="_blank"
                ><p>see code</p></a
              >
              <label for="page7cb" title="Start"><b>next project</b></label>
            </div>
          </page>
          <!-- page 7 -->
          <page id="page7">
            <div class="portfolio-img">
              <a href="img/tabuli.png" target="_blank"
                ><img src="img/tabuli.png" alt=""
              /></a>
            </div>
            <div class="portfolio-description">
              <h4 class="portfolio-header">Restaurant Website</h4>
              <p class="portfolio-text">
                Small and funny website for a small vegetarian restaurant.<br />
                Website created with <strong>passion</strong> in
                <strong>HTML/CSS/JSS</strong> (jQuery).<br />
                The theme of the app's design was the
                <strong>colors of Lebanese cuisine</strong>, which will
                certainly affect you appetite.
              </p>
              <a
                href="https://github.com/Strevitz/tabuli-restaurant"
                target="_blank"
                ><p>see code</p></a
              >
              <label for="page1cb" title="That's all folks!"
                ><b>start again?</b></label
              >
            </div>
          </page>
        </carousel>
      </section>

      <section data-index="2" class="contact">
        <!-- linkedin  -->
        <a
          href="https://www.linkedin.com/in/strzewiczek/"
          title="check out my linkedin profile"
          target="_blank"
          ><h3 class="linkedin">in</h3></a
        >
        <svg
          class="linkedin-triangle"
          width="80"
          height="80"
          viewBox="0 0 250 250"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L142,142 L250,250 L250,0 Z"></path>
        </svg>

        <h2 id="headline3">contact</h2>

        <div class="contact-box" id="contact-box">
          <form action="contact.php" method="POST">
            <div class="name-form">
              <input type="text" name="name" autocomplete="off" required />
              <label for="name" class="label-name">
                <span class="content-name">name</span>
              </label>
            </div>

            <div class="name-form">
              <input type="number" name="phone" autocomplete="off" required />
              <label for="name" class="label-name">
                <span class="content-name">tel</span>
              </label>
            </div>

            <div class="name-form">
              <input type="email" name="email" autocomplete="off" required />
              <label for="name" class="label-name">
                <span class="content-name">e-mail</span>
              </label>
            </div>

            <div class="name-form">
              <input
                type="textarea"
                name="message"
                autocomplete="off"
                required
              />
              <label for="name" class="label-name">
                <span class="content-name">message</span>
              </label>
            </div>
            <div id="captcha" class="my-4" data-callback="onloadCallback"></div>
            <h6 class="text-light w-75">
              Using the contact form you agree to the processing of input data
              in it, personal data, to handle the inquiry, including contact
              with you via email.
            </h6>
            <button type="submit" class="btn btn-warning mt-3">
              submit
            </button>
          </form>

          <div class="contact-info">
            <a href="tel:+48-519-603-221" class="contact-item"
              >+48 519 603 221</a
            >
            <a
              href="mailto:arthur@strzewiczek.pl?subject=Wiadomość%20ze%20strony%20strzewiczek.pl&bcc=arthur.strzewiczek@gmail.com&body=Cześć Arthur,"
              class="contact-item"
              >arthur@strzewiczek.pl</a
            >
            <a
              href="https://join.skype.com/invite/iQvZ2Btj8BS4"
              class="contact-item"
              >Skype: arthur.strzewiczek</a
            >
            <a href="https://twitter.com/arthur_strevitz" class="contact-item"
              >Twitter: @arthur_strevitz</a
            >
            <a href="https://codepen.io/strevitz" class="contact-item"
              >codepen: @strevitz</a
            >
            <a
              href="https://strevitz-chat.netlify.app"
              target="_blank"
              class="contact-item my-4"
              >or live chat <i class="fa fa-comments h1" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </section>

      <footer class="quiz-footer">
        <div class="footer-text-box d-flex flex-column mb-4">
          <span class="logo-text">strzewiczek</span>
          <h6>
            Thank you for your visit my gorgeous friends! &copy; 2020 Arthur
            Strzewiczek
          </h6>
        </div>
      </footer>
    </main>

    <script
      src="https://code.jquery.com/jquery-3.5.1.js"
      integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TimelineMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/gsap.min.js"></script>
    <script src="js/jquery-ui-1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/qtip2/3.0.3/jquery.qtip.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/slapform"></script>
    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/content.js"></script>
  </body>
</html>