import Helper from '../helpers/helpers';

const createHomePage = () => {
  const domString = `
    <div class="profile-pic">
      <img
        src="src/images/profile-pic-circular.png"
        alt="profile picture of chris calhoun"
      />
  </div>
  `;
  Helper.renderToDOM('main', domString);
};

export default { createHomePage };
