const body = (fullName, token) => {
    return (
        `<html>
    <body>
        <h3>Dear ${fullName},</h3>
        <p>You have requested to change your password. To proceed with the password change, please click the button below:
        </p>
        <a href="http://localhost:5173/changePassword?id=${token}" target="_blank">
            <button style="padding: 10px 20px; background-color: #007bff; color: #ffffff; border: none;">Change
                Password</button>
        </a>
        <p>If you didn't initiate this password change request, please ignore this email.</p>
        <p>Thank you.</p>
        <p>Best regards,<br>Bemida</p>
    </body>
</html>`
    )
}

export default body;