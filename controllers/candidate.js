const path = require('path');
var nodemailer = require('nodemailer');

module.exports = {
	register: function (req, res, cb) {
		var transporter = nodemailer.createTransport({
			// service: 'gmail',
			// auth: {
			// 	user: process.env.EMAIL,
			// 	pass: process.env.PASSWORD,
			// },
			host: "sandbox.smtp.mailtrap.io",
  			port: 2525,
  			auth: {
    			user: "0802c5ad7e5fbe",
    			pass: "37791ba9016ece"
  			}
		});
		const mailOptions = {
			from: '"Voting DApp" <admin@dapp.com>',
			to: req.body.email,
			subject: req.body.election_name + 'Registration',
			html: 'Congrats you have been registered for  ' + req.body.election_name + ' election.',
		};
		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				res.json({ status: 'error', message: 'mail error', data: null });
				console.log(err);
			} else console.log(info);
			res.json({ status: 'success', message: 'mail sent successfully!!!', data: null });
		});
	},
};
