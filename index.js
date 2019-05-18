'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
		host: 'email-smtp.us-east-1.amazonaws.com',
		port: 465,
		secure: true, // use SSL
		auth: { // detail: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html
			user: 'use-iam-ses',
			pass: 'pass-iam-ses'
		}
	});

const mailOptions = {
	from: 'Giáo Viên <giaovien@daytothoctot.edu.vn>', // sender address
	to: 'macvantan@gmail.com', // list of receivers
	subject: '☎ Kích hoạt tài khoản', // Subject line
	// text: 'toan text la text' //, // plaintext body
	html: '<b>Hello world ✔</b><br/> Done chưa nhỉ?' // You can choose to send an HTML body instead
};

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.log(error);
	} else {
		console.log(info);
		/*
		{
			accepted: [ 'macvantan@gmail.com' ],
			rejected: [],
			response: '250 Ok 0100015f5df07c97-e8939cad-1884-4f0c-aeab-ea599a18e7da-000000',
			envelopeTime: 717,
  			messageTime: 631,
  			messageSize: 471,
			envelope: {
				from: 'hotro@trangnguyen.edu.vn',
				to: [ 'macvantan@gmail.com' ]
			},
			messageId: '<e012a621-31f0-ecfd-c5d9-f34717c35366@daytothoctot.edu.vn>'
		}
		*/
	};
});
