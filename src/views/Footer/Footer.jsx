import "./Footer.css";

function Footer() {
  return (
    <div class="footer">
      <p id="footer" target="_blanke">
        &copy;Mr.Ghostsnow
      </p>
      <img id="logo" src="./assets/images/favicon-32x32.png" alt="" />
      <br />
      <div class="container_socialbtns" id="contato">
        <div align="center" class="socialbtns">
          <ul>
            <li>
              <a
                href="https://github.com/MrGhostsnow"
                class="fa fa-lg fa-github"
                target="_blanke"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/victor-silva-teixeira-b9a4391a3/"
                class="fa fa-lg fa-linkedin"
                target="_blanke"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;