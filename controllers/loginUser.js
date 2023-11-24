
const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports = async (req, res) => {
  async function main() {
      try {
          const { username, password } = req.body;
          const user = await User.findOne({ username: username });

          if (user) {
              const passwordMatch = await bcrypt.compare(password, user.password);

              if (passwordMatch) {
                  // Store user session (you can add this part based on your session management)
                  return res.redirect('/');
              } else {
                  return res.redirect('/auth/login');
              }
          } else {
              return res.redirect('/auth/login');
          }
      } catch (error) {
          console.log(error);
          return res.redirect('/auth/login');
      }
  }

  main().catch(console.error);
};




