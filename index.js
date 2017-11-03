'use strict';
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
		host: 'email-smtp.us-east-1.amazonaws.com',
		port: 465,
		secure: true, // use SSL
		auth: {
			user: 'use-iam-ses',
			pass: 'pass-iam-ses'
		}
	});

var mailOptions = {
	from: 'Hỗ trợ Trạng Nguyên<hotro@trangnguyen.edu.vn>', // sender address
	to: 'macvantan@gmail.com', // list of receivers
	subject: '☎ Kích hoạt tài khoản', // Subject line
	// text: 'toan text la text' //, // plaintext body
	html: '<b>Hello world ✔</b><br/> Done chưa nhỉ?' // You can choose to send an HTML body instead
};

transporter.sendMail(mailOptions, function(error, info){
	if(error){
		console.log(error);
	}else{
		console.log(info);
		/*
		{
			accepted: [ 'macvantan@gmail.com' ],
			rejected: [],
			response: '250 Ok 0100015f5df07c97-e8939cad-1884-4f0c-aeab-ea599a18e7da-000000',
			envelope: {
				from: 'hotro@trangnguyen.edu.vn',
				to: [ 'macvantan@gmail.com' ]
			},
			messageId: 'ffd6e6ae-4465-4fde-0fb2-16f01aa5fc27@trangnguyen.edu.vn'
		}
		*/
	};
});
